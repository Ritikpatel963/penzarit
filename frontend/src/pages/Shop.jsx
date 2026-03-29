import React from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {
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
                  <h1 className="tj-page-title tj-split-text-2">Shop</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <Link to="/">Home</Link>
                    </span>
                    <span><i className="tji-arrow-right"></i></span>
                    <span>
                      <span>Shop</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Breadcrumb Section  */}

        {/*  start: Shop Section  */}
        <div className="tj-product-area section-gap slidebar-stickiy-container">
          <div className="container">
            <div className="row rg-50">
              <div className="col-xl-8 col-lg-8 col-md-12">
                <div className="tj-shop-listing d-flex flex-wrap align-items-center mb-40 justify-content-between">
                  <div className="tj-shop-listing-number">
                    <p className="tj-shop-list-title">
                      Showing 1–6 of 9 results </p>
                  </div>
                  <div className="tj-shop-listing-popup">
                    <div className="tj-shop-from">
                      <form className="-ordering" method="get">
                        <span className="tj-select">
                          <select name="orderby" className="orderby" aria-label="Shop order">
                            <option value="popularity">Sort by popularity</option>
                            <option value="rating">Sort by average rating</option>
                            <option value="date" selected="selected">Sort by latest</option>
                            <option value="price">Sort by price: low to high</option>
                            <option value="price-desc">Sort by price: high to low</option>
                          </select>
                        </span>
                        <input type="hidden" name="paged" value="1" />
                      </form>
                    </div>
                  </div>
                </div>


                <div className="tj-shop-item-wrapper">
                  <div className="row rg-30 row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-1">
                    <div className="tj-product">
                      <div className="tj-product-item">
                        <div className="tj-product-thumb">
                          <Link to="/shop-details">
                            <img src="./assets/images/product/product-1.webp" alt="" /> </Link>

                          <div className="tj-product-badge product-on-sale">
                            <span className="onsale">Sale</span>
                          </div>

                          {/*  product action  */}
                          <div className="tj-product-action">
                            <div className="tj-product-action-item d-flex flex-column">
                              <div className="tj-product-action-btn product-add-wishlist-btn">
                                <button>Add to
                                  wishlist</button> <span className="tj-product-action-btn-tooltip">Add to
                                  wishlist</span>
                              </div>

                              <div className="tj-product-action-btn">
                                <a className="tj-quick-product-details" href="#tj-product-modal-1" data-vbtype="inline"><i
                                    className="tji-eyes-open"></i></a>
                                <span className="tj-product-action-btn-tooltip">Quick view</span>
                              </div>
                            </div>
                          </div>
                          <div className="tj-product-cart-btn">
                            <a href="#" data-quantity="1" className="cart-button button tj-cart-btn stock-available "><span
                                className="btn-icon"><i className="tji-cart"></i><i className="tji-cart"></i></span><span
                                className="btn-text"><span>Add to
                                  cart</span></span></a>
                          </div>
                        </div>
                        <div className="tj-product-content">
                          <div className="tj-product-tag d-none">
                            <Link to="/shop-details"> Power</Link>
                          </div>
                          <h3 className="tj-product-title">
                            <Link to="/shop-details">Echo Tune Wireless Headphones</Link>
                          </h3>

                          <div className="tj-product-price-wrapper">

                            <span className="price"><del><span><bdi><span>$</span>240.00</bdi></span></del>
                              <ins><span><bdi><span>$</span>200.00</bdi></span></ins></span>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="tj-product">
                      <div className="tj-product-item">
                        <div className="tj-product-thumb">
                          <Link to="/shop-details">
                            <img src="./assets/images/product/product-2.webp" alt="" /> </Link>

                          <div className="tj-product-badge product-on-sale">
                            <span className="onsale sold-out">Sold</span>
                          </div>

                          {/*  product action  */}
                          <div className="tj-product-action">
                            <div className="tj-product-action-item d-flex flex-column">
                              <div className="tj-product-action-btn product-add-wishlist-btn">
                                <button>Add to
                                  wishlist</button> <span className="tj-product-action-btn-tooltip">Add to
                                  wishlist</span>
                              </div>

                              <div className="tj-product-action-btn">
                                <a className="tj-quick-product-details" href="#tj-product-modal-1" data-vbtype="inline"><i
                                    className="tji-eyes-open"></i></a> <span className="tj-product-action-btn-tooltip">Quick
                                  view</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tj-product-content">
                          <div className="tj-product-tag d-none">
                            <a href="https://solvior.themejunction.net/product-category/charger/ ">
                              Charger</a>
                          </div>
                          <h3 className="tj-product-title">
                            <Link to="/shop-details">Base Booster Speaker</Link>
                          </h3>

                          <div className="tj-product-price-wrapper">

                            <span className="price"><del><span><bdi><span>$</span>300.00</bdi></span></del>
                              <ins><span><bdi><span>$</span>250.00</bdi></span></ins></span>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="tj-product">
                      <div className="tj-product-item">
                        <div className="tj-product-thumb">
                          <Link to="/shop-details">
                            <img src="./assets/images/product/product-3.webp" alt="" /> </Link>


                          {/*  product action  */}
                          <div className="tj-product-action">
                            <div className="tj-product-action-item d-flex flex-column">
                              <div className="tj-product-action-btn product-add-wishlist-btn">
                                <button>Add to
                                  wishlist</button> <span className="tj-product-action-btn-tooltip">Add to
                                  wishlist</span>
                              </div>

                              <div className="tj-product-action-btn">
                                <a className="tj-quick-product-details" href="#tj-product-modal-1" data-vbtype="inline"><i
                                    className="tji-eyes-open"></i></a> <span className="tj-product-action-btn-tooltip">Quick
                                  view</span>
                              </div>
                            </div>
                          </div>
                          <div className="tj-product-cart-btn">
                            <a href="?add-to-cart=5401" data-quantity="1"
                              className="cart-button button tj-cart-btn stock-available "><span className="btn-icon"><i
                                  className="tji-cart"></i><i className="tji-cart"></i></span><span className="btn-text"><span>Add
                                  to
                                  cart</span></span></a>
                          </div>
                        </div>
                        <div className="tj-product-content">
                          <div className="tj-product-tag d-none">
                            <Link to="/hshop-details"> Speaker</Link>
                          </div>
                          <h3 className="tj-product-title">
                            <Link to="/shop-details">Power Link Charging Cable</Link>
                          </h3>

                          <div className="tj-product-price-wrapper">

                            <span className="price"><span><bdi><span>$</span>200.00</bdi></span></span>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="tj-product">
                      <div className="tj-product-item">
                        <div className="tj-product-thumb">
                          <Link to="/shop-details">
                            <img src="./assets/images/product/product-4.webp" alt="" /> </Link>


                          {/*  product action  */}
                          <div className="tj-product-action">
                            <div className="tj-product-action-item d-flex flex-column">
                              <div className="tj-product-action-btn product-add-wishlist-btn">
                                <button>Add to
                                  wishlist</button> <span className="tj-product-action-btn-tooltip">Add to
                                  wishlist</span>
                              </div>

                              <div className="tj-product-action-btn">
                                <a className="tj-quick-product-details" href="#tj-product-modal-1" data-vbtype="inline"><i
                                    className="tji-eyes-open"></i></a> <span className="tj-product-action-btn-tooltip">Quick
                                  view</span>
                              </div>
                            </div>
                          </div>
                          <div className="tj-product-cart-btn">
                            <a href="#" className="cart-button button tj-cart-btn stock-available "><span
                                className="btn-icon"><i className="tji-cart"></i><i className="tji-cart"></i></span><span
                                className="btn-text"><span>Add to
                                  cart</span></span></a>
                          </div>
                        </div>
                        <div className="tj-product-content">
                          <div className="tj-product-tag d-none">
                            <Link to="/shop-details"> Power</Link>
                          </div>
                          <h3 className="tj-product-title">
                            <Link to="/shop-details">Pure White Slim Cover</Link>
                          </h3>

                          <div className="tj-product-price-wrapper">

                            <span className="price"><span><bdi><span>$</span>50.00</bdi></span></span>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="tj-product">
                      <div className="tj-product-item">
                        <div className="tj-product-thumb">
                          <Link to="/shop-details">
                            <img src="./assets/images/product/product-5.webp" alt="" /> </Link>


                          {/*  product action  */}
                          <div className="tj-product-action">
                            <div className="tj-product-action-item d-flex flex-column">
                              <div className="tj-product-action-btn product-add-wishlist-btn">
                                <button>Add to
                                  wishlist</button> <span className="tj-product-action-btn-tooltip">Add to
                                  wishlist</span>
                              </div>

                              <div className="tj-product-action-btn">
                                <a className="tj-quick-product-details" href="#tj-product-modal-1" data-vbtype="inline"><i
                                    className="tji-eyes-open"></i></a> <span className="tj-product-action-btn-tooltip">Quick
                                  view</span>
                              </div>
                            </div>
                          </div>
                          <div className="tj-product-cart-btn">
                            <a href="#" className="cart-button button tj-cart-btn stock-available "><span
                                className="btn-icon"><i className="tji-cart"></i><i className="tji-cart"></i></span><span
                                className="btn-text"><span>Add to
                                  cart</span></span></a>
                          </div>
                        </div>
                        <div className="tj-product-content">
                          <div className="tj-product-tag d-none">
                            <Link to="/shop-details"> Cover</Link>
                          </div>
                          <h3 className="tj-product-title">
                            <Link to="/shop-details">Turbo Volt Wall Charger</Link>
                          </h3>

                          <div className="tj-product-price-wrapper">

                            <span className="price"><span><bdi><span>$</span>30.00</bdi></span></span>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="tj-product">
                      <div className="tj-product-item">
                        <div className="tj-product-thumb">
                          <Link to="/shop-details">
                            <img src="./assets/images/product/product-6.webp" alt="" /> </Link>

                          <div className="tj-product-badge product-on-sale">
                            <span className="onsale">Sale</span>
                          </div>

                          {/*  product action  */}
                          <div className="tj-product-action">
                            <div className="tj-product-action-item d-flex flex-column">
                              <div className="tj-product-action-btn product-add-wishlist-btn">
                                <button>Add to
                                  wishlist</button> <span className="tj-product-action-btn-tooltip">Add to
                                  wishlist</span>
                              </div>

                              <div className="tj-product-action-btn">
                                <a className="tj-quick-product-details" href="#tj-product-modal-1" data-vbtype="inline"><i
                                    className="tji-eyes-open"></i></a> <span className="tj-product-action-btn-tooltip">Quick
                                  view</span>
                              </div>
                            </div>
                          </div>
                          <div className="tj-product-cart-btn">
                            <a href="#" className="cart-button button tj-cart-btn stock-available "><span
                                className="btn-icon"><i className="tji-cart"></i><i className="tji-cart"></i></span><span
                                className="btn-text"><span>Add to
                                  cart</span></span></a>
                          </div>
                        </div>
                        <div className="tj-product-content">
                          <div className="tj-product-tag d-none">
                            <Link to="/hshop-details"> Speaker</Link>
                          </div>
                          <h3 className="tj-product-title">
                            <Link to="/shop-details">Travel MultiFunctional Charger</Link>
                          </h3>

                          <div className="tj-product-price-wrapper">

                            <span className="price"><del><span><bdi><span>$</span>800.00</bdi></span></del>
                              <ins><span><bdi><span>$</span>600.00</bdi></span></ins></span>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <div className="basic-pagination text-start">
                        <nav className=" tj-pagination shop">
                          <ul className="page-numbers">
                            <li><span className="page-numbers current">1</span></li>
                            <li><a aria-label="Page 2" className="page-numbers" href="#">2</a></li>
                            <li><a className="next page-numbers" href="#"> <i className="tji-arrow-right-2"></i>
                              </a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="tj-shop-sidebar slidebar-stickiy">
                  <div id="_price_filter-2" className="product-widget widget_price_filter">
                    <h5 className="product-widget-title">Filter by price</h5>
                    <form>
                      <div className="price_slider_wrapper">
                        <div className="price_slider" id="slider-range"></div> {/*  Added ID  */}
                        <div className="price_slider_amount">
                          <button type="submit" className="button">Apply</button>
                          <div className="price_label">
                            <span className="from">$<span id="price-from">75</span></span> &mdash;
                            <span className="to">$<span id="price-to">300</span></span>
                          </div>
                          <div className="clear"></div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="product-widget  widget_product_categories">
                    <h5 className="product-widget-title">Categories</h5>
                    <ul className="product-categories">
                      <li><Link to="/shop-details">Bluetooth</Link>
                        <span className="count">(1)</span>
                      </li>
                      <li><Link to="/shop-details">Charger</Link> <span className="count">(2)</span></li>
                      <li><Link to="/shop-details">Cover</Link> <span>(1)</span></li>
                      <li><Link to="/shop-details">Power</Link> <span className="count">(2)</span></li>
                      <li><a href="https://solvior.themejunction.net/product-category/speaker/">Speaker</a>
                        <span className="count">(3)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="product-widget  widget_products">
                    <h5 className="product-widget-title">Latest products</h5>
                    <ul className="product_list_widget">
                      <li className="tj-recent-product-list sidebar-recent-post">
                        <div className="single-post d-flex align-items-center ">
                          <div className="post-image">
                            <Link to="/shop-details">
                              <img width="300" height="300" src="./assets/images/product/product-1.webp"
                                className="attachment-_thumbnail size-_thumbnail" alt="Personal holding earbud" />
                            </Link>
                          </div>

                          <div className="post-header">
                            <h5 className="tj-product-title">
                              <Link to="/shop-details">Echo Tune Wireless Headphones</Link>
                            </h5>
                            <div className="tj-product-sidebar-rating-price tj-product-price">
                              <del><span><span>$</span>240.00</span></del>
                              <ins><span><span>$</span>200.00</span></ins>
                            </div>
                          </div>

                        </div>
                      </li>
                      <li className="tj-recent-product-list sidebar-recent-post">
                        <div className="single-post d-flex align-items-center ">
                          <div className="post-image">
                            <Link to="/shop-details">
                              <img width="300" height="300" src="./assets/images/product/product-2.webp"
                                className="attachment-_thumbnail size-_thumbnail" alt="Super fast charger" />
                            </Link>
                          </div>

                          <div className="post-header">
                            <h5 className="tj-product-title">
                              <Link to="/shop-details">Base Booster Speaker</Link>
                            </h5>
                            <div className="tj-product-sidebar-rating-price tj-product-price">
                              <del><span><span>$</span>300.00</span></del>
                              <ins><span><span>$</span>250.00</span></ins>
                            </div>
                          </div>

                        </div>
                      </li>
                      <li className="tj-recent-product-list sidebar-recent-post">
                        <div className="single-post d-flex align-items-center ">
                          <div className="post-image">
                            <Link to="/shop-details">
                              <img width="300" height="300" src="./assets/images/product/product-3.webp"
                                className="attachment-_thumbnail size-_thumbnail" alt="Base booster speaker" /> </Link>
                          </div>

                          <div className="post-header">
                            <h5 className="tj-product-title">
                              <Link to="/shop-details">Power Link Charging Cable</Link>
                            </h5>
                            <div className="tj-product-sidebar-rating-price tj-product-price">
                              <span><span>$</span>200.00</span>
                            </div>
                          </div>

                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="product-widget  widget_product_tag_cloud">
                    <h5 className="product-widget-title">Tags</h5>
                    <div className="tagcloud"><Link to="/shop-details">Compact</Link>
                      <Link to="/shop-details">Durable</Link>
                      <Link to="/shop-details">Fast</Link>
                      <Link to="/shop-details" className="tag-cloud-link">Portable</Link>
                      <Link to="/shop-details" className="tag-cloud-link ">Powerful</Link>
                      <Link to="/shop-details" className="tag-cloud-link ">Reliable</Link>
                      <Link to="/shop-details" className="tag-cloud-link ">Retiable</Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/*  end: Shop Section  */}

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
