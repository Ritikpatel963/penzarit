import React from 'react';
import { Link } from 'react-router-dom';

export default function Solution() {
  return (
    <>
      <div className="top-space-30"></div>

      <section className="tj-page-header fix">
        <div className="hero-bg" data-bg-image="/assets/images/hero/hero-bg.webp"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tj-page-header-content text-center">
                <h1 className="tj-page-title tj-split-text-2">Solution</h1>
                <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                  <span><i className="tji-home"></i></span>
                  <span>
                    <Link to="/">Home</Link>
                  </span>
                  <span><i className="tji-arrow-right"></i></span>
                  <span>
                    <span>Solution</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    <h4 className="title"><Link to="/solution">Managed IT Solution</Link></h4>
                    <p className="desc">
                      Complete IT support, monitoring, maintenance, and business continuity services designed to keep
                      your infrastructure stable and efficient.
                    </p>
                    <Link className="tj-text-btn" to="/solution">
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
                    <h4 className="title"><Link to="/solution">Cloud Solution</Link></h4>
                    <p className="desc">
                      Scalable cloud migration, storage, backup, and security services that improve flexibility,
                      resilience, and business performance.
                    </p>
                    <Link className="tj-text-btn" to="/solution">
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
                    <h4 className="title"><Link to="/solution">Cybersecurity Solution</Link></h4>
                    <p className="desc">
                      Advanced threat protection, firewall management, malware defense, and compliance-focused controls
                      for secure business operations.
                    </p>
                    <Link className="tj-text-btn" to="/solution">
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
                    <h4 className="title"><Link to="/solution">Consulting Solution</Link></h4>
                    <p className="desc">
                      Strategic IT guidance to optimize infrastructure, reduce risk, improve operations, and support
                      digital transformation goals.
                    </p>
                    <Link className="tj-text-btn" to="/solution">
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
                    <h4 className="title"><Link to="/solution">Software Solution</Link></h4>
                    <p className="desc">
                      Customized web, desktop, and business application solutions tailored to workflow efficiency and
                      long-term growth.
                    </p>
                    <Link className="tj-text-btn" to="/solution">
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
                    <h4 className="title"><Link to="/solution">Network Solution</Link></h4>
                    <p className="desc">
                      Secure, high-performance network design and support services built for reliable connectivity and
                      protected data flow.
                    </p>
                    <Link className="tj-text-btn" to="/solution">
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

      <section className="tj-contact-section fix section-gap section-gap-x">
        <div className="bg-img" data-bg-image="/assets/images/bg/common-bg-2.webp"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="contact-left">
                <div className="sec-heading">
                  <span className="sub-title tj-fade-anim">[ Get In Touch ]</span>
                  <h2 className="sec-title tj-split-text-1">Have any Questions on Mind? Get in Touch for Solution Experts.</h2>
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
                        <label className="cf-label">Select Solution <span>*</span></label>
                        <div className="tj-nice-select-box">
                          <div className="tj-select">
                            <select name="cfSubject2">
                              <option value="1">Managed IT Solution</option>
                              <option value="2">Cloud Solution</option>
                              <option value="3">Cybersecurity Solution</option>
                              <option value="4">Consulting Solution</option>
                              <option value="5">Software Solution</option>
                              <option value="6">Network Solution</option>
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

      <section className="tj-pricing-section section-gap fix">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="sec-heading sec-heading-centered">
                <span className="sub-title tj-fade-anim">[ Best pricing ]</span>
                <h2 className="sec-title tj-split-text-1">Pricing Plans to Find the Right Solution</h2>
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
                    <div className="package_desc">Essential Security Solution</div>
                  </div>

                  <Link className="tj-primary-btn pricing_btn" to="/contact">
                    <span className="btn-text"><span>Choose Package <i className="tji-arrow-right-4"></i></span></span>
                  </Link>

                  <ul className="pricing_features">
                    <li><i className="tji-check-3"></i> Essential IT Support</li>
                    <li><i className="tji-check-3"></i> Cloud Storage (50 GB)</li>
                    <li><i className="tji-check-3"></i> Monthly System Check</li>
                    <li><i className="tji-check-3"></i> Basic Security Updates</li>
                    <li><i className="tji-check-3"></i> Software Patches and Fixes</li>
                    <li><i className="tji-check-3"></i> 1 Scheduled Maintenance</li>
                  </ul>
                </div>

                <div className="pricing_item recommend tj-slide-right">
                  <div className="pricing_header">
                    <h4 className="package_name">Standard Plan</h4>
                    <div className="package_desc">Complete Business Solution</div>
                  </div>

                  <Link className="tj-primary-btn pricing_btn" to="/contact">
                    <span className="btn-text"><span>Choose Package <i className="tji-arrow-right-4"></i></span></span>
                  </Link>

                  <ul className="pricing_features">
                    <li><i className="tji-check-3"></i> Advanced IT Management</li>
                    <li><i className="tji-check-3"></i> Cloud Storage (200 GB)</li>
                    <li><i className="tji-check-3"></i> Custom Software Solutions</li>
                    <li><i className="tji-check-3"></i> Threat Detection Services</li>
                    <li><i className="tji-check-3"></i> Data Backup and Recovery</li>
                    <li><i className="tji-check-3"></i> Monthly IT Consultation</li>
                  </ul>
                </div>

                <div className="pricing_item tj-slide-right">
                  <div className="pricing_header">
                    <h4 className="package_name">Premium Plan</h4>
                    <div className="package_desc">Advanced Enterprise Solution</div>
                  </div>

                  <Link className="tj-primary-btn pricing_btn" to="/contact">
                    <span className="btn-text"><span>Choose Package <i className="tji-arrow-right-4"></i></span></span>
                  </Link>

                  <ul className="pricing_features">
                    <li><i className="tji-check-3"></i> Comprehensive IT Solutions</li>
                    <li><i className="tji-check-3"></i> Unlimited Cloud Storage</li>
                    <li><i className="tji-check-3"></i> Priority 1-Hour Support</li>
                    <li><i className="tji-check-3"></i> Cybersecurity Protection</li>
                    <li><i className="tji-check-3"></i> Dedicated Account Manager</li>
                    <li><i className="tji-check-3"></i> 24/7 Emergency Service</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <section className="tj-cta-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-area tj-fade-anim">
                <div className="cta-content">
                  <h2 className="title">Don't Miss Out the Future!</h2>
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
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="tji-facebook"></i></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="tji-instagram"></i></a>
                      </li>
                      <li>
                        <a href="https://www.x.com/" target="_blank" rel="noreferrer"><i className="tji-x-twitter"></i></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="tji-linkedin"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
