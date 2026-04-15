import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const assetPath = (path) => `${import.meta.env.BASE_URL}assets/${path}`;

  return (
    <>

        <div className="top-space-30"></div>
        {/*  start: Breadcrumb Section  */}
        <section className="tj-page-header fix">
          <div className="hero-bg" data-bg-image="/assets/images/hero/hero-bg.webp"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tj-page-header-content text-center">
                  <h1 className="tj-page-title tj-split-text-2">About Us</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <Link to="/">Home</Link>
                    </span>
                    <span><i className="tji-arrow-right"></i></span>
                    <span>
                      <span>About Us</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Breadcrumb Section  */}

        {/*  start: Choose Section  */}
        <section className="tj-choose-section fix section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading">
                  <span className="sub-title tj-fade-anim">Panzer IT — Make IT Secure</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-1 about-mission-title">
                      Mission: Continuous Secure Data Accessibility and Availability
                    </h2>
                    <div className="tj-fade-anim">
                      {/* <p className="desc">Our services are customized to meet your unique.</p> */}
                    </div>
                    {/* <div className="tj-fade-anim" data-delay="0.5">
                      <Link className="tj-primary-btn d-none d-lg-inline-flex" to="/about">
                        <span className="btn-text"><span>Learn More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div> */}
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
                      <h4 className="title">Pioneer in IT Security Solutions</h4>
                      <p className="desc">Panzer IT delivers affordable IT Security Solutions — from Antivirus to APT, EPS to EDR, and Backup to DLP — ensuring the best user experience. Ranked among India's top technology and software distribution companies.</p>
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
                      <h4 className="title"> Trusted Reseller Network Across India</h4>
                      <p className="desc">With 2,000+ resellers spanning India's vast geography, Panzer IT brings over a decade of channel distribution expertise. We offer the best policies, channel-friendly environments, dedicated managers, and round-the-clock support.</p>
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
                      <h4 className="title">360° IT Security for Every Business
Panzer IT</h4>
                      <p className="desc">Delivers complete Endpoint Security, Backup, DRM, DLP, and Encryption with the best ROI and TCO. Serving Enterprises, Government, SMB, and SOHO clients through trusted channel partners across India.</p>
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
                      <h4 className="title"> Experience & Pan-India Presence
</h4>
                      <p className="desc">With 150+ man-years of IT security experience, Panzer IT is headquartered in Mumbai with professionals in New Delhi, Kolkata, and Bangalore — and associates in all major Indian cities nationwide.</p>
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
                  <div className="sec-heading">
                    <span className="sub-title tj-fade-anim">[ About Panzer It]</span>
                    <h2 className="sec-title tj-split-text-1">Panzer IT is a pioneer in IT security solutions with over 150 man-years of industry experience. </h2>
                  </div>
                  <div className="about-bottom">
                  
                    <div className="about-features-wrap tj-fade-anim" data-delay="0.5">
                      <div className="about-features">
                        <div className="about-features-item">
                          <h4 className="title">Our Mission</h4>
                          <p className="desc">Our Mission
To ensure continuous, secure data accessibility for every business by delivering affordable and complete IT security solutions to enterprises, government, SMB, and SOHO clients across India.</p>
                        </div>
                        <div className="about-features-item">
                          <h4 className="title">Our Vision</h4>
                          <p className="desc">Our Vision
To become India's most trusted IT security provider by making advanced data security accessible to every reseller and end user at the best price with unmatched support.</p>
                        </div>
                      </div>
                      {/* <div className="tj-fade-anim" data-delay="0.3">
                        <Link className="tj-primary-btn style-2 style-3 mt-15" to="/about">
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                        </Link>
                      </div> */}
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
                    <h2 className="sec-title tj-split-text-3">Transform Your Business in 6 Simple Steps.</h2>
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
                          <h4 className="title">Data Leak Prevention</h4>
                          <p className="desc">
