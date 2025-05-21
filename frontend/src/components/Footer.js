import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-company">
          <h3>RK Tech Engineering Works</h3>
          <p>Excellence in Metal Fabrication & Engineering Solutions since 2012</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>
        
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="footer-contact-item">
            <Phone size={16} />
            <p>+91 7780271033</p>
          </div>
          <div className="footer-contact-item">
            <Mail size={16} />
            <p>rktechengineeringworks@gmail.com</p>
          </div>
          <div className="footer-contact-item">
            <MapPin size={16} />
            <p>Sirasapalli, APIIC Industrial Park, Paravada, Anakapalli, Visakhapatnam-531021</p>
          </div>
        </div>
        
        <div className="footer-services">
          <h3>Our Services</h3>
          <ul>
            <li><Link to="/#services">SS Fabrication Works</Link></li>
            <li><Link to="/#services">MS Fabrication Works</Link></li>
            <li><Link to="/#services">FRP Fabrication Works</Link></li>
            <li><Link to="/#services">Design Services</Link></li>
            <li><Link to="/#services">Pharmaceutical Equipment</Link></li>
            <li><Link to="/#services">Industrial Services</Link></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#about">About Us</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#clients">Clients</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} RK Tech Engineering Works. All Rights Reserved.</p>
          </div>
          <div className="gstn-info">
            <p>GSTN: 37CLGPK4835C1Z6</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;