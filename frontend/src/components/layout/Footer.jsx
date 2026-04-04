import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  useEffect(() => {
    // Set background image for footer
    const bgEl = document.querySelector('.tj-footer-section .bg-img');
    if (bgEl) {
      bgEl.style.backgroundImage = 'url(/assets/images/footer/footer-bg.webp)';
    }
    // Update copyright year
    const yearEl = document.querySelector('.copyright-text span');
    if (yearEl) {
      const currentYear = new Date().getFullYear();
      const spanYear = parseInt(yearEl.textContent, 10);
      if (spanYear < currentYear) yearEl.textContent = currentYear;
    }
  }, []);

  return (
    <footer className="tj-footer-section footer-1 section-gap-x">
      <div className="bg-img" data-bg-image="assets/images/footer/footer-bg.webp"></div>
      <div className="footer-main-area">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer_widget_wrapper">
                <div className="footer-widget footer-col-1">
                  <div className="footer-logo">
                    <Link to="/">
                      <img src="/assets/images/logos/primary-logo.png" alt="Logo" />
                    </Link>
                  </div>
                  <div className="footer-text">
                    <p>Every great solution start understand the time into learn about.</p>
                  </div>
                </div>
                <div className="footer-widget widget-nav-menu">
                  <h5 className="title">Services</h5>
                  <ul>
                    <li><Link to="/servicedetails"><span>Manage IT Service</span></Link></li>
                    <li><Link to="/servicedetails"><span>Cloud Computing</span></Link></li>
                    <li><Link to="/servicedetails"><span>Cyber Security</span></Link></li>
                    <li><Link to="/servicedetails"><span>Software Develop</span></Link></li>
                    <li><Link to="/servicedetails"><span>Change Manage</span></Link></li>
                    <li><Link to="/servicedetails"><span>IT Consulting</span></Link></li>
                  </ul>
                </div>
                <div className="footer-widget widget-nav-menu">
                  <h5 className="title">Resourses</h5>
                  <ul>
                    <li><Link to="/contact"><span>Contact Us</span></Link></li>
                    <li><Link to="/blogdetails"><span>Privacy Policy</span></Link></li>
                    <li><Link to="/about"><span>Recognitions</span></Link></li>
                    <li><Link to="/service"><span>Careers</span> <span className="badge">New</span></Link></li>
                    <li><Link to="/blog"><span>News</span></Link></li>
                    <li><Link to="/project"><span>Feedback</span></Link></li>
                  </ul>
                </div>
                <div className="footer-widget widget-contact">
                  <h5 className="title">Contact Info</h5>
                  <div className="footer-contact-info">
                    <div className="contact-item">
                      <span>New Delhi | Mumbai, India</span>
                    </div>
                    <div className="contact-item">
                      <a href="tel:+91 90046 55099">P: +91 90046 55099</a>
                      <a href="mailto:sales@panzerit.com">E: Sales@PanzerIT.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tj-copyright-area">
        <div className="copyright-wrap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright-content-area">
                  <div className="copyright-text">
                    <p><a href="https://themeforest.net/user/theme-junction/portfolio" target="_blank" rel="noreferrer">Panzer IT</a>
                      &copy; <span>2026</span>. All right reserved.</p>
                  </div>
                  <div className="copyright-menu">
                    <ul>
                      <li><Link to="/contact">Privacy &amp; Policy</Link></li>
                      <li><Link to="/contact">Terms &amp; Condition</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
