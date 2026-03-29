import React from 'react';
import { Link } from 'react-router-dom';

export default function Index7() {
  return (
    <>


        {/*  start: Banner Section  */}
        <section className="tj-banner-section h7-hero fix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="banner-content">
                  <h1 className="banner-title tj-split-text-5"> <span>Powering <span className="title-img title-img-1"> <img
                          className="zoomInOut-3 tj-zoom-anim" data-delay=".7" src="/assets/images/hero/h7-title-img-1.webp"
                          alt="" /></span> </span>Innovations Empower Tailor
                    Software
                    <span className="title-img title-img-2"> <img className="tj-zoom-anim" data-delay=".9"
                        src="/assets/images/hero/h7-title-img-2.webp" alt="" /></span> Development.
                  </h1>
                  <div className="banner-action">
                    <div className="btn-area tj-fade-anim" data-delay=".6">
                      <Link className="tj-primary-btn" to="/contact">
                        <span className="btn-text"><span>Let’s Build Together</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                    <div className="list-area tj-fade-anim" data-delay=".8" data-duration="1" data-direction="left">
                      <ul className="list-style-1">
                        <li><span><i className="tji-check"></i></span>Custom Software</li>
                        <li><span><i className="tji-check"></i></span>Integration Services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-img-area">
            <div className="banner-img tj-fade-anim" data-delay="0.3">
              <img src="/assets/images/hero/h7-banner-img.webp" alt="Image" />
            </div>
            <div className="customers-box tj-fade-anim" data-delay="0.5">
              <div className="customers-box-bg" data-bg-image="/assets/images/hero/h7-card-bg.webp"></div>
              <div className="customers-box-header">
                <div className="countup-item">
                  <div className="inline-content">
                    <span className="counter">80</span>
                    <span className="count-plus">+</span>
                  </div>
                </div>
                <div className="customers">
                  <ul>
                    <li><img src="/assets/images/testimonial/client-1.webp" alt="Image" /></li>
                    <li><img src="/assets/images/testimonial/client-2.webp" alt="Image" /></li>
                    <li><img src="/assets/images/testimonial/client-3.webp" alt="Image" /></li>
                    <li><img src="/assets/images/testimonial/client-4.webp" alt="Image" /></li>
                  </ul>
                  <div className="customers-bottom">
                    <h6 className="customers-text">Displays total income and outcome figures</h6>
                  </div>
                </div>
              </div>
              <div className="customers-box-body">
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="categories"><Link to="/blog-details">Solutions</Link></span>
                  </div>
                  <h2 className="title">
                    <Link to="/blog-details">Building a Stronger Software for IT</Link>
                  </h2>
                  <div className="excerpt">
                    Displays total income and outcome our figures with growth rates indicators stay ahead of the
                    competition with AI cloud computing
                  </div>
                  <Link className="tj-text-btn" to="/service-details">
                    <span className="btn-inner">
                      <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      <span className="btn-text"><span>Learn More</span></span>
                      <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="h7-hero-shape"><img src="/assets/images/shapes/h7-blur.png" alt="" /></div>
        </section>
        {/*  end: Banner Section  */}

        {/*  start: Choose Section  */}
        <section className="tj-choose-section fix section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim">[ Why Choose Us ]</span>
                  <h2 className="sec-title tj-split-text-1">Reliable IT Solution, for Best Results.</h2>
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
                        reputation.
                      </p>
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
              <Link className="tj-primary-btn" to="/about">
                <span className="btn-text"><span>Learn More</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
              </Link>
            </div>
          </div>
        </section>
        {/*  end: Choose Section  */}

        {/*  start: About Section  */}
        <section className="h7-about section-gap section-separator fix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="h7-about-wrap">
                  <div className="h7-about-item">
                    <div className="h7-about-content">
                      <div className="sec-heading tj-fade-anim">
                        <span className="sub-title">[ About our company ]</span>
                        <h2 className="sec-title tj-split-text-1">Eurning Complex Challenges into Simple Solutions for
                          Developments.
                        </h2>
                      </div>
                      <div className="tj-fade-anim" data-delay="0.3">
                        <p className="desc">We are dedicated to transforming businesses into through innovative and
                          future-ready IT solutions. With a passion for technology.</p>
                      </div>
                      <div className="tj-fade-anim" data-delay="0.3">
                        <div className="about-funfact">
                          <div className="countup-item">
                            <div className="inline-content">
                              <span className="counter">90</span>
                              <span className="count-plus">%</span>
                            </div>
                            <span className="count-text">We collaborators with lead entree during pivotal moment help them
                              strengthen their connect.</span>
                          </div>
                          <div className="countup-item">
                            <div className="inline-content">
                              <span className="counter">40</span>
                              <span className="count-plus">%</span>
                            </div>
                            <span className="count-text">We collaborators with lead entree during pivotal moment help them
                              strengthen their connect.</span>
                          </div>
                        </div>
                      </div>

                      <div className="btn-area tj-fade-anim" data-delay=".3">
                        <Link className="tj-primary-btn" to="/about">
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                        </Link>
                        <a className="video-btn-2 video-popup" data-autoplay="true" data-vbtype="video"
                          data-maxwidth="1200px"
                          href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados">
                          <span className="btn-icon"><i className="tji-play"></i></span>
                          <span className="btn-text"><span>Watch Video</span></span>
                        </a>
                      </div>
                    </div>
                    <div className="h7-about-img-wrap tj-fade-anim" data-direction="left">
                      <div className="h7-about-img" data-tilt>
                        <div className="img-reveal-2">
                          <img src="/assets/images/about/h7-about-img.webp" alt="" />
                        </div>
                      </div>
                      <div className="about-badge tj-fade-anim" data-delay=".5">
                        <div className="about-badge-icon"><i className="tji-trust"></i></div>
                        <h6 className="about-badge-title">Trusted Team of Software Professionals.</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        {/*  end: About Section  */}

        {/*  start: Service Section  */}
        <section className="tj-service-section-2 section-gap  section-gap-x">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim">[ Explore services ]</span>
                  <h2 className="sec-title tj-split-text-1">Reliable IT Solution, for Best Results.</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="service-slider-wrapper tj-fade-anim">
                  <div className="service-slider swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="service-item service-item-2 service-item-5">
                          <div className="service-inner">
                            <div className="service_image img-reveal-2">
                              <img src="./assets/images/services/h7-service-1.webp" alt="" />
                              <div className="service-icon-wrapper">
                                <div className="service-icon">
                                  <i className="tji-computer"></i>
                                </div>
                              </div>
                            </div>
                            <div className="service-content">
                              <h4 className="title"><Link to="/service-details">Managed IT Services</Link></h4>
                              <p className="desc">We collaborators with lead entree during pivotal moment help them.</p>
                              <Link className="tj-text-btn" to="/service-details">
                                <span className="btn-inner">
                                  <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="service-item service-item-2 service-item-5">
                          <div className="service-inner">
                            <div className="service_image img-reveal-2">
                              <img src="./assets/images/services/h7-service-2.webp" alt="" />
                              <div className="service-icon-wrapper">
                                <div className="service-icon">
                                  <i className="tji-cloud"></i>
                                </div>
                              </div>

                            </div>
                            <div className="service-content">
                              <h4 className="title"><Link to="/service-details">Cloud Computing</Link></h4>
                              <p className="desc">We collaborators with lead entree during pivotal moment help them.</p>
                              <Link className="tj-text-btn" to="/service-details">
                                <span className="btn-inner">
                                  <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="service-item service-item-2 service-item-5">
                          <div className="service-inner">
                            <div className="service_image img-reveal-2">
                              <img src="./assets/images/services/h7-service-3.webp" alt="" />
                              <div className="service-icon-wrapper">
                                <div className="service-icon">
                                  <i className="tji-consulting"></i>
                                </div>
                              </div>
                            </div>
                            <div className="service-content">
                              <h4 className="title"><Link to="/service-details">IT Consulting & Strategy</Link></h4>
                              <p className="desc">We collaborators with lead entree during pivotal moment help them.</p>
                              <Link className="tj-text-btn" to="/service-details">
                                <span className="btn-inner">
                                  <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="service-item service-item-2 service-item-5">
                          <div className="service-inner">
                            <div className="service_image img-reveal-2">
                              <img src="./assets/images/services/h7-service-4.webp" alt="" />
                              <div className="service-icon-wrapper">
                                <div className="service-icon">
                                  <i className="tji-development"></i>
                                </div>
                              </div>
                            </div>
                            <div className="service-content">
                              <h4 className="title"><Link to="/service-details">Software Development</Link></h4>
                              <p className="desc">We collaborators with lead entree during pivotal moment help them.</p>
                              <Link className="tj-text-btn" to="/service-details">
                                <span className="btn-inner">
                                  <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="service-item service-item-2 service-item-5">
                          <div className="service-inner">
                            <div className="service_image img-reveal-2">
                              <img src="./assets/images/services/h7-service-5.webp" alt="" />
                              <div className="service-icon-wrapper">
                                <div className="service-icon">
                                  <i className="tji-network"></i>
                                </div>
                              </div>
                            </div>
                            <div className="service-content">
                              <h4 className="title"><Link to="/service-details">Network Infrastructure</Link></h4>
                              <p className="desc">We collaborators with lead entree during pivotal moment help them.</p>
                              <Link className="tj-text-btn" to="/service-details">
                                <span className="btn-inner">
                                  <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination-area style-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Service Section  */}

        {/*  start: Pricing Section  */}
        <section className="tj-pricing-section tj-pricing-section-2 section-gap fix tj-sticky-container">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="sec-heading tj-sticky-item">
                  <span className="sub-title tj-fade-anim" data-delay="0.2" data-duration="0.5"><i
                      className="tji-subtitle-2"></i>Best Pricing</span>
                  <h2 className="sec-title tj-split-text-1">Explore our Flexible
                    Pricing Plan.</h2>
                  <p className="desc">We are dedicated to transforming businesses into through innovative and future IT
                    solutions.</p>
                  <div className="tj-fade-anim">
                    <div className="price_switcher style-2">
                      <label className="toggle_switcher">
                        <input className="toggle-checkbox" type="checkbox" />
                        <span className="toggle-switch"></span>
                        <span className="toggle-m">Monthly</span>
                        <span className="toggle-y">Yearly</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div className="pricing_items_wrap pricing_items_wrap_3">
                  <div className="pricing_item tj-fade-anim">
                    <div className="pricing_header">
                      <h4 className="package_name">Basic Plan</h4>
                      <div className="package_desc">Essential Electrical Services</div>
                      <div className="package_price">
                        <span className="currency">$</span>
                        <span className="price" data-year-price="199" data-month-price="99">99</span>
                        <span className="period" data-year-period="/per year" data-month-period="/per month">/per
                          month</span>
                      </div>
                      <Link className="tj-primary-btn pricing_btn" to="/contact">
                        <span className="btn-text"><span>Chose Package <i className="tji-arrow-right-4"></i></span></span>
                      </Link>
                    </div>
                    <ul className="pricing_features">
                      <li>
                        <i className="tji-check"></i>
                        Essential IT Support
                      </li>
                      <li>
                        <i className="tji-check"></i>
                        Cloud Storage (50 GB)
                      </li>
                      <li>
                        <i className="tji-check"></i>
                        Monthly System Check
                      </li>
                      <li>
                        <i className="tji-check"></i>
                        Basic Security Updates
                      </li>
                      <li>
                        <i className="tji-check"></i>
                        Software Patches and Fixes
                      </li>
                      <li>
                        <i className="tji-check"></i>
                        1 Scheduled Maintenance
                      </li>
                    </ul>
                  </div>

                  <div className="pricing_item recommend tj-fade-anim">
                    <div className="pricing_header">
                      <h4 className="package_name">Standard Plan</h4>
                      <div className="package_desc">Complete Electrical Solutions</div>
                      <div className="package_price">
                        <span className="currency">$</span>
                        <span className="price" data-year-price="499" data-month-price="249">249</span>
                        <span className="period" data-year-period="/per year" data-month-period="/per month">/per
                          month</span>
                      </div>
                      <Link className="tj-primary-btn pricing_btn" to="/contact">
                        <span className="btn-text"><span>Chose Package <i className="tji-arrow-right-4"></i></span></span>
                      </Link>
                    </div>
                    <ul className="pricing_features">
                      <li>
                        <i className="tji-check"></i>
                        Advanced IT Management
                      </li>
                      <li>
                        <i className="tji-check"></i>
                        Cloud Storage (200 GB)
                      </li>
                      <li>
                        <i className="tji-check"></i>
                        Custom Software Solutions
                      </li>
                      <li>
                        <i className="tji-check"></i>
                        Threat Detection Services
                      </li>
                      <li>
                        <i className="tji-check"></i>
                        Data Backup and Recovery
                      </li>
                      <li>
                        <i className="tji-check"></i>
                        Monthly IT Consultation
                      </li>
                    </ul>
                  </div>

                  <div className="pricing_item tj-fade-anim">
                    <div className="pricing_header">
                      <h4 className="package_name">Premium Plan</h4>
                      <div className="package_desc">Advanced Electrical Services</div>
                      <div className="package_price">
                        <span className="currency">$</span>
                        <span className="price" data-year-price="899" data-month-price="499">499</span>
                        <span className="period" data-year-period="/per year" data-month-period="/per month">/per
                          month</span>
                      </div>
                      <Link className="tj-primary-btn pricing_btn" to="/contact">
                        <span className="btn-text"><span>Chose Package <i className="tji-arrow-right-4"></i></span></span>
                      </Link>
                    </div>
                    <ul className="pricing_features">
                      <li>
                        <i className="tji-check"></i>
                        Comprehensive IT Solutions
                      </li>
                      <li>
                        <i className="tji-check"></i>
                        Unlimited Cloud Storage
                      </li>
                      <li>
                        <i className="tji-check"></i>
                        Priority 1-Hour Support
                      </li>
                      <li>
                        <i className="tji-check"></i>
                        Cybersecurity Protection
                      </li>
                      <li>
                        <i className="tji-check"></i>
                        Dedicated Account Manager
                      </li>
                      <li>
                        <i className="tji-check"></i>
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

        {/*  start: Project Section  */}
        <section className="tj-project-section-3 section-gap fix section-separator">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim">[ Explore Projects ]</span>
                  <h2 className="sec-title tj-split-text-1">Transforming Ideas Into Real Digital Success.</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-12">
                <div className="project-wrapper project-wrapper-3 hover-active-wrapper tj-fade-anim" data-delay="0.1">
                  <div className="project-item hover-active-item">
                    <div className="project-img">
                      <img src="/assets/images/project/project-1.webp" alt="" />
                    </div>
                    <div className="project-content">
                      <div className="content-inner">
                        <span className="categories"><Link to="/project-details">Solution</Link></span>
                        <h4 className="title"><Link to="/project-details">Business Transformation</Link></h4>
                      </div>
                      <Link className="tj-icon-btn" to="/project-details">
                        <i className="tji-arrow-right-3"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="project-item hover-active-item active">
                    <div className="project-img">
                      <img src="/assets/images/project/project-2.webp" alt="" />
                    </div>
                    <div className="project-content">
                      <div className="content-inner">
                        <span className="categories"><Link to="/project-details">Solution</Link></span>
                        <h4 className="title"><Link to="/project-details">Cloud Migration Success</Link></h4>
                      </div>
                      <Link className="tj-icon-btn" to="/project-details">
                        <i className="tji-arrow-right-3"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="project-item hover-active-item">
                    <div className="project-img ">
                      <img src="/assets/images/project/project-4.webp" alt="" />
                    </div>
                    <div className="project-content">
                      <div className="content-inner">
                        <span className="categories"><Link to="/project-details">Solution</Link></span>
                        <h4 className="title"><Link to="/project-details">Mobile App Development</Link></h4>
                      </div>
                      <Link className="tj-icon-btn" to="/project-details">
                        <i className="tji-arrow-right-3"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="project-more tj-fade-anim" data-delay="0.1"><Link className="tj-primary-btn" to="/project">
                    <span className="btn-text"><span>Explore More</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                  </Link></div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Project Section  */}

        {/*  start: Testimonial Section  */}
        <div className="h6-testimonial-section section-gap section-separator tj-sticky-container">
          <div className="container">
            <div className="row flex-lg-row-reverse">
              <div className="col-12 col-lg-4">
                <div className="sec-heading style-3 tj-sticky-item" data-delay=".1" data-direction="bottom">
                  <div className="testimonial-quote tj-fade-anim" data-delay="0.2"> <i className="tji-quote"></i></div>
                  <h2 className="sec-title  tj-split-text-1">Hear From Clients</h2>
                  <div className="tj-fade-anim" data-delay="0.3">
                    <p className="desc">We are dedicated to transforming businesses through innovative and future migration,
                      storage We are dedicated to transforming businesses.</p>
                  </div>
                  <div className="tj-fade-anim" data-delay="0.4">
                    <Link className="tj-primary-btn" to="/contact">
                      <span className="btn-text"><span>Contact Us</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div className="testimonial-wrapper-5 testimonial-wrapper-6">
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
                        <p>Nexor truly exceeded our expectations. From the our initial consultation to the final
                          implementation, their team provided excellent service and unwavering support. Their ability to
                          integrate. Nexor truly exceeded expectations.</p>
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
                        <p>Nexor truly exceeded our expectations. From the our initial consultation to the final
                          implementation, their team provided excellent service and unwavering support. Their ability to
                          integrate. Nexor truly exceeded expectations.</p>
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
                        <p>Nexor truly exceeded our expectations. From the our initial consultation to the final
                          implementation, their team provided excellent service and unwavering support. Their ability to
                          integrate. Nexor truly exceeded expectations.</p>
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
                        <p>Nexor truly exceeded our expectations. From the our initial consultation to the final
                          implementation, their team provided excellent service and unwavering support. Their ability to
                          integrate. Nexor truly exceeded expectations.</p>
                      </div>
                    </div>
                    <div className="author_avatar_wrapper">
                      <div className="author_avatar">
                        <img src="./assets/images/testimonial/client-1.webp" alt="" />
                      </div>
                      <div className="author_info">
                        <h5 className="name">Marlan Horn</h5>
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

        {/*  start: Marquee Section  */}
        <section className="h4-marquee-section fix">
          <div className="container-fluid gx-0">
            <div className="row">
              <div className="col">
                <div className="marquee-slider-2 rounded-0">
                  <div className="marquee-slider-wrapper">
                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-marquee"></i>
                      </span>
                      <h3 className="marquee-text">Passion and progress</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-marquee"></i>
                      </span>
                      <h3 className="marquee-text">Founders and vision</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-marquee"></i>
                      </span>
                      <h3 className="marquee-text">Growth and impact</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-marquee"></i>
                      </span>
                      <h3 className="marquee-text">Team and values</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-marquee"></i>
                      </span>
                      <h3 className="marquee-text">Innovation and future</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-marquee"></i>
                      </span>
                      <h3 className="marquee-text">Success and impact</h3>
                    </div>
                  </div>
                  <div className="marquee-slider-wrapper">
                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-marquee"></i>
                      </span>
                      <h3 className="marquee-text">Passion and progress</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-marquee"></i>
                      </span>
                      <h3 className="marquee-text">Founders and vision</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-marquee"></i>
                      </span>
                      <h3 className="marquee-text">Growth and impact</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-marquee"></i>
                      </span>
                      <h3 className="marquee-text">Team and values</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-marquee"></i>
                      </span>
                      <h3 className="marquee-text">Innovation and future</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-marquee"></i>
                      </span>
                      <h3 className="marquee-text">Success and impact</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Marquee Section  */}

        {/*  start: Team Section  */}
        <section className="tj-team-section-2 section-gap section-gap-x">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim">[ Meet Our Team ]</span>
                  <h2 className="sec-title tj-split-text-1">Meet the Experts Behind Our Success.</h2>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-lg-3 col-sm-6">
                <div className="team-item team-item-2 img-reveal-2">
                  <div className="team-img">
                    <img src="/assets/images/team/h7-team-1.webp" alt="Image" />
                    <div className="social-links">
                      <span className="share-icon"><i className="tji-share"></i></span>
                      <ul>
                        <li><a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title"><Link to="/team-details">Eade Marren</Link></h4>
                    <span className="designation">Chief Executive</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-item team-item-2 img-reveal-2">
                  <div className="team-img">
                    <img src="/assets/images/team/h7-team-2.webp" alt="Image" />
                    <div className="social-links">
                      <span className="share-icon"><i className="tji-share"></i></span>
                      <ul>
                        <li><a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title"><Link to="/team-details">Savannah Ngueen</Link></h4>
                    <span className="designation">Operations Head</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-item team-item-2 img-reveal-2">
                  <div className="team-img">
                    <img src="/assets/images/team/h7-team-3.webp" alt="Image" />
                    <div className="social-links">
                      <span className="share-icon"><i className="tji-share"></i></span>
                      <ul>
                        <li><a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title"><Link to="/team-details">Cameron William</Link></h4>
                    <span className="designation">Marketing Lead</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-item team-item-2 img-reveal-2">
                  <div className="team-img">
                    <img src="/assets/images/team/h7-team-4.webp" alt="Image" />
                    <div className="social-links">
                      <span className="share-icon"><i className="tji-share"></i></span>
                      <ul>
                        <li><a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4 className="title"><Link to="/team-details">Olivia Fox</Link></h4>
                    <span className="designation">Business Director</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-lg-none text-center mt-40">
              <Link className="tj-primary-btn" to="/team">
                <span className="btn-text"><span>More Member</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
              </Link>
            </div>
          </div>
        </section>
        {/*  end: Team Section  */}

        {/*  start: Blog Section  */}
        <section className="tj-blog-section-3 section-gap fix section-separator">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading">
                  <span className="sub-title tj-fade-anim">[ Our Latest blogs ]</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-1">Explore Latest Insights, & Innovations.</h2>
                    <div className="tj-fade-anim" data-delay="0.3">
                      <Link className="tj-primary-btn" to="/blog">
                        <span className="btn-text"><span>Explore More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="blog-item-wrapper">
                  <div className="blog-item blog-item-2 tj-fade-anim" data-delay="0.1">
                    <div className="blog-thumb img-reveal-2">
                      <Link to="/blog-details"><img src="/assets/images/blog/blog-2.webp" alt="" /></Link>
                      <div className="blog-date">
                        <span className="date">28</span>
                        <span className="month">Feb</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><Link to="/blog-details">Focus</Link></span>
                        <span>By <Link to="/blog-details">Ellinien Loma</Link></span>
                      </div>
                      <h4 className="title"><Link to="/blog-details">Building a Stronger Workforce with IT Training</Link>
                      </h4>
                      <Link className="tj-text-btn" to="/blog-details">
                        <span className="btn-inner">
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-item blog-item-2 tj-fade-anim" data-delay="0.2">
                    <div className="blog-thumb img-reveal-2">
                      <Link to="/blog-details"><img src="/assets/images/blog/blog-3.webp" alt="" /></Link>
                      <div className="blog-date">
                        <span className="date">22</span>
                        <span className="month">Jan</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><Link to="/blog-details">Software</Link></span>
                        <span>By <Link to="/blog-details">Ellinien Loma</Link></span>
                      </div>
                      <h4 className="title"><Link to="/blog-details">Optimizing Your IT Budget: Tips and Strategies</Link>
                      </h4>
                      <Link className="tj-text-btn" to="/blog-details">
                        <span className="btn-inner">
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-item blog-item-2 tj-fade-anim" data-delay="0.3">
                    <div className="blog-thumb img-reveal-2">
                      <Link to="/blog-details"><img src="/assets/images/blog/blog-1.webp" alt="" /></Link>
                      <div className="blog-date">
                        <span className="date">20</span>
                        <span className="month">Jan</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><Link to="/blog-details">Solutions</Link></span>
                        <span>By <Link to="/blog-details">Ellinien Loma</Link></span>
                      </div>
                      <h4 className="title"><Link to="/blog-details">The Top 5 IT Challenges Faced by Modern
                          Enterprises</Link>
                      </h4>
                      <Link className="tj-text-btn" to="/blog-details">
                        <span className="btn-inner">
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Blog Section  */}
      
    </>
  );
}
