import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoSrc from '../assets/logo.svg';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logoSrc} alt="IVU Logo" style={{height: '40px'}} />
        </Link>
        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/case-studies" className="nav-link" onClick={() => setMenuOpen(false)}>
              Case Studies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/careers" className="nav-link" onClick={() => setMenuOpen(false)}>
              Careers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link nav-btn" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-action">
          <Link to="/contact" className="nav-btn">Talk to an Expert</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;