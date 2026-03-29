import React from 'react';
import { Link } from 'react-router-dom';

export default function Wishlist() {
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
                  <h1 className="tj-page-title tj-split-text-2">Wishlist</h1>
                  <div className="tj-page-link tj-fade-anim" data-delay="0.3">
                    <span><i className="tji-home"></i></span>
                    <span>
                      <Link to="/">Home</Link>
                    </span>
                    <span><i className="tji-arrow-right"></i></span>
                    <span>
                      <span>Wishlist</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Breadcrumb Section  */}


        {/*  start: Wishlist Section  */}
        <section className="full-width tj-page__area section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tj-page__container">
                  <div className="tj-entry__content">
                    <div className="woosw-list">
                      <table className="woosw-items">
                        <tbody>
                          <tr className="woosw-item">
                            <td className="woosw-item--remove"><span>×</span></td>
                            <td className="woosw-item--image">
                              <Link to="/shop-details">
                                <img src="./assets/images/product/product-5.webp" alt="" />
                              </Link>
                            </td>
                            <td className="woosw-item--info">
                              <div className="woosw-item--name">
                                <Link to="/shop-details">
                                  Turbo Volt Wall Charger
                                </Link>
                              </div>
                              <div className="woosw-item--price">
                                <ins aria-hidden="true">
                                  <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">$</span>
                                    30.00
                                  </span>
                                </ins>
                              </div>
                            </td>
                            <td className="woosw-item--actions">
                              <div className="woosw-item--stock">
                                <div className="product-stock">
                                  <span className="stock in-stock">10 in stock</span>
                                </div>
                              </div>
                              <div className="woosw-item--atc">
                                <p className="product woocommerce add_to_cart_inline ">
                                  <Link to="/shop-details"
                                    className="cart-button button tj-cart-btn stock-out  product_type_simple product-add-cart-btn">
                                    <span className="btn-icon">
                                      <i className="tji-cart"></i>
                                      <i className="tji-cart"></i>
                                    </span>
                                    <span className="btn-text">
                                      <span>Add to
                                        cart</span>
                                    </span>
                                  </Link>
                                </p>
                              </div>
                            </td>
                          </tr>
                          <tr className="woosw-item">
                            <td className="woosw-item--remove"><span>×</span></td>
                            <td className="woosw-item--image">
                              <Link to="/shop-details">
                                <img src="./assets/images/product/product-4.webp" alt="" />
                              </Link>
                            </td>
                            <td className="woosw-item--info">
                              <div className="woosw-item--name">
                                <Link to="/shop-details">
                                  Pure White Slim Cover
                                </Link>
                              </div>
                              <div className="woosw-item--price">
                                <ins aria-hidden="true">
                                  <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">$</span>
                                    50.00
                                  </span>
                                </ins>
                              </div>
                            </td>
                            <td className="woosw-item--actions">
                              <div className="woosw-item--stock">
                                <div className="product-stock">
                                  <span className="stock in-stock">10 in stock</span>
                                </div>
                              </div>
                              <div className="woosw-item--atc">
                                <p className="product woocommerce add_to_cart_inline ">
                                  <Link to="/shop-details"
                                    className="cart-button button tj-cart-btn stock-out  product_type_simple product-add-cart-btn">
                                    <span className="btn-icon">
                                      <i className="tji-cart"></i>
                                      <i className="tji-cart"></i>
                                    </span>
                                    <span className="btn-text">
                                      <span>Add to
                                        cart</span>
                                    </span>
                                  </Link>
                                </p>
                              </div>
                            </td>
                          </tr>
                          <tr className="woosw-item">
                            <td className="woosw-item--remove"><span>×</span></td>
                            <td className="woosw-item--image">
                              <Link to="/shop-details">
                                <img src="./assets/images/product/product-3.webp" alt="" />
                              </Link>
                            </td>
                            <td className="woosw-item--info">
                              <div className="woosw-item--name">
                                <Link to="/shop-details">
                                  Power Link Charging Cable
                                </Link>
                              </div>
                              <div className="woosw-item--price">
                                <del aria-hidden="true">
                                  <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">$</span>
                                    40.00
                                  </span>
                                </del>
                                <ins aria-hidden="true">
                                  <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol">$</span>
                                    25.00
                                  </span>
                                </ins>
                              </div>
                            </td>
                            <td className="woosw-item--actions">
                              <div className="woosw-item--stock">
                                <div className="product-stock">
                                  <span className="stock out-of-stock">Out of stock</span>
                                </div>
                              </div>
                              <div className="woosw-item--atc">
                                <p className="product woocommerce add_to_cart_inline ">
                                  <Link to="/shop-details"
                                    className="cart-button button tj-cart-btn stock-out  product_type_simple product-add-cart-btn">
                                    <span className="btn-icon">
                                      <i className="tji-cart"></i>
                                      <i className="tji-cart"></i>
                                    </span>
                                    <span className="btn-text">
                                      <span>Add to
                                        cart</span>
                                    </span>
                                  </Link>
                                </p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>{/*  /woosw-list  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  end: Wishlist Section  */}

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
