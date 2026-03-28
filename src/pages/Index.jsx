import React from 'react';

export default function Index() {
  return (
    <>

        <div className="top-space-30"></div>
        {/*  start: Banner Section  */}
        <section className="tj-banner-section fix">
          <div className="hero-bg" data-bg-image="assets/images/hero/hero-bg.webp"></div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-5 col-lg-6">
                <div className="banner-content">
                  <span className="sub-title tj-fade-anim" data-duration="0.5">[ Transforming Ideas ]</span>
                  <h1 className="banner-title tj-split-text-4">Innovative Tech Solutions for Business.</h1>
                  <div className="btn-area tj-fade-anim" data-delay=".6">
                    <a className="tj-primary-btn" href="service.html">
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
                    <img src="assets/images/hero/hero-img.webp" alt="Image" />
                  </div>
                  <div className="trusted tj-bounce tj-fade-anim" data-delay="1" data-direction="left">
                    <span className="icon"><i className="tji-shield"></i></span>
                    <span className="text">Trusted by 800+ Tech Giants.</span>
                  </div>
                  <div className="customers-box tj-fade-anim" data-delay="0.6" data-direction="right">
                    <div className="customers">
                      <ul>
                        <li><img src="assets/images/testimonial/client-1.webp" alt="Image" /></li>
                        <li><img src="assets/images/testimonial/client-2.webp" alt="Image" /></li>
                        <li><img src="assets/images/testimonial/client-3.webp" alt="Image" /></li>
                        <li><img src="assets/images/testimonial/client-4.webp" alt="Image" /></li>
                      </ul>
                    </div>
                    <div className="customers-bottom">
                      <div className="rating-area">
                        <div className="customers-number">4.9</div>
                        <div className="star-ratings">
                          <div className="fill-ratings" style={{"width":"90%"}}>
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
        {/*  end: Banner Section  */}

        {/*  start: Client Section  */}
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

        {/*  start: Choose Section  */}
        <section className="tj-choose-section fix section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading">
                  <span className="sub-title tj-fade-anim">[ Why Choose Us ]</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-1">Reliable IT Solution, for Best Results.</h2>
                    <div className="tj-fade-anim" data-delay="0.1">
                      <p className="desc">Our services are customized to meet your unique.</p>
                    </div>
                    <div className="tj-fade-anim" data-delay="0.3">
                      <a className="tj-primary-btn d-none d-lg-inline-flex" href="about.html">
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
              <a className="tj-primary-btn" href="about.html">
                <span className="btn-text"><span>Learn More</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
              </a>
            </div>
          </div>
        </section>
        {/*  end: Choose Section  */}

        {/*  start: About Section  */}
        <section className="tj-about-section fix section-gap section-gap-x">
          <div className="bg-img" data-bg-image="assets/images/bg/common-bg.webp"></div>
          <div className="container">
            <div className="row rg-30">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="about-left tj-fade-anim" data-delay=".1" data-direction="left">
                  <div className="about-img">
                    <img src="assets/images/about/about-img-1.webp" alt="Image" />
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
                          <img src="assets/images/testimonial/client-1.webp" alt="Image" />
                        </div>
                        <div className="author-text">
                          <h6 className="author-name">Burdee Nicolas</h6>
                          <span>Co. Founder</span>
                        </div>
                      </div>
                      <div className="signature">
                        <img src="assets/images/about/signature.webp" alt="Image" />
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
                  <a className="tj-primary-btn style-2 mt-25" href="about.html">
                    <span className="btn-text"><span>Learn More</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                  </a>
                  <div className="circle-text-wrap award-circle" data-bg-image="assets/images/about/award-circle-bg.webp">
                    <span className="circle-text" data-bg-image="assets/images/about/award-circle-text.png"></span>
                    <span className="circle-icon"><span><i className="tji-award"></i></span></span>
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
            <div className="row rg-30">
              <div className="col-lg-4 col-md-6">
                <div className="sec-heading mt-30 mb-0 tj-fade-anim" data-delay=".1" data-direction="bottom">
                  <span className="sub-title tj-fade-anim">[ Explore Services ]</span>
                  <h2 className="sec-title tj-split-text-1">Reliable IT Solution for a Smarter.</h2>
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
                        <li><i className="tji-check-2"></i>Transformation planning</li>
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
                        <li><i className="tji-check-2"></i>Transformation planning</li>
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
        {/*  end: Service Section  */}

        {/*  start: Video Section  */}
        <div className="tj-video-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="video-content-area">
                  <div className="video-bg img-parallax">
                    <img src="assets/images/bg/video-bg.webp" alt="Image" />
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
        {/*  end: Video Section  */}

        {/*  start: Testimonial Section  */}
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
                            <img src="assets/images/testimonial/client-1.webp" alt="Image" />
                          </div>
                          <div className="author-header">
                            <h4 className="title">Mevon Lane</h4>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="swiper-slide thumb-item">
                          <div className="thumb-img">
                            <img src="assets/images/testimonial/client-2.webp" alt="Image" />
                          </div>
                          <div className="author-header">
                            <h4 className="title">Ralph Edwards</h4>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="swiper-slide thumb-item">
                          <div className="thumb-img">
                            <img src="assets/images/testimonial/client-3.webp" alt="Image" />
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
                                <div className="fill-ratings" style={{"width":"90%"}}>
                                  <span>★★★★★</span>
                                </div>
                                <div className="empty-ratings">
                                  <span>★★★★★</span>
                                </div>
                              </div>
                            </div>
                            <div className="desc">
                              <p>
                                Working with Tkmino has been a game-changer for our business. Their team's
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
                                <div className="fill-ratings" style={{"width":"90%"}}>
                                  <span>★★★★★</span>
                                </div>
                                <div className="empty-ratings">
                                  <span>★★★★★</span>
                                </div>
                              </div>
                            </div>
                            <div className="desc">
                              <p>
                                Working with Tkmino has been a game-changer for our business. Their team's
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
                                <div className="fill-ratings" style={{"width":"90%"}}>
                                  <span>★★★★★</span>
                                </div>
                                <div className="empty-ratings">
                                  <span>★★★★★</span>
                                </div>
                              </div>
                            </div>
                            <div className="desc">
                              <p>
                                Working with Tkmino has been a game-changer for our business. Their team's
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
        {/*  end: Testimonial Section  */}

        {/*  start: Team Section  */}
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
                    <img src="assets/images/team/team-1.webp" alt="Image" />
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
                    <img src="assets/images/team/team-2.webp" alt="Image" />
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
                    <img src="assets/images/team/team-3.webp" alt="Image" />
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
                    <img src="assets/images/team/team-4.webp" alt="Image" />
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
        {/*  end: Team Section  */}

        {/*  start: Technologies Section  */}
        <div className="tj-technologies-section section-gap section-separator">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim">[ Our Technologies ]</span>
                  <h2 className="sec-title tj-split-text-1">Effortless IT Integration for Business.</h2>
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
                          <img src="assets/images/icons/gitlab.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Gitlab</h5>
                          <p className="desc">Support more Multiple repositories to one or more channels.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="assets/images/icons/ovhcloud.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">OVHcloud</h5>
                          <p className="desc">OVH legally OVH Groupe SAS, is a French cloud compute company.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="assets/images/icons/chatgpt.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">ChatGPT</h5>
                          <p className="desc">Offering assistance with answering frequently asked questions.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="assets/images/icons/notion.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Notion</h5>
                          <p className="desc">You can create rich-text document customizable formatting, images.</p>
                        </div>
                      </div>
                    </div>
                    <div className="scroll-wrapper">
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="assets/images/icons/gitlab.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Gitlab</h5>
                          <p className="desc">Support more Multiple repositories to one or more channels.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="assets/images/icons/ovhcloud.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">OVHcloud</h5>
                          <p className="desc">OVH legally OVH Groupe SAS, is a French cloud compute company.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="assets/images/icons/chatgpt.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">ChatGPT</h5>
                          <p className="desc">Offering assistance with answering frequently asked questions.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="assets/images/icons/notion.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Notion</h5>
                          <p className="desc">You can create rich-text document customizable formatting, images.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="scroll-slider" dir="rtl">
                    <div className="scroll-wrapper">
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="assets/images/icons/zoom.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Zoom</h5>
                          <p className="desc">For Video conferencing platform used for virtual meeting.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="assets/images/icons/slack.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Slack</h5>
                          <p className="desc">Slack usesd channels to organize communication around topics.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="assets/images/icons/clickup.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Clickup</h5>
                          <p className="desc">ClickUp is a productivity platform for our task management.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="assets/images/icons/dropbox.svg" alt="" />
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
                          <img src="assets/images/icons/zoom.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Zoom</h5>
                          <p className="desc">For Video conferencing platform used for virtual meeting.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="assets/images/icons/slack.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Slack</h5>
                          <p className="desc">Slack usesd channels to organize communication around topics.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="assets/images/icons/clickup.svg" alt="" />
                        </div>
                        <div className="tech-content">
                          <h5 className="title">Clickup</h5>
                          <p className="desc">ClickUp is a productivity platform for our task management.</p>
                        </div>
                      </div>
                      <div className="tech-item">
                        <div className="tech-icon">
                          <img src="assets/images/icons/dropbox.svg" alt="" />
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
        {/*  end: Technologies Section  */}

        {/*  start: Project Section  */}
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
                            <img src="assets/images/project/project-1.webp" alt="" />
                          </div>
                          <div className="project-content">
                            <div className="content-inner">
                              <span className="categories"><a href="project-details.html">Solution</a></span>
                              <h4 className="title"><a href="project-details.html">Business Transformation</a></h4>
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
                            <img src="assets/images/project/project-2.webp" alt="" />
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
                            <img src="assets/images/project/project-3.webp" alt="" />
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
                            <img src="assets/images/project/project-4.webp" alt="" />
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
        {/*  end: Project Section  */}

        {/*  start: Working Process Section  */}
        <section className="tj-working-process-section section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim">[ Our Working Process ]</span>
                  <h2 className="sec-title tj-split-text-1">Transform Your Business in 3 Simple Steps.</h2>
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
        </section>
        {/*  end: Working Process Section  */}

        {/*  start: Contact Section  */}
        <section className="tj-contact-section fix section-gap section-gap-x">
          <div className="bg-img" data-bg-image="assets/images/bg/common-bg-2.webp"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-5">
                <div className="contact-left">
                  <div className="sec-heading">
                    <span className="sub-title tj-fade-anim">[ Get In Touch ]</span>
                    <h2 className="sec-title tj-split-text-1">Have any Questions on Mind? Get in Touch for Market Experts.
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
                <div className="contact-form style-2 tj-fade-anim" data-delay="0.3" data-direction="right">
                  <h3 className="title">Drop Us a <span>Line.</span></h3>
                  <form id="contact-form-2">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-input">
                          <label className="cf-label">Full Name <span>*</span></label>
                          <input type="text" name="cfName2" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-input">
                          <label className="cf-label">Email Address <span>*</span></label>
                          <input type="email" name="cfEmail2" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-input">
                          <label className="cf-label">Phone number <span>*</span></label>
                          <input type="text" name="cfPhone2" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-input">
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
                        <div className="form-input message-input">
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Contact Section  */}

        {/*  start: Blog Section  */}
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
                    <a href="blog-details.html"><img src="assets/images/blog/blog-1.webp" alt="" /></a>
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
                    <a href="blog-details.html"><img src="assets/images/blog/blog-2.webp" alt="" /></a>
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
                    <h4 className="title"><a href="blog-details.html">Building a Stronger Workforce with IT Training</a>
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
                    <a href="blog-details.html"><img src="assets/images/blog/blog-3.webp" alt="" /></a>
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
        {/*  end: Blog Section  */}

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
      
    </>
  );
}
