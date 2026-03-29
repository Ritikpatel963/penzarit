import React from 'react';
import { Link } from 'react-router-dom';

export default function Service() {
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
                  <h1 className="tj-page-title tj-split-text-2">Services</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <Link to="/">Home</Link>
                    </span>
                    <span><i className="tji-arrow-right"></i></span>
                    <span>
                      <span>Services</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Breadcrumb Section  */}

        {/*  start: Service Section  */}
        <section className="tj-service-section section-gap">
          <div className="container">
            <div className="row rg-30">
              <div className="col-xl-4 col-md-6">
                <div className="service-item service-item-2">
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
                <div className="service-item service-item-2">
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
                <div className="service-item service-item-2">
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
                <div className="service-item service-item-2">
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
                <div className="service-item service-item-2">
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
                <div className="service-item service-item-2">
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

        {/*  start: Contact Section  */}
        <section className="tj-contact-section fix section-gap section-gap-x">
          <div className="bg-img" data-bg-image="/assets/images/bg/common-bg-2.webp"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-5">
                <div className="contact-left">
                  <div className="sec-heading">
                    <span className="sub-title tj-fade-anim">[ Get In Touch ]</span>
                    <h2 className="sec-title tj-split-text-1">Have any Questions on Mind? Get in Touch for Market Experts.
                    </h2>
                    <div className="tj-fade-anim" data-delay="0.3">
                      <Link className="tj-primary-btn mt-25 d-none d-lg-inline-flex" to="/contact">
                        <span className="btn-text"><span>Contact Us Now</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
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

        {/*  start: Pricing Section  */}
        <section className="tj-pricing-section section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim">[ Best pricing ]</span>
                  <h2 className="sec-title tj-split-text-1">Pricing Plans to Find the Right IT Support</h2>
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

        {/*  start: Client Section  */}
        <section id="client" className="tj-client-section section-gap section-separator">
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
