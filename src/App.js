// src/App.js
import React from 'react';
import Header from './components/Header';
import Bio from './components/Bio';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';

const App = () => {
  return (
    <div>
      <Header />
      <Bio />
      <About />
      <Work />
      <Contact />
      <SocialLinks />
    </div>
  );
};

export default App;
