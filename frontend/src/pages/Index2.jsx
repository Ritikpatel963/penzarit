import React from 'react';
import { Link } from 'react-router-dom';

export default function Index2() {
  return (
    <>

        <div className="top-space-125"></div>
        {/*  start: Banner Section  */}
        <section className="tj-banner-section tj-banner-section-2 fix">
          <div className="hero-bg" data-bg-image="/assets/images/hero/h2-hero-bg.webp"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="banner-content">
                  <h1 className="banner-title tj-split-text-5">
                    Trusted IT Experts Delivering Smart
                    <span>Solutions.</span>
                  </h1>
                  <div className="btn-area">
                    <div className="desc tj-fade-anim"><span>*</span> Team of passionate tech experts delivering innovative
                      IT solutions tailored to help businesses growth.</div>
                    <div className="tj-fade-anim" data-delay=".5">
                      <Link className="tj-primary-btn" to="/service">
                        <span className="btn-text"><span>Explore More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-img-area tj-fade-anim">
            <div className="banner-img">
              <img src="/assets/images/hero/h2-hero-banner.webp" alt="Image" />
              <div className="circle-text-wrap award-circle" data-bg-image="/assets/images/about/award-circle-bg.webp">
                <span className="circle-text" data-bg-image="/assets/images/about/award-circle-text.png"></span>
                <span className="circle-icon"><span><i className="tji-award"></i></span></span>
              </div>
            </div>
          </div>
          <div className="banner-scroll tj-fade-anim" data-delay="1" data-direction="top">
            <a href="#client" className="scroll-down">
              <span className="text">Scroll Down</span>
              <span className="icon"><i className="tji-arrow-down-2"></i></span>
            </a>
          </div>
        </section>
        {/*  end: Banner Section  */}

        {/*  start: Client Section  */}
        <section id="client" className="tj-client-section section-gap-top tj-fade-anim">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="client-content tj-fade-anim">
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

        {/*  start: Service Section  */}
        <section className="tj-service-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading style-2">
                  <span className="sub-title tj-fade-anim"><span>//</span>Explore Services</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-5">Reliable IT Solution for Better <span> & Smarter.</span></h2>
                    <div className="tj-fade-anim d-lg-inline-flex d-none" data-delay="0.1">
                      <Link className="tj-primary-btn mt-20" to="/services">
                        <span className="btn-text"><span>Explore More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-xl-4 col-md-6">
                <div className="service-item service-item-2 tj-fade-anim" data-delay="0.1">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-computer"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><Link to="/service-details">Managed IT Services</Link></h4>
                      <p className="desc">Comprehensive IT management, including monitoring, maintenance, and support to
                        keep your business running smoothly.</p>
                      <Link className="tj-text-btn" to="/service-details">
                        <span className="btn-inner">
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <span className="item-count">01.</span>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="service-item service-item-2 tj-fade-anim" data-delay="0.3">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-cloud"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><Link to="/service-details">Cloud Computing</Link></h4>
                      <p className="desc">Scalable cloud-based services, including migration, storage, and security, for
                        enhanced flexibility and efficiency.</p>
                      <Link className="tj-text-btn" to="/service-details">
                        <span className="btn-inner">
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <span className="item-count">02.</span>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="service-item service-item-2 tj-fade-anim" data-delay="0.5">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-cybersecurity"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><Link to="/service-details">Cybersecurity Solutions</Link></h4>
                      <p className="desc">Advanced security measures, including firewall protection, threat detection, and
                        compliance solutions, to safeguard your business.</p>
                      <Link className="tj-text-btn" to="/service-details">
                        <span className="btn-inner">
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <span className="item-count">03.</span>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="service-item service-item-2 tj-fade-anim" data-delay="0.1">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-consulting"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><Link to="/service-details">IT Consulting & Strategy</Link></h4>
                      <p className="desc">Expert guidance to optimize your IT infrastructure, streamline operations, and
                        drive digital transformation.</p>
                      <Link className="tj-text-btn" to="/service-details">
                        <span className="btn-inner">
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <span className="item-count">04.</span>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="service-item service-item-2 tj-fade-anim" data-delay="0.3">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-development"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><Link to="/service-details">Software Development</Link></h4>
                      <p className="desc">Custom software solutions tailored to your business needs, including web and
                        mobile application development.</p>
                      <Link className="tj-text-btn" to="/service-details">
                        <span className="btn-inner">
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <span className="item-count">05.</span>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="service-item service-item-2 tj-fade-anim" data-delay="0.5">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-network"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><Link to="/service-details">Network Infrastructure</Link></h4>
                      <p className="desc">Designing, implementing, and maintaining secure and high-performance network
                        systems. to driven solution.</p>
                      <Link className="tj-text-btn" to="/service-details">
                        <span className="btn-inner">
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <span className="item-count">06.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Service Section  */}

        {/*  start: About Section  */}
        <section className="tj-about-section tj-about-section-2 section-gap-x">
          <div className="container tj-about-container">
            <div className="row">
              <div className="col-lg-6 col-xxl-7 order-lg-1 order-2">
                <div className="about-left">
                  <div className="about-img">
                    <div className="img-reveal-1">
                      <img src="/assets/images/about/h2-about-banner.webp" alt="Image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xxl-5 order-lg-2 order-1">
                <div className="about-content-area fix">
                  <div className="sec-heading style-2">
                    <span className="sub-title tj-fade-anim"><span>//</span>About Tekmino</span>
                    <h2 className="sec-title tj-split-text-5">
                      Driving Innovation Through AI and New Technology,
                      <span>Delivering Tailored.</span>
                    </h2>
                  </div>
                  <div className="about-bottom">
                    <div className="about-logo tj-fade-anim" data-delay="0.3">
                      <div className="about-logo-icon">
                        <img src="/assets/images/logos/logo-icon.webp" alt="" />
                      </div>
                      <div className="about-logo-text">
                        <img src="/assets/images/logos/logo-text.webp" alt="" />
                      </div>
                    </div>
                    <div className="about-features-wrap tj-fade-anim" data-delay="0.5">
                      <div className="about-features">
                        <div className="about-features-item">
                          <h4 className="title">Our Mission</h4>
                          <p className="desc">Revolutionize the way you work the our solutions designed to meet the
                            challenges of today business lands revolutionize.</p>
                        </div>
                        <div className="about-features-item">
                          <h4 className="title">Our Vision</h4>
                          <p className="desc">Revolutionize the way you work the solutions designed to meet unique
                            challenges of today’s business landscape revolutionize.</p>
                        </div>
                      </div>
                      <div className="tj-fade-anim" data-delay="0.3">
                        <Link className="tj-primary-btn style-2 style-3 mt-15" to="/about">
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tj-countup-section-2 section-gap-bottom pt-90">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="about-funfact funfact-3 tj-fade-anim">
                    <div className="countup-item">
                      <div className="countup-icon">
                        <i className="tji-hand"></i>
                      </div>
                      <div className="inline-content">
                        <span className="counter">10</span>
                        <span className="count-plus">K+</span>
                      </div>
                      <span className="count-text">Engaged Customers</span>
                    </div>
                    <div className="countup-item">
                      <div className="countup-icon">
                        <i className="tji-trophy"></i>
                      </div>
                      <div className="inline-content">
                        <span className="counter">99</span>
                        <span className="count-plus">%</span>
                      </div>
                      <span className="count-text">Customer Success Stories</span>
                    </div>
                    <div className="countup-item">
                      <div className="countup-icon">
                        <i className="tji-team"></i>
                      </div>
                      <div className="inline-content">
                        <span className="counter">80</span>
                        <span className="count-plus">+</span>
                      </div>
                      <span className="count-text">Team of Professionals</span>
                    </div>
                    <div className="countup-item">
                      <div className="countup-icon">
                        <i className="tji-growth"></i>
                      </div>
                      <div className="inline-content">
                        <span className="counter">10</span>
                        <span className="count-plus">x</span>
                      </div>
                      <span className="count-text">More Faster Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: About Section  */}

        {/*  start: Project Section  */}
        <section className="tj-project-section-2 section-gap tj-sticky-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="sec-heading style-2 tj-sticky-item">
                  <span className="sub-title tj-fade-anim"><span>//</span>Recent Projects</span>
                  <h2 className="sec-title tj-split-text-5">Transforming Ideas Into Real Digital <span>Success.</span></h2>
                  <div className="tj-fade-anim" data-delay="0.3">
                    <p className="desc">Custom software solutions tailored to your business needs development.</p>
                  </div>
                  <div className="tj-fade-anim" data-delay="0.5">
                    <Link className="tj-primary-btn" to="/portfolio">
                      <span className="btn-text"><span>Explore More</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="project-wrapper project-wrapper-2">
                  <div className="project-item tj-fade-anim">
                    <div className="project-img img-reveal-2">
                      <Link to="/project-details"> <img src="/assets/images/project/project-3.webp" alt="" /></Link>
                    </div>
                    <div className="project-content">
                      <div className="content-inner">
                        <span className="categories"><Link to="/project-details">Information</Link></span>
                        <h3 className="title"><Link to="/project-details">Digital Growth Strategy</Link></h3>
                        <p className="desc">Many businesses struggle with outdated on-premise systems that limit scalability
                          and flexibility. Our cloud migration service ensures a seamless.</p>
                      </div>
                      <Link className="tj-icon-btn" to="/project-details">
                        <i className="tji-arrow-right-3"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="project-item tj-fade-anim">
                    <div className="project-img img-reveal-2">
                      <Link to="/project-details"> <img src="/assets/images/project/project-2.webp" alt="" /></Link>
                    </div>
                    <div className="project-content">
                      <div className="content-inner">
                        <span className="categories"><Link to="/project-details">Solution</Link></span>
                        <h3 className="title"><Link to="/project-details">Cloud Migration System</Link></h3>
                        <p className="desc">A strong mobile presence is crucial for business growth in today’s digital age.
                          We design and develop custom mobile applications for iOS.</p>
                      </div>
                      <Link className="tj-icon-btn" to="/project-details">
                        <i className="tji-arrow-right-3"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="project-item tj-fade-anim">
                    <div className="project-img img-reveal-2">
                      <Link to="/project-details">
                        <img src="/assets/images/project/project-4.webp" alt="" />
                      </Link>
                    </div>
                    <div className="project-content">
                      <div className="content-inner">
                        <span className="categories"><Link to="/project-details">Solution</Link></span>
                        <h3 className="title"><Link to="/project-details">Mobile App Development</Link></h3>
                        <p className="desc">A strong mobile presence is crucial for business growth in today’s digital age.
                          We design and develop custom mobile applications for iOS.</p>
                      </div>
                      <Link className="tj-icon-btn" to="/project-details">
                        <i className="tji-arrow-right-3"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Project Section  */}

        {/*  start: Testimonial Section  */}
        <section className="tj-testimonial-section-2 section-gap overflow-hidden section-separator">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="sec-heading style-2 sec-heading-centered">
                  <span className="sub-title tj-fade-anim"><span>//</span>Success Stories</span>
                  <h2 className="sec-title tj-split-text-5">Building Success with Client <span>Feedback.</span></h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="testimonial-wrapper testimonial-wrapper-2 tj-fade-anim" data-delay="0.5">
                  <div className="testimonial_slider_2 swiper swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial_item_3">
                          <div className="testimonial_header">
                            <ul className="author_avatar_wrapper">
                              <li>
                                <i className="tji-quote"></i>
                              </li>
                              <li className="author_avatar">
                                <img src="./assets/images/testimonial/client-1.webp" alt="" />
                              </li>
                            </ul>
                            <div className="star-ratings">
                              <div className="fill-ratings" style={{"width":"90%"}}>
                                <span>★★★★★</span>
                              </div>
                              <div className="empty-ratings">
                                <span>★★★★★</span>
                              </div>
                            </div>
                          </div>
                          <div className="testimonial_content">
                            <div className="desc">
                              <p>
                                Partnering with Nexor has been an absolute game-changer for our company. Their team
                                delivered a tailored IT solution that met our unique business needs, and their
                                proactive approach to problem.
                              </p>
                            </div>

                            <div className="author_info">
                              <h5 className="name">Devon Lane</h5>
                              <span className="designation">Co. Founder</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial_item_3">
                          <div className="testimonial_header">
                            <ul className="author_avatar_wrapper">
                              <li>
                                <i className="tji-quote"></i>
                              </li>
                              <li className="author_avatar">
                                <img src="./assets/images/testimonial/client-2.webp" alt="" />
                              </li>
                            </ul>
                            <div className="star-ratings">
                              <div className="fill-ratings" style={{"width":"90%"}}>
                                <span>★★★★★</span>
                              </div>
                              <div className="empty-ratings">
                                <span>★★★★★</span>
                              </div>
                            </div>
                          </div>
                          <div className="testimonial_content">
                            <div className="desc">
                              <p>
                                Nexor truly exceeded our expectations. From the initial consultation to the final
                                implementation, their team provided excellent service and unwavering support. Their
                                ability to integrate.
                              </p>
                            </div>

                            <div className="author_info">
                              <h5 className="name">Cameron Williamson</h5>
                              <span className="designation">Co. Founder</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial_item_3">
                          <div className="testimonial_header">
                            <ul className="author_avatar_wrapper">
                              <li>
                                <i className="tji-quote"></i>
                              </li>
                              <li className="author_avatar">
                                <img src="./assets/images/testimonial/client-3.webp" alt="" />
                              </li>
                            </ul>
                            <div className="star-ratings">
                              <div className="fill-ratings" style={{"width":"90%"}}>
                                <span>★★★★★</span>
                              </div>
                              <div className="empty-ratings">
                                <span>★★★★★</span>
                              </div>
                            </div>
                          </div>
                          <div className="testimonial_content">
                            <div className="desc">
                              <p>
                                When we approached Nexor for help with our technology integration, we were looking for a
                                partner who could not only provide expertise but also deliver tangible
                                results. They did exactly that.
                              </p>
                            </div>

                            <div className="author_info">
                              <h5 className="name">Eleanor Pena</h5>
                              <span className="designation">Co. Founder</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination-area"></div>
                  </div>
                  <div className="testimonial-navigation d-none d-md-inline-flex">
                    <div className="slider-prev" role="button">
                      <span className="anim-icon">
                        <i className="tji-arrow-left-3"></i>
                        <i className="tji-arrow-left-3"></i>
                      </span>
                    </div>
                    <div className="slider-next" role="button">
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
        {/*  end: Testimonial Section  */}

        {/*  start: Working Process Section  */}
        <section className="working-process-section-2 section-gap-x">
          <div className="working-process-section-2-wrap section-gap fix">
            <div className="bg-img" data-bg-image="./assets/images/process/process-2-bg.webp"></div>
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="sec-heading style-2">
                    <span className="sub-title tj-fade-anim"><span>//</span>OUR WORKING PROCESS</span>
                    <h2 className="sec-title tj-split-text-5">Turning Your Business Goals Into Seamless Digital <span>IT
                        Solution.</span></h2>
                    <div className="tj-fade-anim" data-delay="0.3">
                      <p className="desc">Custom software solutions tailored to your business needs development.</p>
                    </div>
                    <div className="tj-fade-anim" data-delay="0.5">
                      <Link className="tj-primary-btn" to="/about">
                        <span className="btn-text"><span>Learn More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-5">
                  <div className="process-wrap-2 active-wrapper tj-fade-anim" data-delay="0.3">
                    <div className="process-border-2"></div>
                    <div className="process-item-2 active-item active">
                      <h4 className="process-step">01</h4>
                      <div className="process-content">
                        <h5 className="title">Deep Discovery & Planning</h5>
                        <p className="desc">Every great solution starts understanding. We take the time to learn about your
                          business, challenges, and goals.</p>
                      </div>
                    </div>
                    <div className="process-item-2 active-item">
                      <h4 className="process-step">02</h4>
                      <div className="process-content">
                        <h5 className="title">Development & Implement.</h5>
                        <p className="desc">Every great solution starts with understanding. We take the time to learn about
                          your business, challenges, and goals.</p>
                      </div>
                    </div>
                    <div className="process-item-2 active-item">
                      <h4 className="process-step">03</h4>
                      <div className="process-content">
                        <h5 className="title">Optimization & Support.</h5>
                        <p className="desc">Every great solution starts with understanding. We take the time to learn about
                          your business, challenges, and goals.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Working Process Section  */}

        {/*  start: Pricing Section  */}
        <section className="tj-pricing-section section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="sec-heading style-2 sec-heading-centered">
                  <span className="sub-title tj-fade-anim"><span>//</span>Best pricing</span>
                  <h2 className="sec-title tj-split-text-5">Pricing Plans to Find the Right <span>IT Support</span></h2>
                  <div className="price_switcher tj-fade-anim" data-delay="1">
                    <p>Monthly</p>
                    <label className="toggle_switcher">
                      <input className="toggle-checkbox" type="checkbox" />
                      <span className="toggle-switch"></span>
                    </label>
                    <p>Yearly <span>(Save 15%)</span></p>
                  </div>
                </div>
                <div className="pricing_items_wrap pricing_items_wrap_2 tj-slide-wrap">
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

        {/*  start: FAQ Section  */}
        <section className="tj-faq-section-2 section-gap section-gap-x fix">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-left">
                  <div className="sec-heading style-2">
                    <span className="sub-title tj-fade-anim"><span>//</span>Read FAQS</span>
                    <h2 className="sec-title tj-split-text-5">Quick Answers For Your Important <span>Questions</span></h2>
                    <div className="tj-fade-anim">
                      <Link className="tj-primary-btn" to="/contact">
                        <span className="btn-text"><span>Contact Us</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                  </div>
                  <div className="faq-contact tj-fade-anim">
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
                <div className="tj_accordion tj_accordion_2" id="tjAccordion01">
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
        <section className="tj-blog-section section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading style-2 sec-heading-centered">
                  <span className="sub-title tj-fade-anim"><span>//</span>Insights & Innovation</span>
                  <h2 className="sec-title tj-split-text-5">Explore Latest Insights, & <span>Innovations.</span></h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="tj_blog_wrap tj_blog_wrap_2">
                  <div className="blog-item tj-fade-anim" data-delay="0.3">
                    <div className="blog-thumb img-reveal-2">
                      <Link to="/blog-details"><img src="/assets/images/blog/blog-1.webp" alt="" /></Link>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><Link to="/blog-details">Solutions</Link></span>
                        <span>By <Link to="/blog-details">Ellinien Loma</Link></span>
                      </div>
                      <h4 className="title">
                        <Link to="/blog-details">How to Successfully Migrate Your Business to the Cloud</Link>
                      </h4>
                      <div className="excerpt">Managed IT Services provide businesses with proactive technology support,
                        ensuring seamless operations and enhanced.</div>
                      <Link className="tj-primary-btn" to="/blog-details">
                        <span className="btn-text"><span>Read More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-item tj-fade-anim" data-delay="0.4" data-direction="left">
                    <div className="blog-thumb img-reveal-2">
                      <Link to="/blog-details"><img src="/assets/images/blog/blog-2.webp" alt="" /></Link>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><Link to="/blog-details">Solutions</Link></span>
                        <span>By <Link to="/blog-details">Ellinien Loma</Link></span>
                      </div>
                      <h4 className="title">
                        <Link to="/blog-details">Building a Stronger Workforce with IT Training</Link>
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
                  <div className="blog-item tj-fade-anim" data-delay="0.4" data-direction="right">
                    <div className="blog-thumb img-reveal-2">
                      <Link to="/blog-details"><img src="/assets/images/blog/blog-3.webp" alt="" /></Link>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><Link to="/blog-details">Solutions</Link></span>
                        <span>By <Link to="/blog-details">Ellinien Loma</Link></span>
                      </div>
                      <h4 className="title">
                        <Link to="/blog-details">Optimizing Your IT Budget: Tips and Strategies</Link>
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

        {/*  start: Marquee Section  */}
        <section className="h3-marquee-section section-gap-x overflow-hidden">
          <div className="container-fluid gx-0">
            <div className="row">
              <div className="col">
                <div className="marquee-slider-2">
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
      
    </>
  );
}
