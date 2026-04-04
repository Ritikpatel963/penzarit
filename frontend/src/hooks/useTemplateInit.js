import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';

/**
 * Master hook that replicates all jQuery main.js functionality in React.
 * Must be called once in App.jsx.
 */
export default function useTemplateInit() {
  const location = useLocation();

  // ── data-bg-image handler ──────────────────────────────────────
  const applyBgImages = useCallback(() => {
    document.querySelectorAll('[data-bg-image]').forEach((el) => {
      const img = el.getAttribute('data-bg-image');
      if (img) {
        // Ensure absolute path for SPA routing
        const src = img.startsWith('/') ? img : '/' + img;
        el.style.backgroundImage = `url(${src})`;
      }
    });
  }, []);

  // ── Star ratings width ─────────────────────────────────────────
  const initStarRatings = useCallback(() => {
    document.querySelectorAll('.star-ratings').forEach((el) => {
      const emptySpan = el.querySelector('.empty-ratings span');
      if (emptySpan) {
        el.style.width = emptySpan.offsetWidth + 'px';
      }
    });
  }, []);

  // ── Back to top ────────────────────────────────────────────────
  const initBackToTop = useCallback(() => {
    const btn = document.getElementById('back_to_top');
    const wrapper = document.querySelector('.back-to-top-wrapper');
    if (!btn || !wrapper) return;

    const onScroll = () => {
      if (window.scrollY > 1200) {
        wrapper.classList.add('back-to-top-btn-show');
      } else {
        wrapper.classList.remove('back-to-top-btn-show');
      }
    };
    window.addEventListener('scroll', onScroll);
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Sticky header ─────────────────────────────────────────────
  const initStickyHeader = useCallback(() => {
    let lastScrollTop = 0;
    const stickyEl = document.querySelector('.header-sticky');
    if (!stickyEl) return;

    const onScroll = () => {
      const st = window.scrollY;
      if (st > 500) {
        if (st > lastScrollTop) {
          stickyEl.classList.remove('sticky');
        } else {
          stickyEl.classList.add('sticky');
        }
      } else {
        stickyEl.classList.remove('sticky');
      }
      lastScrollTop = st;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Mobile menu & Offcanvas ────────────────────────────────────
  const initMenus = useCallback(() => {
    const overlay = document.querySelector('.body-overlay');
    const hamburgerArea = document.querySelector('.hamburger-area');
    const offcanvasArea = document.querySelector('.tj-offcanvas-area');

    // Mobile menu bar click
    document.querySelectorAll('.mobile_menu_bar').forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('on');
        if (hamburgerArea) hamburgerArea.classList.add('opened');
        if (overlay) overlay.classList.add('opened');
        document.body.classList.toggle('overflow-hidden');
      });
    });

    // Offcanvas menu bar click
    document.querySelectorAll('.menu_offcanvas').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (offcanvasArea) offcanvasArea.classList.toggle('opened');
        if (overlay) overlay.classList.add('opened');
        document.body.classList.toggle('overflow-hidden');
      });
    });

    // Close buttons
    document.querySelectorAll('.hamburger_close_btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (offcanvasArea) offcanvasArea.classList.remove('opened');
        if (hamburgerArea) hamburgerArea.classList.remove('opened');
        if (overlay) overlay.classList.remove('opened');
        document.body.classList.remove('overflow-hidden');
      });
    });

    // Overlay click
    if (overlay) {
      overlay.addEventListener('click', () => {
        if (offcanvasArea) offcanvasArea.classList.remove('opened');
        if (hamburgerArea) hamburgerArea.classList.remove('opened');
        overlay.classList.remove('opened');
        document.body.classList.remove('overflow-hidden');
      });
    }
  }, []);

  // ── Search popup ───────────────────────────────────────────────
  const initSearch = useCallback(() => {
    const popup = document.querySelector('.search_popup');
    const popupOverlay = document.querySelector('.search-popup-overlay');

    document.querySelectorAll('.header-search').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (popup) popup.classList.add('search-opened');
        if (popupOverlay) popupOverlay.classList.add('opened');
      });
    });

    document.querySelectorAll('.search_close_btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (popup) popup.classList.remove('search-opened');
        if (popupOverlay) popupOverlay.classList.remove('opened');
      });
    });

    if (popupOverlay) {
      popupOverlay.addEventListener('click', () => {
        if (popup) popup.classList.remove('search-opened');
        popupOverlay.classList.remove('opened');
      });
    }
  }, []);

  // ── Swiper sliders ─────────────────────────────────────────────
  const initSwipers = useCallback(() => {
    // Dynamically import Swiper
    import('swiper').then(({ default: Swiper }) => {
      import('swiper/modules').then(({ Navigation, Pagination, Autoplay, EffectFade, FreeMode, Controller, Thumbs }) => {
        const getSlideCount = (selector) => document.querySelectorAll(`${selector} .swiper-slide`).length;
        const canLoop = (selector, minimumSlides = 2) => getSlideCount(selector) >= minimumSlides;

        // Client slider (brand marquee)
        if (document.querySelector('.client-slider')) {
          new Swiper('.client-slider', {
            modules: [Autoplay, FreeMode],
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true,
            centeredSlides: true,
            loop: canLoop('.client-slider', 2),
            speed: 5000,
            allowTouchMove: false,
            autoplay: {
              delay: 1,
              disableOnInteraction: true,
            },
          });
        }

        // Testimonial thumb + main slider
        if (document.querySelector('.thumb-slider') && document.querySelector('.testimonial-slider')) {
          const thumbSlider = new Swiper('.thumb-slider', {
            modules: [FreeMode, Controller],
            slidesPerView: 3,
            spaceBetween: 12,
            loop: canLoop('.thumb-slider', 3),
            speed: 1200,
            centeredSlides: true,
            freeMode: true,
            watchSlidesProgress: true,
            slideToClickedSlide: true,
          });

          const testimonialSlider = new Swiper('.testimonial-slider', {
            modules: [Navigation, Pagination, Autoplay, Controller],
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            loop: canLoop('.testimonial-slider', 3),
            speed: 1200,
            autoplay: { delay: 3000 },
            navigation: { nextEl: '.slider-next', prevEl: '.slider-prev' },
            pagination: { el: '.swiper-pagination-area', clickable: true },
            breakpoints: {
              0: { slidesPerView: 1.01, spaceBetween: 15 },
              576: { slidesPerView: 1.5, spaceBetween: 15 },
              992: { slidesPerView: 1.5, spaceBetween: 20 },
              1024: { slidesPerView: 1.8, spaceBetween: 25 },
              1400: { slidesPerView: 2.08, spaceBetween: 30 },
            },
          });

          testimonialSlider.controller.control = thumbSlider;
          thumbSlider.controller.control = testimonialSlider;
        }

        // Testimonial slider 2
        if (document.querySelector('.testimonial_slider_2')) {
          new Swiper('.testimonial_slider_2', {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 15,
            loop: canLoop('.testimonial_slider_2', 3),
            speed: 1500,
            autoplay: { delay: 3000 },
            navigation: { nextEl: '.slider-next', prevEl: '.slider-prev' },
            pagination: { el: '.swiper-pagination-area', clickable: true },
            breakpoints: {
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 2, spaceBetween: 30 },
              1200: { slidesPerView: 3, spaceBetween: 30 },
            },
          });
        }

        // H3 testimonial slider
        if (document.querySelector('.h3_testimonial_slider')) {
          new Swiper('.h3_testimonial_slider', {
            modules: [Pagination, Autoplay],
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
            loop: canLoop('.h3_testimonial_slider', 2),
            speed: 1500,
            autoplay: { delay: 3000 },
            pagination: { el: '.swiper-pagination-area', clickable: true },
            breakpoints: {
              320: { spaceBetween: 20 },
              992: { spaceBetween: 30 },
            },
          });
        }

        // Thumb slider 2 + testimonial slider 4
        if (document.querySelector('.thumb-slider-2') && document.querySelector('.testimonial-slider-4')) {
          const thumbSlider2 = new Swiper('.thumb-slider-2', {
            modules: [FreeMode, Controller],
            slidesPerView: 3,
            spaceBetween: 10,
            loop: canLoop('.thumb-slider-2', 3),
            speed: 1200,
            centeredSlides: true,
            freeMode: true,
            watchSlidesProgress: true,
            slideToClickedSlide: true,
          });
          const testimonialSlider4 = new Swiper('.testimonial-slider-4', {
            modules: [Navigation, Pagination, Autoplay, Controller],
            slidesPerView: 'auto',
            spaceBetween: 30,
            loop: canLoop('.testimonial-slider-4', 2),
            speed: 1200,
            autoplay: { delay: 3000 },
            navigation: { nextEl: '.slider-next', prevEl: '.slider-prev' },
            pagination: { el: '.swiper-pagination-area', clickable: true },
          });
          testimonialSlider4.controller.control = thumbSlider2;
          thumbSlider2.controller.control = testimonialSlider4;
        }

        // H8 testimonial slider
        if (document.querySelector('.h8-testimonial-slider')) {
          new Swiper('.h8-testimonial-slider', {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 15,
            loop: canLoop('.h8-testimonial-slider', 5),
            speed: 1500,
            autoplay: { delay: 3000 },
            navigation: { nextEl: '.slider-next', prevEl: '.slider-prev' },
            pagination: { el: '.swiper-pagination-area', clickable: true },
            breakpoints: {
              768: { slidesPerView: 2, spaceBetween: 20, centeredSlides: true },
              992: { slidesPerView: 3, spaceBetween: 20, centeredSlides: true },
              1200: { slidesPerView: 3.4, spaceBetween: 30, centeredSlides: true },
              1550: { slidesPerView: 4.25, spaceBetween: 30, centeredSlides: true },
            },
          });
        }

        // H9 testimonial slider
        if (document.querySelector('.h9-testimonial-slider')) {
          new Swiper('.h9-testimonial-slider', {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 15,
            loop: canLoop('.h9-testimonial-slider', 3),
            speed: 1500,
            autoplay: { delay: 3000 },
            navigation: { nextEl: '.slider-next', prevEl: '.slider-prev' },
            pagination: { el: '.swiper-pagination-area', clickable: true },
            breakpoints: {
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 1.5, spaceBetween: 20 },
              1200: { slidesPerView: 1.8, spaceBetween: 30 },
            },
          });
        }

        // H10 testimonial slider
        if (document.querySelector('.h10-testimonial-slider')) {
          new Swiper('.h10-testimonial-slider', {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 15,
            loop: canLoop('.h10-testimonial-slider', 4),
            speed: 1500,
            autoplay: { delay: 3000 },
            navigation: { nextEl: '.slider-next', prevEl: '.slider-prev' },
            pagination: { el: '.swiper-pagination-area', clickable: true },
            breakpoints: {
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1200: { slidesPerView: 4, spaceBetween: 30 },
            },
          });
        }

        // Project slider
        if (document.querySelector('.project-slider')) {
          new Swiper('.project-slider', {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 15,
            loop: canLoop('.project-slider', 4),
            speed: 1500,
            autoplay: { delay: 3000 },
            navigation: { nextEl: '.slider-next', prevEl: '.slider-prev' },
            pagination: { el: '.swiper-pagination-area', clickable: true },
            breakpoints: {
              600: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1540: { slidesPerView: 4, spaceBetween: 30 },
            },
          });
        }

        // Hero slider
        if (document.querySelector('.tj-hero-slider')) {
          new Swiper('.tj-hero-slider', {
            modules: [Navigation, Autoplay, EffectFade],
            slidesPerView: 1,
            spaceBetween: 0,
            effect: 'fade',
            loop: canLoop('.tj-hero-slider', 2),
            speed: 1400,
            autoplay: { delay: 5000 },
            navigation: { nextEl: '.slider-next', prevEl: '.slider-prev' },
          });
        }

        // Blog post slider
        if (document.querySelector('.tj-post-slider')) {
          new Swiper('.tj-post-slider', {
            modules: [Navigation, Autoplay],
            slidesPerView: 1,
            spaceBetween: 20,
            loop: canLoop('.tj-post-slider', 2),
            speed: 1400,
            autoplay: { delay: 3000 },
            navigation: { nextEl: '.slider-next', prevEl: '.slider-prev' },
          });
        }

        // H8 Blog slider
        if (document.querySelector('.h8-blog-slider')) {
          new Swiper('.h8-blog-slider', {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 15,
            loop: canLoop('.h8-blog-slider', 3),
            speed: 1500,
            autoplay: { delay: 3000 },
            navigation: { nextEl: '.slider-next', prevEl: '.slider-prev' },
            pagination: { el: '.swiper-pagination-area', clickable: true },
            breakpoints: {
              768: { slidesPerView: 2, spaceBetween: 20, centeredSlides: true },
              992: { slidesPerView: 3, spaceBetween: 20, centeredSlides: true },
              1200: { slidesPerView: 3, spaceBetween: 30, centeredSlides: true },
            },
          });
        }

        // Service slider
        if (document.querySelector('.service-slider')) {
          new Swiper('.service-slider', {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 15,
            loop: canLoop('.service-slider', 5),
            speed: 1500,
            autoplay: { delay: 3000 },
            navigation: { nextEl: '.slider-next', prevEl: '.slider-prev' },
            pagination: { el: '.swiper-pagination-area', clickable: true },
            breakpoints: {
              768: { slidesPerView: 2, spaceBetween: 20, centeredSlides: true },
              992: { slidesPerView: 3, spaceBetween: 20, centeredSlides: true },
              1200: { slidesPerView: 3.4, spaceBetween: 30, centeredSlides: true },
              1550: { slidesPerView: 4.25, spaceBetween: 30, centeredSlides: true },
            },
          });
        }
      });
    });
  }, []);

  // ── Progress bars ──────────────────────────────────────────────
  const initProgressBars = useCallback(() => {
    document.querySelectorAll('.tj-progress').forEach((container) => {
      const bar = container.querySelector('.tj-progress-bar');
      if (!bar) return;
      const percent = parseInt(bar.getAttribute('data-percent'), 10) || 0;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              bar.style.transition = 'width 2s ease-out';
              bar.style.width = `${percent}%`;
              const text = container.querySelector('.tj-progress-percent');
              if (text) {
                let current = 0;
                const interval = setInterval(() => {
                  current++;
                  text.textContent = `${current}%`;
                  if (current >= percent) clearInterval(interval);
                }, 15);
              }
              observer.unobserve(container);
            }
          });
        },
        { threshold: [0.3, 0.9] }
      );
      observer.observe(container);
    });
  }, []);

  // ── Accordion ──────────────────────────────────────────────────
  const initAccordion = useCallback(() => {
    document.querySelectorAll('.accordion_item .accordion_title').forEach((title) => {
      title.addEventListener('click', () => {
        const parent = title.parentElement;
        if (parent.classList.contains('active')) {
          parent.classList.remove('active');
        } else {
          Array.from(parent.parentElement.children).forEach((sib) =>
            sib.classList.remove('active')
          );
          parent.classList.add('active');
        }
      });
    });
  }, []);

  // ── Pricing toggle ─────────────────────────────────────────────
  const initPricingToggle = useCallback(() => {
    document.querySelectorAll('.toggle-checkbox').forEach((toggle) => {
      toggle.addEventListener('change', function () {
        // Global pricing toggle
        document.querySelectorAll('.price').forEach((p) => {
          p.textContent = this.checked ? p.dataset.yearPrice : p.dataset.monthPrice;
        });
        document.querySelectorAll('.period').forEach((p) => {
          p.textContent = this.checked ? p.dataset.yearPeriod : p.dataset.monthPeriod;
        });
        // Per-card pricing toggle
        const card = this.closest('.pricing_item_inner');
        if (card) {
          const price = card.querySelector('.tj_price');
          const period = card.querySelector('.tj_period');
          if (price) price.textContent = this.checked ? price.dataset.yearPrice : price.dataset.monthPrice;
          if (period) period.textContent = this.checked ? period.dataset.yearPeriod : period.dataset.monthPeriod;
        }
      });
    });
  }, []);

  // ── Hover active effects ───────────────────────────────────────
  const initHoverEffects = useCallback(() => {
    // H3 services hover
    document.querySelectorAll('.h3_services_wrap .service_list_item').forEach((item) => {
      item.addEventListener('mouseenter', () => {
        item.classList.add('is-active');
        Array.from(item.parentElement.children).forEach((sib) => {
          if (sib !== item) sib.classList.remove('is-active');
        });
      });
    });

    // Hover active wrapper
    document.querySelectorAll('.hover-active-wrapper .hover-active-item').forEach((item) => {
      item.addEventListener('mouseenter', () => {
        item.classList.add('active');
        Array.from(item.parentElement.children).forEach((sib) => {
          if (sib !== item) sib.classList.remove('active');
        });
      });
    });

    // Active wrapper (vanilla JS version)
    document.querySelectorAll('.active-wrapper').forEach((parent) => {
      parent.addEventListener('mouseenter', (e) => {
        if (e.target.classList.contains('active-item')) {
          parent.querySelectorAll('.active-item').forEach((i) => i.classList.remove('active'));
          e.target.classList.add('active');
        }
      }, true);
    });

    // Hover item
    document.querySelectorAll('.hover-item').forEach((item) => {
      item.addEventListener('mouseover', () => {
        item.classList.add('active');
        Array.from(item.parentElement.children).forEach((sib) => {
          if (sib !== item) sib.classList.remove('active');
        });
      });
    });
  }, []);

  // ── Rounded marquee ────────────────────────────────────────────
  const initRoundedMarquee = useCallback(() => {
    document.querySelectorAll('.tj-rounded-marquee').forEach((parent) => {
      const items = parent.querySelectorAll('.tj-rounded-marquee-icon');
      const count = items.length;
      if (!count) return;
      const radius = parent.offsetWidth / 2;
      items.forEach((item, index) => {
        const w = item.offsetWidth;
        const angle = (360 / count) * index;
        item.style.margin = `-${w / 2}px`;
        item.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`;
      });
    });
  }, []);

  // ── Quantity controller ────────────────────────────────────────
  const initQuantity = useCallback(() => {
    document.querySelectorAll('.tj-cart-plus').forEach((btn) => {
      btn.addEventListener('click', () => {
        const input = btn.parentElement.querySelector('.tj-cart-input') ||
                      btn.previousElementSibling || btn.nextElementSibling;
        if (input && input.classList.contains('tj-cart-input')) {
          let val = parseInt(input.value) || 0;
          input.value = String(val + 1).slice(-2);
        }
      });
    });
    document.querySelectorAll('.tj-cart-minus').forEach((btn) => {
      btn.addEventListener('click', () => {
        const input = btn.parentElement.querySelector('.tj-cart-input') ||
                      btn.previousElementSibling || btn.nextElementSibling;
        if (input && input.classList.contains('tj-cart-input')) {
          let val = parseInt(input.value) || 1;
          if (val > 1) val--;
          input.value = String(val).slice(-2);
        }
      });
    });
  }, []);

  // ── Copyright year ─────────────────────────────────────────────
  const initCopyrightYear = useCallback(() => {
    const yearEl = document.querySelector('.copyright-text span');
    if (yearEl) {
      const currentYear = new Date().getFullYear();
      const spanYear = parseInt(yearEl.textContent, 10);
      if (spanYear < currentYear) yearEl.textContent = currentYear;
    }
  }, []);

  // ── Fix image src paths (add leading /) ────────────────────────
  const fixImagePaths = useCallback(() => {
    // Fix img src starting with "assets/"
    document.querySelectorAll('img[src^="assets/"]').forEach((img) => {
      img.src = '/' + img.getAttribute('src');
    });
    // Fix img src starting with "./assets/"
    document.querySelectorAll('img[src^="./assets/"]').forEach((img) => {
      img.src = img.getAttribute('src').replace('./', '/');
    });
    // Also fix any <a> href to assets
    document.querySelectorAll('a[href^="assets/"]').forEach((a) => {
      a.href = '/' + a.getAttribute('href');
    });
    document.querySelectorAll('a[href^="./assets/"]').forEach((a) => {
      a.href = a.getAttribute('href').replace('./', '/');
    });
    // Fix data-bg-image paths
    document.querySelectorAll('[data-bg-image^="./assets/"]').forEach((el) => {
      el.setAttribute('data-bg-image', el.getAttribute('data-bg-image').replace('./', '/'));
    });
  }, []);

  // ── VanillaTilt initialization ─────────────────────────────────
  const initVanillaTilt = useCallback(() => {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    if (tiltElements.length === 0) return;
    
    // Destroy existing instances first
    tiltElements.forEach((el) => {
      if (el.vanillaTilt) {
        el.vanillaTilt.destroy();
      }
    });
    
    VanillaTilt.init(Array.from(tiltElements), {
      max: 15,
      speed: 400,
      glare: false,
      'max-glare': 0.2,
    });
  }, []);

  // ── Counter animation ─────────────────────────────────────────
  const initCounters = useCallback(() => {
    document.querySelectorAll('.counter').forEach((el) => {
      // Skip if already animated
      if (el.dataset.counterAnimated === 'true') return;
      
      const targetValue = parseInt(el.textContent, 10);
      if (isNaN(targetValue)) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && el.dataset.counterAnimated !== 'true') {
              el.dataset.counterAnimated = 'true';
              let current = 0;
              const duration = 2000; // 2 seconds
              const increment = targetValue / (duration / 16);
              const timer = setInterval(() => {
                current += increment;
                if (current >= targetValue) {
                  current = targetValue;
                  clearInterval(timer);
                }
                el.textContent = Math.floor(current);
              }, 16);
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
    });
  }, []);

  // ── Master init (runs on every route change) ───────────────────
  useEffect(() => {
    // Small delay to ensure DOM is rendered
    const timer = setTimeout(() => {
      fixImagePaths();
      applyBgImages();
      initStarRatings();
      initSwipers();
      initProgressBars();
      initAccordion();
      initPricingToggle();
      initHoverEffects();
      initRoundedMarquee();
      initQuantity();
      initCopyrightYear();
      initVanillaTilt();
      initCounters();
    }, 100);

    // Scroll to top on route change
    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // ── One-time init (menus, sticky, back-to-top, search) ─────────
  useEffect(() => {
    const cleanupBackToTop = initBackToTop();
    const cleanupSticky = initStickyHeader();

    // Delay menu init so DOM is ready
    const timer = setTimeout(() => {
      initMenus();
      initSearch();
    }, 200);

    // Resize handler for rounded marquee
    let resizeRAF;
    const onResize = () => {
      cancelAnimationFrame(resizeRAF);
      resizeRAF = requestAnimationFrame(initRoundedMarquee);
    };
    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', onResize);
      if (cleanupBackToTop) cleanupBackToTop();
      if (cleanupSticky) cleanupSticky();
    };
  }, []);
}
