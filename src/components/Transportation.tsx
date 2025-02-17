import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, MapPin } from 'lucide-react';

const Transportation = () => {
  return (
    <section className="py-20 bg-white font-poppins">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900">Transportation</h2>
        </motion.div>

        {/* Free Shipping Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 mb-12 shadow-lg bg-gradient-to-br from-blue-50 to-white rounded-2xl"
        >
          <div className="flex items-center mb-4">
            <Truck className="w-8 h-8 mr-3 text-blue-500" />
            <h3 className="text-2xl font-bold text-gray-900">Free Shipping</h3>
          </div>
          <p className="text-lg leading-relaxed text-gray-700">
            We provide our customers with free shipping within Europe if the requirement of MOQ is met. However, if conditions are not met, we are happy to discuss multiple possibilities.
          </p>
        </motion.div>

        {/* Partner Logistics Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 mb-12 shadow-lg bg-gradient-to-br from-green-50 to-white rounded-2xl"
        >
          <div className="flex items-center mb-4">
            <Package className="w-8 h-8 mr-3 text-green-500" />
            <h3 className="text-2xl font-bold text-gray-900">Partner Logistics</h3>
          </div>
          <p className="text-lg leading-relaxed text-gray-700">
            We work with multiple logistics partners in the Netherlands to ensure that your ordered goods arrive on time and at the right temperature. These companies can deliver across Europe, and we will evaluate and choose the best transportation method for you—Free of Charge!
          </p>
        </motion.div>

        {/* Pick Up Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-8 shadow-lg bg-gradient-to-br from-orange-50 to-white rounded-2xl"
        >
          <div className="flex items-center mb-4">
            <MapPin className="w-8 h-8 mr-3 text-orange-500" />
            <h3 className="text-2xl font-bold text-gray-900">Pick Up</h3>
          </div>
          <p className="text-lg leading-relaxed text-gray-700">
            You also have the option to pick up your order at our warehouse. This may result in better pricing. If you wish to pick up your order, please let us know in advance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Transportation;
