import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="lg:flex fixed flex-col top-[40%] left-0">
      <ul>
        <li className="hover:ml-[-10px] duration-300 bg-green-600">
          <a href="https://github.com/dorianwalker29" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '4px' }}>
            <FaGithub size={24} style={{ marginRight: '8px' }} />
            GitHub
          </a>
        </li>
        <li className="hover:ml-[-10px] duration-300 bg-red-600">
          <a href="https://www.linkedin.com/in/dorianwalker90/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '4px' }}>
            <FaLinkedin size={24} style={{ marginRight: '8px' }} />
            LinkedIn
          </a>
        </li>
        <li className="hover:ml-[-10px] duration-300 bg-blue-600">
          <a href="mailto:dorianwalker.notes@me.com" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '4px' }}>
            <FaEnvelope size={24} style={{ marginRight: '8px' }} />
            Email
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
