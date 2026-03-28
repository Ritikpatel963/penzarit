import React from 'react';

export default function TeamDetails() {
  return (
    <>

        <div className="top-space-30"></div>
        {/*  start: Breadcrumb Section  */}
        <section className="tj-page-header fix">
          <div className="hero-bg" data-bg-image="assets/images/hero/hero-bg.webp"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tj-page-header-content text-center">
                  <h1 className="tj-page-title tj-split-text-2">Team Details</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <a href="index.html">Home</a>
                    </span>
                    <span><i className="tji-arrow-right"></i></span>
                    <span>
                      <span>Team Details</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Breadcrumb Section  */}

        {/*  start: Team Details Section  */}
        <section className="team-details tj-sticky-container">
          <div className="container">
            <div className="row justify-content-center">
              {/*   left  */}
              <div className="col-12 col-md-8 col-lg-5">
                <div className="team-details__img tj-sticky-item">
                  <img src="./assets/images/team/team-1.webp" alt="" />
                </div>
              </div>
              {/*  right  */}
              <div className="col-12 col-lg-7">
                <div className="team-details__content">
                  <h2 className="team-details__name tj-split-text-1">Hello, I am Eade Marren</h2>
                  <span className="team-details__desig">Chief Executive</span>
                  <p className="">
                    Our mission is to empowers businesses sizes thrive businesses ev changing marketplace We are
                    committed to the delivering exceptional value through strategic inset innovative
                    approaches. Our consulting of our missing empower.
                  </p>
                  <div className="team-details__contact-info">
                    <ul>
                      <li>
                        <span>Email address</span>
                        <a href="mailto:eade.marren@tekmino.com">eade.marren@tekmino.com</a>
                      </li>
                      <li>
                        <span>Phone number</span>
                        <a href="tel:10095447818">+1 (009) 544-7818</a>
                      </li>
                    </ul>
                  </div>
                  <div className="social-links">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank"><i className="tji-instagram"></i></a>
                      </li>
                      <li>
                        <a href="https://x.com/" target="_blank"><i className="tji-x-twitter"></i></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank"><i className="tji-linkedin"></i></a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-details__experience">
                    <h4 className="team-details__subtitle">Work Experience</h4>
                    <p>
                      Our mission is to empowers businesses size to thrivie in ses ever changing marketplace We are
                      committed to the delivering exceptionals the value thro strategic ins innovative
                      approaches. Our consulting of our missing empowers businesses of all sizes Committed to the
                      delivering exceptional in the values
                    </p>
                    <p>
                      Our mission is to empowers businesses size to thrivie in ses ever changing marketplace We are
                      committed to the delivering exceptionals the value thro strategic ins innovative
                      approaches. Our consulting of our missing empowers
                    </p>
                    <div className="team-details__experience__list">
                      <ul>
                        <li>
                          <i className="tji-check"></i>
                          <p>We believe that the human essential start any successful project.</p>
                        </li>
                        <li>
                          <i className="tji-check"></i>
                          <p>We believe that the human essential start any successful project.</p>
                        </li>
                        <li>
                          <i className="tji-check"></i>
                          <p>We believe that the human essential start any successful project.</p>
                        </li>
                        <li>
                          <i className="tji-check"></i>
                          <p>We believe that the human essential start any successful project.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-details__skills">
                    <h4 className="team-details__subtitle">Professional Skills</h4>
                    <p>
                      Our mission is to empowers businesses size to thrivie in ses ever changing marketplace We are
                      committed to the delivering exceptionals the value thro strategic ins innovative
                      approaches. Our consulting of our missing empowers.
                    </p>
                    <ul className="tj-progress-list">
                      <li>
                        <h6 className="tj-progress-title">Business Consultants</h6>
                        <div className="tj-progress">
                          <span className="tj-progress-percent">82%</span>
                          <div className="tj-progress-bar" data-percent="82"></div>
                        </div>
                      </li>
                      <li>
                        <h6 className="tj-progress-title">Client Communication</h6>
                        <div className="tj-progress">
                          <span className="tj-progress-percent">90%</span>
                          <div className="tj-progress-bar" data-percent="90"></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Team Details Section  */}

        {/*  start: Contact Section  */}
        <section className="contact-team-details section-gap-bottom">
          <div className="container">
            <div className="contact-team-details-inner tj-fade-anim" data-delay="0.3">
              <div className="row justify-content-between">
                <div className="col-xxl-5 col-lg-6">
                  <div className="sec-heading">
                    <span className="sub-title">[ Contact Us ]</span>
                    <h2 className="sec-title text-anim">Let’s Discuss Further to Get Better Results</h2>
                    <p className="desc">
                      Our mission is to empowers businesses off our all size too thrive in an businesses ever changing
                      marketplaces. In today's dynamics business environment, the key to success
                      lies.
                    </p>
                    <h6 className="contact-team-details-message">
                      <a href="mailto:support@tekmino.com"> <i className="tji-chat"></i>livechat@tekmino.com</a>
                    </h6>
                  </div>
                </div>
                <div className="col-xxl-6 col-lg-6">
                  <div className="contact-form">
                    <form id="contact-form">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-input">
                            <input type="text" name="cfName" placeholder="Full Name *" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-input">
                            <input type="email" name="cfEmail" placeholder="Email Address *" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-input">
                            <input type="text" name="cfPhone" placeholder="Phone number *" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-input">
                            <div className="tj-nice-select-box">
                              <div className="tj-select">
                                <select name="cfSubject">
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
                            <textarea name="cfMessage" id="message" placeholder="Type message *"></textarea>
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
