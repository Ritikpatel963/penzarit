import React from 'react';
import { Link } from 'react-router-dom';

export default function Project() {
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
                  <h1 className="tj-page-title tj-split-text-2">Project</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <Link to="/">Home</Link>
                    </span>
                    <span><i className="tji-arrow-right"></i></span>
                    <span>
                      <span>Project</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Breadcrumb Section  */}

        {/*  start: Project Section  */}
        <section className="tj-project-section-2 section-gap">
          <div className="project-wrapper">
            <div className="container">
              <div className="row rg-30">
                <div className="col-12 col-md-6 col-xl-4">
                  <div className="project-item">
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
                <div className="col-12 col-md-6 col-xl-4">
                  <div className="project-item">
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
                <div className="col-12 col-md-6 col-xl-4">
                  <div className="project-item">
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
                <div className="col-12 col-md-6 col-xl-4">
                  <div className="project-item">
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
                <div className="col-12 col-md-6 col-xl-4">
                  <div className="project-item">
                    <div className="project-img">
                      <img src="/assets/images/project/project-5.webp" alt="" />
                    </div>
                    <div className="project-content">
                      <div className="content-inner">
                        <span className="categories"><Link to="/project-details">Solution</Link></span>
                        <h4 className="title"><Link to="/project-details">Customer Experience</Link></h4>
                      </div>
                      <Link className="tj-icon-btn" to="/project-details">
                        <i className="tji-arrow-right-3"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                  <div className="project-item">
                    <div className="project-img">
                      <img src="/assets/images/project/project-6.webp" alt="" />
                    </div>
                    <div className="project-content">
                      <div className="content-inner">
                        <span className="categories"><Link to="/project-details">Solution</Link></span>
                        <h4 className="title"><Link to="/project-details">Process Optimization</Link></h4>
                      </div>
                      <Link className="tj-icon-btn" to="/project-details">
                        <i className="tji-arrow-right-3"></i>
                      </Link>
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
          </div>
        </section>
        {/*  end: Project Section  */}

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
