import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>© 2023 Todos los derechos reservados.</p>
      <div className="social-icons">
        <a href="https://www.facebook.com/tu_pagina_de_facebook" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com/tu_cuenta_de_twitter" target="_blank" rel="noopener noreferrer" title="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/tu_cuenta_de_instagram" target="_blank" rel="noopener noreferrer" title="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
