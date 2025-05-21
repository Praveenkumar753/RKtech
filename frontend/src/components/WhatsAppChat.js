import React from 'react';
import './WhatsAppChat.css';

const WhatsAppChat = ({ phoneNumber }) => {
  // Format phone number for WhatsApp API (remove any non-digit characters)
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  
  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=Hello%2C%20I'm%20interested%20in%20your%20services.`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-chat">
      <button 
        className="whatsapp-button" 
        onClick={openWhatsApp}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="whatsapp-icon">
          <path 
            fill="#fff" 
            d="M16,2A14,14,0,0,0,4.8,23.392L2.785,29.168a1,1,0,0,0,1.208,1.31l6.061-1.955A14,14,0,1,0,16,2Zm0,26A12,12,0,0,1,9.6,26.073a1,1,0,0,0-.472-.112,1,1,0,0,0-.31.05l-3.509,1.131,1.2-3.4a1,1,0,0,0-.126-.882A12,12,0,1,1,16,28Z"
          ></path>
          <path 
            fill="#fff" 
            d="M22.78,19.32l-2.93-2.93a1,1,0,0,0-1.42,0l-.7.71-.17-.09a7.81,7.81,0,0,1-3.48-4.3l-.08-.17.7-.7a1,1,0,0,0,0-1.42l-2.92-2.92a1,1,0,0,0-1.42,0L9.64,8.13a2,2,0,0,0-.57,1.72,18.18,18.18,0,0,0,3.96,8.12A18.18,18.18,0,0,0,21.15,22a2.1,2.1,0,0,0,.53.07,2,2,0,0,0,1.17-.36l.72-.72A1,1,0,0,0,22.78,19.32Z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppChat;