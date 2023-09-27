import './App.css';
import React from 'react';

import Navbar from './sections/Navbar';
import Carousel from './sections/Carousel';
import Footer from './sections/Footer';
import Form from './sections/Form';

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