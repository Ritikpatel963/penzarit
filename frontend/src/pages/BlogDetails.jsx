import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogDetails() {
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
                  <h1 className="tj-page-title tj-split-text-2">Blog Details</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <Link to="/">Home</Link>
                    </span>
                    <span><i className="tji-arrow-right"></i></span>
                    <span>
                      <span>Blog Details</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Breadcrumb Section  */}

        {/*  start: Blog Section  */}
        <section className="tj-blog-section section-gap">
          <div className="container">
            <div className="row row-gap-5">
              <div className="col-lg-12">
                <div className="post-details-wrapper">
                  <div className="blog-images">
                    <img src="/assets/images/blog/blog-details.webp" alt="Images" />
                  </div>
                  <h2 className="title">Somansa DLP Solution</h2>
                  <div className="blog-category-two">
                    <div className="category-item">
                      <div className="cate-images">
                        <img src="/assets/images/testimonial/client-2.webp" alt="Images" />
                      </div>
                      <div className="cate-text">
                        <span className="degination">	Complete Data Loss Prevention</span>
                        <h6 className="title"><Link to="/blog-details">Discover, Monitor, Prevent Sensitive Data Endpoint, Network, Cloud DLP</Link></h6>
                      </div>
                    </div>
                    <div className="category-item">
                      <div className="cate-icons">
                        <i className="tji-calendar"></i>
                      </div>
                      <div className="cate-text">
                        <span className="degination">	Complete Data Loss Prevention</span>
                        <h6 className="text">iscover, Monitor, Prevent Sensitive Data Endpoint, Network, Cloud DLP</h6>
                      </div>
                    </div>
                    <div className="category-item">
                      <div className="cate-icons">
                        <i className="tji-comment"></i>
                      </div>
                      <div className="cate-text">
                        <span className="degination">Cloud Data Loss Prevention</span>
                        <h6 className="text">Security, visibility, and policy controls to protect data stored in the cloud</h6>
                      </div>
                    </div>
                  </div>
    

                   

                   

                  <div className="blog-text">
                    <p>
                      Our Complete Data Loss Prevention solution provides a powerful, all-in-one approach to securing sensitive data across endpoints, networks, and cloud environments. It intelligently discovers and classifies both structured and unstructured data using advanced policy-based detection techniques. With real-time monitoring, it prevents data leakage through USB devices, printing, email, and network channels. The solution ensures strict control over file transfers, uploads, and external storage usage with features like encryption and secure erase.
                    </p>
                    <p>
                       Its centralized management console enables administrators to define policies, receive instant alerts, and generate detailed compliance reports.Designed for modern enterprises, it enhances visibility and strengthens data security across all touchpoints. Trusted by organizations worldwide, it delivers reliable protection and peace of mind.
                    </p>


   {/*  start: Client Section  */}
        <section id="client" className="tj-client-section section-gap-top overflow-hidden">
          <div className="container-fluid gx-0">
            <div className="row">
              <div className="col-12">
                <div className="client-content tj-fade-anim" data-delay="0.1">
                  <h5 className="sec-title"> Worldwide Customers:<span> Trusted by thousands </span></h5>
                </div>
                <div className="swiper client-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-1.webp" alt="Image" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-2.webp" alt="Image" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-3.webp" alt="Image" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-4.webp" alt="Image" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-5.webp" alt="Image" />
                      </div>
                    </div>
                       <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-7.webp" alt="Image" />
                      </div>
                    </div>   <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-8.webp" alt="Image" />
                      </div>
                    </div>
                       <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-9.webp" alt="Image" />
                      </div>
                    </div>
                    <div className="swiper-slide client-item">
                      <div className="client-logo">
                        <img src="/assets/images/brands/brand-6.webp" alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Client Section  */}

                    <blockquote>
                      <p>
                       Protect your sensitive data with advanced DLP across endpoints, networks, and cloud.
