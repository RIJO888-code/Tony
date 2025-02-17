import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'; // Adjust the path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-2xl transform scale-100' : 'bg-transparent shadow-md transform scale-105'}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Tony's Delight Logo" className="object-contain h-22 w-21" />
            <h1 className="text-2xl font-bold text-orange-400">Tony's Delight</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
  <div className="flex items-baseline ml-10 space-x-4">
    <a href="#home" className="px-3 py-2 font-bold text-black transition-all duration-200 transform hover:text-orange-600 hover:scale-105">Home</a>
    <a href="#about" className="px-3 py-2 font-bold text-black transition-all duration-200 transform hover:text-orange-600 hover:scale-105">About</a>
    <a href="#values" className="px-3 py-2 font-bold text-black transition-all duration-200 transform hover:text-orange-600 hover:scale-105">Values</a>
    <a href="#products" className="px-3 py-2 font-bold text-black transition-all duration-200 transform hover:text-orange-600 hover:scale-105">Products</a>
    <a href="#assortment" className="px-3 py-2 font-bold text-black transition-all duration-200 transform hover:text-orange-600 hover:scale-105">Assortment</a>
    <a href="#contact" className="px-3 py-2 font-bold text-black transition-all duration-200 transform hover:text-orange-600 hover:scale-105">Contact</a>
    <a href="#Transportation" className="px-3 py-2 font-bold text-black transition-all duration-200 transform hover:text-orange-600 hover:scale-105">Transportation</a>
  
</div>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 transition-all transform hover:text-orange-600 hover:scale-110">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-b-lg shadow-xl sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-800 transition-all transform hover:text-orange-600 hover:scale-105">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-800 transition-all transform hover:text-orange-600 hover:scale-105">About</a>
            <a href="#values" className="block px-3 py-2 text-gray-800 transition-all transform hover:text-orange-600 hover:scale-105">Values</a>
            <a href="#products" className="block px-3 py-2 text-gray-800 transition-all transform hover:text-orange-600 hover:scale-105">Products</a>
            <a href="#assortment" className="block px-3 py-2 text-gray-800 transition-all transform hover:text-orange-600 hover:scale-105">Assortment</a>
            <a href="#contact" className="block px-3 py-2 text-gray-800 transition-all transform hover:text-orange-600 hover:scale-105">Contact</a>
            <a href="#Transportation" className="px-3 py-2 text-gray-800 transition-all duration-200 transform hover:text-orange-600 hover:scale-105">Transportation</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
