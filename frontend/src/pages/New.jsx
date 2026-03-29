import React from 'react';
import { Link } from 'react-router-dom';

export default function New() {
  return (
    <>
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
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="tji-facebook"></i></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="tji-instagram"></i></a>
                      </li>
                      <li>
                        <a href="https://www.x.com/" target="_blank" rel="noreferrer"><i className="tji-x-twitter"></i></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="tji-linkedin"></i></a>
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
