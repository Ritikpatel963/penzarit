import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Lightweight custom SplitText implementation.
 * Splits an element's text content into lines, words, and/or characters
 * wrapped in <div> or <span> elements for animation.
 */
class CustomSplitText {
  constructor(element, options = {}) {
    this.element = typeof element === 'string' ? document.querySelector(element) : element;
    if (!this.element) {
      this.chars = [];
      this.words = [];
      this.lines = [];
      return;
    }
    
    this.options = options;
    const types = (options.type || options.types || 'chars,words,lines').toLowerCase();
    this.splitChars = types.includes('char');
    this.splitWords = types.includes('word');
    this.splitLines = types.includes('line');
    this.linesClass = options.linesClass || '';
    this.wordsClass = options.wordsClass || '';
    this.charsClass = options.charsClass || '';
    
    this.chars = [];
    this.words = [];
    this.lines = [];
    
    // Store original HTML for potential revert
    this.originalHTML = this.element.innerHTML;
    
    this._split();
  }
  
  _split() {
    const el = this.element;
    const text = el.textContent;
    
    // Clear the element
    el.innerHTML = '';
    
    // Split into words
    const wordTexts = text.split(/(\s+)/);
    const wordElements = [];
    
    wordTexts.forEach(wordText => {
      if (wordText.match(/^\s+$/)) {
        // It's whitespace - add as text node
        el.appendChild(document.createTextNode(wordText));
        return;
      }
      if (wordText === '') return;
      
      const wordSpan = document.createElement('div');
      wordSpan.style.display = 'inline-block';
      if (this.wordsClass) wordSpan.className = this.wordsClass;
      
      if (this.splitChars) {
        // Split word into characters
        wordText.split('').forEach(char => {
          const charSpan = document.createElement('div');
          charSpan.style.display = 'inline-block';
          if (this.charsClass) charSpan.className = this.charsClass;
          charSpan.textContent = char;
          wordSpan.appendChild(charSpan);
          this.chars.push(charSpan);
        });
      } else {
        wordSpan.textContent = wordText;
      }
      
      el.appendChild(wordSpan);
      // Add space after word
      el.appendChild(document.createTextNode(' '));
      wordElements.push(wordSpan);
      this.words.push(wordSpan);
    });
    
    // For lines detection, we group word elements by their offsetTop
    if (this.splitLines) {
      const lineMap = new Map();
      wordElements.forEach(w => {
        const top = w.offsetTop;
        if (!lineMap.has(top)) lineMap.set(top, []);
        lineMap.get(top).push(w);
      });
      
      // Wrap each line group
      lineMap.forEach((wordsInLine) => {
        const lineDiv = document.createElement('div');
        lineDiv.style.display = 'block';
        if (this.linesClass) lineDiv.className = this.linesClass;
        
        // Insert the line div before the first word in this line
        wordsInLine[0].parentNode.insertBefore(lineDiv, wordsInLine[0]);
        
        wordsInLine.forEach(w => {
          lineDiv.appendChild(w);
          lineDiv.appendChild(document.createTextNode(' '));
        });
        
        this.lines.push(lineDiv);
      });
    }
  }
  
  revert() {
    if (this.element && this.originalHTML) {
      this.element.innerHTML = this.originalHTML;
    }
  }
}

/**
 * Helper: check RTL direction
 */
function rtlValue(value) {
  const isRTL = document.documentElement.dir === 'rtl';
  return isRTL ? -value : value;
}

/**
 * Master hook that replicates all GSAP animations from gsap-animation.js.
 * Must be called once in App.jsx (alongside useTemplateInit).
 */
