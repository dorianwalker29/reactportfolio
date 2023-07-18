import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul style={navStyles}>
        <li><a href="/" style={linkStyles}>About Me</a></li>
        <li><a href="https://dorianwalker29.github.io/Dorian-Walker-Portfolio/" style={linkStyles}>Portfolio</a></li>
        <li><a href="/contact" style={linkStyles}>Contact</a></li>
        <li><a href="#" style={linkStyles}>Resume</a></li>
      </ul>
    </nav>
  );
};

const navStyles = {
  display: 'flex',
  justifyContent: 'flex-end',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const linkStyles = {
  marginRight: '60px',
  textDecoration: 'none',
  color: 'inherit',
};

export default Navigation;
