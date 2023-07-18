import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://github.com/dorianwalker29" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: '30px', margin: '0 100px 0 500px' }} />
        </a>
        <a href="https://linkedin.com/in/dorianwalker90" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '30px', margin: '0 100px 0' }} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '30px', margin: '0 100px 0' }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
