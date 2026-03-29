import React from 'react';
import { Link } from 'react-router-dom';

export default function Password() {
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
                  <h1 className="tj-page-title tj-split-text-2">Password Recover</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <Link to="/">Home</Link>
                    </span>
                    <span><i className="tji-arrow-right"></i></span>
                    <span>
                      <span>Password Recover</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Breadcrumb Section  */}

        {/*  start: Password Section  */}
        <section className="full-width tj-page__area section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tj-page__container">
                  <div className="tj-entry__content">
                    <div className="woocommerce">
                      <div className="woo-lost-password">
                        <h3>Forgot password?</h3>
                        <p>Please enter your username or email address carefully. You will receive a secure link to
                          create a
                          new password via email address.</p>

                        <form method="post" className="woocommerce-ResetPassword lost_reset_password">
                          <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
                            <label htmlFor="user_login">Username or email&nbsp;<span className="required"
                                aria-hidden="true">*</span></label>
                            <input className="woocommerce-Input woocommerce-Input--text input-text" type="text"
                              name="user_login" id="user_login" autoComplete="username" required=""
                              aria-required="true" />
                          </p>

                          <div className="clear"></div>


                          <p className="woocommerce-form-row form-row">
                            <input type="hidden" name="wc_reset_password" value="true" />
                            <button type="submit" className="woocommerce-Button button" value="Reset password">
                              <span className="btn-text"><span>Reset password</span></span>
                            </button>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Password Section  */}

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