Panzer IT offers Somansa DLP to discover, classify, and protect sensitive business data. It controls data transfer channels, detects confidential content, prevents unauthorized leaks, and secures data with built-in encryption.</p>
                        </div>
                      </div>
                      <div className="process-item style-2 tj-slide-left">
                        <span className="process-step">02</span>
                        <div className="process-content">
                          <h4 className="title">Employee Monitoring</h4>
                          <p className="desc">FalconGaze SecureTower enables detailed employee monitoring with intelligent activity reports. It boosts workplace productivity, tracks gathered information, and supports remote PC monitoring for complete organizational visibility.</p>
                        </div>
                      </div>
                      <div className="process-item style-2 tj-slide-left">
                        <span className="process-step">03</span>
                        <div className="process-content">
                          <h4 className="title">Advance Anti-Malware & Zero-Day Threat Prevention</h4>
                          <p className="desc">Emsisoft Anti-Malware provides next-gen, dual-engine protection against ransomware, zero-day threats, and unknown attacks. It scans data traffic and behavior with multi-layer security, trusted by security professionals worldwide.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                   <div className="row">
                  <div className="col-12">
                    <div className="process-wrap tj-slide-wrap">
                      <div className="process-item style-2 tj-slide-left">
                        <span className="process-step">01</span>
                        <div className="process-content">
                          <h4 className="title">Vulnerability Assessment & Penetration Testing </h4>
                          <p className="desc">
SecPoint offers unparalleled vulnerability management with robust penetration testing across all OS, devices, and websites. It supports unlimited scanning with straightforward, user-friendly licensing for businesses of all sizes.</p>
                        </div>
                      </div>
                      <div className="process-item style-2 tj-slide-left">
                        <span className="process-step">02</span>
                        <div className="process-content">
                          <h4 className="title">Remote Support & Remote Control
</h4>
                          <p className="desc">
Netop Remote Control provides secure remote connection, control, and support trusted by the world's largest organizations. Leading banks, defence agencies, and enterprises rely on Netop for safe and reliable remote access.</p>
                        </div>
                      </div>
                      <div className="process-item style-2 tj-slide-left">
                        <span className="process-step">03</span>
                        <div className="process-content">
                          <h4 className="title">Data Security & Insider Threat Detection
