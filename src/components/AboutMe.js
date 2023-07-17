import React from 'react';
import dorianImage from './dorian4346.png';

const AboutMe = () => {
  return (
    <div>
      <img src={dorianImage} alt="Recent Photo" className="photo" style={{ width: '250px', height: '300px' }} />
      <h2>About Me</h2>
      <p>
        Hi, I'm Dorian Walker, a passionate web developer with a strong interest in front and back-end development. I have years of experience building responsive and user-friendly websites using modern web technologies.
      </p>
    </div>
  );
};

export default AboutMe;