Monitor, control, and prevent data leaks with real-time security and smart policies.
                      </p>
                      <cite>Kevin Hooks</cite>
                    </blockquote>

        {/*  start: Service Section  */}
        <section className="tj-service-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading style-2">
                  <span className="sub-title tj-fade-anim"><span>//</span>Explore Services</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-5">Technology Features </h2>
                    <div className="tj-fade-anim d-lg-inline-flex d-none" data-delay="0.1">
                      <Link className="tj-primary-btn mt-20" to="/services">
                        <span className="btn-text"><span>Explore More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-xl-4 col-md-6">
                <div className="service-item service-item-2 tj-fade-anim" data-delay="0.1">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-computer"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><Link to="/service-details">Discover</Link></h4>
                      <p className="desc">Privacy-i scans and locates sensitive data stored on endpoints, PCs, mobile devices, servers, etc. based on policy rules.
<br />
1. Structured and unstructured data support <br />

2. Detection by keywords, patterns, expressions etc. <br />
3. Classification / Content and Context aware techniques</p>
                      <Link className="tj-text-btn" to="/service-details">
                        <span className="btn-inner">
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <span className="item-count">01.</span>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="service-item service-item-2 tj-fade-anim" data-delay="0.3">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-cloud"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><Link to="/service-details">Security</Link></h4>
                      <p className="desc">Privacy-i monitors and prevents data Leakage through removable storage, USB and Printing and protocols and applications email, network shares.
<br />
1. Monitors/Blocks copying, saving AND uploading of files <br />
2. USBs and other removable storage devices <br />
3. Wi-Fi, Bluetooth, FireWire and Printing <br />
4. Encryption, Secure Erase, Authorize specific USB devices</p>
                      <Link className="tj-text-btn" to="/service-details">
                        <span className="btn-inner">
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <span className="item-count">02.</span>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="service-item service-item-2 tj-fade-anim" data-delay="0.5">
                  <div className="service-inner">
                    <div className="service-icon">
                      <i className="tji-cybersecurity"></i>
                    </div>
                    <div className="service-content">
                      <h4 className="title"><Link to="/service-details">Management</Link></h4>
                      <p className="desc">Privacy-i’s management console allows administrators to set various policy rules and view real-time alerts and reports.
<br />
1. Set Policy Rules <br />
2. Real-time Alerts <br />
3. Generate Reports (compliance & audits)</p>
                      <Link className="tj-text-btn" to="/service-details">
                        <span className="btn-inner">
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <span className="item-count">03.</span>
                </div>
              </div>
     
     
             
            </div>
          </div>
        </section>
        {/*  end: Service Section  */}


{/* 
                    <p>
                      Moving from expensive on-premise infrastructure to pay-as-you-go cloud services can significantly
                      lower your operating costs. The cloud allows your resources to grow or shrink
                      according to demand, ensuring you only pay for what you use. Cloud-based applications and data can
                      be accessed anywhere.
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
                    <div className="blog-video">
                      <img src="/assets/images/blog/blog-video.webp" alt="Video" />
                      <a className="video-btn video-popup" data-autoplay="true" data-vbtype="video" data-maxwidth="1200px"
                        href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados">
                        <span><i className="tji-play"></i></span>
                      </a>
                    </div> */}
                   
                    {/* <p>
                      Migrating your business to the cloud can be a transformative experience, unlocking a world of
                      flexibility, security, and cost-efficiency. However, to ensure success, you must
                      approach the migration process carefully, from assessment and planning to security and
                      post-migration optimization.
                    </p>
                    <p>
                      By following these steps and working with a trusted IT solutions provider, you can ensure that
                      your business leverages the full potential of the cloud. The future is digital,
                      cloud is the key to unlocking that future.
                    </p> */}
                  </div>
                  <div className="tj-tags-post">
                    <div className="tagcloud">
                      <span>Tags:</span>
                      <Link to="/blog">Solution</Link>
                      <Link to="/blog">Software</Link>
                      <Link to="/blog">Cloud</Link>
                    </div>
                    <div className="post-share">
                      <ul>
                        <li>Share:</li>
                        <li>
                          <a href="https://www.facebook.com/" target="_blank"><i className="tji-facebook"></i></a>
                        </li>
                        <li>
                          <a href="https://x.com/" target="_blank"><i className="tji-x-twitter"></i></a>
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
            
                
                </div>
              </div>
              
            </div>
          </div>
        </section>
        {/*  end: Blog Section  */}

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
