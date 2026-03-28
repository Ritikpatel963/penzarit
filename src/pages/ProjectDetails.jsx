import React from 'react';

export default function ProjectDetails() {
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
                  <h1 className="tj-page-title tj-split-text-2">Project Details</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <a href="index.html">Home</a>
                    </span>
                    <span><i className="tji-arrow-right"></i></span>
                    <span>
                      <span>Project Details</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Breadcrumb Section  */}

        {/*  start: Project Details Section  */}
        <section className="tj-blog-section section-gap">
          <div className="container">
            <div className="row row-gap-5">
              <div className="col-lg-8">
                <div className="post-details-wrapper">
                  <div className="blog-images">
                    <img src="assets/images/project/project-details.webp" alt="Images" />
                  </div>
                  <h2 className="title">Cloud Migration System: Transforming IT Infrastructure for Scalability.</h2>
                  <div className="blog-text">
                    <p>
                      Cloud migration has become a crucial strategy for businesses looking to enhance scalability,
                      reduce operational costs, and improve performance. This case study explores how XYZ
                      Retail, a growing e-commerce company, successfully transitioned from an on-premise infrastructure
                      to a cloud-based system, resolving critical business challenges. The company’s
                      on-premise servers were unable to handle peak shopping periods, leading to frequent crashes and
                      website downtimes. The website experienced significant lag during high traffic.
                    </p>
                    <p>
                      Maintaining physical servers, network infrastructure, and IT personnel was becoming increasingly
                      expensive, impacting profitability. The company's existing infrastructure
                      lacked the ability to scale up quickly during promotional events or seasonal peaks, resulting in
                      missed sales opportunities. Key decisions were made during.
                    </p>
                    <h3>Cloud Migration Strategies</h3>
                    <p>
                      The cloud migration process started with a comprehensive assessment of the existing
                      infrastructure. This involved analyzing the company's data, applications, and network
                      dependencies to understand which elements could be migrated and which needed to be re-architected
                      during this phase:
                    </p>
                    <ul className="tj_list">
                      <li><i className="tji-check-4"></i>Scalable IT Infrastructure</li>
                      <li><i className="tji-check-4"></i>High Data Security</li>
                      <li><i className="tji-check-4"></i>Disaster Recovery Solutions</li>
                      <li><i className="tji-check-4"></i>Flexible Storage Options</li>
                      <li><i className="tji-check-4"></i>Compliance and Support</li>
                      <li><i className="tji-check-4"></i>Reduced Hardware</li>
                      <li><i className="tji-check-4"></i>24/7 Cloud Monitoring</li>
                    </ul>
                    <h3>Showcasing Excellence in IT Solutions</h3>
                    <p>
                      Explore our diverse range of successful IT solutions and projects that demonstrate our expertise,
                      innovation, and commitment to delivering top-notch results. From cloud
                      migration and AI integration to cybersecurity and custom software development, our work speaks for
                      itself.
                    </p>
                    <div className="images-wrap mb-2">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="image-box">
                            <a className="tj-gallery" data-gall="tj-gallery"
                              href="assets/images/project/project-gallery-1.webp"><img
                                src="assets/images/project/project-gallery-1.webp" alt="Image" /></a>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="image-box">
                            <a className="tj-gallery" data-gall="tj-gallery"
                              href="assets/images/project/project-gallery-2.webp"><img
                                src="assets/images/project/project-gallery-2.webp" alt="Image" /></a>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="image-box">
                            <a className="tj-gallery" data-gall="tj-gallery"
                              href="assets/images/project/project-gallery-3.webp"><img
                                src="assets/images/project/project-gallery-3.webp" alt="Image" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tj-post__navigation mb-0">
                    {/*  previous post  */}
                    <div className="tj-nav__post previous">
                      <div className="tj-nav-post__nav prev_post">
                        <a href="service-details.html"><span><i className="tji-arrow-left-5"></i></span>Previous</a>
                      </div>
                    </div>
                    <div className="tj-nav-post__grid">
                      <a href="project.html"><i className="tji-window"></i></a>
                    </div>
                    {/*  next post  */}
                    <div className="tj-nav__post next">
                      <div className="tj-nav-post__nav next_post">
                        <a href="service-details.html">Next<span><i className="tji-arrow-right-5"></i></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="tj-main-sidebar">
                  <div className="tj-sidebar-widget widget-categories">
                    <h4 className="widget-title">Project Info</h4>
                    <div className="infos-wrapper">
                      <div className="infos-item">
                        <div className="project-icons">
                          <i className="tji-user"></i>
                        </div>
                        <div className="project-text">
                          <span>Clients</span>
                          <h6 className="title">Innovate Interiors Group</h6>
                        </div>
                      </div>
                      <div className="infos-item">
                        <div className="project-icons">
                          <i className="tji-budget"></i>
                        </div>
                        <div className="project-text">
                          <span>Budget</span>
                          <h6 className="title">$8,000 USD</h6>
                        </div>
                      </div>
                      <div className="infos-item">
                        <div className="project-icons">
                          <i className="tji-location-2"></i>
                        </div>
                        <div className="project-text">
                          <span>Location</span>
                          <h6 className="title">Maplewood Heights, CA</h6>
                        </div>
                      </div>
                      <div className="infos-item">
                        <div className="project-icons">
                          <i className="tji-chart"></i>
                        </div>
                        <div className="project-text">
                          <span>Sector</span>
                          <h6 className="title">IT Solutions</h6>
                        </div>
                      </div>
                      <div className="infos-item">
                        <div className="project-icons">
                          <i className="tji-calendar"></i>
                        </div>
                        <div className="project-text">
                          <span>Complete date</span>
                          <h6 className="title">Oct 20, 2024</h6>
                        </div>
                      </div>
                    </div>
                    <div className="tj-socials-wrapper">
                      <h6 className="title">Share:</h6>
                      <ul className="tj-socials">
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
                  <div className="tj-sidebar-widget widget-feature-item">
                    <div className="feature-box">
                      <div className="feature-content">
                        <h2 className="title">Innovative</h2>
                        <span>IT Solutions.</span>
                        <a className="read-more feature-contact" href="tel:8321890640">
                          <i className="tji-phone-3"></i>
                          <span>+8 (321) 890-640</span>
                        </a>
                      </div>
                      <div className="feature-images">
                        <img src="assets/images/services/service-ad.webp" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Project Details Section  */}

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
