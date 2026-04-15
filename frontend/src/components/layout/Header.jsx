import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY;
      if (st > 500) {
        setSticky(st < lastScrollTop);
      } else {
        setSticky(false);
      }
      setLastScrollTop(st);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollTop]);

  const handleSearchClick = useCallback(() => {
    if (window.__openSearch) window.__openSearch();
  }, []);

  const handleOffcanvasClick = useCallback(() => {
    if (window.__openOffcanvas) window.__openOffcanvas();
  }, []);

  const handleMobileMenuClick = useCallback(() => {
    if (window.__openMobileMenu) window.__openMobileMenu();
  }, []);

  const NavMenu = () => (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li className="has-dropdown">
        <Link to="/solution">Solution</Link>
        <ul className="sub-menu">
          <li id="menu-item-11716" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11716"><a href="https://panzerit.com/solutions/mirobase-employee-monitoring/">Scopd DLP with UEBA</a></li>
          <li id="menu-item-4432" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4432"><a href="https://panzerit.com/vulnerability-scanner-assessment-penetration-testing/">Vulnerability Scanner, Assessment &amp; Penetration Testing</a></li>
          <li id="menu-item-946" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-946"><a href="https://panzerit.com/brands/securetower-data-loss-prevention-dlp/">Employee Monitoring Solution</a></li>
          <li id="menu-item-976" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-976"><a href="https://panzerit.com/solutions/advance-anti-malware/">Most Advance Anti-Malware</a></li>
          <li id="menu-item-4019" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4019"><a href="https://panzerit.com/backup-disaster-recovery/">Backup &amp; Disaster Recovery</a></li>
          <li id="menu-item-1003" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003"><a href="https://panzerit.com/solutions/acronis-india/">Backup Solution</a></li>
          <li id="menu-item-3497" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3497"><a href="https://panzerit.com/solutions/somansa-dlp/">Data Leak Prevention – DLP</a></li>
          <li id="menu-item-941" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-941"><a href="https://panzerit.com/?page_id=820">Advance Threat Prevention | EDR | EPS</a></li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link to="/Brand">Brand</Link>
        <ul className="sub-menu">
          <li id="menu-item-9406" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9406"><a href="https://panzerit.com/brands/netand-iam-pam/">Netand IAM PAM</a></li>
          <li id="menu-item-7794" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7794"><a href="https://panzerit.com/brands/scopd-employee-monitoring/">Scopd DLP with UEBA</a></li>
          <li id="menu-item-944" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-944"><a href="https://panzerit.com/solutions/securetower/">FalconGaze SecureTower – UBA</a></li>
          <li id="menu-item-3544" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3544"><a href="https://panzerit.com/somansa-data-loss-prevention/">Somansa Endpoint Data Loss Prevention</a></li>
          <li id="menu-item-4429" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4429"><a href="https://panzerit.com/secpoint-penetrator-vulnerability-scanner-assessment/">SecPoint Penetrator Vulnerability Scanner &amp; Assessment</a></li>
          <li id="menu-item-1650" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1650"><a href="https://panzerit.com/brands/netop-secure-remote-access/">Netop – Secure Remote Access</a></li>
          <li id="menu-item-945" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-945"><a href="https://panzerit.com/brands/emsisoft-most-advance-malware-protection/">Emsisoft – Advance Malware Protection</a></li>
          <li id="menu-item-4020" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4020"><a href="https://panzerit.com/vembu-bdr-suite/">Vembu BDR Suite</a></li>
          <li id="menu-item-3508" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3508"><a href="https://panzerit.com/solutions/acronis-india/">Acronis Backup Solution</a></li>
        </ul>
      </li>
      <li><Link to="/service">Tech</Link></li>
      <li><Link to="/blog">News</Link></li>
      <li className="has-dropdown">
        <Link to="/blog">Blog</Link>
        <ul className="sub-menu">
          <li id="menu-item-1097" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1097"><a href="https://panzerit.com/category/writeups/">Write-ups</a></li>
          <li id="menu-item-1096" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1096"><a href="https://panzerit.com/category/techstuff/">Tech Stuff</a></li>
          <li id="menu-item-1098" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1098"><a href="https://panzerit.com/category/it_security_tips/">Daily_Tips</a></li>
          <li id="menu-item-1095" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1095"><a href="https://panzerit.com/category/news/">News</a></li>
        </ul>
      </li>
      <li><Link to="/Download">Downloads</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  );

  const HeaderRight = () => (
    <>
      <div className="header-right-item d-none d-lg-inline-flex">
        <div className="header-search">
          <button className="search" onClick={handleSearchClick}>
            <i className="tji-search"></i>
          </button>
        </div>
        <div className="header-button d-xl-block d-none">
          <Link className="tj-primary-btn" to="/contact">
            <span className="btn-text"><span>Get Started</span></span>
            <span className="btn-icon"><i className="tji-arrow-right-2"></i></span>
          </Link>
        </div>
        {/* <button className="menu_btn menu_offcanvas d-none d-lg-block" onClick={handleOffcanvasClick}>
          <span className="cubes">
            <span></span><span></span><span></span><span></span>
          </span>
        </button> */}
      </div>
      {/* <button className="menu_btn mobile_menu_bar d-lg-none" onClick={handleMobileMenuClick}>
        <span className="cubes">
          <span></span><span></span><span></span><span></span>
        </span>
      </button> */}
    </>
  );

  return (
    <>
      {/* Main Header */}
      <header className="header-area header-1 header-absolute">
        <div className="header-top d-lg-block d-none">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="header-top-content">
                  <p className="topbar-text"><i className="tji-spark"></i> Fast &amp; Reliable IT Solution Services.</p>
                  <div className="header-info">
                    <div className="info-item">
                      <span><i className="tji-clock"></i></span>
                      <span>9 am to 6 pm [mon-sat]</span>
                    </div>
                    {/* <div className="info-item">
                      <span><i className="tji-gear"></i></span>
                      <Link to="/contact">Support</Link>
                    </div>
                    <div className="info-item">
                      <span><i className="tji-globe"></i></span>
                      <div className="tj-language">
                        <span>English</span>
                        <ul>
                          <li>English</li>
                          <li>Arabic</li>
                          <li>Spanish</li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="header-wrapper">
                  <div className="site_logo">
                    <Link className="logo" to="/"><img src="/assets/images/logos/primary-logo-new.png" alt="Logo" /></Link>
                  </div>
                  <div className="menu-area d-none d-lg-inline-flex align-items-center">
                    <nav id="mobile-menu" className="mainmenu">
                      <NavMenu />
                    </nav>
                  </div>
                  <HeaderRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Header Duplicate */}
      <header className={`header-area header-1 header-duplicate header-sticky${sticky ? ' sticky' : ''}`}>
        <div className="header-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="header-wrapper">
                  <div className="site_logo">
                    <Link className="logo" to="/"><img src="/assets/images/logos/primary-logo-new.png" alt="Logo" /></Link>
                  </div>
                  <div className="menu-area d-none d-lg-inline-flex align-items-center">
                    <nav className="mainmenu">
                      <NavMenu />
                    </nav>
                  </div>
                  <HeaderRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
