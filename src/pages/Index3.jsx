import React from 'react';

export default function Index3() {
  return (
    <>

        {/*  start: Hero Slider  */}
        <section className="tj-hero-slider-section fix">
          <div className="swiper swiper-container tj-hero-slider">
            <div className="slider_socials tj-fade-anim" data-delay="1" data-direction="left">
              <span className="label">Follow us:</span>
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
                <li>
                  <a href="https://www.linkedin.com/" target="_blank"><i className="tji-x-twitter"></i></a>
                </li>
              </ul>
            </div>
            <div className="swiper-wrapper">
              <div className="swiper-slide tj_slider_item">
                <div className="slider-bg" data-bg-image="./assets/images/slider/h3-slider-img-1.webp"></div>

                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="slier_content_wrapper">
                        <div className="slider_content">
                          <span className="sub-title">
                            <i className="tji-subtitle-2"></i>
                            Fast & Reliable IT Solution
                          </span>
                          <h1 className="title">Next IT Solution for Futures.</h1>
                          <div className="desc">Comprehensive IT support, monitoring & digital solution maintenance ensure
                            for more smooth.</div>
                          <a className="tj-primary-btn slider_btn" href="about.html">
                            <span className="btn-text"><span>Explore More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide tj_slider_item">
                <div className="slider-bg" data-bg-image="./assets/images/slider/h3-slider-img-2.webp"></div>

                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="slier_content_wrapper">
                        <div className="slider_content">
                          <span className="sub-title">
                            <i className="tji-subtitle-2"></i>
                            Fast & Reliable IT Solution
                          </span>
                          <h1 className="title">Tech Solutions for Business.</h1>
                          <div className="desc">Comprehensive IT support, monitoring & digital solution maintenance ensure
                            for more smooth.</div>
                          <a className="tj-primary-btn slider_btn" href="about.html">
                            <span className="btn-text"><span>Explore More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide tj_slider_item">
                <div className="slider-bg" data-bg-image="./assets/images/slider/h3-slider-img-3.webp"></div>

                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="slier_content_wrapper">
                        <div className="slider_content">
                          <span className="sub-title">
                            <i className="tji-subtitle-2"></i>
                            Fast & Reliable IT Solution
                          </span>
                          <h1 className="title">Transforming Ideas Into Real.</h1>
                          <div className="desc">Comprehensive IT support, monitoring & digital solution maintenance ensure
                            for more smooth.</div>
                          <a className="tj-primary-btn slider_btn" href="about.html">
                            <span className="btn-text"><span>Explore More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  slider navigation  */}
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="slider_navigation tj-fade-anim" data-delay="1.2">
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
        </section>

        <section className="tj-features-section">
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-end">
                <div className="tj_features_wrap">
                  <div className="feature_item">
                    <div className="feature_icon">
                      <i className="tji-thumbs-up"></i>
                    </div>
                    <div className="feature_content">
                      <h4 className="title">Proven Record</h4>
                      <div className="desc">With a portfolio of successful projects and satisfied.</div>
                    </div>
                  </div>
                  <div className="feature_item">
                    <div className="feature_icon">
                      <i className="tji-idea"></i>
                    </div>
                    <div className="feature_content">
                      <h4 className="title">Tailored Solutions</h4>
                      <div className="desc">Our services are customized to meet your business.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Hero Slider  */}

        {/*  start: Client Section  */}
        <section id="client" className="tj-client-section section-gap-top overflow-hidden">
          <div className="container-fluid gx-0">
            <div className="row">
              <div className="col-12">
                <div className="client-content tj-fade-anim" data-delay="0.1">
                  <h5 className="sec-title">Join Over <span>1000+</span> Companies with Tekmino Here</h5>
                </div>
                <div className="swiper client-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="assets/images/brands/brand-1.webp" alt="Image" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="assets/images/brands/brand-2.webp" alt="Image" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="assets/images/brands/brand-3.webp" alt="Image" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="assets/images/brands/brand-4.webp" alt="Image" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="assets/images/brands/brand-5.webp" alt="Image" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="assets/images/brands/brand-6.webp" alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Client Section  */}

        {/*  start: About Section  */}
        <section className="h3-about-section section-gap">
          <div className="container">
            <div className="row rg-30">
              <div className="col-lg-6">
                <div className="sec-heading style-3">
                  <span className="sub-title tj-fade-anim" data-delay="0.2" data-duration="0.5"><i
                      className="tji-subtitle-2"></i>About Our Company</span>
                  <h2 className="sec-title tj-split-text-3">Providing Tailored IT Solution Ensuring Seamless Business
                    Growth, Success.</h2>
                </div>
                <div className="h3_about_img img-reveal-2">
                  <img src="./assets/images/about/h3-about-img.jpg" alt="" />

                  <div className="about_reviews">
                    <div className="bg"></div>
                    <ul>
                      <li>
                        <img src="assets/images/testimonial/client-1.webp" alt="Image" />
                      </li>
                      <li>
                        <img src="assets/images/testimonial/client-2.webp" alt="Image" />
                      </li>
                      <li>
                        <img src="assets/images/testimonial/client-3.webp" alt="Image" />
                      </li>
                      <li>
                        <span><i className="tji-plus"></i></span>
                      </li>
                    </ul>

                    <span className="text">More 800+ Clients Global Reviews IT Solution.</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about_right_content">
                  <div className="content_right_inner">
                    <div className="desc tj-fade-anim" data-delay="0.1">
                      We are dedicated to transforming businesses into through innovative and future-ready IT solutions.
                      With a passion for technology and a commitment to excellence, empower are
                      organizations. From cloud computing to AI-driven solutions. Cloud computing is categorized in
                      different models, including Infrastructure.
                    </div>

                    <div className="list_button tj-fade-anim" data-delay="0.1">
                      <ul className="tj_list">
                        <li><i className="tji-check-4"></i>Tailored IT Solutions.</li>
                        <li><i className="tji-check-4"></i>Future-Ready Infrastructure.</li>
                        <li><i className="tji-check-4"></i>Industry Expertise.</li>
                      </ul>

                      <div className="circle-text-wrap about-btn tj-fade-anim" data-delay="0.2">
                        <span className="circle-text" data-bg-image="assets/images/about/about-circle-text.png"></span>
                        <a href="about.html" className="circle-icon"><i className="tji-arrow-right-2"></i></a>
                      </div>
                    </div>
                  </div>

                  <div className="row rg-30">
                    <div className="col-sm-6">
                      <div className="h3_countup tj-fade-anim" data-delay="0.2">
                        <div className="inline-content">
                          <span className="counter">10</span>
                          <span className="count-plus">m</span>
                        </div>
                        <h4 className="title">Users</h4>
                        <span className="desc">Transforming Ideas into Digital Excellence Transforming.</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="h3_countup tj-fade-anim" data-delay="0.4">
                        <div className="inline-content">
                          <span className="prefix">0</span>
                          <span className="counter">3</span>
                          <span className="count-plus">x</span>
                        </div>
                        <h4 className="title">Faster</h4>
                        <span className="desc">Transforming Ideas into Digital Excellence Transforming.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: About Section  */}

        {/*  start: Working Process Section  */}
        <section className="h3-working-process-section section-gap-x">
          <div className="h3-working-process-section-wrap section-gap fix">
            <div className="bg-img" data-bg-image="./assets/images/bg/common-bg.webp"></div>

            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="sec-heading style-3 sec-heading-centered">
                    <span className="sub-title tj-fade-anim" data-delay="0.2" data-duration="0.5"><i
                        className="tji-subtitle-2"></i>How we Work</span>
                    <h2 className="sec-title tj-split-text-3">Transform Your Business in 3 Simple Steps.</h2>
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
                      <div className="process-item style-2 tj-slide-left">
                        <span className="process-step">01</span>
                        <div className="process-content">
                          <h4 className="title">Deep Discovery & Planning.</h4>
                          <p className="desc">Every great solution starts with understanding. We take the time to learn
                            about your business, challenges, and goals.</p>
                        </div>
                      </div>
                      <div className="process-item style-2 tj-slide-left">
                        <span className="process-step">02</span>
                        <div className="process-content">
                          <h4 className="title">Development & Implement.</h4>
                          <p className="desc">Every great solution starts with understanding. We take the time to learn
                            about your business, challenges, and goals.</p>
                        </div>
                      </div>
                      <div className="process-item style-2 tj-slide-left">
                        <span className="process-step">03</span>
                        <div className="process-content">
                          <h4 className="title">Optimization & Support.</h4>
                          <p className="desc">Every great solution starts with understanding. We take the time to learn
                            about your business, challenges, and goals.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Working Process Section  */}

        {/*  start: Services Section  */}
        <section className="h3-service-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="sec-heading style-3">
                  <span className="sub-title tj-fade-anim" data-delay="0.2" data-duration="0.5">
                    <i className="tji-subtitle-2"></i>
                    Explore Services
                  </span>

                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-3">Reliable IT Solution for Better & Smarter.</h2>
                    <div className="tj-fade-anim d-none d-md-inline-flex" data-delay="0.5">
                      <a className="tj-primary-btn" href="servics.html">
                        <span className="btn-text"><span>Explore More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="services_wrap tj-fade-anim" data-delay="0.75">
                  <div className="services_tabs" role="tablist">
                    <button className="service_tab_item active" data-bs-toggle="tab" data-bs-target="#serviceTab-1"
                      type="button" role="tab" aria-selected="true">
                      <span className="button_inner">
                        <span>01</span>
                        Managed IT Services
                      </span>
                    </button>
                    <button className="service_tab_item" data-bs-toggle="tab" data-bs-target="#serviceTab-2" type="button"
                      role="tab" aria-selected="false">
                      <span className="button_inner">
                        <span>02</span>
                        Cloud Computing
                      </span>
                    </button>
                    <button className="service_tab_item" data-bs-toggle="tab" data-bs-target="#serviceTab-3" type="button"
                      role="tab" aria-selected="false">
                      <span className="button_inner">
                        <span>03</span>
                        Software Development
                      </span>
                    </button>
                    <button className="service_tab_item" data-bs-toggle="tab" data-bs-target="#serviceTab-4" type="button"
                      role="tab" aria-selected="false">
                      <span className="button_inner">
                        <span>04</span>
                        Network Infrastructure
                      </span>
                    </button>
                    <button className="service_tab_item" data-bs-toggle="tab" data-bs-target="#serviceTab-5" type="button"
                      role="tab" aria-selected="false">
                      <span className="button_inner">
                        <span>05</span>
                        Data Backup
                      </span>
                    </button>

                    <div className="active-bg"></div>
                  </div>

                  <div className="tab-content services_content_wrap">
                    <div className="tab-pane fade show active" id="serviceTab-1" role="tabpanel">
                      <div className="service_content_wrap">
                        <div className="service_content">
                          <span className="service_icon"><i className="tji-computer"></i></span>
                          <h3 className="service_title">
                            <a href="service-details.html"> Comprehensive Managed IT Services for Business Efficiency
                            </a>
                          </h3>
                          <div className="service_excerpt">Managed IT Services provide businesses with proactive technology
                            support, ensuring seamless.</div>
                          <a className="tj-text-btn style-3 service_btn" href="service-details.html">
                            <span className="btn-text"><span>Learn More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                          </a>
                        </div>
                        <div className="service_image img-reveal-2">
                          <img src="./assets/images/services/h3-service-img-2.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="serviceTab-2" role="tabpanel">
                      <div className="service_content_wrap">
                        <div className="service_content">
                          <span className="service_icon"><i className="tji-cloud"></i></span>
                          <h3 className="service_title">
                            <a href="service-details.html"> Comprehensive Managed IT Services for Business Efficiency
                            </a>
                          </h3>
                          <div className="service_excerpt">Managed IT Services provide businesses with proactive technology
                            support, ensuring seamless.</div>
                          <a className="tj-text-btn style-3 service_btn" href="service-details.html">
                            <span className="btn-text"><span>Learn More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                          </a>
                        </div>
                        <div className="service_image">
                          <img src="./assets/images/services/h3-service-img-3.webp" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="serviceTab-3" role="tabpanel">
                      <div className="service_content_wrap">
                        <div className="service_content">
                          <span className="service_icon"><i className="tji-development"></i></span>
                          <h3 className="service_title">
                            <a href="service-details.html"> Comprehensive Managed IT Services for Business Efficiency
                            </a>
                          </h3>
                          <div className="service_excerpt">Managed IT Services provide businesses with proactive technology
                            support, ensuring seamless.</div>
                          <a className="tj-text-btn style-3 service_btn" href="service-details.html">
                            <span className="btn-text"><span>Learn More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                          </a>
                        </div>
                        <div className="service_image">
                          <img src="./assets/images/services/h3-service-img-4.webp" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="serviceTab-4" role="tabpanel">
                      <div className="service_content_wrap">
                        <div className="service_content">
                          <span className="service_icon"><i className="tji-network"></i></span>
                          <h3 className="service_title">
                            <a href="service-details.html"> Comprehensive Managed IT Services for Business Efficiency
                            </a>
                          </h3>
                          <div className="service_excerpt">Managed IT Services provide businesses with proactive technology
                            support, ensuring seamless.</div>
                          <a className="tj-text-btn style-3 service_btn" href="service-details.html">
                            <span className="btn-text"><span>Learn More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                          </a>
                        </div>
                        <div className="service_image">
                          <img src="./assets/images/services/h3-service-img-5.webp" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="serviceTab-5" role="tabpanel">
                      <div className="service_content_wrap">
                        <div className="service_content">
                          <span className="service_icon"><i className="tji-computer"></i></span>
                          <h3 className="service_title">
                            <a href="service-details.html"> Comprehensive Managed IT Services for Business Efficiency
                            </a>
                          </h3>
                          <div className="service_excerpt">Managed IT Services provide businesses with proactive technology
                            support, ensuring seamless.</div>
                          <a className="tj-text-btn style-3 service_btn" href="service-details.html">
                            <span className="btn-text"><span>Learn More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                          </a>
                        </div>
                        <div className="service_image">
                          <img src="./assets/images/services/h3-service-img-6.webp" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-md-none mt-40">
              <div className="col">
                <div className="explore_more_btn text-center">
                  <a className="tj-primary-btn" href="services.html">
                    <span className="btn-text"><span>Explore More</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Services Section  */}

        {/*  start: Marquee Section  */}
        <section className="h3-marquee-section overflow-hidden">
          <div className="container-fluid gx-0">
            <div className="row">
              <div className="col">
                <div className="h3_marquee_wrap">
                  <div className="scroll-slider">
                    <div className="scroll-wrapper">
                      <div className="marquee-item-2">
                        <span className="marquee-icon">
                          <i className="tji-marquee-2"></i>
                        </span>
                        <h3 className="marquee-text">IT Solution</h3>
                      </div>

                      <div className="marquee-item-2">
                        <span className="marquee-icon">
                          <i className="tji-marquee-2"></i>
                        </span>
                        <h3 className="marquee-text">Business</h3>
                      </div>

                      <div className="marquee-item-2">
                        <span className="marquee-icon">
                          <i className="tji-marquee-2"></i>
                        </span>
                        <h3 className="marquee-text">Modern</h3>
                      </div>

                      <div className="marquee-item-2">
                        <span className="marquee-icon">
                          <i className="tji-marquee-2"></i>
                        </span>
                        <h3 className="marquee-text">IT Solution</h3>
                      </div>

                      <div className="marquee-item-2">
                        <span className="marquee-icon">
                          <i className="tji-marquee-2"></i>
                        </span>
                        <h3 className="marquee-text">Business</h3>
                      </div>

                      <div className="marquee-item-2">
                        <span className="marquee-icon">
                          <i className="tji-marquee-2"></i>
                        </span>
                        <h3 className="marquee-text">Modern</h3>
                      </div>
                    </div>
                    <div className="scroll-wrapper">
                      <div className="marquee-item-2">
                        <span className="marquee-icon">
                          <i className="tji-marquee-2"></i>
                        </span>
                        <h3 className="marquee-text">IT Solution</h3>
                      </div>

                      <div className="marquee-item-2">
                        <span className="marquee-icon">
                          <i className="tji-marquee-2"></i>
                        </span>
                        <h3 className="marquee-text">Business</h3>
                      </div>

                      <div className="marquee-item-2">
                        <span className="marquee-icon">
                          <i className="tji-marquee-2"></i>
                        </span>
                        <h3 className="marquee-text">Modern</h3>
                      </div>

                      <div className="marquee-item-2">
                        <span className="marquee-icon">
                          <i className="tji-marquee-2"></i>
                        </span>
                        <h3 className="marquee-text">IT Solution</h3>
                      </div>

                      <div className="marquee-item-2">
                        <span className="marquee-icon">
                          <i className="tji-marquee-2"></i>
                        </span>
                        <h3 className="marquee-text">Business</h3>
                      </div>

                      <div className="marquee-item-2">
                        <span className="marquee-icon">
                          <i className="tji-marquee-2"></i>
                        </span>
                        <h3 className="marquee-text">Modern</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Marquee Section  */}

        {/*  start: Pricing Section  */}
        <section className="tj-pricing-section section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="sec-heading style-3 sec-heading-centered">
                  <span className="sub-title tj-fade-anim" data-delay="0.2" data-duration="0.5"><i
                      className="tji-subtitle-2"></i>Best Pricing</span>
                  <h2 className="sec-title tj-split-text-3">Pricing Plans to Find the Right IT Support.</h2>

                  <div className="price_switcher tj-fade-anim" data-delay="0.5">
                    <p>Monthly</p>
                    <label className="toggle_switcher">
                      <input className="toggle-checkbox" type="checkbox" />
                      <span className="toggle-switch"></span>
                    </label>
                    <p>Yearly <span>(Save 15%)</span></p>
                  </div>
                </div>

                <div className="pricing_items_wrap tj-slide-wrap">
                  <div className="pricing_item tj-slide-right">
                    <div className="pricing_header">
                      <h4 className="package_name">Basic Plan</h4>
                      <div className="package_desc">Essential Electrical Services</div>
                      <div className="package_price">
                        <span className="currency">$</span>
                        <span className="price" data-year-price="199" data-month-price="99">99</span>
                        <span className="period" data-year-period="/per year" data-month-period="/per month">/per
                          month</span>
                      </div>
                    </div>

                    <a className="tj-primary-btn pricing_btn" href="contact.html">
                      <span className="btn-text"><span>Chose Package <i className="tji-arrow-right-4"></i></span></span>
                    </a>

                    <ul className="pricing_features">
                      <li>
                        <i className="tji-check-3"></i>
                        Essential IT Support
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Cloud Storage (50 GB)
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Monthly System Check
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Basic Security Updates
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Software Patches and Fixes
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        1 Scheduled Maintenance
                      </li>
                    </ul>
                  </div>

                  <div className="pricing_item recommend tj-slide-right">
                    <div className="pricing_header">
                      <h4 className="package_name">Standard Plan</h4>
                      <div className="package_desc">Complete Electrical Solutions</div>
                      <div className="package_price">
                        <span className="currency">$</span>
                        <span className="price" data-year-price="499" data-month-price="249">249</span>
                        <span className="period" data-year-period="/per year" data-month-period="/per month">/per
                          month</span>
                      </div>
                    </div>

                    <a className="tj-primary-btn pricing_btn" href="contact.html">
                      <span className="btn-text"><span>Chose Package <i className="tji-arrow-right-4"></i></span></span>
                    </a>

                    <ul className="pricing_features">
                      <li>
                        <i className="tji-check-3"></i>
                        Advanced IT Management
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Cloud Storage (200 GB)
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Custom Software Solutions
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Threat Detection Services
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Data Backup and Recovery
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Monthly IT Consultation
                      </li>
                    </ul>
                  </div>

                  <div className="pricing_item tj-slide-right">
                    <div className="pricing_header">
                      <h4 className="package_name">Premium Plan</h4>
                      <div className="package_desc">Advanced Electrical Services</div>
                      <div className="package_price">
                        <span className="currency">$</span>
                        <span className="price" data-year-price="899" data-month-price="499">499</span>
                        <span className="period" data-year-period="/per year" data-month-period="/per month">/per
                          month</span>
                      </div>
                    </div>

                    <a className="tj-primary-btn pricing_btn" href="contact.html">
                      <span className="btn-text"><span>Chose Package <i className="tji-arrow-right-4"></i></span></span>
                    </a>

                    <ul className="pricing_features">
                      <li>
                        <i className="tji-check-3"></i>
                        Comprehensive IT Solutions
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Unlimited Cloud Storage
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Priority 1-Hour Support
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Cybersecurity Protection
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        Dedicated Account Manager
                      </li>
                      <li>
                        <i className="tji-check-3"></i>
                        24/7 Emergency Service
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Pricing Section  */}

        {/*  start: Services Section  */}
        <section className="h3-service-section section-gap-x">
          <div className="h3-service-section-wrap section-gap">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="sec-heading style-3">
                    <span className="sub-title tj-fade-anim" data-delay="0.2" data-duration="0.5">
                      <i className="tji-subtitle-2"></i>
                      Explore Services
                    </span>

                    <div className="sec-heading-inner">
                      <h2 className="sec-title tj-split-text-3">Discover How Empower for Businesses.</h2>
                      <div className="tj-fade-anim d-none d-md-inline-flex" data-delay=".3">
                        <a className="tj-primary-btn" href="servics.html">
                          <span className="btn-text"><span>Explore More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="h3_services_wrap">
                    <div className="service_list_item is-active tj-fade-anim" data-delay=".2">
                      <div className="item_count"><span>01</span></div>
                      <div className="item_content">
                        <div className="content_inner">
                          <h3 className="title">
                            <a href="service-details.html">Cloud Migration System</a>
                          </h3>
                          <div className="desc">
                            Many businesses struggle with outdated on-premise systems that limit scalability and
                            flexibility. Our cloud migration service ensures a seamless transition to cloud
                            platforms.
                          </div>
                        </div>
                        <a className="tj-icon-btn" href="service-details.html">
                          <i className="tji-arrow-long-right"></i>
                        </a>
                      </div>
                      <div className="service_reveal_img" data-bg-image="./assets/images/project/project-1.webp"></div>
                    </div>
                    <div className="service_list_item is-active tj-fade-anim" data-delay=".2">
                      <div className="item_count"><span>02</span></div>
                      <div className="item_content">
                        <div className="content_inner">
                          <h3 className="title">
                            <a href="service-details.html">Mobile App Development</a>
                          </h3>
                          <div className="desc">
                            A strong mobile presence is crucial for business growth in today’s digital age. We design
                            and develop custom mobile applications for iOS and Android, tailored to
                            specific.
                          </div>
                        </div>
                        <a className="tj-icon-btn" href="service-details.html">
                          <i className="tji-arrow-long-right"></i>
                        </a>
                      </div>
                      <div className="service_reveal_img" data-bg-image="./assets/images/project/project-2.webp"></div>
                    </div>
                    <div className="service_list_item is-active tj-fade-anim" data-delay=".2">
                      <div className="item_count"><span>03</span></div>
                      <div className="item_content">
                        <div className="content_inner">
                          <h3 className="title">
                            <a href="service-details.html">ERP Implementation</a>
                          </h3>
                          <div className="desc">
                            Managing different business functions separately inefficiencies and data silos. Our ERP
                            implementation service integrates finance, HR, supply chain, and customer
                            management.
                          </div>
                        </div>
                        <a className="tj-icon-btn" href="service-details.html">
                          <i className="tji-arrow-long-right"></i>
                        </a>
                      </div>
                      <div className="service_reveal_img" data-bg-image="./assets/images/project/project-3.webp"></div>
                    </div>
                    <div className="service_list_item is-active tj-fade-anim" data-delay=".2">
                      <div className="item_count"><span>04</span></div>
                      <div className="item_content">
                        <div className="content_inner">
                          <h3 className="title">
                            <a href="service-details.html">Data Analytics Dashboard</a>
                          </h3>
                          <div className="desc">
                            Businesses generate vast amounts of data, but without proper insights, it remains untapped
                            potential. Our data analytics dashboard centralizes visualizes key business.
                          </div>
                        </div>
                        <a className="tj-icon-btn" href="service-details.html">
                          <i className="tji-arrow-long-right"></i>
                        </a>
                      </div>
                      <div className="service_reveal_img" data-bg-image="./assets/images/project/project-4.webp"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-md-none mt-40">
                <div className="col">
                  <div className="explore_more_btn text-center">
                    <a className="tj-primary-btn" href="services.html">
                      <span className="btn-text"><span>Explore More</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Services Section  */}

        {/*  start: Testimonial Section  */}
        <section className="tj-testimonial-section-3 section-gap overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="sec-heading style-3 sec-heading-centered">
                  <span className="sub-title tj-fade-anim" data-delay="0.2" data-duration="0.5"><i
                      className="tji-subtitle-2"></i>Success Stories</span>
                  <h2 className="sec-title tj-split-text-3">Building Success with Client Feedback.</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid gx-0">
            <div className="row">
              <div className="col">
                <div className="h3_testimonial_slider swiper swiper-container tj-fade-anim" data-delay=".3">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial_item_2">
                        <div className="testimonial_thumb">
                          <img src="./assets/images/testimonial/h3-testimonial-1.webp" alt="" />

                          <a className="video_btn video-popup" data-autoplay="true" data-vbtype="video"
                            data-maxwidth="1200px" href="https://www.youtube.com/watch?v=MLpWrANjFbI">
                            <i className="tji-play"></i>
                          </a>
                        </div>
                        <div className="testimonial_content">
                          <div className="star-ratings">
                            <div className="fill-ratings" style={{"width":"90%"}}>
                              <span>★★★★★</span>
                            </div>
                            <div className="empty-ratings">
                              <span>★★★★★</span>
                            </div>
                          </div>

                          <div className="desc">
                            <p>
                              Nexor truly exceeded our expectations. From the initial consultation to the final
                              implementation, their team provided excellent service and unwavering support. Their
                              ability to integrate advanced IT solutions into our operations has streamlined our
                              processes.
                            </p>
                          </div>

                          <div className="author_info">
                            <h4 className="name">Mevon Lane</h4>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial_item_2">
                        <div className="testimonial_thumb">
                          <img src="./assets/images/testimonial/h3-testimonial-2.webp" alt="" />

                          <a className="video_btn video-popup" data-autoplay="true" data-vbtype="video"
                            data-maxwidth="1200px" href="https://www.youtube.com/watch?v=MLpWrANjFbI">
                            <i className="tji-play"></i>
                          </a>
                        </div>
                        <div className="testimonial_content">
                          <div className="star-ratings">
                            <div className="fill-ratings" style={{"width":"90%"}}>
                              <span>★★★★★</span>
                            </div>
                            <div className="empty-ratings">
                              <span>★★★★★</span>
                            </div>
                          </div>

                          <div className="desc">
                            <p>
                              Partnering with Nexor has been an absolute game-changer for our company. Their team
                              delivered a tailored IT solution that met our unique business needs, and their
                              approach to problem-solving has saved us time and money. With Nexor’s cutting-edge
                              technology.
                            </p>
                          </div>

                          <div className="author_info">
                            <h4 className="name">Mevon Lane</h4>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial_item_2">
                        <div className="testimonial_thumb">
                          <img src="./assets/images/testimonial/h3-testimonial-3.webp" alt="" />

                          <a className="video_btn video-popup" data-autoplay="true" data-vbtype="video"
                            data-maxwidth="1200px" href="https://www.youtube.com/watch?v=MLpWrANjFbI">
                            <i className="tji-play"></i>
                          </a>
                        </div>
                        <div className="testimonial_content">
                          <div className="star-ratings">
                            <div className="fill-ratings" style={{"width":"90%"}}>
                              <span>★★★★★</span>
                            </div>
                            <div className="empty-ratings">
                              <span>★★★★★</span>
                            </div>
                          </div>

                          <div className="desc">
                            <p>
                              When we approached Nexor for help with our technology integration, we were looking for a
                              partner who could not only provide expertise but also deliver tangible results.
                              They did exactly that. Nexor helped us streamline our operations with innovative cloud
                              solutions.
                            </p>
                          </div>

                          <div className="author_info">
                            <h4 className="name">Mevon Lane</h4>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-pagination-area"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Testimonial Section  */}

        {/*  start: Integration Section  */}
        <section className="tj-integration-section section-gap-x">
          <div className="integration-section-wrap">
            <div className="bg-img" data-bg-image="./assets/images/bg/common-bg-2.webp"></div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div
                    className="sec-heading style-3 d-flex flex-wrap align-items-end justify-content-start justify-content-md-between gap-4 mb-0">
                    <div className="sec_heading_wrap d-flex flex-column align-items-start">
                      <span className="sub-title tj-fade-anim" data-delay="0.2" data-duration="0.5">
                        <i className="tji-subtitle-2"></i>
                        Our Technologies
                      </span>
                      <h2 className="sec-title tj-split-text-3">Effortless IT Integration for Solutions.</h2>
                    </div>

                    <div className="sec_content_wrap tj-fade-anim" data-delay=".2">
                      <div className="desc">Comprehensive IT for management, including monitoring, maintenance & support to
                        keep your business running smooth.</div>
                      <a className="tj-text-btn" href="blog-details.html">
                        <span className="btn-inner">
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="throwable_wrapper" data-tj-throwable-scene="true">
                    <div className="throwable_items_wrap">
                      <p data-tj-throwable-el>
                        <span className="integration_item">
                          <img src="./assets/images/integration/gitlab.png" alt="" />
                        </span>
                      </p>
                      <p data-tj-throwable-el>
                        <span className="integration_item">
                          <img src="./assets/images/integration/clickup.png" alt="" />
                        </span>
                      </p>
                      <p data-tj-throwable-el>
                        <span className="integration_item">
                          <img src="./assets/images/integration/notion.png" alt="" />
                        </span>
                      </p>
                      <p data-tj-throwable-el>
                        <span className="integration_item">
                          <img src="./assets/images/integration/asana.png" alt="" />
                        </span>
                      </p>
                      <p data-tj-throwable-el>
                        <span className="integration_item">
                          <img src="./assets/images/integration/ovhcloud.png" alt="" />
                        </span>
                      </p>
                      <p data-tj-throwable-el>
                        <span className="integration_item">
                          <img src="./assets/images/integration/zoom.png" alt="" />
                        </span>
                      </p>
                      <p data-tj-throwable-el>
                        <span className="integration_item">
                          <img src="./assets/images/integration/slack.png" alt="" />
                        </span>
                      </p>
                      <p data-tj-throwable-el>
                        <span className="integration_item">
                          <img src="./assets/images/integration/dropbox.png" alt="" />
                        </span>
                      </p>
                      <p data-tj-throwable-el>
                        <span className="integration_item">
                          <img src="./assets/images/integration/sendgrid.png" alt="" />
                        </span>
                      </p>
                      <p data-tj-throwable-el>
                        <span className="integration_item">
                          <img src="./assets/images/integration/microsoft.png" alt="" />
                        </span>
                      </p>
                      <p data-tj-throwable-el>
                        <span className="integration_item">
                          <img src="./assets/images/integration/pipedrive.png" alt="" />
                        </span>
                      </p>
                      <p data-tj-throwable-el>
                        <span className="integration_item">
                          <img src="./assets/images/integration/chatGPT.png" alt="" />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Integration Section  */}

        {/*  start: FAQ Section  */}
        <section className="tj-faq-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="sec-heading style-3 sec-heading-centered">
                  <span className="sub-title tj-fade-anim" data-delay="0.2" data-duration="0.5"><i
                      className="tji-subtitle-2"></i>Read Answers</span>
                  <h2 className="sec-title tj-split-text-3">Quick Answers For Your Most Questions.</h2>
                </div>

                <div className="tj_accordion" id="tjAccordion01">
                  <div className="accordion_item active tj-fade-anim">
                    <button className="accordion_title" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-1" aria-expanded="true">What services does your company offer?</button>
                    <div id="accordion-1" className="collapse show" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs, and enabling seamless digital transformation to boost growth and
                        productivity and stay up-to-date with the latest technologies. The consultation phase and keep
                        you informed.
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item tj-fade-anim">
                    <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-2" aria-expanded="false">
                      How can your IT solutions help my business?
                    </button>
                    <div id="accordion-2" className="collapse" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs, and enabling seamless digital transformation to boost growth and
                        productivity and stay up-to-date with the latest technologies. The consultation phase and keep
                        you informed.
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item tj-fade-anim">
                    <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-3" aria-expanded="false">
                      Do you provide support after project completion?
                    </button>
                    <div id="accordion-3" className="collapse" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs, and enabling seamless digital transformation to boost growth and
                        productivity and stay up-to-date with the latest technologies. The consultation phase and keep
                        you informed.
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item tj-fade-anim">
                    <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-4" aria-expanded="false">
                      How long does it take to implement an IT solution?
                    </button>
                    <div id="accordion-4" className="collapse" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs, and enabling seamless digital transformation to boost growth and
                        productivity and stay up-to-date with the latest technologies. The consultation phase and keep
                        you informed.
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item tj-fade-anim">
                    <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-5" aria-expanded="false">
                      Is my data secure with your solutions?
                    </button>
                    <div id="accordion-5" className="collapse" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs, and enabling seamless digital transformation to boost growth and
                        productivity and stay up-to-date with the latest technologies. The consultation phase and keep
                        you informed.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: FAQ Section  */}

        {/*  start: Blog Section  */}
        <section className="tj-blog-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="sec-heading style-3 d-flex flex-wrap align-items-end justify-content-center justify-content-md-between gap-4">
                  <div className="sec_heading_wrap d-flex flex-column align-items-center align-items-md-start">
                    <span className="sub-title tj-fade-anim" data-delay="0.2" data-duration="0.5"><i
                        className="tji-subtitle-2"></i> Explore Blogs</span>
                    <h2 className="sec-title tj-split-text-3">Read Latest Blog & News.</h2>
                  </div>
                  <div className="tj-fade-anim d-none d-md-inline-flex" data-delay="0.5">
                    <a className="tj-primary-btn" href="blog.html">
                      <span className="btn-text"><span>Explore More</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="tj_blog_wrap tj-fade-anim">
                  <div className="blog-item">
                    <div className="blog-thumb img-reveal-2">
                      <a href="blog-details.html"><img src="assets/images/blog/blog-1.webp" alt="" /></a>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><a href="blog-details.html">Solutions</a></span>
                        <span>By <a href="blog-details.html">Ellinien Loma</a></span>
                      </div>
                      <h4 className="title">
                        <a href="blog-details.html">How to Successfully Migrate Your Business to the Cloud</a>
                      </h4>
                      <div className="excerpt">Managed IT Services provide businesses with proactive technology support,
                        ensuring seamless operations and enhanced.</div>
                      <a className="tj-text-btn style-2" href="blog-details.html">
                        Read More
                        <i className="tji-arrow-right-4"></i>
                      </a>
                    </div>
                  </div>
                  <div className="blog-item">
                    <div className="blog-thumb img-reveal-2">
                      <a href="blog-details.html"><img src="assets/images/blog/blog-2.webp" alt="" /></a>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><a href="blog-details.html">Solutions</a></span>
                        <span>By <a href="blog-details.html">Ellinien Loma</a></span>
                      </div>
                      <h4 className="title">
                        <a href="blog-details.html">Building a Stronger Workforce with IT Training</a>
                      </h4>
                      <a className="tj-text-btn style-2" href="blog-details.html">
                        Read More
                        <i className="tji-arrow-right-4"></i>
                      </a>
                    </div>
                  </div>
                  <div className="blog-item">
                    <div className="blog-thumb img-reveal-2">
                      <a href="blog-details.html"><img src="assets/images/blog/blog-3.webp" alt="" /></a>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><a href="blog-details.html">Solutions</a></span>
                        <span>By <a href="blog-details.html">Ellinien Loma</a></span>
                      </div>
                      <h4 className="title">
                        <a href="blog-details.html">Optimizing Your IT Budget: Tips and Strategies</a>
                      </h4>
                      <a className="tj-text-btn style-2" href="blog-details.html">
                        Read More
                        <i className="tji-arrow-right-4"></i>
                      </a>
                    </div>
                  </div>
                  <div className="blog-item">
                    <div className="blog-thumb img-reveal-2">
                      <a href="blog-details.html"><img src="assets/images/blog/blog-4.webp" alt="" /></a>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><a href="blog-details.html">Solutions</a></span>
                        <span>By <a href="blog-details.html">Ellinien Loma</a></span>
                      </div>
                      <h4 className="title">
                        <a href="blog-details.html">The Top 5 IT Challenges Faced by Modern Enterprises</a>
                      </h4>
                      <a className="tj-text-btn style-2" href="blog-details.html">
                        Read More
                        <i className="tji-arrow-right-4"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-md-none mt-40">
              <div className="col">
                <div className="explore_more_btn text-center">
                  <a className="tj-primary-btn" href="blog.html">
                    <span className="btn-text"><span>Explore More</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Blog Section  */}
      
    </>
  );
}
