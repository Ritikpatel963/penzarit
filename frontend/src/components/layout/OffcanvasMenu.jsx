import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

export default function OffcanvasMenu() {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = useCallback(() => {
    setOffcanvasOpen(false);
    setMobileOpen(false);
    document.body.classList.remove('overflow-hidden');
  }, []);

  // Expose openers globally so Header buttons can trigger them
  if (typeof window !== 'undefined') {
    window.__openOffcanvas = () => {
      setOffcanvasOpen(true);
      document.body.classList.add('overflow-hidden');
    };
    window.__openMobileMenu = () => {
      setMobileOpen(true);
      document.body.classList.add('overflow-hidden');
    };
  }

  return (
    <>
      {/* Body overlay */}
      <div
        className={`body-overlay${offcanvasOpen || mobileOpen ? ' opened' : ''}`}
        onClick={closeAll}
      ></div>

      {/* start: Offcanvas Menu */}
      <div className={`tj-offcanvas-area d-none d-lg-block${offcanvasOpen ? ' opened' : ''}`}>
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <Link to="/" className="mobile_logo" onClick={closeAll}>
                  <img src="/assets/images/logos/primary-logo.webp" alt="Logo" />
                </Link>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn" onClick={closeAll}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round" />
                    <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="offcanvas-text">
              <p>Developing personalize our customer journeys to increase satisfaction &amp; loyalty of our expansion recognized
                by industry leaders.</p>
            </div>
            <div className="hamburger-search-area">
              <h5 className="hamburger-title">Search Now!</h5>
              <div className="hamburger_search">
                <form method="get" action="/">
                  <button type="submit"><i className="tji-search"></i></button>
                  <input type="search" autoComplete="off" name="s" defaultValue="" placeholder="Search here..." />
                </form>
              </div>
            </div>
            <div className="hamburger-infos">
              <h5 className="hamburger-title">Contact Info</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="subtitle">Phone</span>
                  <a className="contact-link" href="tel:10095447818">+1 (009) 544-7818</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Email</span>
                  <a className="contact-link" href="mailto:info@tekmino.com">info@tekmino.com</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Location</span>
                  <span className="contact-link">993 Renner Burg, West Rond, MT 94251-030</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h5 className="hamburger-title">Follow Us</h5>
            <div className="social-links style-2">
              <ul>
                <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="tji-facebook"></i></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="tji-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="tji-instagram"></i></a></li>
                <li><a href="https://x.com/" target="_blank" rel="noreferrer"><i className="tji-x-twitter"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end: Offcanvas Menu */}

      {/* start: Hamburger Menu (mobile) */}
      <div className={`hamburger-area d-lg-none${mobileOpen ? ' opened' : ''}`}>
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <Link to="/" className="mobile_logo" onClick={closeAll}>
                  <img src="/assets/images/logos/primary-logo.webp" alt="Logo" />
                </Link>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn" onClick={closeAll}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round" />
                    <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="hamburger_menu">
              <nav className="mobile_menu">
              <ul>
                  <li><Link to="/" onClick={closeAll}>Home</Link></li>
                  <li><Link to="/about" onClick={closeAll}>About</Link></li>
                  <li className="has-dropdown">
                    <Link to="/solution" onClick={closeAll}>Solution</Link>
                    <ul className="sub-menu">
                      <li><a href="https://panzerit.com/solutions/mirobase-employee-monitoring/">Scopd DLP with UEBA</a></li>
                      <li><a href="https://panzerit.com/vulnerability-scanner-assessment-penetration-testing/">Vulnerability Scanner &amp; Penetration Testing</a></li>
                      <li><a href="https://panzerit.com/solutions/advance-anti-malware/">Most Advance Anti-Malware</a></li>
                      <li><a href="https://panzerit.com/backup-disaster-recovery/">Backup &amp; Disaster Recovery</a></li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <Link to="/brand" onClick={closeAll}>Brand</Link>
                    <ul className="sub-menu">
                      <li><a href="https://panzerit.com/brands/netand-iam-pam/">Netand IAM PAM</a></li>
                      <li><a href="https://panzerit.com/brands/scopd-employee-monitoring/">Scopd DLP with UEBA</a></li>
                      <li><a href="https://panzerit.com/brands/emsisoft-most-advance-malware-protection/">Emsisoft – Advance Malware Protection</a></li>
                      <li><a href="https://panzerit.com/solutions/acronis-india/">Acronis Backup Solution</a></li>
                    </ul>
                  </li>
                  <li><Link to="/service" onClick={closeAll}>Tech</Link></li>
                  <li className="has-dropdown">
                    <Link to="/blog" onClick={closeAll}>Blog</Link>
                    <ul className="sub-menu">
                      <li><Link to="/blog" onClick={closeAll}>Blog</Link></li>
                      <li><Link to="/blogdetails" onClick={closeAll}>Blog Details</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/download" onClick={closeAll}>Downloads</Link></li>
                  <li className="has-dropdown">
                    <Link to="/about" onClick={closeAll}>Pages</Link>
                    <ul className="sub-menu">
                      <li><Link to="/about" onClick={closeAll}>About Us</Link></li>
                      <li><Link to="/service" onClick={closeAll}>Service</Link></li>
                      <li><Link to="/servicedetails" onClick={closeAll}>Service Details</Link></li>
                      <li><Link to="/team" onClick={closeAll}>Team</Link></li>
                      <li><Link to="/teamdetails" onClick={closeAll}>Team Details</Link></li>
                      <li><Link to="/faq" onClick={closeAll}>FAQ</Link></li>
                      <li><Link to="/pricing" onClick={closeAll}>Pricing</Link></li>
                      <li><Link to="/login" onClick={closeAll}>Login</Link></li>
                      <li><Link to="/error" onClick={closeAll}>Error 404</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/contact" onClick={closeAll}>Contact</Link></li>
                </ul>
              </nav>
            </div>
            <div className="hamburger-infos">
              <h5 className="hamburger-title">Contact Info</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="subtitle">Phone</span>
                  <a className="contact-link" href="tel:8089091313">808-909-1313</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Email</span>
                  <a className="contact-link" href="mailto:info@tekmino.com">info@tekmino.com</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Location</span>
                  <span className="contact-link">993 Renner Burg, West Rond, MT 94251-030</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h5 className="hamburger-title">Follow Us</h5>
            <div className="social-links style-2">
              <ul>
                <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="tji-facebook"></i></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="tji-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="tji-instagram"></i></a></li>
                <li><a href="https://x.com/" target="_blank" rel="noreferrer"><i className="tji-x-twitter"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end: Hamburger Menu */}
    </>
  );
}
