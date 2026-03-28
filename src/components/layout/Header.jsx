// src/components/layout/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-area header-1 header-absolute">
      {/* header-top bar */}
      <div className="header-top d-lg-block d-none">
        {/* ... copy structure from index.html lines 228-260 ... */}
      </div>
      {/* nav with Link instead of <a> */}
      <nav className="mainmenu">
        <ul>
          <li className="has-dropdown">
            <Link to="/">Home</Link>
            <ul className="sub-menu">
              <li><Link to="/">IT Solution</Link></li>
              {/* ... */}
            </ul>
          </li>
          <li><Link to="/about">Pages</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
