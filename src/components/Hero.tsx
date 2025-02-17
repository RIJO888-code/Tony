
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden font-poppins">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
          alt="Food background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl font-poppins">
            Tony's Delight
          </h1>
          <p className="mb-8 text-xl text-orange-300 font-poppins">
            Bringing the finest flavors from our table to yours
          </p>
         
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
