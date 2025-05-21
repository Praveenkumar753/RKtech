import React from 'react';
import './Services.css';
import Header from './Header';
import Footer from './Footer';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SSFabricationWorks from "../assests/SSFabricationWorks.png";
import MSFabricationWorks from "../assests/MSFabricationWorks.png";
import FRPFabricationWorks from "../assests/FRPFabricationWorks.png";
import DesignServices from "../assests/DesignServices.png";
import PharmaceuticalEquipment from "../assests/PharmaceuticalEquipment.png";
import IndustrialServices from "../assests/IndustrialServices.png";

const Services = () => {
  return (
    <div className="services-page">
      <Header />
      
      <main className="main-content">
        {/* Services Hero */}
        <section className="services-hero">
          <div className="services-hero-overlay"></div>
          <div className="services-hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive Engineering & Fabrication Solutions</p>
          </div>
        </section>
        
        {/* Service Overview */}
        <section className="service-overview section-padding">
          <div className="section-container">
            <div className="section-header">
              <h2>Metal Fabrication & Engineering Excellence</h2>
              <div className="section-divider"></div>
              <p className="section-description">
                At RK Tech Engineering Works, we provide a wide range of specialized fabrication and 
                engineering services tailored to meet the unique requirements of various industries including 
                pharmaceutical, food processing, and manufacturing sectors.
              </p>
            </div>
            
            {/* Service Categories Section */}
            <div className="service-categories">
              <p className="service-intro">
                Our team of skilled technicians, engineers, and fabricators work together to deliver high-quality solutions 
                using premium-grade materials and the latest production techniques. Explore our service offerings below:
              </p>
              
              <div className="category-navigation">
                <a href="#ss-fabrication" className="category-link">SS Fabrication</a>
                <a href="#ms-fabrication" className="category-link">MS Fabrication</a>
                <a href="#frp-fabrication" className="category-link">FRP Fabrication</a>
                <a href="#design-services" className="category-link">Design Services</a>
                <a href="#pharma-equipment" className="category-link">Pharmaceutical Equipment</a>
                <a href="#industrial-services" className="category-link">Industrial Services</a>
              </div>
            </div>
          </div>
        </section>
        
        {/* SS Fabrication */}
        <section id="ss-fabrication" className="service-detail section-padding">
          <div className="section-container">
            <div className="service-detail-content">
              <div className="service-detail-text">
                <h2>SS Fabrication Works</h2>
                <div className="mini-divider"></div>
                <p className="service-detail-intro">
                  Our stainless steel fabrication services deliver premium-quality equipment and components 
                  with precise finishes and exceptional durability.
                </p>
                <p>
                  We specialize in creating custom stainless steel solutions that meet the strict cleanliness 
                  and sanitation requirements of pharmaceutical, food processing, and healthcare industries.
                  Our skilled technicians work with various grades of SS including 304, 316, and 316L to 
                  create products that perform reliably in demanding environments.
                </p>
                <h3>Our SS Fabrication Services Include:</h3>
                <ul className="service-detail-list">
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Pharmaceutical Clean Room Equipment</h4>
                      <p>Sterile storage containers, process vessels, and transfer systems designed to meet GMP standards.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Aqua Foods Processing Equipment</h4>
                      <p>Specialized tanks, conveyor systems, and processing units for the seafood industry.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Hospital & Medical Equipment</h4>
                      <p>Medical-grade furniture, surgical trolleys, and specialized healthcare installations.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Canteen & Kitchen Equipment</h4>
                      <p>Commercial kitchen installations, serving counters, and food preparation stations.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Staircase Hand Railing</h4>
                      <p>Custom-designed SS railings with precise finishes for commercial and industrial applications.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="service-detail-image">
                <img src={SSFabricationWorks} alt="SS Fabrication Works" />
              </div>
            </div>
          </div>
        </section>
        
        {/* MS Fabrication */}
        <section id="ms-fabrication" className="service-detail section-padding alt-bg">
          <div className="section-container">
            <div className="service-detail-content reverse">
              <div className="service-detail-text">
                <h2>MS Fabrication Works</h2>
                <div className="mini-divider"></div>
                <p className="service-detail-intro">
                  Our mild steel fabrication capabilities deliver robust structural solutions for industrial 
                  and commercial applications.
                </p>
                <p>
                  We excel in creating durable MS structures and equipment that withstand heavy use and 
                  demanding environments. Our team works with various thicknesses and grades of mild steel 
                  to create custom solutions that combine structural integrity with practical functionality.
                </p>
                <h3>Our MS Fabrication Services Include:</h3>
                <ul className="service-detail-list">
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Roofing Shed Construction</h4>
                      <p>Industrial roofing solutions, warehouse structures, and custom-designed sheds and canopies.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Storage Tanks & Pressure Vessels</h4>
                      <p>Custom-engineered tanks for various storage purposes with precise specifications.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Industrial Containers</h4>
                      <p>Durable containers for material handling, waste management, and specialized storage.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Staircase & Grill Works</h4>
                      <p>Industrial staircases, platforms, walkways, and protective grills with robust construction.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Structural Fabrication</h4>
                      <p>Load-bearing structures, frames, and customized industrial infrastructure components.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="service-detail-image">
                <img src={MSFabricationWorks} alt="MS Fabrication Works" />
              </div>
            </div>
          </div>
        </section>
        
        {/* FRP Fabrication */}
        <section id="frp-fabrication" className="service-detail section-padding">
          <div className="section-container">
            <div className="service-detail-content">
              <div className="service-detail-text">
                <h2>FRP Fabrication Works</h2>
                <div className="mini-divider"></div>
                <p className="service-detail-intro">
                  Our Fiber Reinforced Plastic (FRP) fabrication services offer corrosion-resistant solutions for 
                  challenging environments.
                </p>
                <p>
                  We specialize in creating durable, lightweight FRP components that resist chemical corrosion,
                  extreme temperatures, and harsh environmental conditions. Our FRP solutions are ideal for 
                  applications where traditional metals would deteriorate or where weight considerations are critical.
                </p>
                <h3>Our FRP Fabrication Services Include:</h3>
                <ul className="service-detail-list">
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Storage Tanks & Spiral Tanks</h4>
                      <p>Corrosion-resistant tanks for chemical storage, water treatment, and specialized industrial applications.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>PP FRP Woods & Railings</h4>
                      <p>Durable alternatives to traditional materials for areas exposed to moisture and chemicals.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Chemical Resistant Containers</h4>
                      <p>Specialized vessels and containers for storing and handling corrosive substances.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Water Treatment Equipment</h4>
                      <p>FRP components for water filtration systems, treatment plants, and distribution networks.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Custom FRP Solutions</h4>
                      <p>Tailored fabrication of FRP products based on specific client requirements and applications.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="service-detail-image">
                <img src={FRPFabricationWorks} alt="FRP Fabrication Works" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Design Services */}
        <section id="design-services" className="service-detail section-padding alt-bg">
          <div className="section-container">
            <div className="service-detail-content reverse">
              <div className="service-detail-text">
                <h2>Design Services</h2>
                <div className="mini-divider"></div>
                <p className="service-detail-intro">
                  Our engineering design services ensure your fabrication projects are optimized for 
                  functionality, efficiency, and compliance with relevant standards.
                </p>
                <p>
                  Our team of experienced engineers and designers utilize advanced CAD software and industry 
                  expertise to create precise technical specifications and drawings for manufacturing. 
                  We work closely with clients to translate concepts into practical, manufacturable designs.
                </p>
                <h3>Our Design Services Include:</h3>
                <ul className="service-detail-list">
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>CAD Drawing & Design</h4>
                      <p>Precise technical drawings and 3D modeling for fabrication projects of all types.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Mechanical & Civil Engineering</h4>
                      <p>Structural calculations, load analysis, and compliance verification for regulatory standards.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Industrial Field Drawings</h4>
                      <p>Detailed site plans, equipment layouts, and piping/instrumentation diagrams.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Custom Equipment Design</h4>
                      <p>Specialized design of equipment to meet specific operational requirements and constraints.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Technical Consulting</h4>
                      <p>Expert advice on material selection, fabrication methods, and engineering solutions.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="service-detail-image">
                <img src={DesignServices} alt="Design Services" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Pharmaceutical Equipment */}
        <section id="pharma-equipment" className="service-detail section-padding">
          <div className="section-container">
            <div className="service-detail-content">
              <div className="service-detail-text">
                <h2>Pharmaceutical Equipment</h2>
                <div className="mini-divider"></div>
                <p className="service-detail-intro">
                  We specialize in creating high-quality pharmaceutical equipment that meets GMP standards 
                  and regulatory requirements.
                </p>
                <p>
                  Our pharmaceutical fabrication services focus on precision, hygiene, and compliance with 
                  industry standards. We understand the critical requirements of pharmaceutical manufacturing
                  and create equipment that ensures product integrity and process efficiency.
                </p>
                <h3>Our Pharmaceutical Equipment Includes:</h3>
                <ul className="service-detail-list">
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Tanks & Receivers</h4>
                      <p>Sterile storage vessels, mixing tanks, and specialized containers with precision finishes.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Filters & Mixtures</h4>
                      <p>Custom filtration systems and mixing equipment for pharmaceutical processing.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Tray Dryers & Vibrosifters</h4>
                      <p>Specialized equipment for drying and sifting pharmaceutical products.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Multi Mills & Blenders</h4>
                      <p>High-precision milling and blending equipment for pharmaceutical manufacturing.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Clean Room Solutions</h4>
                      <p>Equipment and installations designed specifically for pharmaceutical clean room environments.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="service-detail-image">
                <img src={PharmaceuticalEquipment} alt="Pharmaceutical Equipment" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Industrial Services */}
        <section id="industrial-services" className="service-detail section-padding alt-bg">
          <div className="section-container">
            <div className="service-detail-content reverse">
              <div className="service-detail-text">
                <h2>Industrial Services</h2>
                <div className="mini-divider"></div>
                <p className="service-detail-intro">
                  Beyond fabrication, we provide comprehensive industrial services to support your operations 
                  and maintenance needs.
                </p>
                <p>
                  Our team of skilled technicians offers a range of installation, maintenance, and support 
                  services to ensure your equipment operates efficiently and safely. We provide ongoing 
                  technical support throughout the lifecycle of your equipment.
                </p>
                <h3>Our Industrial Services Include:</h3>
                <ul className="service-detail-list">
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Equipment Installation</h4>
                      <p>Professional setup and installation of fabricated equipment and industrial systems.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Maintenance & Repairs</h4>
                      <p>Scheduled maintenance and emergency repair services for industrial equipment.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Quality Testing</h4>
                      <p>Comprehensive testing and quality assurance for fabricated products and installations.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Process Piping</h4>
                      <p>Design and installation of specialized piping systems for various industrial applications.</p>
                    </div>
                  </li>
                  <li>
                    <Check size={18} color="#ff6b00" />
                    <div>
                      <h4>Technical Support</h4>
                      <p>Expert troubleshooting and ongoing technical guidance for installed equipment.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="service-detail-image">
                <img src={IndustrialServices} alt="Industrial Services" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="service-cta-section section-padding">
          <div className="section-container">
            <div className="service-cta-content">
              <h2>Need a Custom Solution?</h2>
              <p>Contact our team to discuss your specific requirements and how we can help.</p>
              <Link to="/contact" className="cta-button">Request a Quote</Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;