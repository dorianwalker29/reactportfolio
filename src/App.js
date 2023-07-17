import React, { useState } from 'react';
import Header from './layout/Header';
import Content from './components/Content';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [selectedTitle, setSelectedTitle] = useState('About Me');

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  };

  return (
    <div className="App">
      <Header />
      <Content handleTitleClick={handleTitleClick} selectedTitle={selectedTitle} />
      <Footer />
    </div>
  );
}

export default App;
