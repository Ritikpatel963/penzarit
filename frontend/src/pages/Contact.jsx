import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
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
                  <h1 className="tj-page-title tj-split-text-2">Contact us</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <Link to="/">Home</Link>
                    </span>
                    <span><i className="tji-arrow-right"></i></span>
                    <span>
                      <span>Contact</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Breadcrumb Section  */}

        {/*  start: Contact Top Section  */}
        <div className="tj-contact-area section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading text-center">
                  <span className="sub-title tj-fade-anim">[ Contact info ]</span>
                  <h2 className="sec-title tj-split-text-1">Reach Out Us Now!</h2>
                </div>
              </div>
            </div>
            <div className="row row-gap-4">
              <div className="col-xl-3 col-lg-6 col-sm-6">
                <div className="contact-item style-2 tj-fade-anim" data-delay="0.1">
                  <div className="contact-icon">
                    <i className="tji-location"></i>
                  </div>
                  <h3 className="contact-title">Our Location</h3>
                  <p>993 Renner Burg, West Rond, MT 94251-030</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-6">
                <div className="contact-item style-2 tj-fade-anim" data-delay="0.3">
                  <div className="contact-icon">
                    <i className="tji-envelop"></i>
                  </div>
                  <h3 className="contact-title">Email us</h3>
                  <ul className="contact-list">
                    <li><a href="mailto:support@tekmino.com">support@tekmino.com</a></li>
                    <li><a href="mailto:info@tekmino.com">info@tekmino.com</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-6">
                <div className="contact-item style-2 tj-fade-anim" data-delay="0.5">
                  <div className="contact-icon">
                    <i className="tji-phone"></i>
                  </div>
                  <h3 className="contact-title">Call us</h3>
                  <ul className="contact-list">
                    <li><a href="tel:10095447818">+1 (009) 544-7818</a></li>
                    <li><a href="tel:10098801810">+1 (009) 880-1810</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-6">
                <div className="contact-item style-2 tj-fade-anim" data-delay="0.7">
                  <div className="contact-icon">
                    <i className="tji-chat"></i>
                  </div>
                  <h3 className="contact-title">Live chat</h3>
                  <ul className="contact-list">
                    <li><a href="mailto:livechat@tekmino.com">livechat@tekmino.com</a></li>
                    <li className="active"><Link to="/contact">Need help?</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  end: Contact Top Section  */}

        {/*  start: Contact Section  */}
        <section className="tj-contact-section-2 section-gap-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-form contact-form-3 tj-fade-anim">
                  <h3 className="title">Feel Free Contact with Us!</h3>
                  <form id="contact-form" method="POST">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-input">
                          <input type="text" name="cfName" placeholder="Name*" required />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-input">
                          <input type="email" name="cfEmail" placeholder="Email*" required />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-input">
                          <input type="text" name="cfPhone" placeholder="Phone*" required />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-input">
                          {/*  <input type="text" name="cfSubject" placeholder="Subject*" />  */}
                          <div className="tj-nice-select-box">
                            <div className="tj-select">
                              <select name="cfSubject">
                                <option value="0">Subject*</option>
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
                          <textarea name="cfMessage" placeholder="Message*"></textarea>
                        </div>
                      </div>
                      <div className="submit-btn">
                        <button className="tj-primary-btn" type="submit">
                          <span className="btn-text"><span>Submit Now</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="map-area tj-fade-anim" data-delay="0.5">
                  <div id="map"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Contact Section  */}

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
