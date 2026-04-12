import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import PAMPage from './Pampage';

// PDF Worker Setup
if (pdfjs) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

export default function Brand() {
  const [numPages, setNumPages] = useState(null);
  const [pdfError, setPdfError] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onDocumentLoadError(error) {
    console.warn('PDF load error:', error);
    setPdfError(true);
  }

  return (
    <>
      {/*  start: Banner Section  */}
      <section className="tj-banner-section h7-hero fix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner-content">
                <h1 className="banner-title tj-split-text-5">
                  <span>
                   Netand IAM PAM
                    <span className="title-img title-img-1">
                      <img
                        className="zoomInOut-3 tj-zoom-anim"
                        data-delay=".7"
                        src="/assets/images/hero/h7-title-img-1.webp"
                        alt=""
                      />
                    </span>
                  </span>
                   {/* and Access Management solution actively responding to next-generation security paradigm */}
                  <span className="title-img title-img-2">
                    <img
                      className="tj-zoom-anim"
                      data-delay=".9"
                      src="/assets/images/hero/h7-title-img-2.webp"
                      alt=""
                    />
                    <br />
                  </span>
                  {/* Development. */}
                </h1>
                <p>Integrated Identity and Access Management solution actively responding to next-generation security paradigm</p>
                <div className="banner-action">
                  <div className="btn-area tj-fade-anim" data-delay=".6">
                    <Link className="tj-primary-btn" to="/contact">
                      <span className="btn-text">
                        <span>Let's Build Together</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-2"></i>
                      </span>
                    </Link>
                  </div>
                  <div
                    className="list-area tj-fade-anim"
                    data-delay=".8"
                    data-duration="1"
                    data-direction="left"
                  >
                    <ul className="list-style-1">
                      <li>
                        <span>
                          <i className="tji-check"></i>
                        </span>
                        PSM for System - <br />
                         <p>Privileged Session Management</p>
                      </li>
                     
                       <li>
                        <span>
                          <i className="tji-check"></i>
                        </span>
                      IM for System -
                       <p>Identity Management</p>
                      </li>
                       <li>
                        <span>
                          <i className="tji-check"></i>
                        </span>
                       PSM for DBMS -
                         <p>Privileged Session Management</p>
                      </li>
                       <li>
                        <span>
                          <i className="tji-check"></i>
                        </span>
                       IM for DBMS -
                         <p>Identity Management</p>
                      </li>
                      <li>
                        <span>
                          <i className="tji-check"></i>
                        </span>
                        IM for AD -
                          <p>Identity Management </p>
                      </li>
                         <li>
                        <span>
                          <i className="tji-check"></i>
                        </span>
                       Threat Analytic  -
                          <p>Artificial Intelligence to prevent an insider threats </p>
                      </li>
                         <li>
                        <span>
                          <i className="tji-check"></i>
                        </span>
                      Mobile OTP  
                         
                      </li>
                    </ul>
                    <p>HIWARE, an integrated IAM soltuion which has adopted the latest technologies such as artificial intelligence and cloud, is the flagship product of NETAND that has developed various solutions with the best technology.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-img-area">
          <div className="banner-img tj-fade-anim" data-delay="0.3">
            <img src="/assets/images/hero/new.webp" alt="Image" />
          </div>
          <div className="customers-box tj-fade-anim" data-delay="0.5">
            <div
              className="customers-box-bg"
              data-bg-image="/assets/images/hero/h7-card-bg.webp"
            ></div>
            <div className="customers-box-header">
              <div className="countup-item">
                <div className="inline-content">
                  <span className="counter">80</span>
                  <span className="count-plus">+</span>
                </div>
              </div>
              <div className="customers">
                <ul>
                  <li>
                    <img src="/assets/images/testimonial/client-1.webp" alt="Image" />
                  </li>
                  <li>
                    <img src="/assets/images/testimonial/client-2.webp" alt="Image" />
                  </li>
                  <li>
                    <img src="/assets/images/testimonial/client-3.webp" alt="Image" />
                  </li>
                  <li>
                    <img src="/assets/images/testimonial/client-4.webp" alt="Image" />
                  </li>
                </ul>
                <div className="customers-bottom">
                  <h6 className="customers-text">
                    Displays total income and outcome figures
                  </h6>
                </div>
              </div>
            </div>
            <div className="customers-box-body">
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="categories">
                    <Link to="/blog-details">Solutions</Link>
                  </span>
                </div>
                <h2 className="title">
                  <Link to="/blog-details">Building a Stronger Software for IT</Link>
                </h2>
                <div className="excerpt">
                  Displays total income and outcome our figures with growth rates indicators
                  stay ahead of the competition with AI cloud computing
                </div>
                <Link className="tj-text-btn" to="/service-details">
                  <span className="btn-inner">
                    <span className="btn-icon">
                      <span>
                        <i className="tji-arrow-right-4"></i>
                      </span>
                    </span>
                    <span className="btn-text">
                      <span>Learn More</span>
                    </span>
                    <span className="btn-icon">
                      <span>
                        <i className="tji-arrow-right-4"></i>
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>



        <div className="h7-hero-shape">
          <img src="/assets/images/shapes/h7-blur.png" alt="" />
        </div>
      </section>
      {/*  end: Banner Section  */}


        <PAMPage/>

      {/* ✅ PDF SECTION */}
      {!pdfError && (
        <section style={{ padding: '50px', textAlign: 'center' }}>
          <h2>📄 View Datasheet</h2>
          <Document
            file="/sample.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
          >
            {numPages &&
              Array.from(new Array(numPages), (el, index) => (
                <Page key={index} pageNumber={index + 1} />
              ))}
          </Document>
        </section>
      )}
    </>
  );
}
