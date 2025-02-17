import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const openingHours = [
  { day: 'Monday', hours: '09:00 - 17:00' },
  { day: 'Tuesday', hours: '09:00 - 17:00' },
  { day: 'Wednesday', hours: '09:00 - 17:00' },
  { day: 'Thursday', hours: '09:00 - 17:00' },
  { day: 'Friday', hours: '09:00 - 17:00' },
  { day: 'Sat-Sun', hours: 'Available on Whatsapp' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">Feel free to reach out to us - we'd love to talk to you!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-lg space-y-8"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  Tony's Delight Europe B.V.<br />
                  Slabbecoornweg 66<br />
                  4691RZ Tholen<br />
                  Netherlands
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+31702230042</p>
                <p className="text-gray-600">Mobile: +31634333132</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">info@tonysdelighteu.com</p>
                <p className="text-gray-600">sales@tonysdelighteu.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MessageCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600">+31702230042</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <div className="flex items-start space-x-4 mb-6">
              <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Opening Times</h3>
                <div className="space-y-2">
                  {openingHours.map(({ day, hours }) => (
                    <div key={day} className="flex justify-between text-gray-600">
                      <span className="font-medium w-32">{day}:</span>
                      <span>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;