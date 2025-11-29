import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Phone, Mail, MapPin, Award, MessageCircle } from 'lucide-react';
import { generateAgents } from '../../data/mockData';

const AgentsSection: React.FC = () => {
  const [agents] = useState(generateAgents(8));

  return (
    <section className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Our Expert
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              {' '}Agents{' '}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Work with our experienced real estate professionals who are dedicated 
            to helping you find your perfect property with personalized service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="relative mb-6">
                  <img
                    src={agent.avatar}
                    alt={agent.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white dark:bg-gray-800 rounded-full p-2">
                      <Award size={16} className="text-primary-600" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {agent.name}
                </h3>

                <div className="flex items-center justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`${
                        i < Math.floor(agent.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                    {agent.rating}
                  </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {agent.bio}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Experience:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{agent.experience} years</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Properties:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{agent.properties}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-6">
                  {agent.specialization.slice(0, 2).map((spec) => (
                    <span
                      key={spec}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
                    View Profile
                  </button>
                  <button className="flex items-center justify-center p-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                    <MessageCircle size={16} />
                  </button>
                </div>

                <div className="flex justify-center space-x-4 mt-4">
                  <a
                    href={`tel:${agent.phone}`}
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                  >
                    <Phone size={16} />
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're always looking for talented agents to join our growing team.
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Become an Agent
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentsSection;
