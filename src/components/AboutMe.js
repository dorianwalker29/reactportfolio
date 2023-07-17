import React from 'react';
import dorain4346 from './dorian4346.png';

const AboutMe = () => {
  return (
    <div style={aboutStyles}>
      <img
        src={dorain4346}
        alt="Recent Photo"
        style={photoStyles}
      />
      <h2>About Me</h2>
      <p>
        Hi, I'm Dorian Walker, a passionate web developer with a strong interest in front and back-end development. I have years of experience building responsive and user-friendly websites using modern web technologies.
      </p>
    </div>
  );
};

const aboutStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  marginTop: '20px', // Adjust the margin as needed
};

const photoStyles = {
  width: '250px',
  height: '300px',
};

export default AboutMe;
