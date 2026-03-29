!(function ($) {
	"use strict";

	const restArguments = function (t, e) {
			return (
				(e = null == e ? t.length - 1 : +e),
				function (i, s) {
					for (
						var n = Math.max(arguments.length - e, 0), o = Array(n), a = 0;
						a < n;
						a++
					)
						o[a] = arguments[a + e];
					switch (e) {
						case 0:
							return t.call(this, o);
						case 1:
							return t.call(this, i, o);
						case 2:
							return t.call(this, i, s, o);
					}
					var l = Array(e + 1);
					for (a = 0; a < e; a++) l[a] = arguments[a];
					return (l[e] = o), t.apply(this, l);
				}
			);
		},
		tjDelay = restArguments(function (t, e, i) {
			return setTimeout(function () {
				return t.apply(null, i);
			}, e);
		});

	window.tjDebounce = function (t, e, i) {
		var s,
			n,
			o = function (e, i) {
				(s = null), i && (n = t.apply(e, i));
			},
			a = restArguments(function (a) {
				if ((s && clearTimeout(s), i)) {
					var l = !s;
					(s = setTimeout(o, e)), l && (n = t.apply(this, a));
				} else s = tjDelay(o, e, this, a);
				return n;
			});
		return (
			(a.cancel = function () {
				clearTimeout(s), (s = null);
			}),
			a
		);
	};

	const PLUGIN_NAME = "tjThrowable";
	const DEFAULTS = {
		roundness: "sharp",
		scrollGravity: false,
	};

	class ThrowableScene {
		constructor(element, options) {
			this._defaults = DEFAULTS;
			this._name = PLUGIN_NAME;
			this.options = { ...DEFAULTS, ...options };
			this.DOM = { element, $element: $(element) };
			this.DOM.throwables = this.DOM.element.querySelectorAll(
				"[data-tj-throwable-el]"
			);
			this.bodies = [];
			this.elementDimensions = [];
			this.hasStarted = false;

			this.onWindowResize = tjDebounce(this.onWindowResize.bind(this), 250);
			this.init();
		}

		init() {
			this.waitForImages().then(() => {
				setTimeout(() => {
					this.createWorld();
					this.createBoundaries();
					this.createBodies();
					this.enableRunner();
					this.makeItRain();
					this.bindResize();
				}, 100);
			});
		}

		waitForImages() {
			const promises = [];
			this.DOM.throwables.forEach(throwable => {
				const img = throwable.querySelector("img");
				if (img && !img.complete) {
					promises.push(
						new Promise(resolve => {
							img.onload = resolve;
							img.onerror = resolve;
						})
					);
				}
			});
			return promises.length ? Promise.all(promises) : Promise.resolve();
		}

		enableRunner() {
			this.runnerObserver = new IntersectionObserver(([entry]) => {
				this.runner.enabled = entry.isIntersecting;
			}).observe(this.DOM.element);
		}

		makeItRain() {
			new IntersectionObserver(([t], e) => {
				t.isIntersecting &&
					(this.DOM.throwables.forEach(t => {
						gsap.to(t, {
							opacity: 1,
							duration: 0.4,
						});
					}),
					this.startRain(),
					e.disconnect());
			}).observe(this.DOM.element);
		}

		bindResize() {
			window.addEventListener("resize", this.onWindowResize);
		}

		createWorld() {
			this.height = this.DOM.element.offsetHeight;
			this.width = this.DOM.element.offsetWidth;

			this.engine = Matter.Engine.create({
				gravity: { x: 0, y: 0.8 },
				timing: { timeScale: 1 },
			});

			this.runner = Matter.Runner.create();
			this.mouse = Matter.Mouse.create(this.DOM.element);
			this.DOM.element.removeEventListener("mousewheel", this.mouse.mousewheel);
			this.DOM.element.addEventListener("mouseleave", this.mouse.mouseup);

			this.mouseConstraint = Matter.MouseConstraint.create(this.engine, {
				mouse: this.mouse,
				constraint: {
					stiffness: 0.2,
					render: { visible: false },
				},
			});

			Matter.Composite.add(this.engine.world, this.mouseConstraint);
			Matter.Runner.run(this.runner, this.engine);
			this.runner.enabled = false;

			Matter.Events.on(this.mouseConstraint, "mousedown", () => {
				this.DOM.element.style.pointerEvents = "auto";
			});

			Matter.Events.on(this.mouseConstraint, "mouseup", () => {
				this.DOM.element.style.pointerEvents = "";
			});
		}

		createBoundaries() {
			const wallThickness = 50;
			const boundaryOptions = { isStatic: true, render: { visible: false } };

			this.boundLeft = Matter.Bodies.rectangle(
				-wallThickness / 2,
				this.height / 2,
				wallThickness,
				this.height * 2,
				boundaryOptions
			);

			this.boundRight = Matter.Bodies.rectangle(
				this.width + wallThickness / 2,
				this.height / 2,
				wallThickness,
				this.height * 2,
				boundaryOptions
			);

			this.boundBottom = Matter.Bodies.rectangle(
				this.width / 2,
				this.height + wallThickness / 2,
				this.width * 2,
				wallThickness,
				boundaryOptions
			);

			Matter.Composite.add(this.engine.world, [
				this.boundLeft,
				this.boundRight,
				this.boundBottom,
			]);
		}

		createBodies() {
			// First, measure all elements accurately
			this.measureAllElements();

			this.DOM.throwables.forEach((throwable, index) => {
				const dimensions = this.elementDimensions[index];
				const span = throwable.querySelector("span");
				const img = throwable.querySelector("img");

				// Position setters
				const xSetter = gsap.quickSetter(throwable, "x", "px");
				const ySetter = gsap.quickSetter(throwable, "y", "px");

				// Calculate starting positions to ensure all items are visible
				const itemsPerRow = Math.floor(this.width / dimensions.width);
				const row = Math.floor(index / itemsPerRow);
				const col = index % itemsPerRow;

				const startX = gsap.utils.random(
					dimensions.width / 2,
					this.width - dimensions.width / 2
				);
				// Stack items higher to ensure all are visible
				const startY = -dimensions.height - row * dimensions.height * 1.5;
				const angle = gsap.utils.random(-0.3, 0.3);

				const chamfer =
					this.options.roundness === "sharp" ? null : { radius: 10 };

				// Create physics body
				const body = Matter.Bodies.rectangle(
					startX,
					startY,
					dimensions.width - 2,
					dimensions.height - 2,
					{
						chamfer: chamfer,
						angle: angle,
						isStatic: true,
						restitution: 0.4,
						friction: 0.1,
						frictionAir: 0.01,
						density: 0.001,
						render: { fillStyle: "#ff0000", opacity: 0.5 }, // Debug rendering
					}
				);

				this.bodies.push(body);
				Matter.Composite.add(this.engine.world, body);

				// Update DOM position on physics tick
				Matter.Events.on(this.engine, "afterUpdate", () => {
					if (!this.runner.enabled) return;

					xSetter(body.position.x);
					ySetter(body.position.y);

					if (span) {
						// Apply rotation only to the span, not the image
						span.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
					}

					// Counter-rotate the image to keep it upright
					if (img) {
						img.style.transform = `rotate(${-body.angle}rad)`;
					}
				});
			});
		}

		measureAllElements() {
			this.elementDimensions = [];

			const measureContainer = document.createElement("div");
			measureContainer.style.cssText = `
				position: absolute;
				left: 0;
				top: 0;
				visibility: visible;
				opacity: 1;
				pointer-events: none;
				z-index: 9999;
			`;
			this.DOM.element.appendChild(measureContainer);

			this.DOM.throwables.forEach((throwable, index) => {
				const clone = throwable.cloneNode(true);
				clone.style.cssText = `
					position: relative !important;
					left: 0 !important;
					top: 0 !important;
					transform: none !important;
					opacity: 1 !important;
					visibility: visible !important;
					display: inline-block !important;
				`;

				measureContainer.appendChild(clone);

				// Force layout calculation
				clone.offsetHeight;

				const width = clone.offsetWidth;
				const height = clone.offsetHeight;

				this.elementDimensions[index] = { width, height };

				measureContainer.removeChild(clone);
			});

			this.DOM.element.removeChild(measureContainer);
		}

		startRain() {
			// Release bodies one by one with delay
			this.bodies.forEach((body, index) => {
				setTimeout(() => {
					Matter.Body.setStatic(body, false);
				}, index * 80); // Reduced delay to make it faster
			});

			// Add top boundary after all elements have fallen
			setTimeout(() => {
				this.createTopBoundary();
				if (this.options.scrollGravity) {
					this.makeScrollGravity();
				}
			}, this.bodies.length * 80 + 1000);
		}

		createTopBoundary() {
			this.boundTop = Matter.Bodies.rectangle(
				this.width / 2,
				-25,
				this.width * 2,
				50,
				{ isStatic: true, render: { visible: false } }
			);
			Matter.Composite.add(this.engine.world, this.boundTop);
		}

		makeScrollGravity() {
			let lastScrollTop = 0;
			Matter.Events.on(this.runner, "tick", () => {
				const scrollTop =
					window.pageYOffset || document.documentElement.scrollTop;
				const scrollDelta = scrollTop - lastScrollTop;

				this.engine.gravity.y = 0.8 - scrollDelta * 0.05;
				lastScrollTop = scrollTop;
			});
		}

		onWindowResize() {
			this.refresh();
		}

		refresh() {
			const newHeight = this.DOM.element.offsetHeight;
			const newWidth = this.DOM.element.offsetWidth;

			if (newHeight === this.height && newWidth === this.width) return;

			this.height = newHeight;
			this.width = newWidth;

			if (this.boundLeft) {
				Matter.Body.setPosition(this.boundLeft, { x: -25, y: this.height / 2 });
			}
			if (this.boundRight) {
				Matter.Body.setPosition(this.boundRight, {
					x: this.width + 25,
					y: this.height / 2,
				});
			}
			if (this.boundBottom) {
				Matter.Body.setPosition(this.boundBottom, {
					x: this.width / 2,
					y: this.height + 25,
				});
			}
			if (this.boundTop) {
				Matter.Body.setPosition(this.boundTop, { x: this.width / 2, y: -25 });
			}
		}

		destroy() {
			this.runner.enabled = false;
			Matter.Runner.stop(this.runner);
			Matter.Engine.clear(this.engine);
			window.removeEventListener("resize", this.onWindowResize);

			if (this.runnerObserver) {
				this.runnerObserver.disconnect();
			}
		}
	}

	// jQuery plugin
	$.fn[PLUGIN_NAME] = function (options) {
		return this.each(function () {
			const settings = {
				...$(this).data("throwable-options"),
				...options,
			};
			if (!$.data(this, "plugin_" + PLUGIN_NAME)) {
				$.data(
					this,
					"plugin_" + PLUGIN_NAME,
					new ThrowableScene(this, settings)
				);
			}
		});
	};
})(jQuery);

// Initialize with a longer delay to ensure everything is loaded
jQuery(document).ready(function ($) {
	setTimeout(() => {
		$("[data-tj-throwable-scene]").tjThrowable();
	}, 1000);
});