export default function useGsapAnimation() {
  const location = useLocation();

  const runGsapAnimations = useCallback(() => {
    // Kill all previous ScrollTrigger instances to avoid duplicates on route change
    ScrollTrigger.getAll().forEach(st => st.kill());
    
    // Store SplitText instances for cleanup
    const splitInstances = [];

    // Suppress GSAP warnings for missing targets
    gsap.config({ nullTargetWarn: false });

    /* ============================================
       Title Animation: tj-split-text-1
       ============================================ */
    document.querySelectorAll('.tj-split-text-1').forEach(element => {
      const split = new CustomSplitText(element, {
        type: 'lines,words,chars',
        linesClass: 'split-line',
      });
      splitInstances.push(split);

      gsap.set(split.chars, {
        opacity: 0.3,
        x: rtlValue(-7),
      });

      gsap.to(split.chars, {
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'top 60%',
          scrub: 1.2,
          toggleActions: 'play none none none',
          once: true,
        },
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.2,
      });
    });

    /* ============================================
       Title Animation: tj-split-text-2
       ============================================ */
    document.querySelectorAll('.tj-split-text-2').forEach(element => {
      const split = new CustomSplitText(element, {
        type: 'lines,words,chars',
        linesClass: 'split-line',
      });
      splitInstances.push(split);

      gsap.set(element, { perspective: 400 });
      gsap.set(split.chars, {
        x: rtlValue(100),
        opacity: 0,
      });

      gsap.to(split.chars, {
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
        },
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        rotationX: 15,
        delay: 0.1,
        ease: 'power3.inOut',
      });
    });

    /* ============================================
       Title Animation: tj-split-text-3
       ============================================ */
    document.querySelectorAll('.tj-split-text-3').forEach(title => {
      const split = new CustomSplitText(title, {
        type: 'words,chars',
        wordsClass: 'word',
        charsClass: 'char',
      });
      splitInstances.push(split);

      gsap.to(split.chars, {
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
        },
        x: 0,
        opacity: 1,
        duration: 0.8,
        clipPath: 'inset(0% 0% 0% 0%)',
        ease: 'power4.out',
        stagger: 0.03,
      });
    });

    /* ============================================
       Title Animation: tj-split-text-4
       ============================================ */
    document.querySelectorAll('.tj-split-text-4').forEach(element => {
      const split = new CustomSplitText(element, {
        type: 'lines,words,chars',
      });
      splitInstances.push(split);

      const immediateDivs = element.querySelectorAll(':scope > div');
      
      gsap.from(split.chars, {
        y: '100%',
        duration: 0.5,
        delay: 0.1,
        autoAlpha: 0,
        stagger: 0.01,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          onEnter: () => {
            immediateDivs.forEach(div => (div.style.overflow = 'hidden'));
          },
        },
        onComplete: () => {
          immediateDivs.forEach(div => (div.style.overflow = 'visible'));
        },
      });
    });

    /* ============================================
       Title Animation: tj-split-text-5
       ============================================ */
    document.querySelectorAll('.tj-split-text-5').forEach(element => {
      const split = new CustomSplitText(element, {
        type: 'chars,words',
      });
      splitInstances.push(split);

      gsap.from(split.chars, {
        duration: 1,
        delay: 0.3,
        x: rtlValue(20),
        autoAlpha: 0,
        stagger: 0.02,
        ease: 'power2.out',
        scrollTrigger: { trigger: element, start: 'top 85%' },
      });
    });

    /* ============================================
       Text Invert Animation
       ============================================ */
    document.querySelectorAll('.tj-text-invert').forEach(element => {
      const split = new CustomSplitText(element, { type: 'lines' });
      splitInstances.push(split);

      split.lines.forEach(target => {
        gsap.to(target, {
          backgroundPositionX: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: target,
            scrub: 1,
            start: 'top 80%',
            end: 'bottom center',
          },
        });
      });
    });

    /* ============================================
       Title Highlight Animation
       ============================================ */
    if (document.querySelector('.title-highlight')) {
      const highlightSplit = new CustomSplitText('.title-highlight', {
        type: 'lines',
        linesClass: 'line',
      });
      splitInstances.push(highlightSplit);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.title-highlight',
          scrub: 1,
          start: 'top 80%',
          end: 'bottom center',
        },
      });
      tl.to('.line', {
        '--highlight-offset': '100%',
        stagger: 0.4,
      });
    }

    /* ============================================
       Fade Animation: tj-fade-anim
       ============================================ */
    gsap.utils.toArray('.tj-fade-anim').forEach(item => {
      let onscrollValue = item.getAttribute('data-on-scroll') || 1;
      let fadeOffset = item.getAttribute('data-offset') || 50;
      let delayValue = item.getAttribute('data-delay') || 0.15;
      let durationValue = item.getAttribute('data-duration') || 1.15;
      let fadeDirection = item.getAttribute('data-direction') || 'bottom';
      let easeValue = item.getAttribute('data-ease') || 'power2.out';
      
      let animationSetting = {
        opacity: 0,
        ease: easeValue,
        duration: parseFloat(durationValue),
        delay: parseFloat(delayValue),
        x: rtlValue(
          fadeDirection === 'left'
            ? -fadeOffset
            : fadeDirection === 'right'
              ? fadeOffset
              : 0,
        ),
        y:
          fadeDirection === 'top'
            ? -fadeOffset
            : fadeDirection === 'bottom'
              ? fadeOffset
              : 0,
      };

      if (onscrollValue == 1) {
        animationSetting.scrollTrigger = {
          trigger: item,
          start: 'top 100%',
        };
      }
      gsap.from(item, animationSetting);
    });

    /* ============================================
       Zoom Animation: tj-zoom-anim
       ============================================ */
    gsap.utils.toArray('.tj-zoom-anim').forEach(item => {
      let onscrollValue = item.getAttribute('data-on-scroll') || 1;
      let delayValue = item.getAttribute('data-delay') || 0.15;
      let durationValue = item.getAttribute('data-duration') || 1.15;
      let zoomValue = item.getAttribute('data-zoom-value') || '0';
      let easeValue = item.getAttribute('data-ease') || 'power2.out';
      
      let animationSetting = {
        opacity: 0,
        ease: easeValue,
        duration: parseFloat(durationValue),
        delay: parseFloat(delayValue),
        scale: parseFloat(zoomValue),
      };
      
      if (onscrollValue == 1) {
        animationSetting.scrollTrigger = {
          trigger: item,
          start: 'top 90%',
        };
      }

      gsap.from(item, animationSetting);
    });

    /* ============================================
       Left Slide Animation
       ============================================ */
    if (window.matchMedia('(min-width: 1200px)').matches) {
      gsap.utils.toArray('.tj-slide-wrap').forEach(item => {
        let items = item.querySelectorAll('.tj-slide-left');
        if (items.length === 0) return;
        gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 70%',
          },
        }).from(items, {
          xPercent: rtlValue(-70),
          opacity: 0,
          ease: 'back.out(2.5)',
          duration: 1,
          stagger: 0.2,
        });
      });
    }

    /* ============================================
       Right Slide Animation
       ============================================ */
    if (window.matchMedia('(min-width: 1200px)').matches) {
      gsap.utils.toArray('.tj-slide-wrap').forEach(item => {
        let items = item.querySelectorAll('.tj-slide-right');
        if (items.length === 0) return;
        gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 70%',
          },
        }).from(items, {
          xPercent: rtlValue(70),
          opacity: 0,
          ease: 'back.out(2.5)',
          duration: 1,
          stagger: -0.2,
        });
      });
    }

    /* ============================================
       Image Reveal Animation 1
       ============================================ */
    document.querySelectorAll('.img-reveal-1').forEach(element => {
      let image = element.querySelector('img');
      if (!image) return;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
        },
      });

      tl.set(element, { autoAlpha: 1 });
      tl.from(element, {
        duration: 1.2,
        xPercent: rtlValue(100),
        ease: 'power2.out',
      });
      tl.from(image, {
        duration: 1.2,
        xPercent: rtlValue(-100),
        delay: -1.2,
        ease: 'power2.out',
      });
    });

    /* ============================================
       Image Reveal Animation 2
       ============================================ */
    document.querySelectorAll('.img-reveal-2').forEach(element => {
      let image = element.querySelector('img');
      if (!image) return;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
        },
      });

      tl.set(element, { autoAlpha: 1 });
      tl.from(element, {
        duration: 1.4,
        opacity: 0,
        ease: 'power2.out',
      });
      tl.from(image, {
        duration: 1.4,
        scale: 1.4,
        delay: -1.4,
        ease: 'power2.out',
      });
    });

    /* ============================================
       Image Reveal Animation 3
       ============================================ */
    document.querySelectorAll('.img-reveal-3').forEach(element => {
      let image = element.querySelector('img');
      if (!image) return;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 70%',
        },
      });

      tl.set(element, { autoAlpha: 1 });
      tl.from(element, {
        duration: 1,
        opacity: 0,
        ease: 'power2.out',
      });
      tl.from(image, {
        duration: 1,
        scale: 0,
        delay: -1.5,
        ease: 'power2.out',
      });
    });

    /* ============================================
       Zoom On Scroll Animation
       ============================================ */
    if (document.querySelector('.zoom-on-scroll')) {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 992px)', () => {
        let zoomElements = document.querySelectorAll('.zoom-on-scroll');
        gsap.set(zoomElements, {
          scale: 0.66,
          transformOrigin: 'top center',
        });
        gsap.to(zoomElements, {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.zoom-on-scroll-wrapper',
            start: 'top top',
            end: 'top+=30% top',
            scrub: 1,
          },
        });
      });
    }

    /* ============================================
       Button Move Hover Animation
       ============================================ */
    const hoverBtns = gsap.utils.toArray('.btn-hover-wrapper');
    const hoverBtnItems = gsap.utils.toArray('.btn-hover-inner');

    hoverBtns.forEach((btn, index) => {
      const onMouseMove = (e) => {
        const target = hoverBtnItems[index];
        if (!target) return;
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        const movement = 50;

        gsap.to(target, {
          duration: 0.5,
          x: ((relX - rect.width / 2) / rect.width) * movement,
          y: ((relY - rect.height / 2) / rect.height) * movement,
          ease: 'power2.out',
        });
      };

      const onMouseLeave = () => {
        const target = hoverBtnItems[index];
        if (!target) return;
        gsap.to(target, {
          duration: 0.5,
          x: 0,
          y: 0,
          ease: 'power2.out',
        });
      };

      btn.addEventListener('mousemove', onMouseMove);
      btn.addEventListener('mouseleave', onMouseLeave);
    });

    /* ============================================
       Images Parallax
       ============================================ */
    gsap.utils.toArray('.img-parallax').forEach(container => {
      const img = container.querySelector('img');
      if (!img) return;

      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          scrub: 1,
          pin: false,
        },
      }).fromTo(
        img,
        { yPercent: 0, ease: 'none' },
        { yPercent: -30, ease: 'none' },
      );
    });

    /* ============================================
       Footer Logo Skew
       ============================================ */
    gsap.utils.toArray('.tj_footer_bottom_logo').forEach(item => {
      gsap.set(item, { position: 'relative' });
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          scrub: -1,
          duration: 1.5,
          start: 'top bottom+=100',
          end: 'bottom center',
        },
        scale: 1,
        opacity: 1,
        rotateX: 0,
      });
    });

    /* ============================================
       Sticky Panels
       ============================================ */
    function initStickyPanelAnimation() {
      const container = document.querySelector('.tj-sticky-panel-container');
      const panels = document.querySelectorAll('.tj-sticky-panel');
      if (!container || panels.length === 0) return;

      const mm = gsap.matchMedia();
      mm.add('(min-width: 992px)', () => {
        const startOffset = parseInt(getComputedStyle(container).paddingTop, 10) || 0;
        const stackDifference = 75;
        const lastIdx = panels.length - 1;
        const lastPanel = panels[lastIdx];
        const paddingBottom = parseInt(getComputedStyle(container).paddingBottom, 10) || 0;

        panels.forEach((panel, i) => {
          const extraStartingOffset = i === 0 || i === 1 ? 0 : (i - 1) * stackDifference;
          
          gsap.to(panel, {
            scrollTrigger: {
              trigger: panel,
              start: `top-=${startOffset + extraStartingOffset} top`,
              endTrigger: container,
              end: () =>
                `bottom top+=${
                  lastPanel.offsetHeight +
                  startOffset +
                  paddingBottom +
                  (lastIdx - 1) * stackDifference
                }`,
              pin: true,
              pinSpacing: false,
              scrub: true,
              invalidateOnRefresh: true,
            },
            ease: 'circ',
          });

          const testimonialHeader = panel.querySelector('.testimonial_header');
          if (testimonialHeader) {
            gsap.to(testimonialHeader, {
              opacity: i === 3 ? 1 : 0.2 + (i - 1) * 0.2,
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                start: `top-=${startOffset + extraStartingOffset} top`,
                end: () =>
                  `bottom top+=${
                    lastPanel.offsetHeight +
                    startOffset +
                    paddingBottom +
                    lastIdx * stackDifference
                  }`,
                endTrigger: container,
                scrub: true,
                invalidateOnRefresh: true,
              },
            });
          }
        });
      });
    }
    initStickyPanelAnimation();

    /* ============================================
       Sidebar Sticky
       ============================================ */
    function sidebarStickyController() {
      const containers = document.querySelectorAll('.tj-sticky-container');
      if (!containers.length) return;

      containers.forEach(container => {
        const panels = container.querySelectorAll('.tj-sticky-item');
        if (!panels.length) return;

        const mm = gsap.matchMedia();
        mm.add('(min-width: 992px)', () => {
          const startOffset = 90;
          const lastIdx = panels.length - 1;
          const lastPanel = panels[lastIdx];
          const paddingBottom = parseInt(getComputedStyle(container).paddingBottom, 10) || 0;

          panels.forEach((panel) => {
            gsap.to(panel, {
              scrollTrigger: {
                trigger: panel,
                start: `top-=${startOffset} top`,
                endTrigger: container,
                end: () =>
                  `bottom top+=${lastPanel.offsetHeight + startOffset + paddingBottom}`,
                pin: true,
                pinSpacing: false,
                scrub: true,
                invalidateOnRefresh: true,
              },
              ease: 'circ',
            });
          });
        });
      });
    }
    sidebarStickyController();

    // Refresh ScrollTrigger after everything is set up
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

  }, []);

  // ── Run GSAP animations on every route change ──────────────────
  useEffect(() => {
    // Delay to ensure DOM is fully rendered after route change
    const timer = setTimeout(() => {
      runGsapAnimations();
    }, 200);

    return () => {
      clearTimeout(timer);
      // Kill all ScrollTrigger instances on cleanup
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [location.pathname, runGsapAnimations]);
}
