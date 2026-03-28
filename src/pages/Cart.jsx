import React from 'react';

export default function Cart() {
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
                  <h1 className="tj-page-title tj-split-text-2">My Cart</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <a href="index.html">Home</a>
                    </span>
                    <span><i className="tji-arrow-right"></i></span>
                    <span>
                      <span>My Cart</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Breadcrumb Section  */}

        {/*  start: Cart Section  */}
        <section className="full-width tj-page__area section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tj-page__container">
                  {/*  page content  */}
                  <div className="woocommerce">
                    <div className="woocommerce-notices-wrapper"></div>
                    <div className="row cart-wrapper ">
                      <div className="col-sm-12">
                        <form className="woocommerce-cart-form section-gap-bottom">

                          <div className="shop_table_wrapper">
                            <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                              <thead>
                                <tr>
                                  <th className="product-thumbnail">Product</th>
                                  <th className="product-name"></th>
                                  <th className="product-price">Price</th>
                                  <th className="product-quantity">Quantity</th>
                                  <th className="product-subtotal">Subtotal</th>
                                  <th className="product-remove">&nbsp;</th>
                                </tr>
                              </thead>
                              <tbody>

                                <tr className="woocommerce-cart-form__cart-item cart_item">
                                  <td className="product-thumbnail" data-title="Product">
                                    <a href="shop-details.html"><img src="./assets/images/product/product-1.webp"
                                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                        alt="Personal holding earbud" /></a>
                                  </td>
                                  <td className="product-name" data-title="Name">
                                    <h5><a href="shop-details.html">Echo Tune Wireless Headphones</a></h5>
                                  </td>
                                  <td className="product-price" data-title="Price">
                                    <span className="woocommerce-Price-amount amount"><bdi><span
                                          className="woocommerce-Price-currencySymbol">$</span>200.00</bdi></span>
                                  </td>
                                  <td className="product-quantity tj-cart-quantity" data-title="Quantity">
                                    <div className="tj-product-quantity">
                                      <div className="quantity">
                                        <label className="screen-reader-text"></label>
                                        <span className="qty_button minus tj-cart-minus">
                                          <i className="tji-minus"></i>
                                        </span>
                                        <input type="text" className="input-text tj-cart-input qty tj-cart-input text"
                                          value="1" />
                                        <span className="qty_button plus tj-cart-plus ">
                                          <i className="tji-plus"></i>
                                        </span>
                                      </div>

                                    </div>
                                  </td>
                                  <td className="product-subtotal" data-title="Subtotal">
                                    <span className="woocommerce-Price-amount amount"><bdi><span
                                          className="woocommerce-Price-currencySymbol">$</span>200.00</bdi></span>
                                  </td>
                                  <td className="product-remove">
                                    <a href="#" className="remove">×</a>
                                  </td>
                                </tr>
                                <tr className="woocommerce-cart-form__cart-item cart_item">
                                  <td className="product-thumbnail" data-title="Product">
                                    <a href="shop-details.html"><img src="./assets/images/product/product-2.webp"
                                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                        alt="Base booster speaker" /></a>
                                  </td>
                                  <td className="product-name" data-title="Name">
                                    <h5><a href="shop-details.html">Base Booster Speaker</a></h5>
                                  </td>

                                  <td className="product-price" data-title="Price">
                                    <span className="woocommerce-Price-amount amount"><bdi><span
                                          className="woocommerce-Price-currencySymbol">$</span>200.00</bdi></span>
                                  </td>

                                  <td className="product-quantity tj-cart-quantity" data-title="Quantity">
                                    <div className="tj-product-quantity">
                                      <div className="quantity">
                                        <label className="screen-reader-text"></label>
                                        <span className="qty_button minus tj-cart-minus">
                                          <i className="tji-minus"></i>
                                        </span>
                                        <input type="text" className="input-text tj-cart-input qty tj-cart-input text"
                                          value="1" />
                                        <span className="qty_button plus tj-cart-plus ">
                                          <i className="tji-plus"></i>
                                        </span>
                                      </div>

                                    </div>
                                  </td>

                                  <td className="product-subtotal" data-title="Subtotal">
                                    <span className="woocommerce-Price-amount amount"><bdi><span
                                          className="woocommerce-Price-currencySymbol">$</span>200.00</bdi></span>
                                  </td>

                                  <td className="product-remove">
                                    <a href="#" className="remove" aria-label="Remove this item">×</a>
                                  </td>
                                </tr>
                                <tr className="woocommerce-cart-form__cart-item cart_item">

                                  <td className="product-thumbnail" data-title="Product">
                                    <a href="shop-details.html"><img src="./assets/images/product/product-6.webp"
                                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                        alt="Cool mini USB fan" /></a>
                                  </td>

                                  <td className="product-name" data-title="Name">
                                    <h5><a href="shop-details.html">Travel MultiFunctional Charger</a></h5>
                                  </td>

                                  <td className="product-price" data-title="Price">
                                    <span className="woocommerce-Price-amount amount"><bdi><span
                                          className="woocommerce-Price-currencySymbol">$</span>50.00</bdi></span>
                                  </td>

                                  <td className="product-quantity tj-cart-quantity" data-title="Quantity">
                                    <div className="tj-product-quantity">
                                      <div className="quantity">
                                        <label className="screen-reader-text"></label>
                                        <span className="qty_button minus tj-cart-minus">
                                          <i className="tji-minus"></i>
                                        </span>
                                        <input type="text" className="input-text tj-cart-input qty tj-cart-input text"
                                          value="1" />
                                        <span className="qty_button plus tj-cart-plus ">
                                          <i className="tji-plus"></i>
                                        </span>
                                      </div>

                                    </div>
                                  </td>

                                  <td className="product-subtotal" data-title="Subtotal">
                                    <span className="woocommerce-Price-amount amount"><bdi><span
                                          className="woocommerce-Price-currencySymbol">$</span>50.00</bdi></span>
                                  </td>

                                  <td className="product-remove">
                                    <a href="#" className="remove">×</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="cart_totals_action_wrap">
                            <div className="actions">
                              <div className="row rg-30 align-items-center">
                                <div className="col-md-8">
                                  <div className="coupon">
                                    <input type="text" name="coupon_code" className="input-text" id="coupon_code" value=""
                                      placeholder="Coupon code" />

                                    <button type="submit" className="tj-primary-btn" name="apply_coupon"
                                      value="Apply coupon">
                                      <span className="btn-text"><span>Apply coupon</span></span>
                                      <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>

                                    </button>

                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="tj-cart-update-btn text-md-end">
                                    <button type="submit" className="update-cart tj-primary-btn" name="update_cart"
                                      value="Update cart" disabled="">
                                      <span className="btn-text"><span>Update cart</span></span>
                                      <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>

                                    </button>
                                  </div>
                                </div>
                              </div>
                              <input type="hidden" id="woocommerce-cart-nonce" name="woocommerce-cart-nonce" />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-sm-12">

                        <div className="cart-collaterals">
                          <div className="cart_totals ">
                            <h3>Cart Totals</h3>
                            <table className="shop_table shop_table_responsive">
                              <tbody>
                                <tr className="cart-subtotal">
                                  <th>Subtotal</th>
                                  <td data-title="Subtotal"><span className="woocommerce-Price-amount amount"><bdi><span
                                          className="woocommerce-Price-currencySymbol">$</span>450.00</bdi></span>
                                  </td>
                                </tr>
                                <tr className="order-total">
                                  <th>Total</th>
                                  <td data-title="Total"><strong><span
                                        className="woocommerce-Price-amount amount"><bdi><span
                                            className="woocommerce-Price-currencySymbol">$</span>450.00</bdi></span></strong>
                                  </td>
                                </tr>


                              </tbody>
                            </table>

                            <div className="wc-proceed-to-checkout">
                              <a href="checkout.html" className="tj-primary-btn checkout-button button alt wc-forward">
                                <span className="btn-text"><span>Proceed to Checkout</span></span>
                                <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>

                              </a>
                            </div>


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
        {/*  end: Cart Section  */}

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
