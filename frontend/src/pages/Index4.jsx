import React from 'react';
import { Link } from 'react-router-dom';

export default function Index4() {
  return (
    <>

        <div className="top-space-30"></div>
        {/*  start: Banner Section  */}
        <section className="tj-banner-section tj-banner-section-3 fix zoom-on-scroll-wrapper">
          <div className="hero-bg" data-bg-image="/assets/images/hero/h4-hero-bg.webp"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="banner-content">
                  <span className="sub-title tj-fade-anim" data-duration="0.5"><i className="tji-subtitle-3"></i>Secure,
                    Scalable & Flexible</span>
                  <h1 className="banner-title tj-split-text-4">Reliable Cloud Solution for Modern Business.</h1>
                  <div className="banner-desc tj-fade-anim" data-delay=".4">Comprehensive IT support, monitoring & digital
                    solution maintenance ensure for more smooth and logical services.</div>
                  <div className="btn-area tj-fade-anim" data-delay=".6">
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
                  <div className="list-area tj-fade-anim" data-delay=".8" data-duration="1" data-direction="left">
                    <ul className="list-style-1">
                      <li>
                        <span><i className="tji-check"></i></span>Secure Payments.
                      </li>
                      <li>
                        <span><i className="tji-check"></i></span>Cloud Support.
                      </li>
                      <li>
                        <span><i className="tji-check"></i></span>Smart Solutions.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="banner-img zoom-on-scroll">
                  <img src="/assets/images/hero/h4-hero-dashboard.webp" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Banner Section  */}

        {/*  start: Client Section  */}
        <section className="tj-client-section h4-client-section section-gap-top">
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
        {/*  end: Client Section  */}

        {/*  start: Choose Section  */}
        <section className="tj-choose-section fix section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading style-3">
                  <span className="sub-title tj-fade-anim"><i className="tji-subtitle-3"></i> Explore Top Features</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-1">Choose Us for Growth and Innovation.</h2>
                    <div className="tj-fade-anim d-none d-lg-inline-flex" data-delay="0.3">
                      <Link className="tj-primary-btn" to="/about">
                        <span className="btn-text"><span>Learn More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-lg-4 col-md-6">
                <div className="choose-box h4-choose tj-fade-anim" data-delay=".3" data-duration="1" data-direction="left">
                  <div className="choose-inner">
                    <div className="choose-img">
                      <img src="/assets/images/features/h4-feature-1.webp" alt="" />
                    </div>
                    <div className="choose-content">
                      <h4 className="title">High End Security</h4>
                      <p className="desc">Users log in securely from anywhere through a laptop or device. We start by
                        connecting your business to a secure reliable.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="choose-box h4-choose tj-fade-anim" data-delay=".3" data-duration="1"
                  data-direction="bottom">
                  <div className="choose-inner">
                    <div className="choose-img">
                      <img src="/assets/images/features/h4-feature-2.webp" alt="" />
                    </div>
                    <div className="choose-content">
                      <h4 className="title">High Speed Server</h4>
                      <p className="desc">Once connected, your data and applications are full encrypted and monitored in
                        real-time. our enterprise super grade.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="choose-box h4-choose tj-fade-anim" data-delay=".3" data-duration="1" data-direction="right">
                  <div className="choose-inner">
                    <div className="choose-img">
                      <img src="/assets/images/features/h4-feature-3.webp" alt="" />
                    </div>
                    <div className="choose-content">
                      <h4 className="title">Multi-region Data</h4>
                      <p className="desc">Our cloud solution grows with you. Easily expand storage, add new users, or
                        integrate advanced tool without investing.</p>
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
        <section className="h4-about-section fix section-gap-x">
          <div className="container-fluid p-0">
            <div className="row rg-30">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="about-left tj-fade-anim" data-delay=".1" data-direction="left">
                  <div className="bg-img" data-bg-image="/assets/images/about/h4-about-bg.png"></div>
                  <div className="about-img">
                    <div className="img-reveal-1">
                      <img src="/assets/images/about/h4-about-img.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <div className="about-content-area tj-fade-anim" data-delay=".1" data-direction="right">
                  <div className="about-content">
                    <div className="sec-heading style-3">
                      <span className="sub-title tj-fade-anim"><i className="tji-subtitle-3"></i>Secure, Scalable &
                        Flexible</span>
                      <h2 className="sec-title tj-split-text-1">Innovating Smarter Cloud Solutions that Secure & Scale for
                        Business.</h2>
                    </div>
                    <div className="tj-fade-anim" data-delay=".1" data-direction="bottom">
                      <p className="desc">
                        We are dedicated to transforming businesses into through innovative and future-ready IT
                        solutions. With a passion for technology and a commitment to excellence, empower.
                      </p>
                    </div>
                    <div className="tj-fade-anim" data-delay=".1" data-direction="bottom">
                      <Link className="tj-primary-btn" to="/about">
                        <span className="btn-text"><span>Talk to Experts</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                    <div className="clients-review-area tj-fade-anim" data-delay=".1" data-direction="bottom">
                      <div className="clients-review-point">
                        <div className="total-point">5.00</div>
                        <span>(Total 2K reviews)</span>
                      </div>
                      <div className="separator-line"></div>
                      <div className="clients-review-rating">
                        <h6 className="title">Clients Ratting:</h6>
                        <div className="review-stars">
                          <span><i className="tji-star"></i></span>
                          <span><i className="tji-star"></i></span>
                          <span><i className="tji-star"></i></span>
                          <span><i className="tji-star"></i></span>
                          <span><i className="tji-star"></i></span>
                        </div>
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
        <div className="tj-service-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered style-3 tj-fade-anim" data-delay=".1"
                  data-direction="bottom">
                  <span className="sub-title tj-fade-anim"><i className="tji-subtitle-3"></i>Cloud in Numbers</span>
                  <h2 className="sec-title tj-split-text-1">Turning Technology into Tangible Results.</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="h4-service-wrap">
                  <div className="service-item service-item-3 hover-item active tj-fade-anim" data-delay=".1"
                    data-direction="bottom">
                    <div className="service-inner">
                      <div className="service-img" data-bg-image="/assets/images/services/h4-service-item-bg.webp"></div>
                      <div className="service-content">
                        <span className="item-count">001.</span>
                        <h4 className="title"><Link to="/service-details">Cloud Computing</Link></h4>
                      </div>
                      <p className="desc">Their are dedicated to transforming businesses into through innovative and future.
                        Every great solution starts with understanding.</p>
                      <Link className="tj-icon-btn" to="/service-details">
                        <i className="tji-arrow-right-2"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="service-item service-item-3 hover-item tj-fade-anim" data-delay=".1"
                    data-direction="bottom">
                    <div className="service-inner">
                      <div className="service-img" data-bg-image="/assets/images/services/h4-service-item-bg-2.webp"></div>
                      <div className="service-content">
                        <span className="item-count">002.</span>
                        <h4 className="title"><Link to="/service-details">Managed IT Services</Link></h4>
                      </div>
                      <p className="desc">Their are dedicated to transforming businesses into through innovative and future.
                        Every great solution starts with understanding.</p>
                      <Link className="tj-icon-btn" to="/service-details">
                        <i className="tji-arrow-right-2"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="service-item service-item-3 hover-item tj-fade-anim" data-delay=".1"
                    data-direction="bottom">
                    <div className="service-inner">
                      <div className="service-img" data-bg-image="/assets/images/services/h4-service-item-bg-3.webp"></div>
                      <div className="service-content">
                        <span className="item-count">003.</span>
                        <h4 className="title"><Link to="/service-details">Network Infrastructure</Link></h4>
                      </div>
                      <p className="desc">Their are dedicated to transforming businesses into through innovative and future.
                        Every great solution starts with understanding.</p>
                      <Link className="tj-icon-btn" to="/service-details">
                        <i className="tji-arrow-right-2"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="service-item service-item-3 hover-item tj-fade-anim" data-delay=".1"
                    data-direction="bottom">
                    <div className="service-inner">
                      <div className="service-img" data-bg-image="/assets/images/services/h4-service-item-bg-4.webp"></div>
                      <div className="service-content">
                        <span className="item-count">004.</span>
                        <h4 className="title"><Link to="/service-details">Network Infrastructure</Link></h4>
                      </div>
                      <p className="desc">Their are dedicated to transforming businesses into through innovative and future.
                        Every great solution starts with understanding.</p>
                      <Link className="tj-icon-btn" to="/service-details">
                        <i className="tji-arrow-right-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-40">
              <Link className="tj-primary-btn" to="/service">
                <span className="btn-text"><span>View All Services</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
              </Link>
            </div>
          </div>
        </div>
        {/*  end: Service Section  */}

        {/*  start: Technologies Section  */}
        <div className="h4-technologies-section section-gap-x">
          <div className="technologies-left">
            <div className="tech-left-area">
              <div className="tech-left-content">
                <div className="sec-heading style-3">
                  <span className="sub-title tj-fade-anim"><i className="tji-subtitle-3"></i>Seamless Integrations</span>
                  <h2 className="sec-title tj-split-text-1">Unified cloud, apps, and service smooth, reliable integrations.
                  </h2>
                  <div className="tj-fade-anim" data-delay=".1" data-direction="bottom">
                    <p className="desc">
                      Our cloud solution integrates smoothly with your favorite platforms and services, including
                      Kubernetes, PostgreSQL, Jenkins, Grafana, and more. Eliminate silos, reduce manual
                      effort.
                    </p>
                  </div>
                  <div className="tj-fade-anim" data-delay=".1" data-direction="bottom">
                    <Link className="tj-primary-btn" to="/about">
                      <span className="btn-text"><span>Explore More</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="technologies-item-wrap-2">
              <div className="scroll-slider">
                <div className="scroll-wrapper">
                  <div className="tech-icon">
                    <img src="/assets/images/icons/asana.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/ovhcloud.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/zoom.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/slack.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/dropbox.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/sendgrid.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/pipedrive.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/microsoft.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/notion.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/gitlab.svg" alt="" />
                  </div>
                </div>
                <div className="scroll-wrapper">
                  <div className="tech-icon">
                    <img src="/assets/images/icons/asana.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/ovhcloud.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/zoom.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/slack.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/dropbox.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/sendgrid.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/pipedrive.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/microsoft.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/notion.svg" alt="" />
                  </div>
                  <div className="tech-icon">
                    <img src="/assets/images/icons/gitlab.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="technologies-right">
            <div className="bg-img" data-bg-image="/assets/images/bg/common-bg.webp"></div>
            <div className="tech-circle-img">
              <div className="img-reveal-3">
                <img src="/assets/images/integration/circle-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/*  end: Technologies Section  */}

        {/*  start: Testimonial Section  */}
        <div className="h4-testimonial-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered style-3 tj-fade-anim" data-delay=".1"
                  data-direction="bottom">
                  <span className="sub-title tj-fade-anim"><i className="tji-subtitle-3"></i>Our Success Stories</span>
                  <h2 className="sec-title tj-split-text-1">Building Success with Our Client Feedback.</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="testimonial-wrapper testimonial-wrapper-3 tj-fade-anim">
                  <div className="quote-icon"><i className="tji-quote"></i></div>
                  <div className="swiper testimonial-slider-4">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="desc">
                            <p>
                              “Tekmino truly exceeded our expectations. From the initial consultation to the final
                              implementation, their team provided excellent service and unwavering support. Their
                              ability to integrate advanced IT solutions into our operations has streamlined our
                              processes.”
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="desc">
                            <p>
                              Working with Tekmino has been a game-changer for our business. Their team's
                              professionalism, attention to detail, and innovative solutions have helped us streamline
                              operations and achieve our goals faster than we imagined. We truly feel like a valued
                              partner.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="desc">
                            <p>
                              Partnering with Tekmino has been an absolute game-changer for our company. Their team
                              delivered a tailored IT solution that met our unique business needs, and their
                              proactive approach to problem and we achieve our goals. We truly feel like a valued
                              partner.
                            </p>
                          </div>
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
                  <div className="swiper client-thumb thumb-slider-2">
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
                  <div className="swiper-pagination-area"></div>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-12 col-lg-3 col-sm-6 tj-fade-anim" data-delay=".1" data-direction="bottom">
                <div className="countup-item h4-countup">
                  <div>
                    <span className="subtitle">Cloud Power</span>
                  </div>
                  <div className="inline-content">
                    <span className="counter">90</span>
                    <span className="count-plus">%</span>
                  </div>
                  <span className="count-text">Over 90% of businesses now run on cloud solutions—showing it’s the
                    standard.</span>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-sm-6 tj-fade-anim" data-delay=".3" data-direction="bottom">
                <div className="countup-item h4-countup">
                  <div>
                    <span className="subtitle">Smart Energy</span>
                  </div>
                  <div className="inline-content">
                    <span className="counter">40</span>
                    <span className="count-plus">%</span>
                  </div>
                  <span className="count-text">Cloud data centers use 40% less energy than traditional setups, making them
                    efficient.</span>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-sm-6 tj-fade-anim" data-delay=".5" data-direction="bottom">
                <div className="countup-item h4-countup">
                  <div>
                    <span className="subtitle">Data Flow</span>
                  </div>
                  <div className="inline-content">
                    <span className="counter">3.8</span>
                    <span className="count-plus">Q</span>
                  </div>
                  <span className="count-text">Every day, the cloud processes 3.5 quintillion bytes of data, powering
                    global.</span>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-sm-6 tj-fade-anim" data-delay=".7" data-direction="bottom">
                <div className="countup-item h4-countup">
                  <div>
                    <span className="subtitle">Quick Backup</span>
                  </div>
                  <div className="inline-content">
                    <span className="counter">0.1</span>
                    <span className="count-plus">S</span>
                  </div>
                  <span className="count-text">Cloud technology allows instant backups, keeping critical business data
                    safe.</span>
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

        {/*  start: FAQ Section  */}
        <section className="tj-faq-section-2 tj-faq-section-3 section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-left">
                  <div className="sec-heading style-3">
                    <span className="sub-title tj-fade-anim"><i className="tji-subtitle-3"></i>Read Common FAQ</span>
                    <h2 className="sec-title tj-split-text-1">Quick Help for Common Questions Here.</h2>
                    <div className="tj-fade-anim">
                      <Link className="tj-primary-btn style-2" to="/contact">
                        <span className="btn-text"><span>Contact Us</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                  </div>
                  <div className="faq-contact faq-contact-2 tj-fade-anim">
                    <h5 className="title">Getting started is easy! Simply reach out us through our contact form or give us a
                      call & we’ll schedule.</h5>
                    <div className="faq-contact-item">
                      <div className="faq-contact-number-wrapper">
                        <p className="desc">Call us now</p>
                        <h5 className="faq-contact-number"><a href="tel:+18883338181">+1 (888) 333-8181</a></h5>
                      </div>
                      <ul className="faq-contact-list">
                        <li>
                          <img src="./assets/images/testimonial/client-1.webp" alt="" />
                        </li>
                        <li>
                          <i className="tji-phone-2"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tj_accordion tj_accordion_2 tj_accordion_3" id="tjAccordion01">
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

        {/*  start: Cta Section  */}
        <section className="h4-cta-section section-gap-x">
          <div className="bg-img" data-bg-image="./assets/images/bg/h4-cta-bg.webp"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="cta-area tj-fade-anim">
                  <div className="sec-heading sec-heading-centered style-3">
                    <span className="sub-title"><i className="tji-subtitle-3"></i>Subscribe Newsletter</span>
                    <h2 className="sec-title tj-split-text-1">Get <span>Updates</span> Straight Your Inbox Subscribe.</h2>
                    <div className="tj-fade-anim" data-delay=".1" data-direction="bottom">
                      <p className="desc">Cloud data centers use 40% less energy than traditional setups, making them
                        efficient.</p>
                    </div>
                    <div className="subscribe-form cta-form tj-fade-anim" data-delay=".1" data-direction="bottom">
                      <form action="#">
                        <input type="email" name="email" placeholder="Enter email here..." />
                        <button className="tj-primary-btn" type="submit">
                          <span className="btn-text"><span>Send Now</span></span>
                          <span className="btn-icon"><i className="tji-bell"></i></span>
                        </button>
                      </form>
                    </div>
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
