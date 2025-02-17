const Footer = () => {
    return (
      <footer className="py-6 mt-12 text-white bg-gray-900">
        <div className="container px-6 mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Tony's Delight. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="#home" className="hover:text-orange-500">Home</a>
            <a href="#about" className="hover:text-orange-500">About</a>
            <a href="#products" className="hover:text-orange-500">Products</a>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  