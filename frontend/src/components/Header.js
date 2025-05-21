import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Menu, X } from 'lucide-react';
import logo from '../assests/logo.jpg'; // Adjust path if needed

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo-container">
          <img src={logo} alt="RK Tech Engineering Works" className="logo" />
          <div className="company-name">
            <h1>RK Tech</h1>
            <p>Engineering Works</p>
          </div>
        </Link>

        <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <button className="mobile-menu-close" onClick={toggleMobileMenu}>
            <X />
          </button>          <ul className="nav-list">
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/#about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
            <li><Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
            <li><Link to="/#clients" onClick={() => setMobileMenuOpen(false)}>Clients</Link></li>
            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </nav>

        <button className="mobile-menu-open" onClick={toggleMobileMenu}>
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default Header;