</h4>
                          <p className="desc">Varonis protects critical business data through advanced threat detection and response. It covers data classification, compliance, ransomware protection, insider threat monitoring, and external threat defense across the entire organization.</p>
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


        {/*  start: Team Section  */}
        {/* <section className="tj-team-section section-gap">
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
                      <Link className="tj-primary-btn d-none d-lg-inline-flex" to="/team">
                        <span className="btn-text"><span>More Member</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
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
                    <h4 className="title"><Link to="/team-details">Eade Marren</Link></h4>
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
                    <h4 className="title"><Link to="/team-details">Savannah Ngueen</Link></h4>
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
                    <h4 className="title"><Link to="/team-details">Cameron William</Link></h4>
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
        </section> */}
        {/*  end: Team Section  */}

          {/*  start: Testimonial Section  */}
      <div className="h5-testimonial-section section-gap section-gap-x">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="sec-heading sec-heading-centered style-3 tj-fade-anim"
                data-delay=".1"
                data-direction="bottom"
              >
                <span className="sub-title tj-fade-anim">
                  <i className="tji-subtitle-4"></i>Our Success Stories
                </span>
                <h2 className="sec-title tj-split-text-1">
                  Trusted Experts in Cyber Threat <span>Protection.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="testimonial-wrapper-4 tj-fade-anim">
                <div className="scroll-slider">
                  <div className="scroll-wrapper">
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-1.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Devon Lane</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            Partnering with Tekmino has been an absolute
                            game-changer for our company. Their team delivered a
                            tailored IT solution that met our unique business
                            needs, and their proactive approach to problem.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-2.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Cameron Williamson</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            Tekmino truly exceeded our expectations. From the
                            initial consultation to the final implementation,
                            their team provided excellent service and unwavering
                            support. Their ability to integrate.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-3.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Eleanor Pena</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            When we approached Nexor for help with our
                            technology integration, we were looking for a
                            partner who could not only provide expertise but
                            also deliver tangible results. They did exactly
                            that.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="scroll-wrapper">
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-1.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Devon Lane</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            Partnering with Tekmino has been an absolute
                            game-changer for our company. Their team delivered a
                            tailored IT solution that met our unique business
                            needs, and their proactive approach to problem.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-2.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Cameron Williamson</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            Tekmino truly exceeded our expectations. From the
                            initial consultation to the final implementation,
                            their team provided excellent service and unwavering
                            support. Their ability to integrate.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-3.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Eleanor Pena</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            When we approached Nexor for help with our
                            technology integration, we were looking for a
                            partner who could not only provide expertise but
                            also deliver tangible results. They did exactly
                            that.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scroll-slider">
                  <div className="scroll-wrapper">
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-1.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Devon Lane</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            Partnering with Tekmino has been an absolute
                            game-changer for our company. Their team delivered a
                            tailored IT solution that met our unique business
                            needs, and their proactive approach to problem.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-2.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Cameron Williamson</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            Tekmino truly exceeded our expectations. From the
                            initial consultation to the final implementation,
                            their team provided excellent service and unwavering
                            support. Their ability to integrate.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-3.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Eleanor Pena</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            When we approached Nexor for help with our
                            technology integration, we were looking for a
                            partner who could not only provide expertise but
                            also deliver tangible results. They did exactly
                            that.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="scroll-wrapper">
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-1.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Devon Lane</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            Partnering with Tekmino has been an absolute
                            game-changer for our company. Their team delivered a
                            tailored IT solution that met our unique business
                            needs, and their proactive approach to problem.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-2.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Cameron Williamson</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            Tekmino truly exceeded our expectations. From the
                            initial consultation to the final implementation,
                            their team provided excellent service and unwavering
                            support. Their ability to integrate.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-3.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Eleanor Pena</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            When we approached Nexor for help with our
                            technology integration, we were looking for a
                            partner who could not only provide expertise but
                            also deliver tangible results. They did exactly
                            that.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scroll-slider">
                  <div className="scroll-wrapper">
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-1.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Devon Lane</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            Partnering with Tekmino has been an absolute
                            game-changer for our company. Their team delivered a
                            tailored IT solution that met our unique business
                            needs, and their proactive approach to problem.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-2.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Cameron Williamson</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            Tekmino truly exceeded our expectations. From the
                            initial consultation to the final implementation,
                            their team provided excellent service and unwavering
                            support. Their ability to integrate.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-3.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Eleanor Pena</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            When we approached Nexor for help with our
                            technology integration, we were looking for a
                            partner who could not only provide expertise but
                            also deliver tangible results. They did exactly
                            that.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="scroll-wrapper">
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-1.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Devon Lane</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            Partnering with Tekmino has been an absolute
                            game-changer for our company. Their team delivered a
                            tailored IT solution that met our unique business
                            needs, and their proactive approach to problem.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-2.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Cameron Williamson</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            Tekmino truly exceeded our expectations. From the
                            initial consultation to the final implementation,
                            their team provided excellent service and unwavering
                            support. Their ability to integrate.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_item_3">
                      <div className="testimonial_header">
                        <div className="author_avatar_wrapper">
                          <div className="author_avatar">
                            <img
                              src={assetPath(
                                "images/testimonial/client-3.webp",
                              )}
                              alt=""
                            />
                          </div>
                          <div className="author_info">
                            <h5 className="name">Eleanor Pena</h5>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                        <div className="star-ratings">
                          <div
                            className="fill-ratings"
                            style={{ width: "90%" }}
                          >
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
                            When we approached Nexor for help with our
                            technology integration, we were looking for a
                            partner who could not only provide expertise but
                            also deliver tangible results. They did exactly
                            that.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-btn tj-fade-anim">
                <Link className="tj-primary-btn" to="/about">
                  <span className="btn-text">
                    <span>Explore More</span>
                  </span>
                  <span className="btn-icon">
                    <i className="tji-arrow-right-2"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/*  start: FAQ Section  */}
        <section className="tj-faq-section-2 tj-faq-section-3 section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-left">
                  <div className="sec-heading">
                    <span className="sub-title tj-fade-anim">[ Read FAQS ]</span>
                    <h2 className="sec-title tj-split-text-1">Quick Answers For Your Important Questions</h2>
                    <div className="tj-fade-anim">
                      <Link className="tj-primary-btn" to="/contact">
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
