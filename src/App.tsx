import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import Products from './components/Products';
import NewProducts from './components/NewProducts';
import Assortment from './components/Assortment';
import Contact from './components/Contact';
import Transportation from './components/Transportation';
import Footer from "./components/Footer"; // Ensure correct path

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Products />
      <NewProducts />
      <Assortment />
      <Contact />
      <Transportation />
      <Footer />
    </div>
  );
}

export default App;
