
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Compass } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-white font-poppins">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">About Us</h2>
        </motion.div>

        {/* Our Goal Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="p-8 shadow-lg bg-gradient-to-br from-orange-50 to-white rounded-2xl">
            <h3 className="mb-6 text-3xl font-bold text-gray-900">Our Goal</h3>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Tony's Delight EU is striving to bring Europe closer to Asia's finest goods. Tony's Delight is a brand that is known throughout the world by many customers. We always aim to deliver our customers products with quality, reliability, and consistency.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Tony's Delight has been importing goods from India, China, Thailand, Vietnam, and many more countries for over 20 years. With our 20 years of experience in exporting Asian foods, we have a competitive understanding of our market.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                The team at Tony's Delight is very motivated and satisfying our customers is our everyday goal. We have and will continue to use our 20 years of experience in Importing and Exporting to provide our customers with all their needs.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Our Future Section */}
        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2">
          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.10 }}
            className="p-8 shadow-lg bg-gradient-to-br from-blue-50 to-white rounded-2xl"
          >
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 mr-3 text-blue-500" />
              <h3 className="text-2xl font-bold text-gray-900">Vision Statement</h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              To bridge the gap between our unique products produced all over Asia and the Exotic European food industry.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 shadow-lg bg-gradient-to-br from-green-50 to-white rounded-2xl"
          >
            <div className="flex items-center mb-6">
              <Compass className="w-8 h-8 mr-3 text-green-500" />
              <h3 className="text-2xl font-bold text-gray-900">Mission Statement</h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              At Tony's Delight, we strive to simplify the connection between customers and our authentic products from various countries in Asia, while ensuring we supply the finest quality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
