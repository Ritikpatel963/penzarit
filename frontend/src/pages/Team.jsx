import React from 'react';
import { Link } from 'react-router-dom';

export default function Team() {
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
                  <h1 className="tj-page-title tj-split-text-2">Team</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <Link to="/">Home</Link>
                    </span>
                    <span><i className="tji-arrow-right"></i></span>
                    <span>
                      <span>Team</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Breadcrumb Section  */}

        {/*  start: Team Section  */}
        <section className="tj-team-section section-gap">
          <div className="container">
            <div className="row rg-30">
              <div className="col-lg-3 col-sm-6">
                <div className="team-item tj-fade-anim" data-delay="0.4" data-direction="top" data-duration="1">
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
                <div className="team-item tj-fade-anim" data-delay="0.4" data-direction="bottom" data-duration="1">
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
                <div className="team-item tj-fade-anim" data-delay="0.4" data-direction="top" data-duration="1">
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
                <div className="team-item tj-fade-anim" data-delay="0.4" data-direction="bottom" data-duration="1">
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
              <div className="col-lg-3 col-sm-6">
                <div className="team-item tj-fade-anim" data-delay="0.4" data-direction="bottom" data-duration="1">
                  <div className="team-img">
                    <img src="/assets/images/team/team-5.webp" alt="Image" />
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
                <div className="team-item tj-fade-anim" data-delay="0.4" data-direction="top" data-duration="1">
                  <div className="team-img">
                    <img src="/assets/images/team/team-6.webp" alt="Image" />
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
                <div className="team-item tj-fade-anim" data-delay="0.4" data-direction="bottom" data-duration="1">
                  <div className="team-img">
                    <img src="/assets/images/team/team-7.webp" alt="Image" />
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
              <div className="col-lg-3 col-sm-6">
                <div className="team-item tj-fade-anim" data-delay="0.4" data-direction="top" data-duration="1">
                  <div className="team-img">
                    <img src="/assets/images/team/team-8.webp" alt="Image" />
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
            </div>
            <div className="tj-pagination d-flex justify-content-center">
              <ul>
                <li>
                  <span aria-current="page" className="page-numbers current">1</span>
                </li>
                <li>
                  <a className="page-numbers" href="#">2</a>
                </li>
                <li>
                  <a className="page-numbers" href="#">3</a>
                </li>
                <li>
                  <a className="next page-numbers" href="#"><i className="tji-arrow-right-2"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/*  end: Team Section  */}

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
