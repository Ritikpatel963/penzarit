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
        

          {/*  start: Services Section  */}
        <section className="h3-service-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="sec-heading style-3">
                  <span className="sub-title tj-fade-anim" data-delay="0.2" data-duration="0.5">
                    <i className="tji-subtitle-2"></i>
                    Explore Services
                  </span>

                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-3">Reliable IT Solution for Better & Smarter.</h2>
                    <div className="tj-fade-anim d-none d-md-inline-flex" data-delay="0.5">
                      <Link className="tj-primary-btn" to="/servics">
                        <span className="btn-text"><span>Explore More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="services_wrap tj-fade-anim" data-delay="0.75">
                  <div className="services_tabs" role="tablist">
                    <button className="service_tab_item active" data-bs-toggle="tab" data-bs-target="#serviceTab-1"
                      type="button" role="tab" aria-selected="true">
                      <span className="button_inner">
                        <span>01</span>
                        Managed IT Services
                      </span>
                    </button>
                    <button className="service_tab_item" data-bs-toggle="tab" data-bs-target="#serviceTab-2" type="button"
                      role="tab" aria-selected="false">
                      <span className="button_inner">
                        <span>02</span>
                        Cloud Computing
                      </span>
                    </button>
                    <button className="service_tab_item" data-bs-toggle="tab" data-bs-target="#serviceTab-3" type="button"
                      role="tab" aria-selected="false">
                      <span className="button_inner">
                        <span>03</span>
                        Software Development
                      </span>
                    </button>
                    <button className="service_tab_item" data-bs-toggle="tab" data-bs-target="#serviceTab-4" type="button"
                      role="tab" aria-selected="false">
                      <span className="button_inner">
                        <span>04</span>
                        Network Infrastructure
                      </span>
                    </button>
                    <button className="service_tab_item" data-bs-toggle="tab" data-bs-target="#serviceTab-5" type="button"
                      role="tab" aria-selected="false">
                      <span className="button_inner">
                        <span>05</span>
                        Data Backup
                      </span>
                    </button>

                    <div className="active-bg"></div>
                  </div>

                  <div className="tab-content services_content_wrap">
                    <div className="tab-pane fade show active" id="serviceTab-1" role="tabpanel">
                      <div className="service_content_wrap">
                        <div className="service_content">
                          <span className="service_icon"><i className="tji-computer"></i></span>
                          <h3 className="service_title">
                            <Link to="/service-details"> Comprehensive Managed IT Services for Business Efficiency
                            </Link>
                          </h3>
                          <div className="service_excerpt">Managed IT Services provide businesses with proactive technology
                            support, ensuring seamless.</div>
                          <Link className="tj-text-btn style-3 service_btn" to="/service-details">
                            <span className="btn-text"><span>Learn More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                          </Link>
                        </div>
                        <div className="service_image img-reveal-2">
                          <img src="./assets/images/services/h3-service-img-2.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="serviceTab-2" role="tabpanel">
                      <div className="service_content_wrap">
                        <div className="service_content">
                          <span className="service_icon"><i className="tji-cloud"></i></span>
                          <h3 className="service_title">
                            <Link to="/service-details"> Comprehensive Managed IT Services for Business Efficiency
                            </Link>
                          </h3>
                          <div className="service_excerpt">Managed IT Services provide businesses with proactive technology
                            support, ensuring seamless.</div>
                          <Link className="tj-text-btn style-3 service_btn" to="/service-details">
                            <span className="btn-text"><span>Learn More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                          </Link>
                        </div>
                        <div className="service_image">
                          <img src="./assets/images/services/h3-service-img-3.webp" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="serviceTab-3" role="tabpanel">
                      <div className="service_content_wrap">
                        <div className="service_content">
                          <span className="service_icon"><i className="tji-development"></i></span>
                          <h3 className="service_title">
                            <Link to="/service-details"> Comprehensive Managed IT Services for Business Efficiency
                            </Link>
                          </h3>
                          <div className="service_excerpt">Managed IT Services provide businesses with proactive technology
                            support, ensuring seamless.</div>
                          <Link className="tj-text-btn style-3 service_btn" to="/service-details">
                            <span className="btn-text"><span>Learn More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                          </Link>
                        </div>
                        <div className="service_image">
                          <img src="./assets/images/services/h3-service-img-4.webp" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="serviceTab-4" role="tabpanel">
                      <div className="service_content_wrap">
                        <div className="service_content">
                          <span className="service_icon"><i className="tji-network"></i></span>
                          <h3 className="service_title">
                            <Link to="/service-details"> Comprehensive Managed IT Services for Business Efficiency
                            </Link>
                          </h3>
                          <div className="service_excerpt">Managed IT Services provide businesses with proactive technology
                            support, ensuring seamless.</div>
                          <Link className="tj-text-btn style-3 service_btn" to="/service-details">
                            <span className="btn-text"><span>Learn More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                          </Link>
                        </div>
                        <div className="service_image">
                          <img src="./assets/images/services/h3-service-img-5.webp" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="serviceTab-5" role="tabpanel">
                      <div className="service_content_wrap">
                        <div className="service_content">
                          <span className="service_icon"><i className="tji-computer"></i></span>
                          <h3 className="service_title">
                            <Link to="/service-details"> Comprehensive Managed IT Services for Business Efficiency
                            </Link>
                          </h3>
                          <div className="service_excerpt">Managed IT Services provide businesses with proactive technology
                            support, ensuring seamless.</div>
                          <Link className="tj-text-btn style-3 service_btn" to="/service-details">
                            <span className="btn-text"><span>Learn More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                          </Link>
                        </div>
                        <div className="service_image">
                          <img src="./assets/images/services/h3-service-img-6.webp" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-md-none mt-40">
              <div className="col">
                <div className="explore_more_btn text-center">
                  <Link className="tj-primary-btn" to="/services">
                    <span className="btn-text"><span>Explore More</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Services Section  */}

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
