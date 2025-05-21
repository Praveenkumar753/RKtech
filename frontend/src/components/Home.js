import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from './Header';
import Footer from './Footer';
import { Phone, Mail, MapPin, Check } from 'lucide-react';
import SSFabricationWorks from "../assests/SSFabricationWorks.png"
import MSFabricationWorks from "../assests/MSFabricationWorks.png"
import FRPFabricationWorks from "../assests/FRPFabricationWorks.png"
import DesignServices from "../assests/DesignServices.png"
import PharmaceuticalEquipment from "../assests/PharmaceuticalEquipment.png"
import IndustrialServices from "../assests/IndustrialServices.png"
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle FAQ item
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="home-container">
      <Header />
      
      <main className="main-content">        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-particles"></div>
          <div className="hero-overlay"></div>
        <div className="hero-content">
            <h1 className="animated-title">
              <span className="title-line">RK TECH</span>
              <span className="title-line highlight">ENGINEERING WORKS</span>
            </h1>
            <p className="tagline">Precision. Quality. Innovation.</p>
            <p className="subtitle">Excellence in Metal Fabrication & Engineering Solutions</p>
            <div className="hero-buttons">
              <Link to="/contact" className="cta-button primary">
                <span className="button-text">Request Quote</span>
                <span className="button-icon">→</span>
              </Link>
              <Link to="/services" className="cta-button secondary">
                <span className="button-text">Explore Services</span>
                <span className="button-icon">↓</span>
              </Link>
            </div>
          </div>
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrow-scroll">
              <span></span>
            </div>
          </div>
        </section>
        
        {/* About Us Section */}
        <section id="about" className="about-section section-padding">
          <div className="section-container">
            <div className="section-header">
              <h2>About Us</h2>
              <div className="section-divider"></div>
            </div>
              <div className="about-content">
              <div className="about-text-container">
                <div className="about-text-main">
                  <h3>Your Partner in Industrial Engineering Excellence</h3>
                  <p className="about-intro">
                    RK Tech Engineering Works, established in Visakhapatnam, specializes in custom fabrication 
                    and engineering solutions for industrial and commercial clients. With our state-of-the-art 
                    facility at Sirasapalli APIIC Industrial Park, we deliver precise, high-quality fabrication 
                    services across multiple materials and applications.
                  </p>
                  <p>
                    Led by RK Naidu, our team combines technical expertise with industry experience to provide 
                    comprehensive solutions from design through installation. We pride ourselves on meeting the 
                    highest standards of quality while delivering projects on time and within budget.
                  </p>
                </div>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <span className="highlight-number">10+</span>
                    <span className="highlight-text">Years Experience</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">200+</span>
                    <span className="highlight-text">Projects Completed</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">50+</span>
                    <span className="highlight-text">Regular Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="services-section section-padding">
          <div className="section-container">
            <div className="section-header">
              <h2>Our Services</h2>
              <div className="section-divider"></div>
              <p className="section-description">Comprehensive fabrication and engineering solutions tailored to your specific requirements</p>
            </div>
              <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <img src={SSFabricationWorks} alt="SS Fabrication" />
                </div>
                <h3>SS Fabrication Works</h3>
                <ul className="service-list">
                  <li>Pharmaceutical Clean Room Equipment</li>
                  <li>Aqua Foods Processing Equipment</li>
                  <li>Hospital & Medical Equipment</li>
                  <li>Canteen & Kitchen Equipment</li>
                  <li>Staircase Hand Railing</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={MSFabricationWorks} alt="MS Fabrication" />
                </div>
                <h3>MS Fabrication Works</h3>
                <ul className="service-list">
                  <li>Roofing Shed Construction</li>
                  <li>Storage Tanks & Pressure Vessels</li>
                  <li>Industrial Containers</li>
                  <li>Staircase & Grill Works</li>
                  <li>Structural Fabrication</li>
                </ul>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={FRPFabricationWorks} alt="FRP Fabrication" />
                </div>
                <h3>FRP Fabrication Works</h3>
                <ul className="service-list">
                  <li>Storage Tanks & Spiral Tanks</li>
                  <li>PP FRP Woods & Railings</li>
                  <li>Chemical Resistant Containers</li>
                  <li>Water Treatment Equipment</li>
                  <li>Custom FRP Solutions</li>
                </ul>
              </div>
            </div>
            
            <div className="service-cta">
              <p>Discover our complete range of engineering services</p>
              <Link to="/services" className="cta-button">View All Services</Link>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section id="why-us" className="why-us-section section-padding">
          <div className="section-container">
            <div className="section-header">
              <h2>Why Choose Us</h2>
              <div className="section-divider"></div>
              <p className="section-description">Partner with RK Tech Engineering Works for unmatched quality and service excellence</p>
            </div>
            
            <div className="why-us-grid">
              <div className="why-us-card">
                <div className="why-us-icon">
                  <Check size={32} color="#ff6b00" />
                </div>
                <h3>Expert Craftsmanship</h3>
                <p>Our skilled technicians bring years of specialized experience in metal fabrication and engineering</p>
              </div>
              
              <div className="why-us-card">
                <div className="why-us-icon">
                  <Check size={32} color="#ff6b00" />
                </div>
                <h3>Quality Materials</h3>
                <p>We use only premium-grade SS, MS, and FRP materials that meet industry standards</p>
              </div>
              
              <div className="why-us-card">
                <div className="why-us-icon">
                  <Check size={32} color="#ff6b00" />
                </div>
                <h3>Customized Solutions</h3>
                <p>Every project is tailored to meet your specific requirements and industry standards</p>
              </div>
              
              <div className="why-us-card">
                <div className="why-us-icon">
                  <Check size={32} color="#ff6b00" />
                </div>
                <h3>Timely Delivery</h3>
                <p>We understand the importance of deadlines and deliver projects on schedule</p>
              </div>
              
              <div className="why-us-card">
                <div className="why-us-icon">
                  <Check size={32} color="#ff6b00" />
                </div>
                <h3>Competitive Pricing</h3>
                <p>High-quality fabrication services at competitive rates with transparent pricing</p>
              </div>
              
              <div className="why-us-card">
                <div className="why-us-icon">
                  <Check size={32} color="#ff6b00" />
                </div>
                <h3>After-Sales Support</h3>
                <p>Ongoing technical support and maintenance services after project completion</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Clients Section */}
        <section id="clients" className="clients-section section-padding">
          <div className="section-container">
            <div className="section-header">
              <h2>Our Clients</h2>
              <div className="section-divider"></div>
              <p className="section-description">Trusted by leading companies across various industries</p>
            </div>
            
            <div className="clients-list">
              <div className="client-card">
                <h3>Raveez Pharma Private Limited</h3>
                <p className="client-address">Plot No 4N, APSEZ, Atchutapuram, Duppituru, Andhra Pradesh 531061</p>
              </div>
              
              <div className="client-card">
                <h3>Sri Balaji Industries</h3>
                <p className="client-address">Plot No.- 156-E, Apiic, Growth Centre, Mettavalasa Village, Bobbili Post Office, Bobbili Mandal, Vizianagaram, Andhra Pradesh, 535558, India</p>
              </div>
              
              <div className="client-card">
                <h3>M/S Sri Balaji Associate</h3>
                <p className="client-address">PMIG-150, Sapthagiri Colony, PM Palem, Visakhapatnam-530041</p>
              </div>
              
              <div className="client-card">
                <h3>Harshith Engineering Works</h3>
                <p className="client-address">2-3-3, Narasingarao Peta, Kothuru, Anakapalli-531001, Andhra Pradesh, India</p>
              </div>
              
              <div className="client-card">
                <h3>Sri Lakshmi Ganapathi Industries</h3>
                <p className="client-address">M5XV+H5M, Auto Nagar Rd, Gajuwaka, Visakhapatnam, Andhra Pradesh 530026</p>
              </div>
            </div>
            
            <div className="testimonials-container">
              <h3>What Our Clients Say</h3>
              <div className="testimonials-slider">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p>"RK Tech Engineering Works delivered our pharmaceutical clean room equipment precisely to specifications. Their attention to detail and quality craftsmanship exceeded our expectations."</p>
                  </div>
                  <div className="testimonial-author">
                    <h4>Pharmaceutical Company, Vizag</h4>
                    <p>Clean Room Project</p>
                  </div>
                </div>
                
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <p>"We've worked with RK Tech for several industrial fabrication projects. Their team consistently delivers high-quality work on time and within budget."</p>
                  </div>
                  <div className="testimonial-author">
                    <h4>Manufacturing Industry Client</h4>
                    <p>Industrial Equipment Project</p>
                  </div>
                </div>              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="faq-section section-padding">
          <div className="section-container">
            <div className="section-header">
              <h2>Frequently Asked Questions</h2>
              <div className="section-divider"></div>
              <p className="section-description">Find answers to common questions about our fabrication services</p>
            </div>
              <div className="faq-container">
              <div className={`faq-item ${activeIndex === 0 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFAQ(0)}>
                  <h3>What types of materials do you work with?</h3>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">
                  <p>We work with a wide range of materials including Stainless Steel (SS), Mild Steel (MS), and Fiber-Reinforced Plastic (FRP). Each material has specific applications where it performs best, and we can advise on the most suitable option for your project.</p>
                </div>
              </div>
              
              <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFAQ(1)}>
                  <h3>What industries do you serve?</h3>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">
                  <p>We serve a variety of industries including pharmaceuticals, food processing, water treatment, chemical processing, and general manufacturing. Our fabrication solutions are customized to meet the specific requirements and standards of each industry.</p>
                </div>
              </div>
              
              <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFAQ(2)}>
                  <h3>How long does a typical project take?</h3>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">
                  <p>Project timelines vary depending on complexity, size, materials, and current workload. Small to medium projects typically take 2-4 weeks from design approval to completion, while larger projects may require 6-12 weeks. We always provide a detailed timeline during the quotation process.</p>
                </div>
              </div>
              
              <div className={`faq-item ${activeIndex === 3 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFAQ(3)}>
                  <h3>Do you provide installation services?</h3>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">
                  <p>Yes, we offer complete installation services for all our fabricated products. Our experienced team ensures proper installation according to industry standards and specifications, with minimal disruption to your operations.</p>
                </div>
              </div>
              
              <div className={`faq-item ${activeIndex === 4 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFAQ(4)}>
                  <h3>How do I request a quote for my project?</h3>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">
                  <p>You can request a quote by visiting our Contact page, calling us directly at +91 7780271033, or emailing your requirements to rktechengineeringworks@gmail.com. Please include as many details as possible about your project for an accurate quote.</p>
                </div>
              </div>
            </div>
            
            <div className="faq-cta">
              <p>Have more questions? We're here to help!</p>
              <Link to="/contact" className="cta-button primary">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;