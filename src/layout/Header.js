import React from 'react';
import Navigation from '../components/Navigation';

const Header = () => {
  return (
    <header style={headerStyles}>
      <h1 style={nameStyles}>Dorian Walker</h1>
      <Navigation />
    </header>
  );
};

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'align-items',
  padding: '1rem',
  backgroundColor: '#f8f8f8',
};

const nameStyles = {
  fontSize: '2rem',
  fontWeight: 'bold',
};

export default Header;





