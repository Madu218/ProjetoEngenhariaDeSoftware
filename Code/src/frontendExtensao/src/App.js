import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Form />
      <Footer />
    </div>
  );
}

export default App;