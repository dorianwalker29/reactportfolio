import React from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const Content = ({ selectedTitle }) => {
  let section;
  
  switch (selectedTitle) {
    case 'About Me':
      section = <AboutMe />;
      break;
    case 'Portfolio':
      section = <Portfolio />;
      break;
    case 'Contact':
      section = <Contact />;
      break;
    case 'Resume':
      section = <Resume />;
      break;
    default:
      section = null;
  }

  return (
    <div>
      {/* Render the selected section */}
      {section}
    </div>
  );
};

export default Content;
