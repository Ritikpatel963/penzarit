import React from 'react';

export default function Index10() {
  return (
    <>

        {/*  start: Banner Section  */}
        <section className="tj-banner-section h10-banner-section">
          <div className="hero-bg" data-bg-image="assets/images/hero/h10-hero-bg.webp"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="banner-content">
                  <span className="sub-title tj-fade-anim" data-duration="0.3"><i className="tji-percent"></i> All-In-One
                    Hosting</span>
                  <h1 className="banner-title tj-split-text-5">Global Hosting Optimized for Maximum Speed</h1>
                  <div className="tj-fade-anim" data-delay="0.7">
                    <p className="banner-desc">Comprehensive IT support, monitoring & digital solution maintenance ensure
                      for more smooth and logical services.</p>
                  </div>
                  <div className="h10-btn-area tj-fade-anim" data-delay="1">
                    <a className="tj-primary-btn" href="service.html">
                      <span className="btn-text"><span>Plans Starting at $3.95/mo</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="h10-form tj-fade-anim" data-delay="0.5">
                  <form action="#">
                    <div className="h10-form-inner">
                      <span className="search-icon"><i className="tji-search"></i></span>
                      <input type="text" name="domain" placeholder="Search the domain you want to get" required />
                      <div className="btn-wrap">
                        <div className="tj-nice-select-box">
                          <div className="tj-select">
                            <select name="cfSubject">
                              <option value="0">.com</option>
                              <option value="1">.net</option>
                              <option value="2">.org</option>
                              <option value="3">.online</option>
                              <option value="4">.ai</option>
                              <option value="5">.business</option>
                              <option value="6">.asia</option>
                              <option value="7">.app</option>
                              <option value="8">.agency</option>
                              <option value="9">.tech</option>
                              <option value="10">.ea</option>
                              <option value="11">.xyz</option>
                            </select>
                          </div>
                        </div>
                        <div className="submit-btn">
                          <button className="tj-primary-btn" type="submit">
                            <span className="btn-text"><span>Submit Now</span></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="form-domain tj-fade-anim" data-delay="0.6">
                    <span>.com</span>
                    <span>.net</span>
                    <span>.org</span>
                    <span>.online</span>
                    <span>.ai</span>
                    <span>.business</span>
                    <span>.asia</span>
                    <span>.app</span>
                    <span>.agency</span>
                    <span>.tech</span>
                    <span>.ea</span>
                    <span>.xyz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Banner Section  */}

        {/*  start: Insights Section  */}
        <section className="insights h10-insights fix section-gap">
          <div className="container">
            <div className="row rg-30">
              <div className="col-12">
                <div className="insights-wrapper">
                  <div className="insights-box tj-fade-anim" data-delay=".3" data-duration="1" data-direction="bottom">
                    <div className="insights-content">
                      <div className="sec-heading">
                        <span className="sub-title tj-fade-anim">[ trusted & secure ]</span>
                        <h2 className="sec-title tj-split-text-1">One Platform for all Hosting Needs.</h2>
                        <div className="tj-fade-anim" data-delay="0.1">
                          <p className="desc">Shared, WordPress, VPS and Dedicated — one control panel to manage 24/7
                            support.
                          </p>
                        </div>
                        <div className="btn-wrap tj-fade-anim" data-delay="0.3">
                          <a className="tj-primary-btn" href="pricing.html">
                            <span className="btn-text"><span>Free Trail</span></span>
                          </a>
                          <a className="tj-primary-btn compare-btn" href="pricing.html">
                            <span className="btn-text"><span>Compare</span></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="insights-price">
                      <div className="pricing_header">
                        <div className="package_desc">Power Surge</div>
                        <h4 className="package_name">Speed Boost</h4>
                        <div className="package_price">
                          <span className="currency">$</span>
                          <span className="price">12.99</span>
                          <span className="period">/per month</span>
                        </div>
                      </div>
                      <p className="pricing_features">
                        NVMe Storage • Global CDN • WP Auto-Updates • Security Suite
                      </p>
                    </div>
                  </div>
                  <div className="insights-box tj-fade-anim" data-delay=".4" data-duration="1" data-direction="bottom">
                    <div className="insights-price">
                      <div className="pricing_header">
                        <h4 className="package_name">Starter</h4>
                        <div className="package_price">
                          <span className="currency">$</span>
                          <span className="price">3.99</span>
                          <span className="period">/per month</span>
                        </div>
                      </div>
                      <p className="pricing_features">
                        10 GB NVMe • 1 vCPU • 1 GB RAM <br />
                        Free SSL • Daily backups (14 days) <br />
                        24/7 support
                      </p>
                      <div className="pricing_tags">
                        <span>Best for personal</span>
                        <span>1 Site</span>
                      </div>
                    </div>
                  </div>
                  <div className="insights-box tj-fade-anim" data-delay=".5" data-duration="1" data-direction="bottom">
                    <div className="insights-price">
                      <div className="pricing_header">
                        <h4 className="package_name">Business — (Most popular)</h4>
                        <div className="package_price">
                          <span className="currency">$</span>
                          <span className="price">9.99</span>
                          <span className="period">/per month</span>
                        </div>
                      </div>
                      <p className="pricing_features">
                        50 GB NVMe • 2 vCPU • 2 GB RAM <br />
                        CDN • Staging • WP auto-updates <br />
                        Free migrations • Priority chat
                      </p>
                      <div className="pricing_tags">
                        <span>Recommended</span>
                        <span>Small businesses</span>
                      </div>
                    </div>
                  </div>
                  <div className="insights-box tj-fade-anim" data-delay=".6" data-duration="1" data-direction="bottom">
                    <div className="insights-price">
                      <div className="pricing_header">
                        <h4 className="package_name">Pro (VPS)</h4>
                        <div className="package_price">
                          <span className="currency">$</span>
                          <span className="price">30</span>
                          <span className="period">/per month</span>
                        </div>
                      </div>
                      <p className="pricing_features">
                        120 GB NVMe • 4 vCPU • 8 GB RAM <br />
                        Snapshots • Private network • 2 TB transfer <br />
                        Priority support • SLA options
                      </p>
                      <div className="pricing_tags">
                        <span>Developers</span>
                        <span>Scaling</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Insights Section  */}

        {/*  start: Hosting Monitor Section  */}
        <section className="hosting-monitor-section section-gap section-separator">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="hosting-monitor-wrap flex-lg-row flex-column-reverse">
                  <div className="hosting-monitor-img tj-fade-anim" data-delay="0.3" data-direction="left">
                    <img src=" assets/images/hosting/hosting-img.webp" alt="" />
                    <div className="benefits-content">
                      <h5 className="title">Benefits:</h5>
                      <ul className="tj_list">
                        <li><i className="tji-check-4"></i>10× faster NVMe read/write.</li>
                        <li><i className="tji-check-4"></i>Optimized for WordPress & heavy apps.</li>
                        <li><i className="tji-check-4"></i>Auto scaling during traffic spikes.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="hosting-monitor-content">
                    <div className="hosting-icon tj-fade-anim" data-delay="0.3"><i className="tji-speed-meter"></i></div>
                    <div className="sec-heading">
                      <span className="sub-title tj-fade-anim">[ Next-Gen Hosting ]</span>
                      <h2 className="sec-title tj-split-text-1">Unmatched the Speed with Next-Gen NVMe Hosting.</h2>
                      <div className="tj-fade-anim" data-delay="0.3">
                        <p className="desc">Experience lightning-fast load times powered by NVMe storage and optimized
                          server architecture. Your websites run smoother, respond quicker, and handle more traffic.</p>
                      </div>
                      <div className="tj-fade-anim" data-delay="0.5">
                        <a className="tj-primary-btn style-2" href="service.html">
                          <span className="btn-text"><span>Speed Features</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Hosting Monitor Section  */}

        {/*  start: Marquee Section  */}
        <section className="h10-marquee-section fix">
          <div className="container-fluid gx-0">
            <div className="row">
              <div className="col">
                <div className="marquee-slider-2 rounded-0">
                  <div className="marquee-slider-wrapper">
                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-server"></i>
                      </span>
                      <h3 className="marquee-text">Cloud & Catching</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-server"></i>
                      </span>
                      <h3 className="marquee-text">Speed & Security</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-server"></i>
                      </span>
                      <h3 className="marquee-text">Uptime & Support</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-server"></i>
                      </span>
                      <h3 className="marquee-text">Backups & Firefall</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-server"></i>
                      </span>
                      <h3 className="marquee-text">Performance & SSL</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-server"></i>
                      </span>
                      <h3 className="marquee-text">Migration & CDN</h3>
                    </div>
                  </div>
                  <div className="marquee-slider-wrapper">
                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-server"></i>
                      </span>
                      <h3 className="marquee-text">Cloud & Catching</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-server"></i>
                      </span>
                      <h3 className="marquee-text">Speed & Security</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-server"></i>
                      </span>
                      <h3 className="marquee-text">Uptime & Support</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-server"></i>
                      </span>
                      <h3 className="marquee-text">Backups & Firefall</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-server"></i>
                      </span>
                      <h3 className="marquee-text">Performance & SSL</h3>
                    </div>

                    <div className="marquee-item-3">
                      <span className="marquee-icon">
                        <i className="tji-server"></i>
                      </span>
                      <h3 className="marquee-text">Migration & CDN</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Marquee Section  */}

        {/*  start: Hosting Monitor Section  */}
        <section className="hosting-monitor-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="hosting-monitor-wrap">
                  <div className="hosting-monitor-content">
                    <div className="hosting-icon tj-fade-anim" data-delay="0.3"><i className="tji-security"></i></div>
                    <div className="sec-heading">
                      <span className="sub-title tj-fade-anim">[ trusted & secure ]</span>
                      <h2 className="sec-title tj-split-text-1">Rock-Solid Security Built for Modern Websites
                        Monitors.</h2>
                      <div className="tj-fade-anim" data-delay="0.3">
                        <p className="desc">Protect your data with AI-powered threat detection, real time malware
                          scanning's, and fully managed firewalls. Enjoy worry-free hosting with daily backups and
                          continuous monitoring.</p>
                      </div>
                      <div className="tj-fade-anim" data-delay="0.5">
                        <a className="tj-primary-btn style-2" href="service.html">
                          <span className="btn-text"><span>Security Tools</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="hosting-monitor-img tj-fade-anim" data-delay="0.3" data-direction="right">
                    <img src="assets/images/hosting/monitoring-img.webp" alt="" />
                    <div className="benefits-content">
                      <h5 className="title">Benefits:</h5>
                      <ul className="tj_list">
                        <li><i className="tji-check-4"></i>DDoS protection & real-time monitoring.</li>
                        <li><i className="tji-check-4"></i>Automatic daily backups.</li>
                        <li><i className="tji-check-4"></i>One-click resources scaling.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Hosting Monitor Section  */}

        {/*  start: Testimonial Section  */}
        <section className="h10-testimonial-section section-gap fix section-gap-x">
          <div className="global-location-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="sec-heading sec-heading-centered">
                    <span className="sub-title tj-fade-anim" data-delay=".2">[ Global Server Network ]</span>
                    <h2 className="sec-title tj-split-text-1">Performance Boost From Global Locations.</h2>
                    <div className="tj-fade-anim">
                      <p className="desc">Our global server network is strategically distributed deliver the fastest
                        performance.</p>
                    </div>
                  </div>
                  <div className="global-map">
                    <div className="global-map-img">
                      <img src="assets/images/location/map.svg" alt="Image" />
                      <div className="location-indicator loc-1">
                        <span className="location-indicator-blur"></span>
                        <div className="location-tooltip">
                          <img src="assets/images/location/usa.png" alt="Country" />
                          <span>United State</span>
                        </div>
                      </div>
                      <div className="location-indicator loc-2">
                        <span className="location-indicator-blur"></span>
                        <div className="location-tooltip">
                          <img src="assets/images/location/brazil.png" alt="Country" />
                          <span>Brazil</span>
                        </div>
                      </div>
                      <div className="location-indicator loc-3 current">
                        <span className="location-indicator-blur"></span>
                        <div className="location-tooltip">
                          <img src="assets/images/location/spain.png" alt="Country" />
                          <span>Madrid, Spain</span>
                        </div>
                      </div>
                      <div className="location-indicator loc-4">
                        <span className="location-indicator-blur"></span>
                        <div className="location-tooltip">
                          <img src="assets/images/location/south-africa.png" alt="Country" />
                          <span>South Africa</span>
                        </div>
                      </div>
                      <div className="location-indicator loc-5">
                        <span className="location-indicator-blur"></span>
                        <div className="location-tooltip">
                          <img src="assets/images/location/singapore.png" alt="Country" />
                          <span>Singapore</span>
                        </div>
                      </div>
                      <div className="location-indicator loc-6">
                        <span className="location-indicator-blur"></span>
                        <div className="location-tooltip">
                          <img src="assets/images/location/australia.png" alt="Country" />
                          <span>Australia</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row rg-30">
              <div className="col-12">
                <div className="sec-heading">
                  <span className="sub-title tj-fade-anim" data-delay=".2">[ Client Feedback ]</span>
                  <div className="sec-heading-inner">
                    <h2 className="sec-title tj-split-text-1">Trusted Feedback From Our Pro Clients.</h2>
                    <div className="slider-navigation d-none d-md-inline-flex tj-fade-anim" data-delay="0.3">
                      <div className="slider-prev">
                        <span className="anim-icon">
                          <i className="tji-arrow-left-3"></i>
                          <i className="tji-arrow-left-3"></i>
                        </span>
                      </div>
                      <div className="slider-next">
                        <span className="anim-icon">
                          <i className="tji-arrow-right-3"></i>
                          <i className="tji-arrow-right-3"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="testimonial-wrapper-5 h10-testimonial">
                  <div className="h10-testimonial-slider swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial_item_3">
                          <div className="testimonial_content">
                            <div className="desc">
                              <p>"Tekmino truly exceeded our expectations. From the our initial consultation to the
                                final
                                implementation, their team provided excellent service and unwavering support. Their
                                ability to integrate. Tekmino truly exceeded expectations."</p>
                            </div>
                          </div>
                          <div className="testimonial_header">
                            <div className="star-ratings">
                              <div className="fill-ratings">
                                <span>★★★★★</span>
                              </div>
                              <div className="empty-ratings">
                                <span>★★★★★</span>
                              </div>
                            </div>
                            <span>5.0/5</span>
                          </div>
                          <div className="author_avatar_wrapper">
                            <div className="author_avatar">
                              <img src="./assets/images/testimonial/client-1.webp" alt="" />
                            </div>
                            <div className="author_info">
                              <h5 className="name">Devon Lane</h5>
                              <span className="designation">Co. Founder</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial_item_3">
                          <div className="testimonial_content">
                            <div className="desc">
                              <p>"Partnering with Nexor has been an absolute game-changer for our company. Their team
                                delivered a tailored IT solution that met our unique business needs, and their
                                proactive approach to problem. Tekmino truly exceeded expectations."</p>
                            </div>
                          </div>
                          <div className="testimonial_header">
                            <div className="star-ratings">
                              <div className="fill-ratings">
                                <span>★★★★★</span>
                              </div>
                              <div className="empty-ratings">
                                <span>★★★★★</span>
                              </div>
                            </div>
                            <span>5.0/5</span>
                          </div>
                          <div className="author_avatar_wrapper">
                            <div className="author_avatar">
                              <img src="./assets/images/testimonial/client-3.webp" alt="" />
                            </div>
                            <div className="author_info">
                              <h5 className="name">Eleanor Pena</h5>
                              <span className="designation">Co. Founder</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial_item_3">
                          <div className="testimonial_content">
                            <div className="desc">
                              <p>"Tekmino truly exceeded our expectations. From the our initial consultation to the
                                final
                                implementation, their team provided excellent service and unwavering support. Their
                                ability to integrate. Tekmino truly exceeded expectations."</p>
                            </div>
                          </div>
                          <div className="testimonial_header">
                            <div className="star-ratings">
                              <div className="fill-ratings">
                                <span>★★★★★</span>
                              </div>
                              <div className="empty-ratings">
                                <span>★★★★★</span>
                              </div>
                            </div>
                            <span>5.0/5</span>
                          </div>
                          <div className="author_avatar_wrapper">
                            <div className="author_avatar">
                              <img src="./assets/images/testimonial/client-2.webp" alt="" />
                            </div>
                            <div className="author_info">
                              <h5 className="name">Caeron Williason</h5>
                              <span className="designation">Co. Founder</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial_item_3">
                          <div className="testimonial_content">
                            <div className="desc">
                              <p>"Partnering with Nexor has been an absolute game-changer for our company. Their team
                                delivered a tailored IT solution that met our unique business needs, and their
                                proactive approach to problem. Tekmino truly exceeded expectations."</p>
                            </div>
                          </div>
                          <div className="testimonial_header">
                            <div className="star-ratings">
                              <div className="fill-ratings">
                                <span>★★★★★</span>
                              </div>
                              <div className="empty-ratings">
                                <span>★★★★★</span>
                              </div>
                            </div>
                            <span>5.0/5</span>
                          </div>
                          <div className="author_avatar_wrapper">
                            <div className="author_avatar">
                              <img src="./assets/images/testimonial/client-3.webp" alt="" />
                            </div>
                            <div className="author_info">
                              <h5 className="name">Eleanor Pena</h5>
                              <span className="designation">Co. Founder</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial_item_3">
                          <div className="testimonial_content">
                            <div className="desc">
                              <p>"Tekmino truly exceeded our expectations. From the our initial consultation to the
                                final
                                implementation, their team provided excellent service and unwavering support. Their
                                ability to integrate. Tekmino truly exceeded expectations."</p>
                            </div>
                          </div>
                          <div className="testimonial_header">
                            <div className="star-ratings">
                              <div className="fill-ratings">
                                <span>★★★★★</span>
                              </div>
                              <div className="empty-ratings">
                                <span>★★★★★</span>
                              </div>
                            </div>
                            <span>5.0/5</span>
                          </div>
                          <div className="author_avatar_wrapper">
                            <div className="author_avatar">
                              <img src="./assets/images/testimonial/client-3.webp" alt="" />
                            </div>
                            <div className="author_info">
                              <h5 className="name">Eleanor Pena</h5>
                              <span className="designation">Co. Founder</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nav-pagiation-wrap style-2 d-flex justify-content-center">
                      <div className="swiper-pagination-area m-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h10-testimonial-shapes">
            <img className="h10-testimonial-shape h10-testimonial-shape-1"
              src="assets/images/shapes/h10-testimonials-shape-1.png" alt="" />
            <img className="h10-testimonial-shape h10-testimonial-shape-2"
              src="assets/images/shapes/h10-testimonials-shape-2.png" alt="" />
            <img className="h10-testimonial-shape h10-testimonial-shape-3"
              src="assets/images/shapes/h10-testimonials-shape-3.png" alt="" />
          </div>
        </section>
        {/*  end: Testimonial Section  */}

        {/*  start: FAQ Section  */}
        <section className="h10-faq-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim">[ Read our faq ]</span>
                  <h2 className="sec-title tj-split-text-1">Quick Help for Common Questions Here.</h2>
                </div>
              </div>
              <div className="col-12">
                <div className="tj_accordion h10-accordion" id="tjAccordion01">
                  <div className="accordion_item active tj-fade-anim">
                    <button className="accordion_title" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-1" aria-expanded="true"><span>Q.</span> What services does your company
                      offer?</button>
                    <div id="accordion-1" className="collapse show" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs, and enabling seamless digital transformation to boost growth and productivity and stay
                        up-to-date with the latest technologies. The consultation phase and keep you informed. Our
                        solutions are tailored to meet your unique business needs, improving efficiency, reducing costs,
                        and enabling seamless digital transformation.
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item tj-fade-anim">
                    <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-2" aria-expanded="false">
                      <span>Q.</span> How can your IT solutions help my business?
                    </button>
                    <div id="accordion-2" className="collapse" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs, and enabling seamless digital transformation to boost growth and productivity and stay
                        up-to-date with the latest technologies. The consultation phase and keep you informed. Our
                        solutions are tailored to meet your unique business needs, improving efficiency, reducing costs,
                        and enabling seamless digital transformation.
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item tj-fade-anim">
                    <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-3" aria-expanded="false">
                      <span>Q.</span> Do you provide support after project completion?
                    </button>
                    <div id="accordion-3" className="collapse" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs, and enabling seamless digital transformation to boost growth and productivity and stay
                        up-to-date with the latest technologies. The consultation phase and keep you informed. Our
                        solutions are tailored to meet your unique business needs, improving efficiency, reducing costs,
                        and enabling seamless digital transformation.
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item tj-fade-anim">
                    <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-4" aria-expanded="false">
                      <span>Q.</span> How long does it take to implement an IT solution?
                    </button>
                    <div id="accordion-4" className="collapse" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs, and enabling seamless digital transformation to boost growth and productivity and stay
                        up-to-date with the latest technologies. The consultation phase and keep you informed. Our
                        solutions are tailored to meet your unique business needs, improving efficiency, reducing costs,
                        and enabling seamless digital transformation.
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item tj-fade-anim">
                    <button className="accordion_title collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accordion-5" aria-expanded="false">
                      <span>Q.</span> Is my data secure with your solutions?
                    </button>
                    <div id="accordion-5" className="collapse" data-bs-parent="#tjAccordion01">
                      <div className="accordion-body accordion_content">
                        Our solutions are tailored to meet your unique business needs, improving efficiency, reducing
                        costs, and enabling seamless digital transformation to boost growth and productivity and stay
                        up-to-date with the latest technologies. The consultation phase and keep you informed. Our
                        solutions are tailored to meet your unique business needs, improving efficiency, reducing costs,
                        and enabling seamless digital transformation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shape-wrap">
            <div className="shape">
              <img src="assets/images/shapes/h10-faq-shape.png" alt="" />
            </div>
            <div className="shape shape-2">
              <img src="assets/images/shapes/h10-faq-shape-2.png" alt="" />
            </div>
          </div>
        </section>
        {/*  end: FAQ Section  */}

        {/*  start: Client Section  */}
        <section className="h10-client-section section-gap section-gap-x fix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading">
                  <span className="sub-title tj-fade-anim">[ Our Trusted Clients ]</span>
                  <div className="sec-heading-inner align-items-end">
                    <h2 className="sec-title tj-split-text-1">Global Clients.</h2>
                    <div className="tj-fade-anim" data-delay="0.3">
                      <p className="desc">From small business website enterprise level applications uptime,</p>
                    </div>
                    <div className="d-none d-lg-block tj-fade-anim" data-delay="0.5">
                      <a className="tj-primary-btn d-none d-lg-inline-flex" href="about.html">
                        <span className="btn-text"><span>Join Our Server</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h10-client-slider">
            <div className="scroll-slider">
              <div className="scroll-wrapper">
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-1.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-2.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-3.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-4.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-5.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-6.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-1.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-2.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-3.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
              </div>
              <div className="scroll-wrapper">
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-1.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-2.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-3.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-4.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-5.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-6.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-1.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-2.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
                <div className="client-logo circle-client-logo">
                  <img src="assets/images/brands/brand-3.webp" alt="Image" />
                  <div className="client-item-bg" data-bg-image="assets/images/brands/client-logo-bg.webp"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-lg-none text-center mt-40 tj-fade-anim" data-delay="0.5">
            <a className="tj-primary-btn" href="about.html">
              <span className="btn-text"><span>Join Our Server</span></span>
              <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
            </a>
          </div>

          <div className="h10-client-shapes">
            <img className="h10-client-shape h10-client-shape-1" src="assets/images/shapes/h10-client-shape-1.png" alt="" />
            <img className="h10-client-shape h10-client-shape-2" src="assets/images/shapes/h10-client-shape-2.png" alt="" />
          </div>
        </section>
        {/*  end: Client Section  */}

        {/*  start: Blog Section  */}
        <section className="tj-blog-section section-gap fix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-heading sec-heading-centered">
                  <span className="sub-title tj-fade-anim">[ Our Latest blogs ]</span>
                  <h2 className="sec-title tj-split-text-1">Explore Latest Insights, & Innovations.</h2>
                </div>
              </div>
            </div>
            <div className="row rg-30">
              <div className="col-md-6">
                <div className="blog-item h10-blog-item tj-fade-anim" data-delay="0.1">
                  <div className="blog-thumb img-reveal-2">
                    <a href="blog-details.html"><img src="assets/images/blog/blog-11.webp" alt="" /></a>
                    <div className="blog-date">
                      <span className="date">28</span>
                      <span className="month">Feb</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="categories"><a href="blog-details.html">Solutions</a></span>
                      <span>By <a href="blog-details.html">Ellinien Loma</a></span>
                    </div>
                    <h3 className="title"><a href="blog-details.html">How to Successfully Migrate Your Business to the
                        Cloud</a></h3>
                    <a className="tj-text-btn" href="blog-details.html">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>Read More</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="blog-item h10-blog-item tj-fade-anim" data-delay="0.2">
                  <div className="blog-thumb img-reveal-2">
                    <a href="blog-details.html"><img src="assets/images/blog/blog-3.webp" alt="" /></a>
                    <div className="blog-date">
                      <span className="date">28</span>
                      <span className="month">Feb</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="categories"><a href="blog-details.html">Focus</a></span>
                      <span>By <a href="blog-details.html">Ellinien Loma</a></span>
                    </div>
                    <h3 className="title"><a href="blog-details.html">Building a Stronger Workforce with IT Solutions
                        Training.</a>
                    </h3>
                    <a className="tj-text-btn" href="blog-details.html">
                      <span className="btn-inner">
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                        <span className="btn-text"><span>Read More</span></span>
                        <span className="btn-icon"><span><i className="tji-arrow-right-4"></i></span></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Blog Section  */}

        {/*  start: Cta Section  */}
        <section className="tj-cta-section h10-cta-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="cta-area tj-fade-anim">
                  <div className="bg-img" data-bg-image="assets/images/cta/h10-cta-bg.webp"></div>
                  <div className="cta-content">
                    <h2 className="title">Your Trusted Partner in Hosting.</h2>
                  </div>
                  <div className="cta-right">
                    <a className="tj-text-btn style-2" href="blog-details.html">
                      Learn More Here <i className="tji-arrow-right-4"></i>
                    </a>
                    <a className="tj-primary-btn style-2" href="about.html">
                      <span className="btn-text"><span>Get Started Now</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                    </a>
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
