import React from 'react';
import { Link } from 'react-router-dom';

export default function Index6() {
  return (
    <>

        <div className="top-space-30"></div>
        {/*  start: Banner Section  */}
        <section className="tj-banner-section h6-hero fix zoom-on-scroll-wrapper">
          <div className="hero-bg" data-bg-image="/assets/images/hero/h6-hero-bg.webp"></div>
          <div className="hero-orbit tj-fade-anim" data-duration="0.4" data-delay="1">
            <img src="/assets/images/shapes/h6-orbit.svg" alt="" />
            <div className="hero-orbit-icon-wrapper">
              <div className="hero-orbit-icon"><img src="/assets/images/icons/h6-orbit-icon-1.svg" alt="" /></div>
              <div className="hero-orbit-icon"><img src="/assets/images/icons/h6-orbit-icon-2.svg" alt="" /></div>
              <div className="hero-orbit-icon"><img src="/assets/images/icons/h6-orbit-icon-3.svg" alt="" /></div>
              <div className="hero-orbit-icon"><img src="/assets/images/icons/h6-orbit-icon-4.svg" alt="" /></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="banner-content">
                  <span className="sub-title tj-fade-anim" data-duration="0.5"><i className="tji-subtitle-5"></i>Secure,
                    Scalable & Flexible</span>
                  <h1 className="banner-title tj-split-text-4">
                    Experience Seamless Digital Financial
                    <span>
                      <span><span className="tj-fade-anim" data-delay=".3"><span>
                            <img src="/assets/images/testimonial/client-1.webp" alt="Image" />
                            <img src="/assets/images/testimonial/client-2.webp" alt="Image" />
                            <img src="/assets/images/testimonial/client-3.webp" alt="Image" /> </span></span></span>
                    </span>
                    Freedom
                  </h1>
                  <div className="btn-area tj-fade-anim" data-delay=".5">
                    <Link className="tj-primary-btn" to="/service">
                      <span className="btn-text"><span>Get Started</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                    </Link>
                    <a className="video-btn-2 video-popup" data-autoplay="true" data-vbtype="video" data-maxwidth="1200px"
                      href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados">
                      <span className="btn-icon"><i className="tji-play"></i></span>
                      <span className="btn-text"><span>Watch Video</span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-chart-wrapper">
            <div className="hero-chart-img"><img className="tj-fade-anim" data-delay=".5"
                src="/assets/images/hero/h6-chart-1.webp" alt="" /></div>
            <div className="hero-chart-img"><img className="tj-fade-anim" data-delay=".6"
                src="/assets/images/hero/h6-mockup.webp" alt="" /></div>
            <div className="hero-chart-img"><img className="tj-fade-anim" data-delay=".7"
                src="/assets/images/hero/h6-chart-2.webp" alt="" /></div>
          </div>
        </section>
        {/*  end: Banner Section  */}

        {/*  start: Choose Section  */}
        <section className="tj-choose-section fix section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading style-3">
                  <span className="sub-title tj-fade-anim"> <i className="tji-subtitle-5"></i>Why Choose Tekmino</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-4">Redefining the Future Digital Finance</h2>
                    <div className="tj-fade-anim" data-delay="0.1">
                      <p className="desc">Our services are customized to meet your unique.</p>
                    </div>
                    <div className="tj-fade-anim" data-delay="0.3">
                      <Link className="tj-primary-btn d-none d-lg-inline-flex" to="/about">
                        <span className="btn-text"><span>Learn More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-xl-3 col-md-6">
                <div className="choose-box h6-choose-box tj-fade-anim" data-delay=".3" data-duration="1"
                  data-direction="top">
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
                <div className="choose-box h6-choose-box tj-fade-anim" data-delay=".3" data-duration="1"
                  data-direction="bottom">
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
                <div className="choose-box h6-choose-box tj-fade-anim" data-delay=".3" data-duration="1"
                  data-direction="top">
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
                <div className="choose-box h6-choose-box tj-fade-anim" data-delay=".3" data-duration="1"
                  data-direction="bottom">
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
              <Link className="tj-primary-btn" to="/about">
                <span className="btn-text"><span>Learn More</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
              </Link>
            </div>
          </div>
        </section>
        {/*  end: Choose Section  */}

        {/*  start: Insights Section  */}
        <section className="insights fix section-gap section-separator">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading style-3 sec-heading-centered">
                  <span className="sub-title tj-fade-anim"><i className="tji-subtitle-5"></i>Our Fintech Benefits</span>
                  <h2 className="sec-title tj-split-text-4">Smart Insights for Better Financial Decisions</h2>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-12">
                <div className="insights-wrapper">
                  <div className="insights-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="bottom">
                    <div className="insights-content">
                      <h4 className="title">Financial Insights</h4>
                      <p className="desc">
                        Gain a clear view of your company’s financial health with real-time insights. Track income,
                        expenses, and trends through an dashboard designed complex data into actionable
                        results.
                      </p>
                    </div>
                    <div className="insights-img">
                      <img src="/assets/images/insights/insights-1.webp" alt="" />
                    </div>
                  </div>
                  <div className="insights-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="bottom">
                    <div className="insights-content">
                      <h4 className="title">Revenue Overview</h4>
                      <p className="desc">Displays total income and outcome figures with growth rate indicators.</p>
                    </div>
                    <div className="insights-img">
                      <img src="/assets/images/insights/insights-2.webp" alt="" />
                    </div>
                  </div>
                  <div className="insights-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="bottom">
                    <div className="insights-content">
                      <h4 className="title">Performance Records</h4>
                      <p className="desc">Displays total income and outcome figures with growth rate indicators.</p>
                    </div>
                    <div className="insights-img">
                      <img src="/assets/images/insights/insights-3.webp" alt="" />
                    </div>
                  </div>
                  <div className="insights-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="bottom">
                    <div className="insights-content">
                      <h4 className="title">Transaction Log</h4>
                      <p className="desc">
                        Keeping a detailed transaction history is essential for managing your finances effectively. It
                        provides a clear record of all incoming and outgoing transactions making it
                        track spending
                      </p>
                    </div>
                    <div className="insights-img">
                      <img src="/assets/images/insights/insights-4.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Insights Section  */}

        {/*  start: Testimonial Section  */}
        <div className="h6-testimonial-section section-gap section-separator tj-sticky-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="sec-heading style-3 tj-sticky-item" data-delay=".1" data-direction="bottom">
                  <div className="testimonial-quote tj-fade-anim" data-delay="0.2"><i className="tji-quote"></i></div>
                  <h2 className="sec-title tj-split-text-4">Client Success Stories.</h2>
                  <div className="tj-fade-anim" data-delay="0.3">
                    <p className="desc">
                      We are dedicated to transforming businesses through innovative and future migration, storage We
                      are dedicated to transforming businesses through innovative and future.
                    </p>
                  </div>
                  <div className="tj-fade-anim" data-delay="0.4">
                    <Link className="tj-primary-btn" to="/contact">
                      <span className="btn-text"><span>Contact Us</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="testimonial-wrapper-5">
                  <div className="testimonial_item_3">
                    <div className="testimonial_header">
                      <div className="star-ratings">
                        <div className="fill-ratings">
                          <span>★★★★★</span>
                        </div>
                        <div className="empty-ratings">
                          <span>★★★★★</span>
                        </div>
                      </div>
                      <span>5.0/5</span>
                    </div>
                    <div className="testimonial_content">
                      <div className="desc">
                        <p>
                          Nexor truly exceeded our expectations. From the our initial consultation to the final
                          implementation, their team provided excellent service and unwavering support. Their
                          ability to integrate. Nexor truly exceeded expectations.
                        </p>
                      </div>
                    </div>
                    <div className="author_avatar_wrapper">
                      <div className="author_avatar">
                        <img src="./assets/images/testimonial/client-1.webp" alt="" />
                      </div>
                      <div className="author_info">
                        <h5 className="name">Devon Lane</h5>
                        <span className="designation">Co. Founder</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial_item_3">
                    <div className="testimonial_header">
                      <div className="star-ratings">
                        <div className="fill-ratings">
                          <span>★★★★★</span>
                        </div>
                        <div className="empty-ratings">
                          <span>★★★★★</span>
                        </div>
                      </div>
                      <span>5.0/5</span>
                    </div>
                    <div className="testimonial_content">
                      <div className="desc">
                        <p>
                          Nexor truly exceeded our expectations. From the our initial consultation to the final
                          implementation, their team provided excellent service and unwavering support. Their
                          ability to integrate. Nexor truly exceeded expectations.
                        </p>
                      </div>
                    </div>

                    <div className="author_avatar_wrapper">
                      <div className="author_avatar">
                        <img src="./assets/images/testimonial/client-2.webp" alt="" />
                      </div>
                      <div className="author_info">
                        <h5 className="name">Caeron Williason</h5>
                        <span className="designation">Co. Founder</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial_item_3">
                    <div className="testimonial_header">
                      <div className="star-ratings">
                        <div className="fill-ratings">
                          <span>★★★★★</span>
                        </div>
                        <div className="empty-ratings">
                          <span>★★★★★</span>
                        </div>
                      </div>
                      <span>5.0/5</span>
                    </div>
                    <div className="testimonial_content">
                      <div className="desc">
                        <p>
                          Nexor truly exceeded our expectations. From the our initial consultation to the final
                          implementation, their team provided excellent service and unwavering support. Their
                          ability to integrate. Nexor truly exceeded expectations.
                        </p>
                      </div>
                    </div>
                    <div className="author_avatar_wrapper">
                      <div className="author_avatar">
                        <img src="./assets/images/testimonial/client-3.webp" alt="" />
                      </div>
                      <div className="author_info">
                        <h5 className="name">Eleanor Pena</h5>
                        <span className="designation">Co. Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  end: Testimonial Section  */}

        {/*  start: Technologies Section  */}
        <section className="h6-technologies-section section-gap section-gap-x">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading style-3 sec-heading-centered">
                  <span className="sub-title tj-fade-anim"><i className="tji-subtitle-5"></i>Seamless Integrations</span>
                  <h2 className="sec-title tj-split-text-4">Smart Integrations for Digital Banking</h2>
                  <div className="tj-fade-anim" data-delay=".1" data-direction="bottom">
                    <p className="desc">Comprehensive IT support, monitoring & digital solution maintenance smooth.</p>
                  </div>
                  <div className="tj-fade-anim" data-delay=".1" data-direction="bottom">
                    <Link className="tj-primary-btn" to="/contact">
                      <span className="btn-text"><span>Connect Now</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="technologies-rotator-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="technologies-rotator">
                    <div className="technologies-circle tj-rounded-marquee">
                      <div className="tech-icon tj-rounded-marquee-icon">
                        <img src="/assets/images/icons/asana.svg" alt="" />
                      </div>
                      <div className="tech-icon tj-rounded-marquee-icon">
                        <img src="/assets/images/icons/ovhcloud.svg" alt="" />
                      </div>
                      <div className="tech-icon tj-rounded-marquee-icon">
                        <img src="/assets/images/icons/zoom.svg" alt="" />
                      </div>
                      <div className="tech-icon tj-rounded-marquee-icon">
                        <img src="/assets/images/icons/slack.svg" alt="" />
                      </div>
                      <div className="tech-icon tj-rounded-marquee-icon">
                        <img src="/assets/images/icons/dropbox.svg" alt="" />
                      </div>
                      <div className="tech-icon tj-rounded-marquee-icon">
                        <img src="/assets/images/icons/sendgrid.svg" alt="" />
                      </div>
                      <div className="tech-icon tj-rounded-marquee-icon">
                        <img src="/assets/images/icons/pipedrive.svg" alt="" />
                      </div>
                      <div className="tech-icon tj-rounded-marquee-icon">
                        <img src="/assets/images/icons/microsoft.svg" alt="" />
                      </div>
                      <div className="tech-icon tj-rounded-marquee-icon">
                        <img src="/assets/images/icons/notion.svg" alt="" />
                      </div>
                      <div className="tech-icon tj-rounded-marquee-icon">
                        <img src="/assets/images/icons/gitlab.svg" alt="" />
                      </div>
                      <div className="tech-icon tj-rounded-marquee-icon">
                        <img src="/assets/images/icons/asana.svg" alt="" />
                      </div>
                      <div className="tech-icon tj-rounded-marquee-icon">
                        <img src="/assets/images/icons/ovhcloud.svg" alt="" />
                      </div>
                      <div className="tech-icon tj-rounded-marquee-icon">
                        <img src="/assets/images/icons/zoom.svg" alt="" />
                      </div>
                      <div className="tech-icon tj-rounded-marquee-icon">
                        <img src="/assets/images/icons/slack.svg" alt="" />
                      </div>
                      <div className="tech-icon tj-rounded-marquee-icon">
                        <img src="/assets/images/icons/dropbox.svg" alt="" />
                      </div>
                      <div className="tech-icon tj-rounded-marquee-icon">
                        <img src="/assets/images/icons/sendgrid.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Technologies Section  */}

        {/*  start: Pricing Section  */}
        <section className="tj-pricing-section section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="sec-heading style-3">
                  <span className="sub-title tj-fade-anim" data-delay="0.2" data-duration="0.5"><i
                      className="tji-subtitle-5"></i>Secure, Scalable & Flexible</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-4">Flexible Pricing, Powerful Tangible Results</h2>
                    <div className="tj-fade-anim" data-delay="0.3">
                      <div className="price_switcher">
                        <p>Monthly</p>
                        <label className="toggle_switcher">
                          <input className="toggle-checkbox" type="checkbox" />
                          <span className="toggle-switch"></span>
                        </label>
                        <p>Yearly <span>(Save 15%)</span></p>
                      </div>
                    </div>
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

                    <Link className="tj-primary-btn pricing_btn" to="/contact">
                      <span className="btn-text"><span>Chose Package <i className="tji-arrow-right-4"></i></span></span>
                    </Link>

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

                    <Link className="tj-primary-btn pricing_btn" to="/contact">
                      <span className="btn-text"><span>Chose Package <i className="tji-arrow-right-4"></i></span></span>
                    </Link>

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

                    <Link className="tj-primary-btn pricing_btn" to="/contact">
                      <span className="btn-text"><span>Chose Package <i className="tji-arrow-right-4"></i></span></span>
                    </Link>

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

        {/*  start: Client Section  */}
        <div id="client" className="tj-client-section overflow-hidden">
          <div className="container-fluid gx-0">
            <div className="row">
              <div className="col-12">
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
        </div>
        {/*  end: Client Section  */}

        {/*  start: FAQ Section  */}
        <section className="h6-faq-section section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading style-3 sec-heading-centered">
                  <span className="sub-title tj-fade-anim"><i className="tji-subtitle-5"></i>Read Common FAQ</span>
                  <h2 className="sec-title tj-split-text-4">Quick Help for Common <span>Questions</span> Here.</h2>
                </div>
              </div>
              <div className="col-12">
                <div className="tj_accordion tj_accordion_2 tj_accordion_3 tj_accordion_5" id="tjAccordion01">
                  <div className="accordion_item active tj-fade-anim">
                    <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-1" aria-expanded="true">
                      What services does your company offer?
                    </button>
                    <div id="accordion-1" className="collapse" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs, and enabling seamless digital transformation to boost growth and
                        productivity and stay up-to-date with the latest technologies. The consultation phase and keep
                        you informed. Our solutions are tailored to meet your unique business needs,
                        improving efficiency, reducing costs, and enabling seamless digital transformation.
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item tj-fade-anim">
                    <button className="accordion_title" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-2" aria-expanded="false">How can your IT solutions help my
                      business?</button>
                    <div id="accordion-2" className="collapse show" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs, and enabling seamless digital transformation to boost growth and
                        productivity and stay up-to-date with the latest technologies. The consultation phase and keep
                        you informed. Our solutions are tailored to meet your unique business needs,
                        improving efficiency, reducing costs, and enabling seamless digital transformation.
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
                        you informed. Our solutions are tailored to meet your unique business needs,
                        improving efficiency, reducing costs, and enabling seamless digital transformation.
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
                        you informed. Our solutions are tailored to meet your unique business needs,
                        improving efficiency, reducing costs, and enabling seamless digital transformation.
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
                        you informed. Our solutions are tailored to meet your unique business needs,
                        improving efficiency, reducing costs, and enabling seamless digital transformation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: FAQ Section  */}

        {/*  start: Cta Section  */}
        <section className="h6-cta-section section-gap-x">
          <div className="bg-img" data-bg-image="./assets/images/cta/cta-bg.webp"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="cta-area">
                  <div className="sec-heading style-3 tj-fade-anim section-gap" data-direction="left" data-delay=".3">
                    <span className="sub-title"><i className="tji-subtitle-5"></i>Our Fintech Benefits</span>
                    <h2 className="sec-title">Download Secure Fintech.</h2>
                    <div className="cta-app-store">
                      <a href="https://play.google.com/store/apps"> <img src="/assets/images/cta/cta-playstore.webp"
                          alt="" /></a>
                      <a href="https://www.apple.com/app-store/"> <img src="/assets/images/cta/cta-aplestore.webp"
                          alt="" /></a>
                    </div>
                  </div>
                  <div className="cta-baner tj-fade-anim" data-delay=".5">
                    <img src="/assets/images/cta/cta-banner.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Cta Section  */}
      
    </>
  );
}
