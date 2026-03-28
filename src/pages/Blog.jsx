import React from 'react';

export default function Blog() {
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
                  <h1 className="tj-page-title tj-split-text-2">Blogs</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <a href="index.html">Home</a>
                    </span>
                    <span><i className="tji-arrow-right"></i></span>
                    <span>
                      <span>Blogs</span>
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
              <div className="col-lg-8">
                <div className="blog-post-wrapper">
                  <article className="blog-item tj-fade-anim">
                    <div className="blog-thumb">
                      <a href="blog-details.html"><img src="assets/images/blog/blog-details.webp" alt="" /></a>
                      <div className="blog-date">
                        <span className="date">28</span>
                        <span className="month">OCT</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><a href="blog-details.html">Solution</a></span>
                        <span>By <a href="blog-details.html">Ellinien Loma</a></span>
                      </div>
                      <h3 className="title"><a href="blog-details.html">How to Successfully Migrate Your Business to the
                          Cloud</a></h3>
                      <p className="desc">
                        In today’s fast-paced business environment, the key to staying ahead of the competition lies in
                        embracing innovation. At [Company Name], we specialize in unlocking your
                        business’s full potential by providing tailored, forward-thinking solutions that drive growth,
                        efficiency, and lasting success.
                      </p>
                      <a className="tj-primary-btn" href="blog-details.html">
                        <span className="btn-text"><span>Read More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </a>
                    </div>
                  </article>
                  <article className="blog-item tj-fade-anim">
                    <div className="blog-thumb">
                      <a href="blog-details.html"><img src="assets/images/blog/blog-post-2.webp" alt="" /></a>
                      <div className="blog-date">
                        <span className="date">28</span>
                        <span className="month">OCT</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><a href="blog-details.html">Solution</a></span>
                        <span>By <a href="blog-details.html">Ellinien Loma</a></span>
                      </div>
                      <h3 className="title"><a href="blog-details.html">Building a Stronger Workforce with IT Training</a>
                      </h3>
                      <p className="desc">
                        In today’s fast-paced business environment, the key to staying ahead of the competition lies in
                        embracing innovation. At [Company Name], we specialize in unlocking your
                        business’s full potential by providing tailored, forward-thinking solutions that drive growth,
                        efficiency, and lasting success.
                      </p>
                      <a className="tj-primary-btn" href="blog-details.html">
                        <span className="btn-text"><span>Read More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </a>
                    </div>
                  </article>
                  <article className="blog-item tj-fade-anim">
                    <div className="blog-thumb">
                      <a href="blog-details.html"><img src="assets/images/blog/blog-post-3.webp" alt="" /></a>
                      <div className="blog-date">
                        <span className="date">28</span>
                        <span className="month">OCT</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><a href="blog-details.html">Solution</a></span>
                        <span>By <a href="blog-details.html">Ellinien Loma</a></span>
                      </div>
                      <h3 className="title"><a href="blog-details.html">How IT Solutions are Transforming Businesses</a>
                      </h3>
                      <p className="desc">
                        In today’s fast-paced business environment, the key to staying ahead of the competition lies in
                        embracing innovation. At [Company Name], we specialize in unlocking your
                        business’s full potential by providing tailored, forward-thinking solutions that drive growth,
                        efficiency, and lasting success.
                      </p>
                      <a className="tj-primary-btn" href="blog-details.html">
                        <span className="btn-text"><span>Read More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </a>
                    </div>
                  </article>
                  <div className="tj-pagination d-flex">
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
              <div className="col-lg-4">
                <div className="tj-main-sidebar">
                  <div className="tj-sidebar-widget widget-search tj-fade-anim">
                    <h4 className="widget-title">Search here</h4>
                    <div className="search-box">
                      <form action="#">
                        <input type="search" name="search" id="searchTwo" placeholder="Search here" />
                        <button type="submit" value="search">
                          <i className="tji-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="tj-sidebar-widget tj-recent-posts tj-fade-anim">
                    <h4 className="widget-title">Related post</h4>
                    <ul>
                      <li>
                        <div className="post-thumb">
                          <a href="blog-details.html"> <img src="assets/images/blog/post-1.webp" alt="Blog" /></a>
                        </div>
                        <div className="post-content">
                          <h6 className="post-title">
                            <a href="blog-details.html">The Top 5 IT Challenges Faced by Enterprises</a>
                          </h6>
                          <div className="blog-meta">
                            <ul>
                              <li>04 OCT 2025</li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <a href="blog-details.html"> <img src="assets/images/blog/post-2.webp" alt="Blog" /></a>
                        </div>
                        <div className="post-content">
                          <h6 className="post-title">
                            <a href="blog-details.html">Optimizing Your IT Budget: Tips and Strategies</a>
                          </h6>
                          <div className="blog-meta">
                            <ul>
                              <li>02 JAN 2025</li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <a href="blog-details.html"> <img src="assets/images/blog/post-3.webp" alt="Blog" /></a>
                        </div>
                        <div className="post-content">
                          <h6 className="post-title">
                            <a href="blog-details.html">Driving Innovation and Efficient in Tech</a>
                          </h6>
                          <div className="blog-meta">
                            <ul>
                              <li>24 FEB 2025</li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="tj-sidebar-widget widget-categories tj-fade-anim">
                    <h4 className="widget-title">Categories</h4>
                    <ul>
                      <li>
                        <a href="blog-details.html">Development<span className="number">(03)</span></a>
                      </li>
                      <li>
                        <a href="blog-details.html">Cybersecurity<span className="number">(02)</span></a>
                      </li>
                      <li>
                        <a href="blog-details.html">Technology<span className="number">(03)</span></a>
                      </li>
                      <li>
                        <a href="blog-details.html">Innovation<span className="number">(06)</span></a>
                      </li>
                      <li>
                        <a href="blog-details.html">Automation<span className="number">(04)</span></a>
                      </li>
                    </ul>
                  </div>
                  <div className="tj-sidebar-widget widget-tag-cloud tj-fade-anim">
                    <h4 className="widget-title">Tags</h4>
                    <nav>
                      <div className="tagcloud">
                        <a href="blog-details.html">Solution</a>
                        <a href="blog-details.html">Data</a>
                        <a href="blog-details.html">Software</a>
                        <a href="blog-details.html">Tech</a>
                        <a href="blog-details.html">Security</a>
                        <a href="blog-details.html">Focus</a>
                        <a href="blog-details.html">Tech</a>
                        <a href="blog-details.html">Optimize</a>
                        <a href="blog-details.html">Cloud</a>
                        <a href="blog-details.html">Drive</a>
                      </div>
                    </nav>
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
