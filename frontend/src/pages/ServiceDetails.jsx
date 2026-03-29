import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceDetails() {
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
                  <h1 className="tj-page-title tj-split-text-2">Service Details</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <Link to="/">Home</Link>
                    </span>
                    <span><i className="tji-arrow-right"></i></span>
                    <span>
                      <span>Service Details</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Breadcrumb Section  */}

        {/*  start: Service Details Section  */}
        <section className="tj-blog-section section-gap">
          <div className="container">
            <div className="row row-gap-5">
              <div className="col-lg-8">
                <div className="post-details-wrapper">
                  <div className="blog-images">
                    <img src="/assets/images/services/service-details.webp" alt="Images" />
                  </div>
                  <h2 className="title">Cloud Computing: Transforming the Future of IT Solution</h2>
                  <div className="blog-text">
                    <p>
                      Cloud computing is revolutionizing the way businesses and individuals store, access, and manage
                      data. It refers to the delivery of computing services—such as storage, servers,
                      networking, databases, software, and analytics—over the internet rather than relying on local
                      servers or personal devices. This technology enables businesses to scale
                      efficiently, reduce costs, and enhance collaboration by providing on-demand access to powerful
                      computing resources. One of the biggest advantages of cloud computing is
                      flexibility and scalability.
                    </p>
                    <p>
                      Cloud computing is categorized into different models, including Infrastructure as a Service
                      (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS), each
                      catering to different business needs. Popular cloud providers like Amazon Web Services (AWS),
                      Microsoft Azure, and Google Cloud.
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
                    <div className="images-wrap">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="image-box">
                            <img src="/assets/images/services/service-details-2.webp" alt="Image" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="image-box">
                            <img src="/assets/images/services/service-details-3.webp" alt="Image" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="mt-4">Our Range of Customer Services</h3>
                    <p>
                      We are committed to delivering top-notch customer services tailored meet your business needs. Our
                      comprehensive range of IT solutions ensures seamless operations, enhanced
                      security, and optimized performance for businesses of all sizes., leveraging technology, or
                      designing more engaging digital experiences, our team is here to help you exceed
                      your customers' expectations every time. We help you understand your customers.
                    </p>
                    <div className="details-content-box">
                      <div className="service-details-item">
                        <span className="number">01.</span>
                        <h6 className="title">Increased Customer <br />Satisfaction</h6>
                        <div className="desc">
                          <p>By consistent, personalized experience, customers are more likely to feel valued a
                            satisfied, which directly.</p>
                        </div>
                      </div>
                      <div className="service-details-item">
                        <div className="service-number">
                          <span className="number">02.</span>
                          <h6 className="title">Improved Operational <br />Efficiency</h6>
                          <div className="desc">
                            <p>With our tools and strategies, your customer support teams can handle inquiries faster,
                              while automated systems.</p>
                          </div>
                        </div>
                      </div>
                      <div className="service-details-item">
                        <div className="service-number">
                          <span className="number">03.</span>
                          <h6 className="title">Insights for Continuous Improvement</h6>
                          <div className="desc">
                            <p>Our data-driven approach provides team with valuable insights customer behavior, enabling
                              to continual.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3>Frequently asked questions</h3>
                    <div className="tj_accordion tj_accordion_2 tj_accordion_4" id="tjAccordion01">
                      <div className="accordion_item active">
                        <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#accordion-1" aria-expanded="true">
                          What are the main types of cloud computing?
                        </button>
                        <div id="accordion-1" className="collapse" data-bs-parent="#tjAccordion01">
                          <div className="accordion-body accordion_content">
                            Cloud providers implement strong security measures such as encryption, firewalls, and
                            multi-factor authentication. However, businesses must also follow best practices,
                            such as strong password policies and regular security audits, to enhance protection. Our
                            solutions optimize every touchpoint of the customer journey, ensuring seamless,
                            personalized, and meaningful interactions.
                          </div>
                        </div>
                      </div>
                      <div className="accordion_item">
                        <button className="accordion_title" type="button" data-bs-toggle="collapse"
                          data-bs-target="#accordion-2" aria-expanded="false">How secure is cloud computing?</button>
                        <div id="accordion-2" className="collapse show" data-bs-parent="#tjAccordion01">
                          <div className="accordion-body accordion_content">
                            Cloud providers implement strong security measures such as encryption, firewalls, and
                            multi-factor authentication. However, businesses must also follow best practices,
                            such as strong password policies and regular security audits, to enhance protection. Our
                            solutions optimize every touchpoint of the customer journey, ensuring seamless,
                            personalized, and meaningful interactions.
                          </div>
                        </div>
                      </div>
                      <div className="accordion_item">
                        <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#accordion-3" aria-expanded="false">
                          Can I move my existing business applications to the cloud?
                        </button>
                        <div id="accordion-3" className="collapse" data-bs-parent="#tjAccordion01">
                          <div className="accordion-body accordion_content">
                            Cloud providers implement strong security measures such as encryption, firewalls, and
                            multi-factor authentication. However, businesses must also follow best practices,
                            such as strong password policies and regular security audits, to enhance protection. Our
                            solutions optimize every touchpoint of the customer journey, ensuring seamless,
                            personalized, and meaningful interactions.
                          </div>
                        </div>
                      </div>
                      <div className="accordion_item">
                        <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#accordion-4" aria-expanded="false">
                          How does cloud computing help businesses save costs?
                        </button>
                        <div id="accordion-4" className="collapse" data-bs-parent="#tjAccordion01">
                          <div className="accordion-body accordion_content">
                            Cloud providers implement strong security measures such as encryption, firewalls, and
                            multi-factor authentication. However, businesses must also follow best practices,
                            such as strong password policies and regular security audits, to enhance protection. Our
                            solutions optimize every touchpoint of the customer journey, ensuring seamless,
                            personalized, and meaningful interactions.
                          </div>
                        </div>
                      </div>
                      <div className="accordion_item">
                        <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#accordion-5" aria-expanded="false">
                          How do you collect customer feedback?
                        </button>
                        <div id="accordion-5" className="collapse" data-bs-parent="#tjAccordion01">
                          <div className="accordion-body accordion_content">
                            Cloud providers implement strong security measures such as encryption, firewalls, and
                            multi-factor authentication. However, businesses must also follow best practices,
                            such as strong password policies and regular security audits, to enhance protection. Our
                            solutions optimize every touchpoint of the customer journey, ensuring seamless,
                            personalized, and meaningful interactions.
                          </div>
                        </div>
                      </div>
                      <div className="accordion_item">
                        <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#accordion-6" aria-expanded="false">
                          How do I choose the right cloud service provider?
                        </button>
                        <div id="accordion-6" className="collapse" data-bs-parent="#tjAccordion01">
                          <div className="accordion-body accordion_content">
                            Cloud providers implement strong security measures such as encryption, firewalls, and
                            multi-factor authentication. However, businesses must also follow best practices,
                            such as strong password policies and regular security audits, to enhance protection. Our
                            solutions optimize every touchpoint of the customer journey, ensuring seamless,
                            personalized, and meaningful interactions.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tj-post__navigation mb-0">
                    {/*  previous post  */}
                    <div className="tj-nav__post previous">
                      <div className="tj-nav-post__nav prev_post">
                        <Link to="/service-details"><span><i className="tji-arrow-left-5"></i></span>Previous</Link>
                      </div>
                    </div>
                    <div className="tj-nav-post__grid">
                      <Link to="/service"><i className="tji-window"></i></Link>
                    </div>
                    {/*  next post  */}
                    <div className="tj-nav__post next">
                      <div className="tj-nav-post__nav next_post">
                        <Link to="/service-details">Next<span><i className="tji-arrow-right-5"></i></span></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="tj-main-sidebar">
                  <div className="tj-sidebar-widget service-categories">
                    <h4 className="widget-title">More services</h4>
                    <ul>
                      <li>
                        <Link to="/service-details">Manage IT Service<span className="icon"><i
                              className="tji-arrow-right-5"></i></span></Link>
                      </li>
                      <li>
                        <Link className="active" to="/service-details">Cloud Computing<span className="icon"><i
                              className="tji-arrow-right-5"></i></span></Link>
                      </li>
                      <li>
                        <Link to="/service-details">Cyber Security<span className="icon"><i
                              className="tji-arrow-right-5"></i></span></Link>
                      </li>
                      <li>
                        <Link to="/service-details">Software Develop<span className="icon"><i
                              className="tji-arrow-right-5"></i></span></Link>
                      </li>
                      <li>
                        <Link to="/service-details">Change Manage<span className="icon"><i
                              className="tji-arrow-right-5"></i></span></Link>
                      </li>
                      <li>
                        <Link to="/service-details">IT Consulting<span className="icon"><i
                              className="tji-arrow-right-5"></i></span></Link>
                      </li>
                    </ul>
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
                        <img src="/assets/images/services/service-ad.webp" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Service Details Section  */}

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
