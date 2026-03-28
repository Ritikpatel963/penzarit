import React from 'react';

export default function ShopDetails() {
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
                  <h1 className="tj-page-title tj-split-text-2">Shop Details</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <a href="index.html">Home</a>
                    </span>
                    <span><i className="tji-arrow-right"></i></span>
                    <span>
                      <span>Shop Details</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Breadcrumb Section  */}

        {/*  start: Product Section  */}
        <section className="tj-product-area section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row section-gap-bottom product">
                  <div className="col-xl-6 col-lg-6">
                    <div
                      className="tj-product-details-thumb-wrapper d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-md-between">
                      <div className="tj-product-thumb-items nav order-2 order-md-1" role="tablist"
                        aria-orientation="vertical">
                        <button className="nav-link tj-pdt-thumb-img active" id="thumb-1-tab" data-bs-toggle="pill"
                          data-bs-target="#thumb-1" type="button" role="tab" aria-controls="thumb-1"
                          aria-selected="true"><img src="assets/images/product/product-1.webp" alt="images" /></button>
                        <button className="nav-link tj-pdt-thumb-img" id="thumb-2-tab" data-bs-toggle="pill"
                          data-bs-target="#thumb-2" type="button" role="tab" aria-controls="thumb-2"
                          aria-selected="false"><img src="assets/images/product/product-7.webp" alt="images" /></button>
                        <button className="nav-link tj-pdt-thumb-img" id="thumb-3-tab" data-bs-toggle="pill"
                          data-bs-target="#thumb-3" type="button" role="tab" aria-controls="thumb-3"
                          aria-selected="false"><img src="assets/images/product/product-8.webp" alt="images" /></button>
                        <button className="nav-link tj-pdt-thumb-img" id="thumb-4-tab" data-bs-toggle="pill"
                          data-bs-target="#thumb-4" type="button" role="tab" aria-controls="thumb-4"
                          aria-selected="false"><img src="assets/images/product/product-9.webp" alt="images" /></button>
                      </div>
                      <div className="tab-content tj-product-img-wrap order-1 order-md-2">
                        <div className="tj-product-badge product-on-sale">
                          <span className="onsale">Sale</span>
                        </div>
                        <div className="tj-product-action-btn">
                          <a className="tj-gallery" data-gall="gallery01" href="assets/images/product/product-1.webp"><i
                              className="tji-search"></i></a>
                          <a className="tj-gallery" data-gall="gallery01" href="assets/images/product/product-7.webp"><i
                              className="tji-search"></i></a>
                          <a className="tj-gallery" data-gall="gallery01" href="assets/images/product/product-8.webp"><i
                              className="tji-search"></i></a>
                          <a className="tj-gallery" data-gall="gallery01" href="assets/images/product/product-9.webp"><i
                              className="tji-search"></i></a>
                        </div>
                        <div className="tab-pane fade show active" id="thumb-1" role="tabpanel"
                          aria-labelledby="thumb-1-tab" tabIndex="0">
                          <div className="product-img-area">
                            <div className="product-img">
                              <img src="assets/images/product/product-1.webp" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="thumb-2" role="tabpanel" aria-labelledby="thumb-2-tab"
                          tabIndex="0">
                          <div className="product-img-area">
                            <div className="product-img">
                              <img src="assets/images/product/product-7.webp" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="thumb-3" role="tabpanel" aria-labelledby="thumb-3-tab"
                          tabIndex="0">
                          <div className="product-img-area">
                            <div className="product-img">
                              <img src="assets/images/product/product-8.webp" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="thumb-4" role="tabpanel" aria-labelledby="thumb-4-tab"
                          tabIndex="0">
                          <div className="product-img-area">
                            <div className="product-img">
                              <img src="assets/images/product/product-9.webp" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="tj-product-details-wrapper">
                      <h3 className="tj-product-details-title">Echo Tune Wireless Headphones</h3>
                      {/*  price  */}
                      <div className="tj-product-details-price-wrapper">
                        <p className="price">
                          <del>
                            <span><span>$</span>240.00</span>
                          </del>
                          <ins>
                            <span><span>$</span>200.00</span>
                          </ins>
                        </p>
                      </div>

                      <div className="product-details__short-description">
                        <p>Experience true wireless freedom with our latest earbuds, designed to deliver
                          crystal-clear sound and deep bass in compact, lightweight package. Perfectly
                          crafted
                          for everyday use, these earbuds feature.</p>
                      </div>

                      {/*  actions  */}
                      <div className="tj-product-details-action-wrapper">
                        <div className="tj-product-details-action-wrapper">
                          <form className="cart" action="#" method="post">
                            <div className="tj-product-details-action-item-wrapper d-flex flex-wrap align-items-center">
                              <div className="tj-product-details-quantity">
                                <div className="tj-product-quantity">
                                  <div className="quantity">
                                    <span className="tj-cart-minus">
                                      <i className="tji-minus"></i>
                                    </span>
                                    <input type="text" className="input-text tj-cart-input" name="quantity" value="1"
                                      title="Qty" size="4" autocomplete="off" />
                                    <span className="tj-cart-plus ">
                                      <i className="tji-plus"></i>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="tj-product-details-add-to-cart">
                                <button type="submit" name="add-to-cart" className="tj-cart-btn ">
                                  <span className="btn-icon"><i className="tji-cart"></i><i className="tji-cart"></i></span>
                                  <span className="btn-text"><span>Add to cart</span></span>
                                </button>
                              </div>
                              <div className="tj-product-details-wishlist">
                                <button className="wishlist-btn">Add to wishlist</button>
                              </div>
                            </div>
                          </form>
                        </div>

                        {/*  buy now button  */}
                        <a href="checkout.html" className="tj-product-details-buy-now-btn w-100">
                          <span className="btn-text"><span>Shop now</span></span></a>
                      </div>
                      <div className="tj-product-details-query">
                        <h6 className="tj-product-details-query-title">Product Info</h6>
                        <div className="tj-product-details-query-item d-flex align-items-center">
                          <span>SKU:</span>
                          <p>SV-18</p>
                        </div>
                        <div className="tj-product-details-query-item d-flex align-items-center">
                          <span>Category:</span> <a href="#">Power</a>
                        </div>
                        <div className="tj-product-details-query-item d-flex align-items-center">
                          <span>Tag:</span> <a href="#">Portable</a>
                        </div>
                      </div>
                      <div className="tj-product-details-share">
                        <h6>Share:</h6>
                        <a href="https://www.facebook.com/" title="Facebook"><i className="tji-facebook"></i></a>
                        <a href="https://x.com/" title="Twitter"><i className="tji-x-twitter"></i></a>
                        <a href="https://www.linkedin.com/" title="Linkedin"><i className="tji-linkedin"></i></a>
                        <a href="https://www.pinterest.com/" title="Pinterest"><i className="tji-pinterest"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tj-product-details-bottom section-gap-bottom">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tj-product-details-tab-nav tj-tab">
                        <nav>
                          <div className="nav nav-tabs p-relative tj-product-tab" id="navPresentationTab" role="tablist">
                            <button className="nav-link description_tab active" id="nav-desc-tab-description"
                              data-bs-toggle="tab" data-bs-target="#nav-desc-description" type="button" role="tab"
                              aria-controls="nav-desc-description" aria-selected="true">Description
                            </button>
                            <button className="nav-link additional_information_tab" id="nav-desc-tab-additional_information"
                              data-bs-toggle="tab" data-bs-target="#nav-desc-additional_information" type="button"
                              role="tab" aria-controls="nav-desc-additional_information" aria-selected="false"
                              tabIndex="-1">Additional information </button>
                            <button className="nav-link reviews_tab" id="nav-desc-tab-reviews" data-bs-toggle="tab"
                              data-bs-target="#nav-desc-reviews" type="button" role="tab"
                              aria-controls="nav-desc-reviews" aria-selected="false" tabIndex="-1">Reviews (01)
                            </button>
                          </div>
                        </nav>
                        <div className="tab-content" id="navPresentationTabContent">
                          <div className="tab-pane fade active show" id="nav-desc-description" role="tabpanel"
                            aria-labelledby="nav-desc-tab-description">
                            <div className="tj-product-details-description mt-30">
                              <p>Experience true wireless freedom with our latest earbuds, designed to
                                deliver
                                crystal-clear sound and deep bass in a compact, lightweight package.
                                Perfectly
                                crafted for everyday use, these earbuds feature advanced Bluetooth
                                connectivity for seamless pairing and stable audio streaming. Whether
                                you’re
                                hitting the gym, commuting, or relaxing at home, enjoy up to 8 hours of
                                uninterrupted playtime with a portable charging case that keeps you
                                powered on
                                the go.</p>
                              <p>With ergonomic ear tips and sweat-resistant materials, they provide a
                                secure
                                and comfortable fit for any activity. Plus, intuitive touch controls let
                                you
                                manage music, calls, and voice assistants effortlessly. Elevate your
                                audio
                                experience with earbuds that combine style, performance, and convenience
                              </p>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="nav-desc-additional_information" role="tabpanel"
                            aria-labelledby="nav-desc-tab-additional_information">
                            <div className="tj-product-details-description mt-30">
                              <table>
                                <tbody>
                                  <tr>
                                    <th>
                                      Weight</th>
                                    <td>55 kg</td>
                                  </tr>
                                  <tr>
                                    <th>
                                      Dimensions</th>
                                    <td>55 × 55 × 55 cm
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="nav-desc-reviews" role="tabpanel"
                            aria-labelledby="nav-desc-tab-reviews">
                            <div className="tj-product-details-description mt-30">
                              <div className="reviews-area">
                                <div className="comments-area">
                                  <h3 className="d-none mb-30">
                                    1 review for “<span>Personal Holding Earbud</span>” </h3>

                                  <ol className="commentlist">
                                    <li className="review">
                                      <div className="comment_container">
                                        <img className="avatar" src="assets/images/blog/avatar-1.webp" alt="" />
                                        <div className="comment-text">
                                          <div className="star-rating">
                                            <span style={{"width":"100%"}}></span>
                                          </div>
                                          <p className="meta">
                                            <strong className="review__author">Berlee Hopper </strong>
                                            <span className="review__dash">–</span>
                                            <span className="review__published-date">June 30,
                                              2025</span>
                                          </p>

                                          <div className="description">
                                            <p>“I’ve been using these earbuds daily for a few
                                              weeks, and
                                              they’ve truly exceeded my expectations. The sound
                                              quality
                                              is crisp, with deep bass and clear highs — perfect
                                              for
                                              music, calls, or podcasts. The Bluetooth connection
                                              is
                                              stable, and pairing was super easy.”</p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>{/*  #comment-##  */}
                                  </ol>


                                </div>

                                <div id="review_form_wrapper">
                                  <div id="review_form">
                                    <div id="respond" className="comment-respond">
                                      <h3>Leave a comment</h3>
                                      <form className="comment-form" action="#" method="post" id="commentform">
                                        <p className="comment-notes">Your email address
                                          will not be published. Required fields are marked
                                          <span className="required">*</span>
                                        </p>
                                        <p className="comment-form-author comment-input"><label htmlFor="author">Name <span
                                              className="required">*</span></label><input id="author" name="author"
                                            type="text" value="" size="30" required="" />
                                        </p>
                                        <p className="comment-form-email comment-input"><label htmlFor="email">Email <span
                                              className="required">*</span></label><input id="semail" name="semail"
                                            type="email" value="" size="30" required="" />
                                        </p>
                                        <div className="comment-form-rating comment-rating d-flex">
                                          <span>Your rating <span className="required">*</span></span>
                                          <div className="star-ratings">
                                            <div className="fill-ratings" style={{"width":"60%"}}>
                                              <span>★★★★★</span>
                                            </div>
                                            <div className="empty-ratings">
                                              <span>★★★★★</span>
                                            </div>
                                          </div>
                                        </div>

                                        <p className="comment-input"><label htmlFor="comment">Type your
                                            review&nbsp;<span className="required">*</span></label><textarea id="comment"
                                            name="comment" cols="45" rows="8" required=""></textarea></p>
                                        <p className="comment-check"><input id="comment-check" name="comment-check"
                                            type="checkbox" value="yes" />
                                          <label htmlFor="comment-check">Save my
                                            name, email, and website in this browser for the next
                                            time I
                                            comment.</label>
                                        </p>
                                        <p className="form-submit">

                                          <button type="submit" className="tj-primary-btn mt-0">
                                            <span className="btn-text"><span>Submit
                                                reviews</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
                                          </button>
                                        </p>
                                      </form>
                                    </div>{/*  #respond  */}
                                  </div>
                                </div>

                                <div className="clear"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="related-products has-border">

                  <div className="sec-heading text-center">
                    <span className="sub-title tj-fade-anim" data-delay="0.2">[Related
                      products]</span>
                    <h2 className="sec-title tj-split-text-1">Customers Also Bought</h2>
                  </div>

                  <div className="row rg-30 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-1">
                    <div className="tj-product">
                      <div className="tj-product-item">
                        <div className="tj-product-thumb">
                          <a href="shop-details.html">
                            <img src="./assets/images/product/product-4.webp" alt="" /> </a>

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
                            <a href="shop-details.html"> Power</a>
                          </div>
                          <h3 className="tj-product-title">
                            <a href="shop-details.html">Pure White Slim Cover</a>
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
                          <a href="shop-details.html">
                            <img src="./assets/images/product/product-2.webp" alt="" /> </a>

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
                                    className="tji-eyes-open"></i></a>
                                <span className="tj-product-action-btn-tooltip">Quick view</span>
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
                            <a href="shop-details.html">Base Booster Speaker</a>
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
                          <a href="shop-details.html">
                            <img src="./assets/images/product/product-6.webp" alt="" /> </a>


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
                            <a href="#" className="cart-button button tj-cart-btn stock-available "><span
                                className="btn-icon"><i className="tji-cart"></i><i className="tji-cart"></i></span><span
                                className="btn-text"><span>Add to
                                  cart</span></span></a>
                          </div>
                        </div>
                        <div className="tj-product-content">
                          <div className="tj-product-tag d-none">
                            <a href="shop-details.html"> Power</a>
                          </div>
                          <h3 className="tj-product-title">
                            <a href="shop-details.html">Travel MultiFunctional Charger</a>
                          </h3>

                          <div className="tj-product-price-wrapper">

                            <span className="price"><span><bdi><span>$</span>50.00</bdi></span></span>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Product Section  */}

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
