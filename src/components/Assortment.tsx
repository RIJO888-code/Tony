import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palmtree as Palm, Package, Snowflake, Fish } from 'lucide-react';

const categories = [
  {
    title: "Thailand",
    items: ["Thailand Products", "Thai Assortiments"],
    icon: Palm,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80",
    color: "from-green-500 to-emerald-700"
  },
  {
    
    items: ["Tony's Delight Dry", "Dry Assortiments"],
    icon: Package,
    image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&fit=crop&q=80",
    color: "from-amber-500 to-orange-700"
  },
  {
    title: "Tony's Frozen",
    items: ["Tony's Delight Frozen", "Frozen Assortiments"],
    icon: Snowflake,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80",
    color: "from-blue-500 to-indigo-700"
  },
  {
    title: "Tony's Seafood",
    items: [],
    icon: Fish,
    image: "https://images.unsplash.com/photo-1534043464124-3be32fe000c9?auto=format&fit=crop&q=80",
    color: "from-cyan-500 to-blue-700"
  }
];

const Assortment = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="assortment" className="py-20 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Assortment</h2>
          <p className="text-xl text-gray-600">Explore our diverse range of products</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4" ref={ref}>
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                z: 50
              }}
              className="relative overflow-hidden transition-all duration-300 shadow-xl group h-96 rounded-2xl transform-gpu hover:shadow-2xl"
              style={{
                perspective: "1000px"
              }}
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-full"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80`}></div>
              </div>

              {/* Content */}
              <div className="relative flex flex-col justify-between h-full p-6 text-white">
                <div>
                  <div className="mb-4">
                    <category.icon className="w-12 h-12" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (itemIndex * 0.1) }}
                        className="text-lg"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect Elements */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="mt-4"
                >
                  <button className="px-6 py-2 font-semibold text-gray-900 transition-colors bg-white rounded-full hover:bg-opacity-90">
                    Learn More
                  </button>
                </motion.div>
              </div>

              {/* 3D Effect Highlight */}
              <div className="absolute inset-0 transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assortment;