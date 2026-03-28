import React from 'react';

export default function Home() {
  return (
    <>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="" />

 {/* Site Title */}
  <title>Tekmino - Innovative IT Solution HTML Template</title>


  <link rel="shortcut icon" type="image/x-icon" href="/assets/images/fav.png" />

  {/* CSS here */}
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/tekmino-icon.css" />
  <link rel="stylesheet" href="assets/css/nice-select.css" />
  <link rel="stylesheet" href="assets/css/swiper.min.css" />
  <link rel="stylesheet" href="assets/css/venobox.min.css" />
  <link rel="stylesheet" href="assets/css/meanmenu.css" />
  <link rel="stylesheet" href="assets/css/main.css" />
</head>

<body>
  <div className="body-overlay"></div>

  {/* Preloader Start */}
  <div className="preloader is-loading">
    <div className="loading-container">
      <div className="loading"></div>
      <div id="loading-icon"><img src="/assets/images/logos/logo-icon.webp" alt="Loading" /></div>
    </div>
  </div>
  {/* Preloader end */}

  {/* back to top start */}
  <div className="back-to-top-wrapper">
    <button id="back_to_top" type="button" className="back-to-top-btn">
      <span className="back_to_top_icon"><i className="tji-arrow-up-4"></i></span>
      <span className="back_to_top_text">Scroll Top</span>
    </button>
  </div>
  {/* back to top end */}

  {/* start: Search Popup */}
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
            <div className="search_htmlForm">
              <htmlForm action="#">
                <div className="search_input">
                  <h4 className="title">Search Projects, Service or Blog.</h4>
                  <div className="search-box">
                    <input className="search-input-field" type="search" placeholder="Search here..." required="" />
                    <button type="submit">
                      <i className="tji-search"></i>
                    </button>
                  </div>
                </div>
              </htmlForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="search-popup-overlay"></div>
  {/* end: Search Popup */}

  {/* start: Offcanvas Menu */}
  <div className="tj-offcanvas-area d-none d-lg-block">
    <div className="hamburger_bg"></div>
    <div className="hamburger_wrapper">
      <div className="hamburger_inner">
        <div className="hamburger_top d-flex align-items-center justify-content-between">
          <div className="hamburger_logo">
            <a href="/index" className="mobile_logo">
              <img src="/assets/images/logos/primary-logo.webp" alt="Logo" />
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
            <htmlForm method="get" action="/index">
              <button type="submit"><i className="tji-search"></i></button>
              <input type="search" autocomplete="off" name="s" value="" placeholder="Search here..." />
            </htmlForm>
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
  {/* end: Offcanvas Menu */}

  {/* start: Hamburger Menu */}
  <div className="hamburger-area d-lg-none">
    <div className="hamburger_bg"></div>
    <div className="hamburger_wrapper">
      <div className="hamburger_inner">
        <div className="hamburger_top d-flex align-items-center justify-content-between">
          <div className="hamburger_logo">
            <a href="/index" className="mobile_logo">
              <img src="/assets/images/logos/primary-logo.webp" alt="Logo" />
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
  {/* end: Hamburger Menu */}

  {/* start: Header Area */}
  <header className="header-area header-1 header-absolute">
    <div className="header-top d-lg-block d-none">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="header-top-content">
              <p className="topbar-text"><i className="tji-spark"></i> Fast & Reliable IT Solution Services. <a
                  href="/contact">Join Now</a></p>
              <div className="header-info">
                <div className="info-item">
                  <span><i className="tji-clock"></i></span>
                  <span>9 am to 6 pm [mon-sat]</span>
                </div>
                <div className="info-item">
                  <span><i className="tji-gear"></i></span>
                  <a href="/contact">Support</a>
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
               site logo -->
              <div className="site_logo">
                <a className="logo" href="/index"><img src="/assets/images/logos/primary-logo.webp" alt="Logo" /></a>
              </div>

              {/* navigation */}
              <div className="menu-area d-none d-lg-inline-flex align-items-center">
                <nav id="mobile-menu" className="mainmenu">
                  <ul>
                    <li className="has-dropdown current-menu-ancestor">
                      <a href="/index">Home</a>
                      <ul className="sub-menu">
                        <li className="current-menu-item"><a href="/index">IT Solution</a></li>
                        <li><a href="/index-2">IT Consulting</a></li>
                        <li><a href="/index-3">Managed IT</a></li>
                        <li><a href="/index-4">Cloud Solutions</a></li>
                        <li><a href="/index-5">Cyber Security </a></li>
                        <li><a href="/index-6">Fintech</a></li>
                        <li><a href="/index-7">Software Company</a></li>
                        <li><a href="/index-8">Tech Startup</a></li>
                        <li><a href="/index-9">Ai technology</a></li>
                        <li><a href="/index-10">Hosting</a></li>
                        <li><a href="/index-rtl">RTL Demo</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="/about">Pages</a>
                      <ul className="sub-menu">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/service">Service</a></li>
                        <li><a href="/service-details">Service Details</a></li>
                        <li><a href="/team">Team</a></li>
                        <li><a href="/team-details">Team Details</a></li>
                        <li><a href="/faq">Faq</a></li>
                        <li><a href="/pricing">Pricing Page</a></li>
                        <li><a href="/error">Error 404</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="/project">Projects</a>
                      <ul className="sub-menu">
                        <li><a href="/project">Projects</a></li>
                        <li><a href="/project-details">Project Details</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="/shop">Shop</a>
                      <ul className="sub-menu">
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/shop-details">Shop Details</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/wishlist">Wishlist</a></li>
                        <li><a href="/checkout">Checkout</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/password-reset">Password</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="/blog">Blog</a>
                      <ul className="sub-menu">
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/blog-details">Blog Details</a></li>
                      </ul>
                    </li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </nav>
              </div>

              {/* header right info */}
              <div className="header-right-item d-none d-lg-inline-flex">
                <div className="header-search">
                  <button className="search">
                    <i className="tji-search"></i>
                  </button>
                </div>
                <div className="header-button d-xl-block d-none">
                  <a className="tj-primary-btn" href="/contact">
                    <span className="btn-text"><span>Get Started</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                  </a>
                </div>
                {/* menu bar */}
                <button className="menu_btn menu_offcanvas d-none d-lg-block">
                  <span className="cubes">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </button>
              </div>

              {/* menu bar */}
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
  {/* end: Header Area */}

  {/* start: Header Area */}
  <header className="header-area header-1 header-duplicate header-sticky">
    <div className="header-bottom">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="header-wrapper">
              {/* site logo */}
              <div className="site_logo">
                <a className="logo" href="/index"><img src="/assets/images/logos/primary-logo.webp" alt="Logo" /></a>
              </div>

              {/* navigation */}
              <div className="menu-area d-none d-lg-inline-flex align-items-center">
                <nav className="mainmenu">
                  <ul>
                    <li className="has-dropdown current-menu-ancestor">
                      <a href="/index">Home</a>
                      <ul className="sub-menu">
                        <li className="current-menu-item"><a href="/index">IT Solution</a></li>
                        <li><a href="/index-2">IT Consulting</a></li>
                        <li><a href="/index-3">Managed IT</a></li>
                        <li><a href="/index-4">Cloud Solutions</a></li>
                        <li><a href="/index-5">Cyber Security </a></li>
                        <li><a href="/index-6">Fintech</a></li>
                        <li><a href="/index-7">Software Company</a></li>
                        <li><a href="/index-8">Tech Startup</a></li>
                        <li><a href="/index-9">Ai technology</a></li>
                        <li><a href="/index-10">Hosting</a></li>
                        <li><a href="/index-rtl">RTL Demo</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="/about">Pages</a>
                      <ul className="sub-menu">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/service">Service</a></li>
                        <li><a href="/service-details">Service Details</a></li>
                        <li><a href="/team">Team</a></li>
                        <li><a href="/team-details">Team Details</a></li>
                        <li><a href="/faq">Faq</a></li>
                        <li><a href="/pricing">Pricing Page</a></li>
                        <li><a href="/error">Error 404</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="/project">Projects</a>
                      <ul className="sub-menu">
                        <li><a href="/project">Projects</a></li>
                        <li><a href="/project-details">Project Details</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="/shop">Shop</a>
                      <ul className="sub-menu">
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/shop-details">Shop Details</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/wishlist">Wishlist</a></li>
                        <li><a href="/checkout">Checkout</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/password">Password</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="/blog">Blog</a>
                      <ul className="sub-menu">
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/blog-details">Blog Details</a></li>
                      </ul>
                    </li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </nav>
              </div>

              {/* header right info */}
              <div className="header-right-item d-none d-lg-inline-flex">
                <div className="header-search">
                  <button className="search">
                    <i className="tji-search"></i>
                  </button>
                </div>
                <div className="header-button d-xl-block d-none">
                  <a className="tj-primary-btn" href="/contact">
                    <span className="btn-text"><span>Get Started</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                  </a>
                </div>
                {/* menu bar */}
                <button className="menu_btn menu_offcanvas d-none d-lg-block">
                  <span className="cubes">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </button>
              </div>

              {/* menu bar */}
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
  {/* end: Header Area */}

  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main id="primary" className="site-main">
        <div className="top-space-30"></div>
        {/* start: Banner Section */}
        <section className="tj-banner-section fix">
          <div className="hero-bg" data-bg-image="/assets/images/hero/hero-bg.webp"></div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-5 col-lg-6">
                <div className="banner-content">
                  <span className="sub-title tj-fade-anim" data-duration="0.5">[ TranshtmlForming Ideas ]</span>
                  <h1 className="banner-title tj-split-text-4">Innovative Tech Solutions htmlFor Business.</h1>
                  <div className="btn-area tj-fade-anim" data-delay=".6">
                    <a className="tj-primary-btn" href="/service">
                      <span className="btn-text"><span>Explore Services</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                    </a>
                    <a className="number" href="tel:18883338181"><i className="tji-phone-2"></i><span>+1 (888)
                        333-8181</span></a>
                  </div>
                  <div className="list-area tj-fade-anim" data-delay=".6" data-duration="1" data-direction="left">
                    <ul className="list-style-1">
                      <li>
                        <span><i className="tji-check"></i></span>Innovate Smarter
                      </li>
                      <li>
                        <span><i className="tji-check"></i></span>Technology Simplified
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-7 col-lg-6">
                <div className="banner-img-area">
                  <div className="banner-img tj-fade-anim" data-delay="0.3" data-direction="right">
                    <img src="/assets/images/hero/hero-img.webp" alt="Image" />
                  </div>
                  <div className="trusted tj-bounce tj-fade-anim" data-delay="1" data-direction="left">
                    <span className="icon"><i className="tji-shield"></i></span>
                    <span className="text">Trusted by 800+ Tech Giants.</span>
                  </div>
                  <div className="customers-box tj-fade-anim" data-delay="0.6" data-direction="right">
                    <div className="customers">
                      <ul>
                        <li><img src="/assets/images/testimonial/client-1.webp" alt="Image" /></li>
                        <li><img src="/assets/images/testimonial/client-2.webp" alt="Image" /></li>
                        <li><img src="/assets/images/testimonial/client-3.webp" alt="Image" /></li>
                        <li><img src="/assets/images/testimonial/client-4.webp" alt="Image" /></li>
                      </ul>
                    </div>
                    <div className="customers-bottom">
                      <div className="rating-area">
                        <div className="customers-number">4.9</div>
                        <div className="star-ratings">
                          <div className="fill-ratings" style={{ width: '90%' }}>
                            <span>★★★★★</span>
                          </div>
                          <div className="empty-ratings">
                            <span>★★★★★</span>
                          </div>
                        </div>
                      </div>
                      <h6 className="customers-text">Based on 600+ Google Reviews.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-scroll tj-fade-anim" data-delay="1.2" data-direction="top">
            <a href="#client" className="scroll-down">
              <span className="text">Scroll Down</span>
              <span className="icon"><i className="tji-arrow-down-2"></i></span>
            </a>
          </div>
        </section>
        {/* end: Banner Section */}

        {/* start: Client Section */}
        <section id="client" className="tj-client-section section-gap-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="client-content tj-fade-anim" data-delay="0.1">
                  <h5 className="sec-title">Join Over <span>1000+</span> Companies with Tekmino Here</h5>
                </div>
                <div className="swiper client-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-1.webp" alt="Image" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-2.webp" alt="Image" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-3.webp" alt="Image" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-4.webp" alt="Image" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-5.webp" alt="Image" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-6.webp" alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end: Client Section */}

        {/* start: Choose Section */}
        <section className="tj-choose-section fix section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading">
                  <span className="sub-title tj-fade-anim">[ Why Choose Us ]</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-1">Reliable IT Solution, htmlFor Best Results.</h2>
                    <div className="tj-fade-anim" data-delay="0.1">
                      <p className="desc">Our services are customized to meet your unique.</p>
                    </div>
                    <div className="tj-fade-anim" data-delay="0.3">
                      <a className="tj-primary-btn d-none d-lg-inline-flex" href="/about">
                        <span className="btn-text"><span>Learn More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-xl-3 col-md-6">
                <div className="choose-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="top">
                  <div className="choose-inner">
                    <div className="choose-icon">
                      <i className="tji-thumbs-up"></i>
                    </div>
                    <div className="choose-content">
                      <h4 className="title">Proven Track Record</h4>
                      <p className="desc">With a portfolio of successful projects and satisfied clients, we have a
                        reputation.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="choose-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="bottom">
                  <div className="choose-inner">
                    <div className="choose-icon">
                      <i className="tji-idea"></i>
                    </div>
                    <div className="choose-content">
                      <h4 className="title">Tailored Solutions</h4>
                      <p className="desc">Our services are customized to meet your unique business needs, ensuring solution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="choose-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="top">
                  <div className="choose-inner">
                    <div className="choose-icon">
                      <i className="tji-rocket"></i>
                    </div>
                    <div className="choose-content">
                      <h4 className="title">Future Technologies</h4>
                      <p className="desc">Stay ahead of the competition with AI, cloud computing, and automation solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="choose-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="bottom">
                  <div className="choose-inner">
                    <div className="choose-icon">
                      <i className="tji-hand-2"></i>
                    </div>
                    <div className="choose-content">
                      <h4 className="title">24/7 Support</h4>
                      <p className="desc">Stay ahead of the competition with AI, cloud computing, and automation solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-lg-none text-center mt-40">
              <a className="tj-primary-btn" href="/about">
                <span className="btn-text"><span>Learn More</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
              </a>
            </div>
          </div>
        </section>
        {/* end: Choose Section */}

        {/* start: About Section */}
        <section className="tj-about-section fix section-gap section-gap-x">
          <div className="bg-img" data-bg-image="/assets/images/bg/common-bg.webp"></div>
          <div className="container">
            <div className="row rg-30">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="about-left tj-fade-anim" data-delay=".1" data-direction="left">
                  <div className="about-img">
                    <img src="/assets/images/about/about-img-1.webp" alt="Image" />
                  </div>
                  <div className="about-left-bottom">
                    <div className="experience-area tj-fade-anim" data-delay=".2">
                      <span className="exp-badge">EXPERIENCE</span>
                      <div className="countup-item">
                        <div className="inline-content">
                          <span className="counter">20</span>
                          <span className="count-plus"><sup>+</sup></span>
                        </div>
                        <span className="count-text">Years of Excellence in IT Solutions Company.</span>
                      </div>
                    </div>
                    <div className="author-area tj-fade-anim" data-delay=".3">
                      <div className="author-info">
                        <div className="author-img">
                          <img src="/assets/images/testimonial/client-1.webp" alt="Image" />
                        </div>
                        <div className="author-text">
                          <h6 className="author-name">Burdee Nicolas</h6>
                          <span>Co. Founder</span>
                        </div>
                      </div>
                      <div className="signature">
                        <img src="/assets/images/about/signature.webp" alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <div className="about-content-area tj-fade-anim" data-delay=".1" data-direction="right">
                  <div className="sec-heading">
                    <span className="sub-title tj-fade-anim">[ About Tekmino ]</span>
                    <h2 className="sec-title tj-split-text-1">Delivering Solution That Drive Our Innovation & Fast Success.
                    </h2>
                  </div>
                  <p className="desc">
                    We are a team of passionate tech experts delivering innovative IT solutions tailored to help
                    businesses grow, adapt, and thrive in a digital. Stay ahead of the competition.
                  </p>
                  <div className="about-funfact">
                    <div className="countup-item">
                      <div className="inline-content">
                        <span className="counter">3</span>
                        <span className="count-plus">K<sup>+</sup></span>
                      </div>
                      <span className="count-text">Successful Projects.</span>
                    </div>
                    <div className="countup-item">
                      <div className="inline-content">
                        <span className="counter">98</span>
                        <span className="count-plus"><sup>+</sup></span>
                      </div>
                      <span className="count-text">IT Professionals.</span>
                    </div>
                  </div>
                  <a className="tj-primary-btn style-2 mt-25" href="/about">
                    <span className="btn-text"><span>Learn More</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                  </a>
                  <div className="circle-text-wrap award-circle" data-bg-image="/assets/images/about/award-circle-bg.webp">
                    <span className="circle-text" data-bg-image="/assets/images/about/award-circle-text.png"></span>
                    <span className="circle-icon"><span><i className="tji-award"></i></span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end: About Section */}

        {/* start: Service Section */}
        <div className="tj-service-section section-gap">
          <div className="container">
            <div className="row rg-30">
              <div className="col-lg-4 col-md-6">
                <div className="sec-heading mt-30 mb-0 tj-fade-anim" data-delay=".1" data-direction="bottom">
                  <span className="sub-title tj-fade-anim">[ Explore Services ]</span>
                  <h2 className="sec-title tj-split-text-1">Reliable IT Solution htmlFor a Smarter.</h2>
                  <a className="tj-primary-btn mt-20 d-md-inline-flex d-none" href="service.html">
                    <span className="btn-text"><span>Learn More</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item tj-fade-anim" data-delay="0.3" data-direction="bottom">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-computer"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><a href="service-details.html">Managed IT Services</a></h4>
                      <p className="desc">Comprehensive IT management, including monitoring, maintenance.</p>
                    </div>
                    <div className="service-list">
                      <ul className="list-style-2">
                        <li><i className="tji-check-2"></i>24/7 system monitoring</li>
                        <li><i className="tji-check-2"></i>IT support & troubleshooting</li>
                        <li><i className="tji-check-2"></i>Remote IT assistance</li>
                      </ul>
                    </div>
                  </div>
                  <span className="item-count">01.</span>
                  <div className="service-btn">
                    <a className="tj-text-btn" href="service-details.html">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>Learn More</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item tj-fade-anim" data-delay="0.5" data-direction="bottom">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-cloud"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><a href="service-details.html">Cloud Computing</a></h4>
                      <p className="desc">Scalable cloud-based services, including migration, storage, and security.</p>
                    </div>
                    <div className="service-list">
                      <ul className="list-style-2">
                        <li><i className="tji-check-2"></i>Scalable cloud storage</li>
                        <li><i className="tji-check-2"></i>SaaS, PaaS, and IaaS integration</li>
                        <li><i className="tji-check-2"></i>Hybrid & multi-cloud</li>
                      </ul>
                    </div>
                  </div>
                  <span className="item-count">02.</span>
                  <div className="service-btn">
                    <a className="tj-text-btn" href="service-details.html">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>Learn More</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item tj-fade-anim" data-delay="0.1" data-direction="bottom">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-cybersecurity"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><a href="service-details.html">Cybersecurity Solutions</a></h4>
                      <p className="desc">Advanced security measures, including firewall protection, threat detection.</p>
                    </div>
                    <div className="service-list">
                      <ul className="list-style-2">
                        <li><i className="tji-check-2"></i>Firewall & network security</li>
                        <li><i className="tji-check-2"></i>Threat detection & prevention</li>
                        <li><i className="tji-check-2"></i>Endpoint protection</li>
                      </ul>
                    </div>
                  </div>
                  <span className="item-count">03.</span>
                  <div className="service-btn">
                    <a className="tj-text-btn" href="service-details.html">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>Learn More</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item tj-fade-anim" data-delay="0.3" data-direction="bottom">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-consulting"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><a href="service-details.html">IT Consulting & Strategy</a></h4>
                      <p className="desc">Expert guidance to optimize IT infrastructure, streamline operations, and drive.
                      </p>
                    </div>
                    <div className="service-list">
                      <ul className="list-style-2">
                        <li><i className="tji-check-2"></i>TranshtmlFormation planning</li>
                        <li><i className="tji-check-2"></i>IT infrastructure optimization</li>
                        <li><i className="tji-check-2"></i>Risk assessment</li>
                      </ul>
                    </div>
                  </div>
                  <span className="item-count">04.</span>
                  <div className="service-btn">
                    <a className="tj-text-btn" href="service-details.html">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>Learn More</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item tj-fade-anim" data-delay="0.5" data-direction="bottom">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-network"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><a href="service-details.html">Network Infrastructure</a></h4>
                      <p className="desc">Expert guidance to optimize IT infrastructure, streamline operations, and drive.
                      </p>
                    </div>
                    <div className="service-list">
                      <ul className="list-style-2">
                        <li><i className="tji-check-2"></i>TranshtmlFormation planning</li>
                        <li><i className="tji-check-2"></i>IT infrastructure optimization</li>
                        <li><i className="tji-check-2"></i>Risk assessment</li>
                      </ul>
                    </div>
                  </div>
                  <span className="item-count">05.</span>
                  <div className="service-btn">
                    <a className="tj-text-btn" href="service-details.html">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>Learn More</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-md-none text-center mt-40">
              <a className="tj-primary-btn" href="service.html">
                <span className="btn-text"><span>Learn More</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
              </a>
            </div>
          </div>
        </div>
        {/* end: Service Section */}

        {/* start: Video Section */}
        <div className="tj-video-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="video-content-area">
                  <div className="video-bg img-parallax">
                    <img src="/assets/images/bg/video-bg.webp" alt="Image" />
                  </div>
                  <div className="video-wrap">
                    <div className="btn-hover-wrapper">
                      <div className="btn-hover-inner">
                        <a className="video-btn circle-ripple video-popup" data-autoplay="true" data-vbtype="video"
                          data-maxwidth="1200px"
                          href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados">
                          <span className="video-icon"><i className="tji-play"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/*end: Video Section */}

        {/* start: Testimonial Section */}
        <div className="tj-testimonial-section section-gap-x">
          <div className="marquee-area">
            <div className="scroll-slider">
              <div className="scroll-wrapper">
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>Clients Feedback</h3>
                </div>
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>Clients Feedback</h3>
                </div>
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>Clients Feedback</h3>
                </div>
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>Clients Feedback</h3>
                </div>
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>Clients Feedback</h3>
                </div>
              </div>
              <div className="scroll-wrapper">
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>Clients Feedback</h3>
                </div>
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>Clients Feedback</h3>
                </div>
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>Clients Feedback</h3>
                </div>
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>Clients Feedback</h3>
                </div>
                <div className="marquee-item">
                  <h3 className="marquee-text"><span>/</span>Clients Feedback</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-area gap-top">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="testimonial-wrapper tj-fade-anim">
                    <div className="swiper client-thumb thumb-slider">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide thumb-item">
                          <div className="thumb-img">
                            <img src="/assets/images/testimonial/client-1.webp" alt="Image" />
                          </div>
                          <div className="author-header">
                            <h4 className="title">Mevon Lane</h4>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="swiper-slide thumb-item">
                          <div className="thumb-img">
                            <img src="/assets/images/testimonial/client-2.webp" alt="Image" />
                          </div>
                          <div className="author-header">
                            <h4 className="title">Ralph Edwards</h4>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="swiper-slide thumb-item">
                          <div className="thumb-img">
                            <img src="/assets/images/testimonial/client-3.webp" alt="Image" />
                          </div>
                          <div className="author-header">
                            <h4 className="title">Guy Hawkins</h4>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-navigation d-none d-md-inline-flex">
                      <div className="slider-prev">
                        <span className="anim-icon">
                          <i className="tji-arrow-left-3"></i>
                          <i className="tji-arrow-left-3"></i>
                        </span>
                      </div>
                      <div className="slider-next">
                        <span className="anim-icon">
                          <i className="tji-arrow-right-3"></i>
                          <i className="tji-arrow-right-3"></i>
                        </span>
                      </div>
                    </div>
                    <div className="swiper testimonial-slider">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="testimonial-item">
                            <div className="rating-area">
                              <div className="star-ratings">
                                <div className="fill-ratings" style={{ width: '90%' }}>
                                  <span>★★★★★</span>
                                </div>
                                <div className="empty-ratings">
                                  <span>★★★★★</span>
                                </div>
                              </div>
                            </div>
                            <div className="desc">
                              <p>
                                Working with Tkmino has been a game-changer htmlFor our business. Their team's
                                professionalism, attention to detail, and innovative solutions have helped us streamline
                                operations and achieve our goals faster than we imagined. We truly feel like a valued
                                partner. The results we’ve seen after to be our compnay partnering.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="testimonial-item">
                            <div className="rating-area">
                              <div className="star-ratings">
                                <div className="fill-ratings" style={{ width: '90%' }}>
                                  <span>★★★★★</span>
                                </div>
                                <div className="empty-ratings">
                                  <span>★★★★★</span>
                                </div>
                              </div>
                            </div>
                            <div className="desc">
                              <p>
                                Working with Tkmino has been a game-changer htmlFor our business. Their team's
                                professionalism, attention to detail, and innovative solutions have helped us streamline
                                operations and achieve our goals faster than we imagined. We truly feel like a valued
                                partner. The results we’ve seen after to be our compnay partnering.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="testimonial-item">
                            <div className="rating-area">
                              <div className="star-ratings">
                                <div className="fill-ratings" style={{ width: '90%' }}>
                                  <span>★★★★★</span>
                                </div>
                                <div className="empty-ratings">
                                  <span>★★★★★</span>
                                </div>
                              </div>
                            </div>
                            <div className="desc">
                              <p>
                                Working with Tkmino has been a game-changer htmlFor our business. Their team's
                                professionalism, attention to detail, and innovative solutions have helped us streamline
                                operations and achieve our goals faster than we imagined. We truly feel like a valued
                                partner. The results we’ve seen after to be our compnay partnering.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-pagination-area"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end: Testimonial Section */}

        {/* start: Team Section */}
        <section className="tj-team-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading">
                  <span className="sub-title tj-fade-anim">[ Meet Our Team ]</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-1">Creative Minds Behind our Team</h2>
                    <div className="tj-fade-anim" data-delay="0.1">
                      <p className="desc">Our teams are customized to meet your unique ideas.</p>
                    </div>
                    <div className="tj-fade-anim" data-delay="0.3">
                      <a className="tj-primary-btn d-none d-lg-inline-flex" href="team.html">
                        <span className="btn-text"><span>More Member</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-lg-3 col-sm-6">
                <div className="team-item img-reveal-2">
                  <div className="team-img">
                    <img src="/assets/images/team/team-1.webp" alt="Image" />
                    <div className="social-links">
                      <span className="share-icon"><i className="tji-share"></i></span>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title"><a href="team-details.html">Eade Marren</a></h4>
                    <span className="designation">Chief Executive</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-item img-reveal-2">
                  <div className="team-img">
                    <img src="/assets/images/team/team-2.webp" alt="Image" />
                    <div className="social-links">
                      <span className="share-icon"><i className="tji-share"></i></span>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title"><a href="team-details.html">Savannah Ngueen</a></h4>
                    <span className="designation">Operations Head</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-item img-reveal-2">
                  <div className="team-img">
                    <img src="/assets/images/team/team-3.webp" alt="Image" />
                    <div className="social-links">
                      <span className="share-icon"><i className="tji-share"></i></span>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title"><a href="team-details.html">Cameron William</a></h4>
                    <span className="designation">Marketing Lead</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-item img-reveal-2">
                  <div className="team-img">
                    <img src="/assets/images/team/team-4.webp" alt="Image" />
                    <div className="social-links">
                      <span className="share-icon"><i className="tji-share"></i></span>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title"><a href="team-details.html">Olivia Fox</a></h4>
                    <span className="designation">Business Director</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-lg-none text-center mt-40">
              <a className="tj-primary-btn" href="team.html">
                <span className="btn-text"><span>More Member</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
              </a>
            </div>
          </div>
        </section>
       {/*end: Team Section */}

        {/* start: Technologies Section */}
        <div className="tj-technologies-section section-gap section-separator">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim">[ Our Technologies ]</span>
                  <h2 className="sec-title tj-split-text-1">EfhtmlFortless IT Integration htmlFor Business.</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="technologies-item-wrap">
                  <div className="scroll-slider">
                    <div className="scroll-wrapper">
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/gitlab.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Gitlab</h5>
                          <p className="desc">Support more Multiple repositories to one or more channels.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/ovhcloud.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">OVHcloud</h5>
                          <p className="desc">OVH legally OVH Groupe SAS, is a French cloud compute company.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/chatgpt.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">ChatGPT</h5>
                          <p className="desc">Offering assistance with answering frequently asked questions.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/notion.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Notion</h5>
                          <p className="desc">You can create rich-text document customizable htmlFormatting, images.</p>
                        </div>
                      </div>
                    </div>
                    <div className="scroll-wrapper">
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/gitlab.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Gitlab</h5>
                          <p className="desc">Support more Multiple repositories to one or more channels.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/ovhcloud.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">OVHcloud</h5>
                          <p className="desc">OVH legally OVH Groupe SAS, is a French cloud compute company.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/chatgpt.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">ChatGPT</h5>
                          <p className="desc">Offering assistance with answering frequently asked questions.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/notion.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Notion</h5>
                          <p className="desc">You can create rich-text document customizable htmlFormatting, images.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="scroll-slider" dir="rtl">
                    <div className="scroll-wrapper">
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/zoom.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Zoom</h5>
                          <p className="desc">htmlFor Video conferencing plathtmlForm used htmlFor virtual meeting.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/slack.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Slack</h5>
                          <p className="desc">Slack usesd channels to organize communication around topics.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/clickup.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Clickup</h5>
                          <p className="desc">ClickUp is a productivity plathtmlForm htmlFor our task management.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/dropbox.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Dropbox</h5>
                          <p className="desc">Dropbox provides cloud storage where users can securely store.</p>
                        </div>
                      </div>
                    </div>
                    <div className="scroll-wrapper">
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/zoom.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Zoom</h5>
                          <p className="desc">htmlFor Video conferencing plathtmlForm used htmlFor virtual meeting.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/slack.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Slack</h5>
                          <p className="desc">Slack usesd channels to organize communication around topics.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/clickup.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Clickup</h5>
                          <p className="desc">ClickUp is a productivity plathtmlForm htmlFor our task management.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="/assets/images/icons/dropbox.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Dropbox</h5>
                          <p className="desc">Dropbox provides cloud storage where users can securely store.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       {/* end: Technologies Section */}

        {/* start: Project Section */}
        <section className="tj-project-section section-gap section-gap-x fix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading">
                  <span className="sub-title tj-fade-anim">[ Recent Projects ]</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-1">Breaking Boundaries, Building Dreams.</h2>
                    <div className="tj-fade-anim" data-delay="0.1">
                      <p className="desc">Our projects are tailored to meet your unique business needs.</p>
                    </div>
                    <div className="slider-navigation d-none d-md-inline-flex tj-fade-anim" data-delay="0.3">
                      <div className="slider-prev">
                        <span className="anim-icon">
                          <i className="tji-arrow-left-3"></i>
                          <i className="tji-arrow-left-3"></i>
                        </span>
                      </div>
                      <div className="slider-next">
                        <span className="anim-icon">
                          <i className="tji-arrow-right-3"></i>
                          <i className="tji-arrow-right-3"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-12">
                <div className="project-wrapper tj-fade-anim" data-delay="0.2">
                  <div className="swiper project-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="project-item">
                          <div className="project-img img-reveal-2">
                            <img src="/assets/images/project/project-1.webp" alt="" />
                          </div>
                          <div className="project-content">
                            <div className="content-inner">
                              <span className="categories"><a href="project-details.html">Solution</a></span>
                              <h4 className="title"><a href="project-details.html">Business TranshtmlFormation</a></h4>
                            </div>
                            <a className="tj-icon-btn" href="project-details.html">
                              <i className="tji-arrow-right-3"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="project-item">
                          <div className="project-img img-reveal-2">
                            <img src="/assets/images/project/project-2.webp" alt="" />
                          </div>
                          <div className="project-content">
                            <div className="content-inner">
                              <span className="categories"><a href="project-details.html">Solution</a></span>
                              <h4 className="title"><a href="project-details.html">Cloud Migration Success</a></h4>
                            </div>
                            <a className="tj-icon-btn" href="project-details.html">
                              <i className="tji-arrow-right-3"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="project-item">
                          <div className="project-img img-reveal-2">
                            <img src="/assets/images/project/project-3.webp" alt="" />
                          </div>
                          <div className="project-content">
                            <div className="content-inner">
                              <span className="categories"><a href="project-details.html">Solution</a></span>
                              <h4 className="title"><a href="project-details.html">Digital Growth Strategy</a></h4>
                            </div>
                            <a className="tj-icon-btn" href="project-details.html">
                              <i className="tji-arrow-right-3"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="project-item">
                          <div className="project-img img-reveal-2">
                            <img src="/assets/images/project/project-4.webp" alt="" />
                          </div>
                          <div className="project-content">
                            <div className="content-inner">
                              <span className="categories"><a href="project-details.html">Solution</a></span>
                              <h4 className="title"><a href="project-details.html">Mobile App Development</a></h4>
                            </div>
                            <a className="tj-icon-btn" href="project-details.html">
                              <i className="tji-arrow-right-3"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination-area"></div>
                  </div>
                  <div className="d-md-none text-center mt-30">
                    <div className="slider-navigation d-inline-flex">
                      <div className="slider-prev">
                        <span className="anim-icon">
                          <i className="tji-arrow-left-3"></i>
                          <i className="tji-arrow-left-3"></i>
                        </span>
                      </div>
                      <div className="slider-next">
                        <span className="anim-icon">
                          <i className="tji-arrow-right-3"></i>
                          <i className="tji-arrow-right-3"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
     {/*end: Project Section */}

       {/* start: Working Process Section */}
        <section className="tj-working-process-section section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim">[ Our Working Process ]</span>
                  <h2 className="sec-title tj-split-text-1">TranshtmlForm Your Business in 3 Simple Steps.</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="process-area">
            <div className="process-border tj-fade-anim" data-delay="1" data-direction="left"></div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="process-wrap tj-slide-wrap">
                    <div className="process-item tj-slide-left">
                      <span className="process-step">01.</span>
                      <div className="process-content">
                        <h4 className="title">Deep Discovery & Planning</h4>
                        <p className="desc">Every great solution starts understanding. We take the time to learn about your
                          business, challenges, and goals.</p>
                      </div>
                    </div>
                    <div className="process-item tj-slide-left">
                      <span className="process-step">02.</span>
                      <div className="process-content">
                        <h4 className="title">Development & Implement</h4>
                        <p className="desc">Every great solution starts understanding. We take the time to learn about your
                          business, challenges, and goals.</p>
                      </div>
                    </div>
                    <div className="process-item tj-slide-left">
                      <span className="process-step">03.</span>
                      <div className="process-content">
                        <h4 className="title">Optimization & Support</h4>
                        <p className="desc">Every great solution starts understanding. We take the time to learn about your
                          business, challenges, and goals.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{/*
         end: Working Process Section -->

        <!-- start: Contact Section -->
        <section className="tj-contact-section fix section-gap section-gap-x">
          <div className="bg-img" data-bg-image="/assets/images/bg/common-bg-2.webp"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-5">
                <div className="contact-left">
                  <div className="sec-heading">
                    <span className="sub-title tj-fade-anim">[ Get In Touch ]</span>
                    <h2 className="sec-title tj-split-text-1">Have any Questions on Mind? Get in Touch htmlFor Market Experts.
                    </h2>
                    <div className="tj-fade-anim" data-delay="0.3">
                      <a className="tj-primary-btn mt-25 d-none d-lg-inline-flex" href="contact.html">
                        <span className="btn-text"><span>Contact Us Now</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </a>
                    </div>
                  </div>
                  <div className="contact-info tj-fade-anim" data-delay="0.3" data-direction="bottom">
                    <div className="contact-item">
                      <h6 className="title">Contact Info:</h6>
                      <a className="contact-link" href="tel:10095447818">+1 (009) 544-7818</a>
                      <a className="contact-link" href="mailto:support@tekmino.com">support@tekmino.com</a>
                    </div>
                    <div className="contact-item">
                      <h6 className="title">Find Us:</h6>
                      <span className="contact-link">Renner Burg, West Rond, MT 9421-030, USA.</span>
                    </div>
                    <div className="contact-item">
                      <h6 className="title">Opening Hour:</h6>
                      <span className="contact-link">Mon - Fri <span>(Open)</span></span>
                      <span className="contact-link">09:00am - 06.00pm</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="contact-htmlForm style-2 tj-fade-anim" data-delay="0.3" data-direction="right">
                  <h3 className="title">Drop Us a <span>Line.</span></h3>
                  <htmlForm id="contact-htmlForm-2">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="htmlForm-input">
                          <label className="cf-label">Full Name <span>*</span></label>
                          <input type="text" name="cfName2" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="htmlForm-input">
                          <label className="cf-label">Email Address <span>*</span></label>
                          <input type="email" name="cfEmail2" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="htmlForm-input">
                          <label className="cf-label">Phone number <span>*</span></label>
                          <input type="text" name="cfPhone2" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="htmlForm-input">
                          <label className="cf-label">Select Service <span>*</span></label>
                          <div className="tj-nice-select-box">
                            <div className="tj-select">
                              <select name="cfSubject2">
                                <option value="1">Managed IT Services</option>
                                <option value="2">Cloud Computing</option>
                                <option value="3">Cybersecurity Solutions</option>
                                <option value="4">IT Consulting & Strategy</option>
                                <option value="5">Software Development</option>
                                <option value="6">Network Infrastructure</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="htmlForm-input message-input">
                          <label className="cf-label">Type message</label>
                          <textarea name="cfMessage2" id="message"></textarea>
                        </div>
                      </div>
                      <div className="submit-btn">
                        <button className="tj-primary-btn" type="submit">
                          <span className="btn-text"><span>Send Message</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-3"></i></span>
                        </button>
                      </div>
                    </div>
                  </htmlForm>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- end: Contact Section -->

        <!-- start: Blog Section -->
        <section className="tj-blog-section section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim">[ Insights & Innovation ]</span>
                  <h2 className="sec-title tj-split-text-1">Explore Latest Insights, & Innovations.</h2>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-lg-4 col-md-6">
                <div className="blog-item tj-fade-anim" data-delay="0.1">
                  <div className="blog-thumb img-reveal-2">
                    <a href="blog-details.html"><img src="/assets/images/blog/blog-1.webp" alt="" /></a>
                    <div className="blog-date">
                      <span className="date">28</span>
                      <span className="month">Feb</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="categories"><a href="blog-details.html">Solutions</a></span>
                      <span>By <a href="blog-details.html">Ellinien Loma</a></span>
                    </div>
                    <h4 className="title"><a href="blog-details.html">How to Successfully Migrate Your Business to the
                        Cloud</a></h4>
                    <a className="tj-text-btn" href="blog-details.html">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>Read More</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-item tj-fade-anim" data-delay="0.2">
                  <div className="blog-thumb img-reveal-2">
                    <a href="blog-details.html"><img src="/assets/images/blog/blog-2.webp" alt="" /></a>
                    <div className="blog-date">
                      <span className="date">28</span>
                      <span className="month">Feb</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="categories"><a href="blog-details.html">Focus</a></span>
                      <span>By <a href="blog-details.html">Ellinien Loma</a></span>
                    </div>
                    <h4 className="title"><a href="blog-details.html">Building a Stronger WorkhtmlForce with IT Training</a>
                    </h4>
                    <a className="tj-text-btn" href="blog-details.html">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>Read More</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-item tj-fade-anim" data-delay="0.3">
                  <div className="blog-thumb img-reveal-2">
                    <a href="blog-details.html"><img src="/assets/images/blog/blog-3.webp" alt="" /></a>
                    <div className="blog-date">
                      <span className="date">28</span>
                      <span className="month">Feb</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="categories"><a href="blog-details.html">Software</a></span>
                      <span>By <a href="blog-details.html">Ellinien Loma</a></span>
                    </div>
                    <h4 className="title"><a href="blog-details.html">Optimizing Your IT Budget: Tips and Strategies</a>
                    </h4>
                    <a className="tj-text-btn" href="blog-details.html">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>Read More</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- end: Blog Section -->

        <!-- start: Cta Section -->
        <section className="tj-cta-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="cta-area tj-fade-anim">
                  <div className="cta-content">
                    <h2 className="title">Don’t Miss Out the Future!</h2>
                  </div>
                  <div className="cta-right">
                    <div className="subscribe-htmlForm cta-htmlForm">
                      <htmlForm action="#">
                        <input type="email" name="email" placeholder="Enter email here..." />
                        <button className="tj-primary-btn style-2" type="submit">
                          <span className="btn-text"><span>Subscribe Now</span></span>
                          <span className="btn-icon"><i className="tji-bell"></i></span>
                        </button>
                      </htmlForm>
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
        <!-- end: Cta Section -->
      </main>

      <!-- start: Footer Section -->
      <footer className="tj-footer-section footer-1 section-gap-x">
        <div className="bg-img" data-bg-image="/assets/images/footer/footer-bg.webp"></div>
        <div className="footer-main-area">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="footer_widget_wrapper">
                  <div className="footer-widget footer-col-1">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src="/assets/images/logos/primary-logo.webp" alt="Logo" />
                      </a>
                    </div>
                    <div className="footer-text">
                      <p>Every great solution start understand the time into learn about.</p>
                    </div>
                    <div className="download-buttons">
                      <a href="https://play.google.com/store/games"><img src="/assets/images/footer/google-play.webp"
                          alt="" /></a>
                      <a href="https://www.apple.com/app-store/"><img src="/assets/images/footer/app-store.webp"
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
                        <a href="/about"><span>Recognitions</span></a>
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
                      <p><a href="https://themehtmlForest.net/user/theme-junction/portfolio" target="_blank">Tekmino</a>
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
        {/* end: Footer Section */}
      </div>
    </div>
      </>
    );
  }
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
</body>

</html>