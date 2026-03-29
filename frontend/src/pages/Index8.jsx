import React from 'react';
import { Link } from 'react-router-dom';

export default function Index8() {
  return (
    <>

        {/*  start: Banner Section  */}
        <section className="tj-h8-banner-section fix">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xxl-5 col-lg-6">
                <div className="tj-h8-banner-content">
                  <h1 className="tj-h8-banner-title tj-split-text-5">
                    Innovating the Future, <span><img className="tj-zoom-anim" data-delay=".7"
                        src="/assets/images/icons/h8-torch.svg" alt="torch" /></span> One Line of Code at a Time.
                  </h1>
                  <div className="tj-h8-banner-subscribe tj-fade-anim" data-delay=".6">
                    <div className="subscribe-form cta-form">
                      <form action="#">
                        <input type="email" name="email" placeholder="Enter email here..." />
                        <button className="tj-primary-btn" type="submit">
                          <span className="btn-text"><span>Send Now</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-6">
                <div className="tj-h8-banner-img-area tj-fade-anim" data-delay=".3">
                  <div className="customers-box tj-bounce tj-fade-anim" data-delay=".6" data-direction="left">
                    <div className="customers">
                      <ul>
                        <li><img src="/assets/images/testimonial/client-1.webp" alt="Image" /></li>
                        <li><img src="/assets/images/testimonial/client-2.webp" alt="Image" /></li>
                        <li><img src="/assets/images/testimonial/client-3.webp" alt="Image" /></li>
                        <li><img src="/assets/images/testimonial/client-4.webp" alt="Image" /></li>
                      </ul>
                    </div>
                    <div className="customers-bottom">
                      <h6 className="customers-text">Chosen leaders business</h6>
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
                    </div>
                  </div>
                  <div className="banner-img">
                    <img src="/assets/images/hero/h8-hero-img.webp" alt="Image" />
                  </div>
                  <div className="banner-shape-img tj-bounce-x tj-fade-anim" data-delay=".6" data-direction="right">
                    <img src="/assets/images/hero/h8-hero-img-2.png" alt="Image" />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="banner-scroll h8-scroll tj-fade-anim" data-delay=".8">
                  <a href="#client" className="scroll-down">
                    <span className="icon"><i className="tji-arrow-down-2"></i></span>
                    <span className="text">Scroll Down</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tj-h8-banner-shape">
            <div className="shape-1"><img src="/assets/images/shapes/h8-banner-shpae-1.png" alt="shape" /></div>
            <div className="shape-2"><img src="/assets/images/shapes/h8-banner-shpae-2.png" alt="shape" /></div>
          </div>
        </section>
        {/*  end: Banner Section  */}
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
        {/*  start: Choose Section  */}
        <section className="tj-choose-section fix section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim" data-delay=".2">[ Why Choose Us ]</span>
                  <h2 className="sec-title tj-split-text-1">Redefining the Future Digital Finance</h2>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-xl-4 col-md-6">
                <div className="h8-choose-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="bottom">
                  <div className="choose-box">
                    <span className="choose-number">001.</span>
                    <div className="choose-icon">
                      <i className="tji-thumbs-up"></i>
                    </div>
                    <div className="choose-content">
                      <h4 className="title">Proven Track Record</h4>
                      <p className="desc">With a portfolio of successful projects and satisfied clients, we have a
                        reputation.</p>
                    </div>
                    <div className="chosse-btn">
                      <a className="tj-text-btn" href="#">
                        <span className="btn-inner">
                          <span className="btn-icon">
                            <span><i className="tji-arrow-right-4"></i></span>
                          </span>
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon">
                            <span><i className="tji-arrow-right-4"></i></span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="h8-choose-box tj-fade-anim" data-delay=".5" data-duration="1" data-direction="bottom">
                  <div className="choose-box">
                    <span className="choose-number">002.</span>
                    <div className="choose-icon">
                      <i className="tji-rocket"></i>
                    </div>
                    <div className="choose-content">
                      <h4 className="title">Future Technologies</h4>
                      <p className="desc">Stay ahead of the competition with AI, cloud computing, and automation solutions.
                      </p>
                    </div>
                    <div className="chosse-btn">
                      <a className="tj-text-btn" href="#">
                        <span className="btn-inner">
                          <span className="btn-icon">
                            <span><i className="tji-arrow-right-4"></i></span>
                          </span>
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon">
                            <span><i className="tji-arrow-right-4"></i></span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="h8-choose-box tj-fade-anim" data-delay=".7" data-duration="1" data-direction="bottom">
                  <div className="choose-box">
                    <span className="choose-number">003.</span>
                    <div className="choose-icon">
                      <i className="tji-hand-2"></i>
                    </div>
                    <div className="choose-content">
                      <h4 className="title">24/7 Support</h4>
                      <p className="desc">Stay ahead of the competition with AI, cloud computing, and automation solutions.
                      </p>
                    </div>
                    <div className="chosse-btn">
                      <a className="tj-text-btn" href="#">
                        <span className="btn-inner">
                          <span className="btn-icon">
                            <span><i className="tji-arrow-right-4"></i></span>
                          </span>
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon">
                            <span><i className="tji-arrow-right-4"></i></span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-lg-none text-center mt-40 tj-fade-anim" data-delay=".7">
              <Link className="tj-primary-btn" to="/about">
                <span className="btn-text"><span>Learn More</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
              </Link>
            </div>
          </div>
        </section>
        {/*  end: Choose Section  */}

        {/*  start: About Section  */}
        <section className="tj-about-section h8-about fix section-gap section-gap-x">
          <div className="container">
            <div className="row rg-40">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="h8-about-left">
                  <div className="h8-about-img">
                    <div className="img-reveal-2">
                      <img src="/assets/images/about/h8-about.webp" alt="about" />
                    </div>
                  </div>
                  <div className="h8-counter tj-fade-anim" data-delay=".3" data-duration="1" data-direction="right">
                    <div className="countup-item">
                      <div className="inline-content">
                        <span className="counter">13</span>
                        <span className="count-plus">+</span>
                      </div>
                      <span className="count-text">Years of Experience</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <div className="h8-about-content-area">
                  <div className="h8-about-content">
                    <div className="sec-heading">
                      <span className="sub-title tj-fade-anim" data-delay=".2">[ About our Tekmino ]</span>
                      <h2 className="sec-title tj-split-text-1">Innovating Smarter Cloud Solutions that Secure & Scale for
                        Business.</h2>
                    </div>
                    <div className="tj-fade-anim" data-delay=".3" data-direction="bottom">
                      <p className="desc">
                        We are dedicated to transforming businesses into through innovative and future-ready in IT
                        solutions. With a passion for technology and a commitment to excellence, empower
                        for work. We are dedicated to transforming businesses into empower.
                      </p>
                    </div>
                    <div className="clients-review-area tj-fade-anim" data-delay=".5" data-direction="bottom">
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
                      <div className="separator-line"></div>
                      <div className="clients-review-point">
                        <div className="total-point">5.00</div>
                        <span>(Total 2K reviews)</span>
                      </div>
                    </div>
                    <div className="h8-about-btn-wrap tj-fade-anim" data-delay=".7" data-direction="bottom">
                      <Link className="tj-primary-btn" to="/about">
                        <span className="btn-text"><span>Explore More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h8-about-shape">
            <img src="/assets/images/shapes/h8-about-shape.png" alt="shape" />
          </div>
        </section>
        {/*  end: About Section  */}

        {/*  start: Service Section  */}
        <div className="tj-service-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim" data-delay=".2">[ Explore services ]</span>
                  <h2 className="sec-title tj-split-text-1">Smart Services for Smart Businesses.</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="h8-service-wrap">
                  <div className="service-item service-item-8 tj-fade-anim" data-delay=".2" data-direction="bottom">
                    <div className="service-inner">
                      <div className="service-content">
                        <div className="service-icon">
                          <i className="tji-cloud"></i>
                        </div>
                        <h4 className="title"><Link to="/service-details">Cloud Computing</Link></h4>
                      </div>
                      <div className="desc-wrap">
                        <p className="desc">Their are dedicated to transforming businesses into through innovative and
                          future. Every great solution starts with understanding.</p>
                        <div className="categories">
                          <a href="#">Growth</a>
                          <a href="#">Success</a>
                          <a href="#">Innovate</a>
                        </div>
                        <Link className="tj-icon-btn d-lg-none" to="/service-details">
                          <i className="tji-arrow-bold-right"></i>
                        </Link>
                      </div>
                      <Link className="tj-icon-btn d-none d-lg-flex" to="/service-details">
                        <i className="tji-arrow-bold-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="service-item service-item-8 tj-fade-anim" data-delay=".2" data-direction="bottom">
                    <div className="service-inner">
                      <div className="service-content">
                        <div className="service-icon">
                          <i className="tji-consulting"></i>
                        </div>
                        <h4 className="title"><Link to="/service-details">Managed IT Services</Link></h4>
                      </div>
                      <div className="desc-wrap">
                        <p className="desc">Their are dedicated to transforming businesses into through innovative and
                          future. Every great solution starts with understanding.</p>
                        <div className="categories">
                          <a href="#">Growth</a>
                          <a href="#">Success</a>
                          <a href="#">Innovate</a>
                        </div>
                        <Link className="tj-icon-btn d-lg-none" to="/service-details">
                          <i className="tji-arrow-bold-right"></i>
                        </Link>
                      </div>
                      <Link className="tj-icon-btn d-none d-lg-flex" to="/service-details">
                        <i className="tji-arrow-bold-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="service-item service-item-8 tj-fade-anim" data-delay=".2" data-direction="bottom">
                    <div className="service-inner">
                      <div className="service-content">
                        <div className="service-icon">
                          <i className="tji-computer"></i>
                        </div>
                        <h4 className="title"><Link to="/service-details">Network Infrastructure</Link></h4>
                      </div>
                      <div className="desc-wrap">
                        <p className="desc">Their are dedicated to transforming businesses into through innovative and
                          future. Every great solution starts with understanding.</p>
                        <div className="categories">
                          <a href="#">Growth</a>
                          <a href="#">Success</a>
                          <a href="#">Innovate</a>
                        </div>
                        <Link className="tj-icon-btn d-lg-none" to="/service-details">
                          <i className="tji-arrow-bold-right"></i>
                        </Link>
                      </div>
                      <Link className="tj-icon-btn d-none d-lg-flex" to="/service-details">
                        <i className="tji-arrow-bold-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="service-item service-item-8 tj-fade-anim" data-delay=".2" data-direction="bottom">
                    <div className="service-inner">
                      <div className="service-content">
                        <div className="service-icon">
                          <i className="tji-development"></i>
                        </div>
                        <h4 className="title"><Link to="/service-details">Software Development</Link></h4>
                      </div>
                      <div className="desc-wrap">
                        <p className="desc">Their are dedicated to transforming businesses into through innovative and
                          future. Every great solution starts with understanding.</p>
                        <div className="categories">
                          <a href="#">Growth</a>
                          <a href="#">Success</a>
                          <a href="#">Innovate</a>
                        </div>
                        <Link className="tj-icon-btn d-lg-none" to="/service-details">
                          <i className="tji-arrow-bold-right"></i>
                        </Link>
                      </div>
                      <Link className="tj-icon-btn d-none d-lg-flex" to="/service-details">
                        <i className="tji-arrow-bold-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-40 tj-fade-anim" data-delay=".3">
              <Link className="tj-primary-btn" to="/service">
                <span className="btn-text"><span>View All Services</span></span>
                <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
              </Link>
            </div>
          </div>
        </div>
        {/*  end: Service Section  */}

        {/*  start: Video Section  */}
        <div className="tj-video-section h8-video section-gap-x">
          <div className="video-content-area">
            <div className="video-bg img-parallax">
              <img src="/assets/images/bg/h8-video-bg.webp" alt="Image" />
            </div>
            <div className="h8-video-content-wrap">
              <div className="h8-video-content">
                <div className="sec-heading">
                  <span className="sub-title tj-fade-anim" data-delay=".2">[ Explore services ]</span>
                  <h2 className="sec-title tj-split-text-1">The Power Behind Our Tech.</h2>
                </div>
                <div className="video-btn-wrap tj-fade-anim" data-delay=".2">
                  <div className="video-wrap">
                    <a className="video-btn circle-ripple video-popup" data-autoplay="true" data-vbtype="video"
                      data-maxwidth="1200px"
                      href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados">
                      <span className="video-icon"><i className="tji-play"></i></span>
                    </a>
                  </div>
                  <span className="video-text">Play Our Reels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  end: Video Section  */}

        {/*  start: Testimonial Section  */}
        <section className="tj-h8-testimonial section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading">
                  <span className="sub-title tj-fade-anim" data-delay=".2">[ Clients Testimonials ]</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-1">Hear From Clients Testimonials.</h2>
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
          <div className="container-fluid p-md-0">
            <div className="row">
              <div className="col-12">
                <div className="testimonial-wrapper-5 h8-testimonial tj-fade-anim">
                  <div className="h8-testimonial-slider swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
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
                                implementation, their team provided excellent service and unwavering support.
                                Their ability to integrate. Nexor truly exceeded expectations.
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
                      </div>
                      <div className="swiper-slide">
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
                                implementation, their team provided excellent service and unwavering support.
                                Their ability to integrate. Nexor truly exceeded expectations.
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
                      <div className="swiper-slide">
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
                                implementation, their team provided excellent service and unwavering support.
                                Their ability to integrate. Nexor truly exceeded expectations.
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
                      </div>
                      <div className="swiper-slide">
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
                                implementation, their team provided excellent service and unwavering support.
                                Their ability to integrate. Nexor truly exceeded expectations.
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
                      <div className="swiper-slide">
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
                                implementation, their team provided excellent service and unwavering support.
                                Their ability to integrate. Nexor truly exceeded expectations.
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
                    <div className="swiper-pagination-area style-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Testimonial Section  */}

        {/*  start: Project Section  */}
        <section className="tj-project-section h8-projcet section-gap section-gap-x">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim" data-delay=".2">[ Explore Projects ]</span>
                  <h2 className="sec-title tj-split-text-1">Transforming Ideas Into Real Digital Success.</h2>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-12 col-md-6 col-xl-6">
                <div className="project-item h8-project-item tj-fade-anim" data-delay=".3" data-duration="1"
                  data-direction="left">
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
              </div>
              <div className="col-12 col-md-6 col-xl-6">
                <div className="project-item h8-project-item tj-fade-anim" data-delay=".3" data-duration="1"
                  data-direction="right">
                  <div className="project-img">
                    <img src="/assets/images/project/project-3.webp" alt="" />
                  </div>
                  <div className="project-content">
                    <div className="content-inner">
                      <span className="categories"><Link to="/project-details">Solution</Link></span>
                      <h4 className="title"><Link to="/project-details">Digital Growth Strategy</Link></h4>
                    </div>
                    <Link className="tj-icon-btn" to="/project-details">
                      <i className="tji-arrow-right-3"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-6">
                <div className="project-item h8-project-item tj-fade-anim" data-delay=".3" data-duration="1"
                  data-direction="left">
                  <div className="project-img">
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
              <div className="col-12 col-md-6 col-xl-6">
                <div className="project-item h8-project-item tj-fade-anim" data-delay=".3" data-duration="1"
                  data-direction="right">
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
              </div>
            </div>
          </div>
          <div className="h8-project-more">
            <Link className="tj-primary-btn" to="/project">
              <span className="btn-text"><span>Explore More</span></span>
              <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
            </Link>
          </div>
        </section>
        {/*  end: Project Section  */}

        {/*  start: Blog Section  */}
        <section className="tj-blog-section section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading">
                  <span className="sub-title tj-fade-anim">[ Our Latest blogs ]</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-1">Explore Latest Insights, & Innovations.</h2>
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
            <div className="row">
              <div className="col-12">
                <div className="h8-blog-wrapper tj-fade-anim">
                  <div className="h8-blog-slider swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="blog-item h8-blog-item">
                          <div className="blog-thumb">
                            <Link to="/blog-details"><img src="/assets/images/blog/blog-1.webp" alt="" /></Link>
                          </div>
                          <div className="blog-date">
                            <span className="date">28</span>
                            <span className="month">Feb</span>
                          </div>
                          <div className="blog-content">
                            <div className="blog-meta">
                              <span className="categories"><Link to="/blog-details">Solutions</Link></span>
                              <span>By <Link to="/blog-details">Ellinien Loma</Link></span>
                            </div>
                            <h4 className="title"><Link to="/blog-details">How to Successfully Migrate Your Business to
                                the Cloud</Link></h4>
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
                      <div className="swiper-slide">
                        <div className="blog-item h8-blog-item">
                          <div className="blog-thumb">
                            <Link to="/blog-details"><img src="/assets/images/blog/blog-2.webp" alt="" /></Link>
                          </div>
                          <div className="blog-date">
                            <span className="date">28</span>
                            <span className="month">Feb</span>
                          </div>
                          <div className="blog-content">
                            <div className="blog-meta">
                              <span className="categories"><Link to="/blog-details">Focus</Link></span>
                              <span>By <Link to="/blog-details">Ellinien Loma</Link></span>
                            </div>
                            <h4 className="title"><Link to="/blog-details">Building a Stronger Workforce with IT
                                Training</Link></h4>
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
                      <div className="swiper-slide">
                        <div className="blog-item h8-blog-item">
                          <div className="blog-thumb">
                            <Link to="/blog-details"><img src="/assets/images/blog/blog-3.webp" alt="" /></Link>
                          </div>
                          <div className="blog-date">
                            <span className="date">28</span>
                            <span className="month">Feb</span>
                          </div>
                          <div className="blog-content">
                            <div className="blog-meta">
                              <span className="categories"><Link to="/blog-details">Software</Link></span>
                              <span>By <Link to="/blog-details">Ellinien Loma</Link></span>
                            </div>
                            <h4 className="title"><Link to="/blog-details">Optimizing Your IT Budget: Tips and
                                Strategies</Link></h4>
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
                    <div className="swiper-pagination-area style-2"></div>
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
