import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Utensils, Sparkles } from 'lucide-react';

const products = [
  {
    name: "Authentic Chicken Biriyani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80",
    features: [
      {
        icon: Clock,
        title: "Instant Gratification",
        description: "Craving Chicken Biryani? With Tony's Delight, satisfy your hunger instantly."
      },
      {
        icon: Utensils,
        title: "Delicious & Authentic",
        description: "Our recipe captures the authentic flavors of Chicken Biryani, with quality ingredients and the right blend of spices."
      },
      {
        icon: Sparkles,
        title: "No Fuss, No Mess",
        description: "Say goodbye to lengthy cooking and cleanup. Heat and eat, it's that simple."
      }
    ]
  },
  {
    name: "Authentic Fish Biriyani",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80",
    features: [
      {
        icon: Clock,
        title: "Instant Satisfaction",
        description: "Craving Fish Biryani? Our ready-to-eat option ensures you're just minutes away from enjoying this seafood delicacy."
      },
      {
        icon: Utensils,
        title: "Uncompromised Taste",
        description: "We've captured the authentic essence of Fish Biryani with premium ingredients and a perfectly balanced blend of spices."
      },
      {
        icon: Sparkles,
        title: "Zero Stress, All Flavor",
        description: "No need to cook from scratch or worry about ingredients. Tony's Delight does all the work for you."
      }
    ]
  }
];

const NewProducts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="new-products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">NEW PRODUCTS!</h2>
          <p className="text-xl text-gray-600">Discover our latest authentic biryanis</p>
        </motion.div>

        <div className="space-y-20" ref={ref}>
          {products.map((product, productIndex) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: productIndex * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">{product.name}</h3>
                  <div className="space-y-8">
                    {product.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: (productIndex * 0.2) + (featureIndex * 0.1) }}
                        className="flex items-start space-x-4"
                      >
                        <div className="flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-orange-500" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProducts;