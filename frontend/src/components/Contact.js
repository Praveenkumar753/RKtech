import React from 'react';
import './Home.css';
import Header from './Header';
import Footer from './Footer';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      
      <main className="main-content">
        {/* Contact Section */}
        <section id="contact" className="contact-section section-padding">
          <div className="section-container">
            <div className="section-header">
              <h2>Get In Touch</h2>
              <div className="section-divider"></div>
              <p className="section-description">Contact us for inquiries, quotes, or to discuss your project requirements</p>
            </div>
            
            <div className="contact-container">
              <div className="contact-info">
                <h3>Contact Information</h3>
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <MapPin size={24} color="#ff6b00" />
                    </div>
                    <div className="contact-text">
                      <h4>Address</h4>
                      <p>Sirasapalli, APIIC Industrial Park, Paravada, Anakapalli, Visakhapatnam-531021</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <Phone size={24} color="#ff6b00" />
                    </div>
                    <div className="contact-text">
                      <h4>Phone</h4>
                      <p>+91 7780271033</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <Mail size={24} color="#ff6b00" />
                    </div>
                    <div className="contact-text">
                      <h4>Email</h4>
                      <p>rktechengineeringworks@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="gstn-info">
                  <h4>GSTN</h4>
                  <p>37CLGPK4835C1Z6</p>
                </div>
              </div>
              
              <div className="contact-form">
                <h3>Send Us a Message</h3>
                <form>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" id="name" placeholder="Your Name" />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" placeholder="Your Email" />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" placeholder="Your Phone Number" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" placeholder="Subject" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="5" placeholder="Your Message"></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button">Send Message</button>
                </form>
              </div>
            </div>
            
            <div className="map-container">
              <h3>Our Location</h3>
              <div className="map-placeholder">
                {/* Replace with actual Google Map or other map implementation */}
                <div className="map-iframe-placeholder">
                  <p>Google Map will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;