import React from 'react';
import { Link } from 'react-router-dom';

export default function Index3() {
  const assetPath = (path) => `${import.meta.env.BASE_URL}assets/${path}`;

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
                      <div className="item_count"><span>04</span></div>
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
                      <div className="item_count"><span>05</span></div>
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
                      <div className="item_count"><span>06</span></div>
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
             <div className="h5-testimonial-section section-gap section-gap-x">
               <div className="container">
                 <div className="row">
                   <div className="col-12">
                     <div
                       className="sec-heading sec-heading-centered style-3 tj-fade-anim"
                       data-delay=".1"
                       data-direction="bottom"
                     >
                       <span className="sub-title tj-fade-anim">
                         <i className="tji-subtitle-4"></i>Our Success Stories
                       </span>
                       <h2 className="sec-title tj-split-text-1">
                         Trusted Experts in Cyber Threat <span>Protection.</span>
                       </h2>
                     </div>
                   </div>
                 </div>
                 <div className="row">
                   <div className="col-12">
                     <div className="testimonial-wrapper-4 tj-fade-anim">
                       <div className="scroll-slider">
                         <div className="scroll-wrapper">
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-1.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Devon Lane</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   Partnering with Tekmino has been an absolute
                                   game-changer for our company. Their team delivered a
                                   tailored IT solution that met our unique business
                                   needs, and their proactive approach to problem.
                                 </p>
                               </div>
                             </div>
                           </div>
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-2.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Cameron Williamson</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   Tekmino truly exceeded our expectations. From the
                                   initial consultation to the final implementation,
                                   their team provided excellent service and unwavering
                                   support. Their ability to integrate.
                                 </p>
                               </div>
                             </div>
                           </div>
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-3.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Eleanor Pena</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   When we approached Nexor for help with our
                                   technology integration, we were looking for a
                                   partner who could not only provide expertise but
                                   also deliver tangible results. They did exactly
                                   that.
                                 </p>
                               </div>
                             </div>
                           </div>
                         </div>
                         <div className="scroll-wrapper">
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-1.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Devon Lane</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   Partnering with Tekmino has been an absolute
                                   game-changer for our company. Their team delivered a
                                   tailored IT solution that met our unique business
                                   needs, and their proactive approach to problem.
                                 </p>
                               </div>
                             </div>
                           </div>
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-2.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Cameron Williamson</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   Tekmino truly exceeded our expectations. From the
                                   initial consultation to the final implementation,
                                   their team provided excellent service and unwavering
                                   support. Their ability to integrate.
                                 </p>
                               </div>
                             </div>
                           </div>
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-3.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Eleanor Pena</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   When we approached Nexor for help with our
                                   technology integration, we were looking for a
                                   partner who could not only provide expertise but
                                   also deliver tangible results. They did exactly
                                   that.
                                 </p>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="scroll-slider">
                         <div className="scroll-wrapper">
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-1.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Devon Lane</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   Partnering with Tekmino has been an absolute
                                   game-changer for our company. Their team delivered a
                                   tailored IT solution that met our unique business
                                   needs, and their proactive approach to problem.
                                 </p>
                               </div>
                             </div>
                           </div>
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-2.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Cameron Williamson</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   Tekmino truly exceeded our expectations. From the
                                   initial consultation to the final implementation,
                                   their team provided excellent service and unwavering
                                   support. Their ability to integrate.
                                 </p>
                               </div>
                             </div>
                           </div>
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-3.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Eleanor Pena</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   When we approached Nexor for help with our
                                   technology integration, we were looking for a
                                   partner who could not only provide expertise but
                                   also deliver tangible results. They did exactly
                                   that.
                                 </p>
                               </div>
                             </div>
                           </div>
                         </div>
                         <div className="scroll-wrapper">
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-1.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Devon Lane</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   Partnering with Tekmino has been an absolute
                                   game-changer for our company. Their team delivered a
                                   tailored IT solution that met our unique business
                                   needs, and their proactive approach to problem.
                                 </p>
                               </div>
                             </div>
                           </div>
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-2.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Cameron Williamson</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   Tekmino truly exceeded our expectations. From the
                                   initial consultation to the final implementation,
                                   their team provided excellent service and unwavering
                                   support. Their ability to integrate.
                                 </p>
                               </div>
                             </div>
                           </div>
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-3.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Eleanor Pena</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   When we approached Nexor for help with our
                                   technology integration, we were looking for a
                                   partner who could not only provide expertise but
                                   also deliver tangible results. They did exactly
                                   that.
                                 </p>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="scroll-slider">
                         <div className="scroll-wrapper">
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-1.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Devon Lane</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   Partnering with Tekmino has been an absolute
                                   game-changer for our company. Their team delivered a
                                   tailored IT solution that met our unique business
                                   needs, and their proactive approach to problem.
                                 </p>
                               </div>
                             </div>
                           </div>
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-2.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Cameron Williamson</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   Tekmino truly exceeded our expectations. From the
                                   initial consultation to the final implementation,
                                   their team provided excellent service and unwavering
                                   support. Their ability to integrate.
                                 </p>
                               </div>
                             </div>
                           </div>
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-3.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Eleanor Pena</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   When we approached Nexor for help with our
                                   technology integration, we were looking for a
                                   partner who could not only provide expertise but
                                   also deliver tangible results. They did exactly
                                   that.
                                 </p>
                               </div>
                             </div>
                           </div>
                         </div>
                         <div className="scroll-wrapper">
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-1.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Devon Lane</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   Partnering with Tekmino has been an absolute
                                   game-changer for our company. Their team delivered a
                                   tailored IT solution that met our unique business
                                   needs, and their proactive approach to problem.
                                 </p>
                               </div>
                             </div>
                           </div>
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-2.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Cameron Williamson</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   Tekmino truly exceeded our expectations. From the
                                   initial consultation to the final implementation,
                                   their team provided excellent service and unwavering
                                   support. Their ability to integrate.
                                 </p>
                               </div>
                             </div>
                           </div>
                           <div className="testimonial_item_3">
                             <div className="testimonial_header">
                               <div className="author_avatar_wrapper">
                                 <div className="author_avatar">
                                   <img
                                     src={assetPath(
                                       "images/testimonial/client-3.webp",
                                     )}
                                     alt=""
                                   />
                                 </div>
                                 <div className="author_info">
                                   <h5 className="name">Eleanor Pena</h5>
                                   <span className="designation">Co. Founder</span>
                                 </div>
                               </div>
                               <div className="star-ratings">
                                 <div
                                   className="fill-ratings"
                                   style={{ width: "90%" }}
                                 >
                                   <span>★★★★★</span>
                                 </div>
                                 <div className="empty-ratings">
                                   <span>★★★★★</span>
                                 </div>
                               </div>
                             </div>
                             <div className="testimonial_content">
                               <div className="desc">
                                 <p>
                                   When we approached Nexor for help with our
                                   technology integration, we were looking for a
                                   partner who could not only provide expertise but
                                   also deliver tangible results. They did exactly
                                   that.
                                 </p>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="testimonial-btn tj-fade-anim">
                       <Link className="tj-primary-btn" to="/about">
                         <span className="btn-text">
                           <span>Explore More</span>
                         </span>
                         <span className="btn-icon">
                           <i className="tji-arrow-right-2"></i>
                         </span>
                       </Link>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
       

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
