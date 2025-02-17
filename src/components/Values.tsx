import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Leaf, HeartHandshake } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Quality",
    description: "Our company policy is to provide quality reliability and consistency to our customers."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Tony's Delight is working hard towards becoming a sustainable organization in all areas."
  },
  {
    icon: HeartHandshake,
    title: "Customer Service",
    description: "Here at Tony's Delight, we want to give our customers the best service. Contact us via phone or email and we will solve any problem that you might have."
  }
];

const Values = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="values" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600">The principles that guide everything we do</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-block p-4 bg-orange-100 rounded-full mb-6">
                <value.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;