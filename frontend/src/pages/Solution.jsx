import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
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
                  <h1 className="tj-page-title tj-split-text-2">Blogs</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <Link to="/">Home</Link>
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
                      <Link to="/blog-details"><img src="/assets/images/blog/blog-details.webp" alt="" /></Link>
                      <div className="blog-date">
                        <span className="date">28</span>
                        <span className="month">OCT</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><Link to="/blog-details">Solution</Link></span>
                        <span>By <Link to="/blog-details">Ellinien Loma</Link></span>
                      </div>
                      <h3 className="title"><Link to="/blog-details">How to Successfully Migrate Your Business to the
                          Cloud</Link></h3>
                      <p className="desc">
                        In today’s fast-paced business environment, the key to staying ahead of the competition lies in
                        embracing innovation. At [Company Name], we specialize in unlocking your
                        business’s full potential by providing tailored, forward-thinking solutions that drive growth,
                        efficiency, and lasting success.
                      </p>
                      <Link className="tj-primary-btn" to="/blog-details">
                        <span className="btn-text"><span>Read More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                  </article>
                  <article className="blog-item tj-fade-anim">
                    <div className="blog-thumb">
                      <Link to="/blog-details"><img src="/assets/images/blog/blog-post-2.webp" alt="" /></Link>
                      <div className="blog-date">
                        <span className="date">28</span>
                        <span className="month">OCT</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><Link to="/blog-details">Solution</Link></span>
                        <span>By <Link to="/blog-details">Ellinien Loma</Link></span>
                      </div>
                      <h3 className="title"><Link to="/blog-details">Building a Stronger Workforce with IT Training</Link>
                      </h3>
                      <p className="desc">
                        In today’s fast-paced business environment, the key to staying ahead of the competition lies in
                        embracing innovation. At [Company Name], we specialize in unlocking your
                        business’s full potential by providing tailored, forward-thinking solutions that drive growth,
                        efficiency, and lasting success.
                      </p>
                      <Link className="tj-primary-btn" to="/blog-details">
                        <span className="btn-text"><span>Read More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
                    </div>
                  </article>
                  <article className="blog-item tj-fade-anim">
                    <div className="blog-thumb">
                      <Link to="/blog-details"><img src="/assets/images/blog/blog-post-3.webp" alt="" /></Link>
                      <div className="blog-date">
                        <span className="date">28</span>
                        <span className="month">OCT</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="categories"><Link to="/blog-details">Solution</Link></span>
                        <span>By <Link to="/blog-details">Ellinien Loma</Link></span>
                      </div>
                      <h3 className="title"><Link to="/blog-details">How IT Solutions are Transforming Businesses</Link>
                      </h3>
                      <p className="desc">
                        In today’s fast-paced business environment, the key to staying ahead of the competition lies in
                        embracing innovation. At [Company Name], we specialize in unlocking your
                        business’s full potential by providing tailored, forward-thinking solutions that drive growth,
                        efficiency, and lasting success.
                      </p>
                      <Link className="tj-primary-btn" to="/blog-details">
                        <span className="btn-text"><span>Read More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                      </Link>
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
                          <Link to="/blog-details"> <img src="/assets/images/blog/post-1.webp" alt="Blog" /></Link>
                        </div>
                        <div className="post-content">
                          <h6 className="post-title">
                            <Link to="/blog-details">The Top 5 IT Challenges Faced by Enterprises</Link>
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
                          <Link to="/blog-details"> <img src="/assets/images/blog/post-2.webp" alt="Blog" /></Link>
                        </div>
                        <div className="post-content">
                          <h6 className="post-title">
                            <Link to="/blog-details">Optimizing Your IT Budget: Tips and Strategies</Link>
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
                          <Link to="/blog-details"> <img src="/assets/images/blog/post-3.webp" alt="Blog" /></Link>
                        </div>
                        <div className="post-content">
                          <h6 className="post-title">
                            <Link to="/blog-details">Driving Innovation and Efficient in Tech</Link>
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
                        <Link to="/blog-details">Development<span className="number">(03)</span></Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Cybersecurity<span className="number">(02)</span></Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Technology<span className="number">(03)</span></Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Innovation<span className="number">(06)</span></Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Automation<span className="number">(04)</span></Link>
                      </li>
                    </ul>
                  </div>
                  <div className="tj-sidebar-widget widget-tag-cloud tj-fade-anim">
                    <h4 className="widget-title">Tags</h4>
                    <nav>
                      <div className="tagcloud">
                        <Link to="/blog-details">Solution</Link>
                        <Link to="/blog-details">Data</Link>
                        <Link to="/blog-details">Software</Link>
                        <Link to="/blog-details">Tech</Link>
                        <Link to="/blog-details">Security</Link>
                        <Link to="/blog-details">Focus</Link>
                        <Link to="/blog-details">Tech</Link>
                        <Link to="/blog-details">Optimize</Link>
                        <Link to="/blog-details">Cloud</Link>
                        <Link to="/blog-details">Drive</Link>
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
