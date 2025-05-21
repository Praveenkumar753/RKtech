import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import WhatsAppChat from './components/WhatsAppChat';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        {/* WhatsApp chat button appears on all pages */}
        <WhatsAppChat phoneNumber="+917780271033" />
      </div>
    </Router>
  );
}

export default App;
