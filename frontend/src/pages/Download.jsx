import React from 'react';
import { Link } from 'react-router-dom';

export default function Index3() {
  return (
    <>
        {/*  start: Breadcrumb Section  */}
        <section className="tj-page-header fix">
          <div className="hero-bg" data-bg-image="/assets/images/hero/hero-bg.webp"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tj-page-header-content text-center">
                  <h1 className="tj-page-title tj-split-text-2">Download</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <Link to="/">Download</Link>
                    </span>
                    <span><i className="tji-arrow-right"></i></span>
                    <span>
                      <span>About Us</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Breadcrumb Section  */}

	

      


        {/*  start: Services Section  */}
        <section className="h3-service-section section-gap-x">
          <div className="h3-service-section-wrap section-gap">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="sec-heading style-3">
                    <span className="sub-title tj-fade-anim" data-delay="0.2" data-duration="0.5">
                      <i className="tji-subtitle-2"></i>
                      Explore Services
                    </span>

                    <div className="sec-heading-inner">
                      <h2 className="sec-title tj-split-text-3">Cybersecurity Solutions & Downloadable Resources</h2>
                      <div className="tj-fade-anim d-none d-md-inline-flex" data-delay=".3">
                     
                      </div>
                    </div>
                  </div>

                  <div className="h3_services_wrap">
                    <div v className="service_list_item is-active tj-fade-anim" data-delay=".2">
                      <div className="item_count"><span>01</span></div>
                      <div className="item_content">
                        <div className="content_inner">
                          <h3 className="title">
                            <Link to="/service-details">Scopd DLP & UEBA</Link>
                          </h3>
                          <div className="desc">
                            Our comprehensive range of cybersecurity and IT solutions includes detailed resources and downloadable materials for various products. For Scopd DLP & UEBA, users can access the datasheet titled Scopd Data Sheet for in-depth information.
                          </div>
                          <a href="https://panzerit.com/wp-content/uploads/2025/07/Scopd_Presentation.pdf">Scopd Data Sheet</a>
                        </div>
                        <Link className="tj-icon-btn" to="/service-details">
                          <i className="tji-arrow-long-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="service_list_item is-active tj-fade-anim" data-delay=".2">
                      <div className="item_count"><span>02</span></div>
                      <div className="item_content">
                        <div className="content_inner">
                          <h3 className="title">
                            <Link to="/service-details">FalconGaze SecureTower</Link>
                          </h3>
                          <div className="desc">
                           The FalconGaze SecureTower solution provides a presentation on Workflows Control and Insider Threat Protection, offering valuable insights into employee monitoring and security management.
                          </div>
                          <a href="https://panzerit.com/wp-content/uploads/2018/09/Falcongaze-SecureTower.-Workflows-control-and-Insider-Threat-Protection.pdf">	Workflows control and Insider Threat Protection</a>
                        </div>
                        <Link className="tj-icon-btn" to="/service-details">
                          <i className="tji-arrow-long-right"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="service_list_item is-active tj-fade-anim" data-delay=".2">
                      <div className="item_count"><span>03</span></div>
                      <div className="item_content">
                        <div className="content_inner">
                          <h3 className="title">
                            <Link to="/service-details">Emsisoft Anti Malware</Link>
                          </h3>
                          <div className="desc">
                           For endpoint protection, Emsisoft Anti Malware offers multiple resources including a datasheet (Flyer – Brochure), installer downloads, as well as additional tools like the Emsisoft Emergency Kit and Mobile Security application available via the Google Play Store.
                          </div>
                          <a href="https://panzerit.com/wp-content/uploads/2018/09/EAM_Flyer.pdf">	Flyer – Brochure</a>
                        </div>
                        <Link className="tj-icon-btn" to="/service-details">
                          <i className="tji-arrow-long-right"></i>
                        </Link>
                      </div>
                    </div>
                    
                        <div className="service_list_item is-active tj-fade-anim" data-delay=".2">
                      <div className="item_count"><span>03</span></div>
                      <div className="item_content">
                        <div className="content_inner">
                          <h3 className="title">
                            <Link to="/service-details">Emsisoft Emergency Kit & Mobile Security</Link>
                          </h3>
                          <div className="desc">
                          We provide advanced cybersecurity tools designed to ensure system protection and threat removal. For Emsisoft solutions, users can download installers and access mobile protection applications for enhanced security across devices.
                          </div>
                          <a href="https://play.google.com/store/apps/details?id=com.emsisoft.security">	Download (Google Play Store)</a>
                        </div>
                        <Link className="tj-icon-btn" to="/service-details">
                          <i className="tji-arrow-long-right"></i>
                        </Link>
                      </div>
                    </div>


                           <div className="service_list_item is-active tj-fade-anim" data-delay=".2">
                      <div className="item_count"><span>04</span></div>
                      <div className="item_content">
                        <div className="content_inner">
                          <h3 className="title">
                            <Link to="/service-details">Netop Remote Control</Link>
                          </h3>
                          <div className="desc">
                           Our comprehensive range of cybersecurity and IT management solutions includes detailed resources and downloadable materials for each product. For Netop Remote Control, users can access datasheets and presentations to explore features, functionality, and deployment insights.
                          </div>
                          <a href="https://panzerit.com/wp-content/uploads/2018/09/Netop-Remote-Control-Datasheet-2.pdf">Netop Remote Control-Datasheet</a>
                        </div>
                        <Link className="tj-icon-btn" to="/service-details">
                          <i className="tji-arrow-long-right"></i>
                        </Link>
                      </div>
                    </div>

                    <div className="service_list_item is-active tj-fade-anim" data-delay=".2">
                      <div className="item_count"><span>05</span></div>
                      <div className="item_content">
                        <div className="content_inner">
                          <h3 className="title">
                            <Link to="/service-details">Acronis Backup Cloud</Link>
                          </h3>
                          <div className="desc">
                           In the backup and recovery segment, Acronis Backup Cloud provides a detailed datasheet covering its features and capabilities.
                          </div>
                          <a href="https://panzerit.com/wp-content/uploads/2018/09/Acronis_Backup_Cloud_ABC_Features.pdf">Acronis_Backup_Cloud_ABC_Features</a>
                        </div>
                        <Link className="tj-icon-btn" to="/service-details">
                          <i className="tji-arrow-long-right"></i>
                        </Link>
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
          </div>
        </section>
        {/*  end: Services Section  */}

        {/*  start: Testimonial Section  */}
        <section className="tj-testimonial-section-3 section-gap overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="sec-heading style-3 sec-heading-centered">
                  <span className="sub-title tj-fade-anim" data-delay="0.2" data-duration="0.5"><i
                      className="tji-subtitle-2"></i>Success Stories</span>
                  <h2 className="sec-title tj-split-text-3">Building Success with Client Feedback.</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid gx-0">
            <div className="row">
              <div className="col">
                <div className="h3_testimonial_slider swiper swiper-container tj-fade-anim" data-delay=".3">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial_item_2">
                        <div className="testimonial_thumb">
                          <img src="./assets/images/testimonial/h3-testimonial-1.webp" alt="" />

                          <a className="video_btn video-popup" data-autoplay="true" data-vbtype="video"
                            data-maxwidth="1200px" href="https://www.youtube.com/watch?v=MLpWrANjFbI">
                            <i className="tji-play"></i>
                          </a>
                        </div>
                        <div className="testimonial_content">
                          <div className="star-ratings">
                            <div className="fill-ratings" style={{"width":"90%"}}>
                              <span>★★★★★</span>
                            </div>
                            <div className="empty-ratings">
                              <span>★★★★★</span>
                            </div>
                          </div>

                          <div className="desc">
                            <p>
                              Nexor truly exceeded our expectations. From the initial consultation to the final
                              implementation, their team provided excellent service and unwavering support. Their
                              ability to integrate advanced IT solutions into our operations has streamlined our
                              processes.
                            </p>
                          </div>

                          <div className="author_info">
                            <h4 className="name">Mevon Lane</h4>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial_item_2">
                        <div className="testimonial_thumb">
                          <img src="./assets/images/testimonial/h3-testimonial-2.webp" alt="" />

                          <a className="video_btn video-popup" data-autoplay="true" data-vbtype="video"
                            data-maxwidth="1200px" href="https://www.youtube.com/watch?v=MLpWrANjFbI">
                            <i className="tji-play"></i>
                          </a>
                        </div>
                        <div className="testimonial_content">
                          <div className="star-ratings">
                            <div className="fill-ratings" style={{"width":"90%"}}>
                              <span>★★★★★</span>
                            </div>
                            <div className="empty-ratings">
                              <span>★★★★★</span>
                            </div>
                          </div>

                          <div className="desc">
                            <p>
                              Partnering with Nexor has been an absolute game-changer for our company. Their team
                              delivered a tailored IT solution that met our unique business needs, and their
                              approach to problem-solving has saved us time and money. With Nexor’s cutting-edge
                              technology.
                            </p>
                          </div>

                          <div className="author_info">
                            <h4 className="name">Mevon Lane</h4>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial_item_2">
                        <div className="testimonial_thumb">
                          <img src="./assets/images/testimonial/h3-testimonial-3.webp" alt="" />

                          <a className="video_btn video-popup" data-autoplay="true" data-vbtype="video"
                            data-maxwidth="1200px" href="https://www.youtube.com/watch?v=MLpWrANjFbI">
                            <i className="tji-play"></i>
                          </a>
                        </div>
                        <div className="testimonial_content">
                          <div className="star-ratings">
                            <div className="fill-ratings" style={{"width":"90%"}}>
                              <span>★★★★★</span>
                            </div>
                            <div className="empty-ratings">
                              <span>★★★★★</span>
                            </div>
                          </div>

                          <div className="desc">
                            <p>
                              When we approached Nexor for help with our technology integration, we were looking for a
                              partner who could not only provide expertise but also deliver tangible results.
                              They did exactly that. Nexor helped us streamline our operations with innovative cloud
                              solutions.
                            </p>
                          </div>

                          <div className="author_info">
                            <h4 className="name">Mevon Lane</h4>
                            <span className="designation">Co. Founder</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-pagination-area"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Testimonial Section  */}

       

        {/*  start: FAQ Section  */}
        <section className="tj-faq-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="sec-heading style-3 sec-heading-centered">
                  <span className="sub-title tj-fade-anim" data-delay="0.2" data-duration="0.5"><i
                      className="tji-subtitle-2"></i>Read Answers</span>
                  <h2 className="sec-title tj-split-text-3">Quick Answers For Your Most Questions.</h2>
                </div>

                <div className="tj_accordion" id="tjAccordion01">
                  <div className="accordion_item active tj-fade-anim">
                    <button className="accordion_title" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-1" aria-expanded="true">What services does your company offer?</button>
                    <div id="accordion-1" className="collapse show" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs, and enabling seamless digital transformation to boost growth and
                        productivity and stay up-to-date with the latest technologies. The consultation phase and keep
                        you informed.
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item tj-fade-anim">
                    <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-2" aria-expanded="false">
                      How can your IT solutions help my business?
                    </button>
                    <div id="accordion-2" className="collapse" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs, and enabling seamless digital transformation to boost growth and
                        productivity and stay up-to-date with the latest technologies. The consultation phase and keep
                        you informed.
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item tj-fade-anim">
                    <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-3" aria-expanded="false">
                      Do you provide support after project completion?
                    </button>
                    <div id="accordion-3" className="collapse" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs, and enabling seamless digital transformation to boost growth and
                        productivity and stay up-to-date with the latest technologies. The consultation phase and keep
                        you informed.
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item tj-fade-anim">
                    <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-4" aria-expanded="false">
                      How long does it take to implement an IT solution?
                    </button>
                    <div id="accordion-4" className="collapse" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs, and enabling seamless digital transformation to boost growth and
                        productivity and stay up-to-date with the latest technologies. The consultation phase and keep
                        you informed.
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item tj-fade-anim">
                    <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-5" aria-expanded="false">
                      Is my data secure with your solutions?
                    </button>
                    <div id="accordion-5" className="collapse" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs, and enabling seamless digital transformation to boost growth and
                        productivity and stay up-to-date with the latest technologies. The consultation phase and keep
                        you informed.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: FAQ Section  */}

        {/*  start: Blog Section  */}
        <section className="tj-blog-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="sec-heading style-3 d-flex flex-wrap align-items-end justify-content-center justify-content-md-between gap-4">
                  <div className="sec_heading_wrap d-flex flex-column align-items-center align-items-md-start">
                    <span className="sub-title tj-fade-anim" data-delay="0.2" data-duration="0.5"><i
                        className="tji-subtitle-2"></i> Explore Blogs</span>
                    <h2 className="sec-title tj-split-text-3">Read Latest Blog & News.</h2>
                  </div>
                  <div className="tj-fade-anim d-none d-md-inline-flex" data-delay="0.5">
                    <Link className="tj-primary-btn" to="/blog">
                      <span className="btn-text"><span>Explore More</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="tj_blog_wrap tj-fade-anim">
                  <div className="blog-item">
                    <div className="blog-thumb img-reveal-2">
                      <Link to="/blog-details"><img src="/assets/images/blog/blog-1.webp" alt="" /></Link>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><Link to="/blog-details">Solutions</Link></span>
                        <span>By <Link to="/blog-details">Ellinien Loma</Link></span>
                      </div>
                      <h4 className="title">
                        <Link to="/blog-details">How to Successfully Migrate Your Business to the Cloud</Link>
                      </h4>
                      <div className="excerpt">Managed IT Services provide businesses with proactive technology support,
                        ensuring seamless operations and enhanced.</div>
                      <Link className="tj-text-btn style-2" to="/blog-details">
                        Read More
                        <i className="tji-arrow-right-4"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-item">
                    <div className="blog-thumb img-reveal-2">
                      <Link to="/blog-details"><img src="/assets/images/blog/blog-2.webp" alt="" /></Link>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><Link to="/blog-details">Solutions</Link></span>
                        <span>By <Link to="/blog-details">Ellinien Loma</Link></span>
                      </div>
                      <h4 className="title">
                        <Link to="/blog-details">Building a Stronger Workforce with IT Training</Link>
                      </h4>
                      <Link className="tj-text-btn style-2" to="/blog-details">
                        Read More
                        <i className="tji-arrow-right-4"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-item">
                    <div className="blog-thumb img-reveal-2">
                      <Link to="/blog-details"><img src="/assets/images/blog/blog-3.webp" alt="" /></Link>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><Link to="/blog-details">Solutions</Link></span>
                        <span>By <Link to="/blog-details">Ellinien Loma</Link></span>
                      </div>
                      <h4 className="title">
                        <Link to="/blog-details">Optimizing Your IT Budget: Tips and Strategies</Link>
                      </h4>
                      <Link className="tj-text-btn style-2" to="/blog-details">
                        Read More
                        <i className="tji-arrow-right-4"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-item">
                    <div className="blog-thumb img-reveal-2">
                      <Link to="/blog-details"><img src="/assets/images/blog/blog-4.webp" alt="" /></Link>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><Link to="/blog-details">Solutions</Link></span>
                        <span>By <Link to="/blog-details">Ellinien Loma</Link></span>
                      </div>
                      <h4 className="title">
                        <Link to="/blog-details">The Top 5 IT Challenges Faced by Modern Enterprises</Link>
                      </h4>
                      <Link className="tj-text-btn style-2" to="/blog-details">
                        Read More
                        <i className="tji-arrow-right-4"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-md-none mt-40">
              <div className="col">
                <div className="explore_more_btn text-center">
                  <Link className="tj-primary-btn" to="/blog">
                    <span className="btn-text"><span>Explore More</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Blog Section  */}
      
    </>
  );
}
