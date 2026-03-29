import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
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
                  <h1 className="tj-page-title tj-split-text-2">Login</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <Link to="/">Home</Link>
                    </span>
                    <span><i className="tji-arrow-right"></i></span>
                    <span>
                      <span>Login</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Breadcrumb Section  */}

        {/*  start: Login Section  */}
        <section className="full-width tj-page__area section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tj-page__container">
                  <div className="tj-entry__content">
                    <div className="woocommerce">
                      <div className="woo-login-form">
                        <h3>Login</h3>

                        <form className="woocommerce-form woocommerce-form-login login" method="post" noValidate>
                          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                            <label htmlFor="username">Username or email address&nbsp;<span className="required"
                                aria-hidden="true">*</span></label>
                            <input type="text" name="username" id="username" autoComplete="username" value=""
                              required="" aria-required="true" />
                          </p>
                          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                            <label htmlFor="password">Password&nbsp;<span className="required"
                                aria-hidden="true">*</span></label>
                            <span className="password-input"><input type="password" name="password" id="password"
                                autoComplete="current-password" required="" aria-required="true" /><button type="button"
                                className="show-password-input" aria-label="Show password"
                                aria-describedby="password"></button></span>
                          </p>

                          <div className="row form-row algin-items-center rg-15">
                            <div className="col-6">
                              <label
                                className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                                <input className="woocommerce-form__input woocommerce-form__input-checkbox"
                                  name="rememberme" type="checkbox" id="rememberme" value="forever" /> <span>Remember
                                  me</span>
                              </label>
                            </div>
                            <div className="col-6 text-end">
                              <p className="woocommerce-LostPassword lost_password">
                                <Link to="/password">Lost your
                                  password?</Link>
                              </p>
                            </div>
                            <div className="col-sm-12">
                              <button type="submit" className="woocommerce-button button woocommerce-form-login__submit"
                                name="login" value="Log in">
                                <span className="btn-text"><span>Login</span></span>
                              </button>
                            </div>
                          </div>


                        </form>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Login Section  */}

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
