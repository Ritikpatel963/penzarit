import React from "react";
import { Link } from "react-router-dom";

export default function Index5() {
  const assetPath = (path) => `${import.meta.env.BASE_URL}assets/${path}`;
  const serviceCards = [
    {
      icon: "tji-computer",
      title: "Managed IT Services",
      description:
        "Comprehensive IT management, including monitoring, maintenance, and support to keep your business running smoothly.",
    },
    {
      icon: "tji-cloud",
      title: "Cloud Computing",
      description:
        "Scalable cloud-based services, including migration, storage, and security, for enhanced flexibility and efficiency.",
    },
    {
      icon: "tji-cybersecurity",
      title: "Cybersecurity Solutions",
      description:
        "Advanced security measures, including firewall protection, threat detection, and compliance solutions, to safeguard your business.",
    },
    {
      icon: "tji-development",
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business needs, including web and mobile application development.",
    },
  ];
  return (
    <>
      {/*  start: Banner Section  */}
      <section className="tj-banner-section h5-banner-section fix">
        <div
          className="hero-bg"
          data-bg-image={assetPath("images/bg/common-bg-3.webp")}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-5">
              <div className="banner-content">
                <span className="sub-title tj-fade-anim" data-duration="0.3">
                  <i className="tji-subtitle-4"></i> Fast & Best IT Security
                  Solution Provider in India
                </span>
                <h1 className="banner-title tj-split-text-5">
                  SECURE YOUR DATA
                </h1>
                <div className="tj-fade-anim" data-delay="0.7">
                  <p className="banner-desc">
                    PCs & Servers are connected with each other more than ever.
                    And threats are increasingly more advance with cutting-edge
                    technology. Data is being targeted, be it on mobile,
                    endpoint, server, cloud, data center or NAS etc.{" "}
                  </p>
                </div>
                <div className="btn-area tj-fade-anim" data-delay="1">
                  <Link className="tj-primary-btn" to="/contact">
                    <span className="btn-text">
                      <span>Contact Now</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-2"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-7">
              <div className="banner-img-area">
                <div
                  className="banner-img tj-fade-anim"
                  data-delay="0.3"
                  data-direction="bottom"
                >
                  <img
                    src={assetPath("images/hero/h5-hero-img.webp")}
                    alt="Image"
                  />
                </div>
                <div
                  className="banner-img-2 tj-fade-anim"
                  data-delay="0.3"
                  data-direction="top"
                >
                  <img
                    src={assetPath("images/hero/h5-hero-img-2.webp")}
                    alt="Image"
                  />
                </div>
                <div className="box-item-wrap">
                  <div
                    className="box-item tj-fade-anim"
                    data-delay="0.9"
                    data-direction="right"
                  >
                    <div className="box-item-inner">
                      <img src={assetPath("images/icons/eye.svg")} alt="" />
                      <h2 className="title">24/7</h2>
                      <span className="text">Real Time Monitor.</span>
                    </div>
                    <img src={assetPath("images/hero/line-1.png")} alt="" />
                  </div>
                  <div
                    className="box-item box-item-2 tj-fade-anim"
                    data-delay="0.9"
                    data-direction="left"
                  >
                    <div className="box-item-inner">
                      <img src={assetPath("images/icons/target.svg")} alt="" />
                      <h2 className="title">
                        <span className="counter">99</span>
                        <span className="count-plus">%</span>
                      </h2>
                      <span className="text">Detection Power.</span>
                    </div>
                    <img src={assetPath("images/hero/line-2.png")} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="banner-scroll tj-fade-anim"
          data-delay="1.2"
          data-direction="top"
        >
          <a href="#client" className="scroll-down">
            <span className="text">Scroll Down</span>
            <span className="icon">
              <i className="tji-arrow-down-2"></i>
            </span>
          </a>
        </div>
        <div className="blur-shape-wrap">
          <div className="blur-shape">
            <img src={assetPath("images/shapes/h5-blur-1.png")} alt="" />
          </div>
          <div className="blur-shape blur-shape-2">
            <img src={assetPath("images/shapes/h5-blur-2.png")} alt="" />
          </div>
        </div>
      </section>
      {/*  end: Banner Section  */}

      {/*  start: Client Section  */}
      <section id="client" className="tj-client-section section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-heading sec-heading-centered style-3">
                <span className="sub-title tj-fade-anim">
                  <i className="tji-subtitle-4"></i>Trusted Clients
                </span>
                <h2 className="sec-title tj-split-text-1">
                  India's Most Trusted IT Security Partner
                </h2>
              </div>
            </div>
            <div className="col-12">
              <div className="client-slider-wrap">
                <div className="scroll-slider">
                  <div className="scroll-wrapper">
                    <div className="client-logo">
                      <img src={assetPath("images/brands/1.png")} alt="Image" />
                    </div>
                    <div className="client-logo">
                      <img src={assetPath("images/brands/2.png")} alt="Image" />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/3.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/4.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/5.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/6.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/7.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/8.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/9.webp")}
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="scroll-wrapper">
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/10.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/11.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/12.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img src={assetPath("images/brands/1.png")} alt="Image" />
                    </div>
                    <div className="client-logo">
                      <img src={assetPath("images/brands/2.png")} alt="Image" />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/3.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/4.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/5.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/6.webp")}
                        alt="Image"
                      />
                    </div>
                  </div>
                </div>
                <div className="scroll-slider" dir="rtl">
                  <div className="scroll-wrapper">
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/7.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/8.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/9.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/10.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/11.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/12.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img src={assetPath("images/brands/1.png")} alt="Image" />
                    </div>
                    <div className="client-logo">
                      <img src={assetPath("images/brands/2.png")} alt="Image" />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/3.webp")}
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="scroll-wrapper">
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/4.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/5.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/6.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/7.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/8.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/9.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/10.webp")}
                        alt="Image"
                      />
                    </div>
                    <div className="client-logo">
                      <img
                        src={assetPath("images/brands/12.webp")}
                        alt="Image"
                      />
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
      <div className="h5-service-section section-gap section-separator-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-heading style-3">
                <span className="sub-title tj-fade-anim">
                  <i className="tji-subtitle-4"></i> Explore Services
                </span>
                <div className="sec-heading-inner">
                  <h2 className="sec-title tj-split-text-1">
                    Guarding Your Business from <span>Online Threat.</span>
                  </h2>
                  <div className="tj-fade-anim" data-delay="0.1">
                    <p className="desc">
                      We are dedicated transforming businesses into through
                      innovative.
                    </p>
                  </div>
                  <div className="tj-fade-anim" data-delay="0.3">
                    <Link
                      className="tj-primary-btn d-none d-lg-inline-flex"
                      to="/service"
                    >
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
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="service-slider-wrapper tj-fade-anim">
                <div className="swiper service-slider">
                  <div className="swiper-wrapper">
                    {[...serviceCards, ...serviceCards].map(
                      (service, index) => (
                        <div
                          className="swiper-slide"
                          key={`${service.title}-${index}`}
                        >
                          <div className="service-item service-item-4">
                            <div className="service-inner">
                              <div className="service-icon">
                                <i className={service.icon}></i>
                              </div>
                              <div className="service-content">
                                <h4 className="title">
                                  <Link to="/service-details">
                                    {service.title}
                                  </Link>
                                </h4>
                                <p className="desc">{service.description}</p>
                              </div>
                            </div>
                            <span className="item-count">
                              {String(index + 1).padStart(2, "0")}.
                            </span>
                            <div className="service-btn">
                              <Link
                                className="tj-text-btn"
                                to="/service-details"
                              >
                                <span className="btn-inner">
                                  <span className="btn-icon">
                                    <span>
                                      <i className="tji-arrow-right-4"></i>
                                    </span>
                                  </span>
                                  <span className="btn-text">
                                    <span>Learn More</span>
                                  </span>
                                  <span className="btn-icon">
                                    <span>
                                      <i className="tji-arrow-right-4"></i>
                                    </span>
                                  </span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="nav-pagiation-wrap">
                      <div className="slider-prev">
                        <span className="anim-icon">
                          <i className="tji-arrow-left-3"></i>
                          <i className="tji-arrow-left-3"></i>
                        </span>
                      </div>
                      <div className="swiper-pagination-area style-2 m-0"></div>
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
          <div className="d-md-none text-center mt-40">
            <Link className="tj-primary-btn" to="/service">
              <span className="btn-text">
                <span>Learn More</span>
              </span>
              <span className="btn-icon">
                <i className="tji-arrow-right-2"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/*  end: Service Section  */}

      {/*  start: Secure Section  */}
      <section className="tj-secure-section fix section-gap section-separator-2">
        <div className="secure-wrap">
          <div className="secure-item">
            <div
              className="secure-img-wrap tj-fade-anim"
              data-direction="left"
              data-bg-image={assetPath("images/secure/secure-bg-1.webp")}
            >
              <div className="secure-img" data-tilt>
                <div className="img-reveal-2">
                  <img
                    src={assetPath("images/secure/secure-img-1.webp")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="secure-content">
              <div className="sec-heading style-3 tj-fade-anim">
                <span className="sub-title">
                  <i className="tji-subtitle-4"></i> Secure Access
                </span>
                <h2 className="sec-title tj-split-text-1">
                  Panzer IT Provides 360° Solutions
                </h2>
              </div>
              <div className="tj-fade-anim" data-delay="0.3">
                <p className="desc">
                  We at Panzer IT, do exactly this using advance technologies by
                  multiple vendors across the Globe. Continuous Secure Data
                  Accessibility & Availability. Which makes us Best IT Security
                  Solution Provider in India.
                </p>
              </div>
              <div className="tj-fade-anim" data-delay="0.5">
                <div className="about-funfact">
                  <div className="countup-item">
                    <div className="inline-content">
                      <span className="counter">360</span>
                      <span className="count-plus">°</span>
                    </div>
                    <span className="count-text">Solution Coverage</span>
                  </div>
                  <div className="countup-item">
                    <div className="inline-content">
                      <span className="counter">30</span>
                      <span className="count-plus">+</span>
                    </div>
                    <span className="count-text">Associate Brands</span>
                  </div>
                </div>
              </div>
              <div className="tj-fade-anim" data-delay="0.7">
                <Link className="tj-primary-btn mt-30" to="/contact">
                  <span className="btn-text">
                    <span>Contact Us</span>
                  </span>
                  <span className="btn-icon">
                    <i className="tji-arrow-right-2"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="secure-item">
            <div
              className="secure-img-wrap tj-fade-anim"
              data-direction="right"
              data-bg-image={assetPath("images/secure/secure-bg-2.webp")}
            >
              <div className="secure-img" data-tilt>
                <div className="img-reveal-2">
                  <img
                    src={assetPath("images/secure/secure-img-2.webp")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="secure-content">
              <div className="sec-heading style-3 tj-fade-anim">
                <span className="sub-title">
                  <i className="tji-subtitle-4"></i> Solutions We Offer
                </span>
                <h2 className="sec-title tj-split-text-1">
                  Our Technology Partners
                </h2>
              </div>
              <div className="tj-fade-anim" data-delay="0.3">
                <p className="desc">
                  Panzer IT provide 360⁰ solution to achieve the core of IT.
                  Starting from Endpoint Security, Firewall, Automated Data
                  Backup, Disaster Recovery Management, NAS, SAN, Cloud Storage,
                  Virtualization, Data Leakage Prevention, Human Resource
                  Activity Tracking, Employee Monitoring, Network Monitoring,
                  Vulnerability & Advance Persistent Threat Prevention, Zero-Day
                  Threats, Targeted Attacks, APT, EDR & even Unknown Threats.
                </p>
              </div>
              <div className="tj-fade-anim" data-delay="0.5">
                <div className="about-funfact">
                  <div className="countup-item">
                    <div className="inline-content">
                      <span className="counter">24/7</span>
                    </div>
                    <span className="count-text">Real Time Monitor</span>
                  </div>
                  <div className="countup-item">
                    <div className="inline-content">
                      <span className="counter">PAN</span>
                    </div>
                    <span className="count-text">India Presence</span>
                  </div>
                </div>
              </div>
              <div className="tj-fade-anim" data-delay="0.7">
                <Link className="tj-primary-btn mt-30" to="/contact">
                  <span className="btn-text">
                    <span>Contact Us</span>
                  </span>
                  <span className="btn-icon">
                    <i className="tji-arrow-right-2"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  end: Secure Section  */}

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
      {/*  end: Testimonial Section  */}

      {/*  start: Pricing Section  */}

      {/*  end: Pricing Section  */}

      {/*  start: Technologies Section  */}
      <div className="h5-technologies-section section-gap section-gap-x fix">
        <div
          className="bg-img"
          data-bg-image={assetPath("images/bg/common-bg-3.webp")}
        ></div>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <div className="sec-heading sec-heading-centered style-3">
                <span className="sub-title tj-fade-anim">
                  <i className="tji-subtitle-4"></i>Seamless Integrations
                </span>
                <h2 className="sec-title tj-split-text-1">
                  Protecting Every App Through Seamless{" "}
                  <span>Integration.</span>
                </h2>
                <div className="tj-fade-anim" data-delay="0.3">
                  <p className="desc">
                    Comprehensive IT support, monitoring & digital solution
                    maintenance ensure more smooth.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="h5-technologies-wrap">
                <div className="scroll-slider">
                  <div className="scroll-wrapper">
                    <div className="tech-item">
                      <div className="tech-icon">
                        <img src={assetPath("images/icons/asana.svg")} alt="" />
                      </div>
                      <div className="tech-content">
                        <h5 className="title">Asana</h5>
                      </div>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon">
                        <img
                          src={assetPath("images/icons/ovhcloud.svg")}
                          alt=""
                        />
                      </div>
                      <div className="tech-content">
                        <h5 className="title">OVHcloud</h5>
                      </div>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon">
                        <img src={assetPath("images/icons/zoom.svg")} alt="" />
                      </div>
                      <div className="tech-content">
                        <h5 className="title">Zoom</h5>
                      </div>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon">
                        <img src={assetPath("images/icons/slack.svg")} alt="" />
                      </div>
                      <div className="tech-content">
                        <h5 className="title">Slack</h5>
                      </div>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon">
                        <img
                          src={assetPath("images/icons/dropbox.svg")}
                          alt=""
                        />
                      </div>
                      <div className="tech-content">
                        <h5 className="title">Dropbox</h5>
                      </div>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon">
                        <img
                          src={assetPath("images/icons/sendgrid.svg")}
                          alt=""
                        />
                      </div>
                      <div className="tech-content">
                        <h5 className="title">Sendgrid</h5>
                      </div>
                    </div>
                  </div>
                  <div className="scroll-wrapper">
                    <div className="tech-item">
                      <div className="tech-icon">
                        <img src={assetPath("images/icons/asana.svg")} alt="" />
                      </div>
                      <div className="tech-content">
                        <h5 className="title">Asana</h5>
                      </div>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon">
                        <img
                          src={assetPath("images/icons/ovhcloud.svg")}
                          alt=""
                        />
                      </div>
                      <div className="tech-content">
                        <h5 className="title">OVHcloud</h5>
                      </div>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon">
                        <img src={assetPath("images/icons/zoom.svg")} alt="" />
                      </div>
                      <div className="tech-content">
                        <h5 className="title">Zoom</h5>
                      </div>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon">
                        <img src={assetPath("images/icons/slack.svg")} alt="" />
                      </div>
                      <div className="tech-content">
                        <h5 className="title">Slack</h5>
                      </div>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon">
                        <img
                          src={assetPath("images/icons/dropbox.svg")}
                          alt=""
                        />
                      </div>
                      <div className="tech-content">
                        <h5 className="title">Dropbox</h5>
                      </div>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon">
                        <img
                          src={assetPath("images/icons/sendgrid.svg")}
                          alt=""
                        />
                      </div>
                      <div className="tech-content">
                        <h5 className="title">Sendgrid</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blur-shape-wrap">
          <div className="blur-shape">
            <img src={assetPath("images/shapes/h5-blur-1.png")} alt="" />
          </div>
          <div className="blur-shape blur-shape-2">
            <img src={assetPath("images/shapes/h5-blur-2.png")} alt="" />
          </div>
        </div>
      </div>
      {/*  end: Technologies Section  */}

      {/*  start: FAQ Section  */}
      <section className="h5-faq-section section-gap fix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-heading style-3">
                <span className="sub-title tj-fade-anim">
                  <i className="tji-subtitle-4"></i>Read Common FAQ
                </span>
                <div className="sec-heading-inner">
                  <h2 className="sec-title tj-split-text-1">
                    Quick Help for Common <span>Questions</span> Here.
                  </h2>
                  <div className="tj-fade-anim">
                    <Link className="tj-primary-btn" to="/faq">
                      <span className="btn-text">
                        <span>View More</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-2"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div
                className="tj_accordion tj_accordion_2 tj_accordion_3"
                id="tjAccordion01"
              >
                <div className="accordion_item active tj-fade-anim">
                  <button
                    className="accordion_title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-1"
                    aria-expanded="true"
                  >
                    What services does your company offer?
                  </button>
                  <div
                    id="accordion-1"
                    className="collapse show"
                    data-bs-parent="#tjAccordion01"
                  >
                    <div className="accordion-body accordion_content">
                      Our solutions are tailored to meet your unique business
                      needs, improving efficiency, reducing costs, and enabling
                      seamless digital transformation to boost growth and
                      productivity and stay up-to-date with the latest
                      technologies. The consultation phase and keep you
                      informed.
                    </div>
                  </div>
                </div>
                <div className="accordion_item tj-fade-anim">
                  <button
                    className="accordion_title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-2"
                    aria-expanded="false"
                  >
                    How can your IT solutions help my business?
                  </button>
                  <div
                    id="accordion-2"
                    className="collapse"
                    data-bs-parent="#tjAccordion01"
                  >
                    <div className="accordion-body accordion_content">
                      Our solutions are tailored to meet your unique business
                      needs, improving efficiency, reducing costs, and enabling
                      seamless digital transformation to boost growth and
                      productivity and stay up-to-date with the latest
                      technologies. The consultation phase and keep you
                      informed.
                    </div>
                  </div>
                </div>
                <div className="accordion_item tj-fade-anim">
                  <button
                    className="accordion_title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-3"
                    aria-expanded="false"
                  >
                    Do you provide support after project completion?
                  </button>
                  <div
                    id="accordion-3"
                    className="collapse"
                    data-bs-parent="#tjAccordion01"
                  >
                    <div className="accordion-body accordion_content">
                      Our solutions are tailored to meet your unique business
                      needs, improving efficiency, reducing costs, and enabling
                      seamless digital transformation to boost growth and
                      productivity and stay up-to-date with the latest
                      technologies. The consultation phase and keep you
                      informed.
                    </div>
                  </div>
                </div>
                <div className="accordion_item tj-fade-anim">
                  <button
                    className="accordion_title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-4"
                    aria-expanded="false"
                  >
                    How long does it take to implement an IT solution?
                  </button>
                  <div
                    id="accordion-4"
                    className="collapse"
                    data-bs-parent="#tjAccordion01"
                  >
                    <div className="accordion-body accordion_content">
                      Our solutions are tailored to meet your unique business
                      needs, improving efficiency, reducing costs, and enabling
                      seamless digital transformation to boost growth and
                      productivity and stay up-to-date with the latest
                      technologies. The consultation phase and keep you
                      informed.
                    </div>
                  </div>
                </div>
                <div className="accordion_item tj-fade-anim">
                  <button
                    className="accordion_title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-5"
                    aria-expanded="false"
                  >
                    Is my data secure with your solutions?
                  </button>
                  <div
                    id="accordion-5"
                    className="collapse"
                    data-bs-parent="#tjAccordion01"
                  >
                    <div className="accordion-body accordion_content">
                      Our solutions are tailored to meet your unique business
                      needs, improving efficiency, reducing costs, and enabling
                      seamless digital transformation to boost growth and
                      productivity and stay up-to-date with the latest
                      technologies. The consultation phase and keep you
                      informed.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape-wrap">
          <div className="shape tj-fade-anim" data-direction="left">
            <img src={assetPath("images/shapes/faq-shap-1.svg")} alt="" />
          </div>
          <div className="shape shape-2 tj-fade-anim" data-direction="right">
            <img src={assetPath("images/shapes/faq-shap-2.svg")} alt="" />
          </div>
        </div>
      </section>
      {/*  end: FAQ Section  */}
    </>
  );
}
