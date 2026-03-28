import React from 'react';

export default function New() {
  return (
    <>

  <div className="body-overlay"></div>

  {/*  Preloader Start  */}
  <div className="preloader is-loading">
    <div className="loading-container">
      <div className="loading"></div>
      <div id="loading-icon"><img src="assets/images/logos/logo-icon.webp" alt="Loading" /></div>
    </div>
  </div>
  {/*  Preloader end  */}

  {/*  back to top start  */}
  <div className="back-to-top-wrapper">
    <button id="back_to_top" type="button" className="back-to-top-btn">
      <span className="back_to_top_icon"><i className="tji-arrow-up-4"></i></span>
      <span className="back_to_top_text">Scroll Top</span>
    </button>
  </div>
  {/*  back to top end  */}

  {/*  start: Search Popup  */}
  <div className="search_popup">
    <div className="search_close">
      <button type="button" className="search_close_btn">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xxl-12">
          <div className="tj_search_wrapper">
            <div className="search_form">
              <form action="#">
                <div className="search_input">
                  <h4 className="title">Search Projects, Service or Blog.</h4>
                  <div className="search-box">
                    <input className="search-input-field" type="search" placeholder="Search here..." required="" />
                    <button type="submit">
                      <i className="tji-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="search-popup-overlay"></div>
  {/*  end: Search Popup  */}

  {/*  start: Offcanvas Menu  */}
  <div className="tj-offcanvas-area d-none d-lg-block">
    <div className="hamburger_bg"></div>
    <div className="hamburger_wrapper">
      <div className="hamburger_inner">
        <div className="hamburger_top d-flex align-items-center justify-content-between">
          <div className="hamburger_logo">
            <a href="index.html" className="mobile_logo">
              <img src="assets/images/logos/primary-logo.webp" alt="Logo" />
            </a>
          </div>
          <div className="hamburger_close">
            <button className="hamburger_close_btn">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div className="offcanvas-text">
          <p>Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion recognized
            by industry leaders.</p>
        </div>
        <div className="hamburger-search-area">
          <h5 className="hamburger-title">Search Now!</h5>
          <div className="hamburger_search">
            <form method="get" action="index.html">
              <button type="submit"><i className="tji-search"></i></button>
              <input type="search" autocomplete="off" name="s" value="" placeholder="Search here..." />
            </form>
          </div>
        </div>
        <div className="hamburger-infos">
          <h5 className="hamburger-title">Contact Info</h5>
          <div className="contact-info">
            <div className="contact-item">
              <span className="subtitle">Phone</span>
              <a className="contact-link" href="tel:10095447818">+1 (009) 544-7818</a>
            </div>
            <div className="contact-item">
              <span className="subtitle">Email</span>
              <a className="contact-link" href="mailto:info@tekmino.com">info@tekmino.com</a>
            </div>
            <div className="contact-item">
              <span className="subtitle">Location</span>
              <span className="contact-link">993 Renner Burg, West Rond, MT 94251-030</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hamburger-socials">
        <h5 className="hamburger-title">Follow Us</h5>
        <div className="social-links style-2">
          <ul>
            <li>
              <a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a>
            </li>
            <li>
              <a href="https://x.com/" target="_blank"><i className="tji-x-twitter"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/*  end: Offcanvas Menu  */}

  {/*  start: Hamburger Menu  */}
  <div className="hamburger-area d-lg-none">
    <div className="hamburger_bg"></div>
    <div className="hamburger_wrapper">
      <div className="hamburger_inner">
        <div className="hamburger_top d-flex align-items-center justify-content-between">
          <div className="hamburger_logo">
            <a href="index.html" className="mobile_logo">
              <img src="assets/images/logos/primary-logo.webp" alt="Logo" />
            </a>
          </div>
          <div className="hamburger_close">
            <button className="hamburger_close_btn">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div className="hamburger_menu">
          <div className="mobile_menu"></div>
        </div>
        <div className="hamburger-infos">
          <h5 className="hamburger-title">Contact Info</h5>
          <div className="contact-info">
            <div className="contact-item">
              <span className="subtitle">Phone</span>
              <a className="contact-link" href="tel:8089091313">808-909-1313</a>
            </div>
            <div className="contact-item">
              <span className="subtitle">Email</span>
              <a className="contact-link" href="mailto:info@tekmino.com">info@tekmino.com</a>
            </div>
            <div className="contact-item">
              <span className="subtitle">Location</span>
              <span className="contact-link">993 Renner Burg, West Rond, MT 94251-030</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hamburger-socials">
        <h5 className="hamburger-title">Follow Us</h5>
        <div className="social-links style-2">
          <ul>
            <li>
              <a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a>
            </li>
            <li>
              <a href="https://x.com/" target="_blank"><i className="tji-x-twitter"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/*  end: Hamburger Menu  */}

  {/*  start: Header Area  */}
  <header className="header-area header-1 header-absolute">
    <div className="header-top d-lg-block d-none">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="header-top-content">
              <p className="topbar-text"><i className="tji-spark"></i> Fast & Reliable IT Solution Services. <a
                  href="contact.html">Join Now</a></p>
              <div className="header-info">
                <div className="info-item">
                  <span><i className="tji-clock"></i></span>
                  <span>9 am to 6 pm [mon-sat]</span>
                </div>
                <div className="info-item">
                  <span><i className="tji-gear"></i></span>
                  <a href="contact.html">Support</a>
                </div>
                <div className="info-item">
                  <span><i className="tji-globe"></i></span>
                  <div className="tj-language">
                    <span>English</span>
                    <ul>
                      <li>English</li>
                      <li>Arabic</li>
                      <li>Spanish</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-bottom">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="header-wrapper">
              {/*  site logo  */}
              <div className="site_logo">
                <a className="logo" href="index.html"><img src="assets/images/logos/primary-logo.webp" alt="Logo" /></a>
              </div>

              {/*  navigation  */}
              <div className="menu-area d-none d-lg-inline-flex align-items-center">
                <nav id="mobile-menu" className="mainmenu">
                  <ul>
                    <li className="has-dropdown current-menu-ancestor">
                      <a href="index.html">Home</a>
                      <ul className="sub-menu">
                        <li className="current-menu-item"><a href="index.html">IT Solution</a></li>
                        <li><a href="index-2.html">IT Consulting</a></li>
                        <li><a href="index-3.html">Managed IT</a></li>
                        <li><a href="index-4.html">Cloud Solutions</a></li>
                        <li><a href="index-5.html">Cyber Security </a></li>
                        <li><a href="index-6.html">Fintech</a></li>
                        <li><a href="index-7.html">Software Company</a></li>
                        <li><a href="index-8.html">Tech Startup</a></li>
                        <li><a href="index-9.html">Ai technology</a></li>
                        <li><a href="index-10.html">Hosting</a></li>
                        <li><a href="index-rtl.html">RTL Demo</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="about.html">Pages</a>
                      <ul className="sub-menu">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="service.html">Service</a></li>
                        <li><a href="service-details.html">Service Details</a></li>
                        <li><a href="team.html">Team</a></li>
                        <li><a href="team-details.html">Team Details</a></li>
                        <li><a href="faq.html">Faq</a></li>
                        <li><a href="pricing.html">Pricing Page</a></li>
                        <li><a href="error.html">Error 404</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="project.html">Projects</a>
                      <ul className="sub-menu">
                        <li><a href="project.html">Projects</a></li>
                        <li><a href="project-details.html">Project Details</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="shop.html">Shop</a>
                      <ul className="sub-menu">
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="shop-details.html">Shop Details</a></li>
                        <li><a href="cart.html">Cart</a></li>
                        <li><a href="wishlist.html">Wishlist</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="password.html">Password</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="blog.html">Blog</a>
                      <ul className="sub-menu">
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </nav>
              </div>

              {/*  header right info  */}
              <div className="header-right-item d-none d-lg-inline-flex">
                <div className="header-search">
                  <button className="search">
                    <i className="tji-search"></i>
                  </button>
                </div>
                <div className="header-button d-xl-block d-none">
                  <a className="tj-primary-btn" href="contact.html">
                    <span className="btn-text"><span>Get Started</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                  </a>
                </div>
                {/*  menu bar  */}
                <button className="menu_btn menu_offcanvas d-none d-lg-block">
                  <span className="cubes">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </button>
              </div>

              {/*  menu bar  */}
              <button className="menu_btn mobile_menu_bar d-lg-none">
                <span className="cubes">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/*  end: Header Area  */}

  {/*  start: Header Area  */}
  <header className="header-area header-1 header-duplicate header-sticky">
    <div className="header-bottom">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="header-wrapper">
              {/*  site logo  */}
              <div className="site_logo">
                <a className="logo" href="index.html"><img src="assets/images/logos/primary-logo.webp" alt="Logo" /></a>
              </div>

              {/*  navigation  */}
              <div className="menu-area d-none d-lg-inline-flex align-items-center">
                <nav className="mainmenu">
                  <ul>
                    <li className="has-dropdown current-menu-ancestor">
                      <a href="index.html">Home</a>
                      <ul className="sub-menu">
                        <li className="current-menu-item"><a href="index.html">IT Solution</a></li>
                        <li><a href="index-2.html">IT Consulting</a></li>
                        <li><a href="index-3.html">Managed IT</a></li>
                        <li><a href="index-4.html">Cloud Solutions</a></li>
                        <li><a href="index-5.html">Cyber Security </a></li>
                        <li><a href="index-6.html">Fintech</a></li>
                        <li><a href="index-7.html">Software Company</a></li>
                        <li><a href="index-8.html">Tech Startup</a></li>
                        <li><a href="index-9.html">Ai technology</a></li>
                        <li><a href="index-10.html">Hosting</a></li>
                        <li><a href="index-rtl.html">RTL Demo</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="about.html">Pages</a>
                      <ul className="sub-menu">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="service.html">Service</a></li>
                        <li><a href="service-details.html">Service Details</a></li>
                        <li><a href="team.html">Team</a></li>
                        <li><a href="team-details.html">Team Details</a></li>
                        <li><a href="faq.html">Faq</a></li>
                        <li><a href="pricing.html">Pricing Page</a></li>
                        <li><a href="error.html">Error 404</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="project.html">Projects</a>
                      <ul className="sub-menu">
                        <li><a href="project.html">Projects</a></li>
                        <li><a href="project-details.html">Project Details</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="shop.html">Shop</a>
                      <ul className="sub-menu">
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="shop-details.html">Shop Details</a></li>
                        <li><a href="cart.html">Cart</a></li>
                        <li><a href="wishlist.html">Wishlist</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="password.html">Password</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="blog.html">Blog</a>
                      <ul className="sub-menu">
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </nav>
              </div>

              {/*  header right info  */}
              <div className="header-right-item d-none d-lg-inline-flex">
                <div className="header-search">
                  <button className="search">
                    <i className="tji-search"></i>
                  </button>
                </div>
                <div className="header-button d-xl-block d-none">
                  <a className="tj-primary-btn" href="contact.html">
                    <span className="btn-text"><span>Get Started</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                  </a>
                </div>
                {/*  menu bar  */}
                <button className="menu_btn menu_offcanvas d-none d-lg-block">
                  <span className="cubes">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </button>
              </div>

              {/*  menu bar  */}
              <button className="menu_btn mobile_menu_bar d-lg-none">
                <span className="cubes">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/*  end: Header Area  */}


   {/*  start: Cta Section  */}
        <section className="tj-cta-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="cta-area tj-fade-anim">
                  <div className="cta-content">
                    <h2 className="title">Don’t Miss Out the Future!</h2>
                  </div>
                  <div className="cta-right">
                    <div className="subscribe-form cta-form">
                      <form action="#">
                        <input type="email" name="email" placeholder="Enter email here..." />
                        <button className="tj-primary-btn style-2" type="submit">
                          <span className="btn-text"><span>Subscribe Now</span></span>
                          <span className="btn-icon"><i className="tji-bell"></i></span>
                        </button>
                      </form>
                    </div>
                    <div className="social-links cta-social">
                      <span className="title">Follow us:</span>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a>
                        </li>
                        <li>
                          <a href="https://www.x.com/" target="_blank"><i className="tji-x-twitter"></i></a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Cta Section  */}
      </main>

      {/*  start: Footer Section  */}
      <footer className="tj-footer-section footer-1 section-gap-x">
        <div className="bg-img" data-bg-image="assets/images/footer/footer-bg.webp"></div>
        <div className="footer-main-area">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="footer_widget_wrapper">
                  <div className="footer-widget footer-col-1">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src="assets/images/logos/primary-logo.webp" alt="Logo" />
                      </a>
                    </div>
                    <div className="footer-text">
                      <p>Every great solution start understand the time into learn about.</p>
                    </div>
                    <div className="download-buttons">
                      <a href="https://play.google.com/store/games"><img src="assets/images/footer/google-play.webp"
                          alt="" /></a>
                      <a href="https://www.apple.com/app-store/"><img src="assets/images/footer/app-store.webp"
                          alt="" /></a>
                    </div>
                  </div>
                  <div className="footer-widget widget-nav-menu">
                    <h5 className="title">Services</h5>
                    <ul>
                      <li>
                        <a href="service-details.html"><span>Manage IT Service</span></a>
                      </li>
                      <li>
                        <a href="service-details.html"><span>Cloud Computing</span></a>
                      </li>
                      <li>
                        <a href="service-details.html"><span>Cyber Security</span></a>
                      </li>
                      <li>
                        <a href="service-details.html"><span>Software Develop</span></a>
                      </li>
                      <li>
                        <a href="service-details.html"><span>Change Manage</span></a>
                      </li>
                      <li>
                        <a href="service-details.html"><span>IT Consulting</span></a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget widget-nav-menu">
                    <h5 className="title">Resourses</h5>
                    <ul>
                      <li>
                        <a href="contact.html"><span>Contact Us</span></a>
                      </li>
                      <li>
                        <a href="blog-details.html"><span>Privacy Policy</span></a>
                      </li>
                      <li>
                        <a href="about.html"><span>Recognitions</span></a>
                      </li>
                      <li>
                        <a href="service.html"><span>Careers</span> <span className="badge">New</span></a>
                      </li>
                      <li>
                        <a href="blog.html"><span>News</span></a>
                      </li>
                      <li>
                        <a href="project.html"><span>Feedback</span></a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget widget-contact">
                    <h5 className="title">Contact Info</h5>
                    <div className="footer-contact-info">
                      <div className="contact-item">
                        <span>993 Renner Burg, West Rond, MT 94251-030, USA.</span>
                      </div>
                      <div className="contact-item">
                        <a href="tel:10095447818">P: +1 (009) 544-7818</a>
                        <a href="mailto:support@tekmino.com">E: support@tekmino.com</a>
                      </div>
                      <div className="contact-item">
                        <span><i className="tji-clock"></i> Mon-Fri 09am-06pm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tj-copyright-area">
          <div className="copyright-wrap">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="copyright-content-area">
                    <div className="copyright-text">
                      <p><a href="https://themeforest.net/user/theme-junction/portfolio" target="_blank">Tekmino</a>
                        &copy; <span>2026</span>. All right reserved.</p>
                    </div>
                    <div className="copyright-menu">
                      <ul>
                        <li><a href="contact.html">Privacy & Policy</a></li>
                        <li><a href="contact.html">Terms & Condition</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*  end: Footer Section  */}
    </div>
  </div>

  {/*  JS here  */}
  <script src="assets/js/jquery.min.js"></script>
  <script src="assets/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/gsap.min.js"></script>
  <script src="assets/js/gsap-scroll-smoother.js"></script>
  <script src="assets/js/gsap-scroll-to-plugin.min.js"></script>
  <script src="assets/js/gsap-scroll-trigger.min.js"></script>
  <script src="assets/js/gsap-split-text.min.js"></script>
  <script src="assets/js/jquery.nice-select.min.js"></script>
  <script src="assets/js/swiper.min.js"></script>
  <script src="assets/js/waypoints.min.js"></script>
  <script src="assets/js/counterup.min.js"></script>
  <script src="assets/js/venobox.min.js"></script>
  <script src="assets/js/meanmenu.js"></script>
  <script src="assets/js/gsap-animation.js"></script>
  <script src="assets/js/validate.min.js"></script>
  <script src="assets/js/main.js"></script>

    </>
  );
}
