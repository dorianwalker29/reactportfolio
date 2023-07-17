import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
<div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Content />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Footer />
        </div>
      </div>
    </div>
  );}

export default App;
