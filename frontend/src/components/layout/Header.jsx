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
      <li className="has-dropdown current-menu-ancestor">
        <Link to="/">Home</Link>
        <ul className="sub-menu">
          <li className="current-menu-item"><Link to="/">IT Solution</Link></li>
          <li><Link to="/index2">IT Consulting</Link></li>
          <li><Link to="/index3">Managed IT</Link></li>
          <li><Link to="/index4">Cloud Solutions</Link></li>
          <li><Link to="/index5">Cyber Security</Link></li>
          <li><Link to="/index6">Fintech</Link></li>
          <li><Link to="/index7">Software Company</Link></li>
          <li><Link to="/index8">Tech Startup</Link></li>
          <li><Link to="/index9">Ai technology</Link></li>
          <li><Link to="/index10">Hosting</Link></li>
          <li><Link to="/indexrtl">RTL Demo</Link></li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link to="/about">Pages</Link>
        <ul className="sub-menu">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/servicedetails">Service Details</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/teamdetails">Team Details</Link></li>
          <li><Link to="/faq">Faq</Link></li>
          <li><Link to="/pricing">Pricing Page</Link></li>
          <li><Link to="/error">Error 404</Link></li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link to="/project">Projects</Link>
        <ul className="sub-menu">
          <li><Link to="/project">Projects</Link></li>
          <li><Link to="/projectdetails">Project Details</Link></li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link to="/shop">Shop</Link>
        <ul className="sub-menu">
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/shopdetails">Shop Details</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/password">Password</Link></li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link to="/blog">Blog</Link>
        <ul className="sub-menu">
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/blogdetails">Blog Details</Link></li>
        </ul>
      </li>
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
        <button className="menu_btn menu_offcanvas d-none d-lg-block" onClick={handleOffcanvasClick}>
          <span className="cubes">
            <span></span><span></span><span></span><span></span>
          </span>
        </button>
      </div>
      <button className="menu_btn mobile_menu_bar d-lg-none" onClick={handleMobileMenuClick}>
        <span className="cubes">
          <span></span><span></span><span></span><span></span>
        </span>
      </button>
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
                  <p className="topbar-text"><i className="tji-spark"></i> Fast &amp; Reliable IT Solution Services. <Link to="/contact">Join Now</Link></p>
                  <div className="header-info">
                    <div className="info-item">
                      <span><i className="tji-clock"></i></span>
                      <span>9 am to 6 pm [mon-sat]</span>
                    </div>
                    <div className="info-item">
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
                    </div>
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
                    <Link className="logo" to="/"><img src="/assets/images/logos/primary-logo.webp" alt="Logo" /></Link>
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
                    <Link className="logo" to="/"><img src="/assets/images/logos/primary-logo.webp" alt="Logo" /></Link>
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
