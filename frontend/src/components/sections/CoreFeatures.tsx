import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Eye, 
  Brain, 
  Calendar, 
  CreditCard, 
  Shield, 
  BarChart3, 
  MessageSquare 
} from 'lucide-react';

const CoreFeatures: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Virtual Tours',
      description: 'Experience properties with immersive 360° virtual tours and AR visualization.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      description: 'Our AI analyzes your preferences to find the perfect property matches.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Smart Booking',
      description: 'Schedule property visits with intelligent calendar integration.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Safe and secure payment processing with multiple options.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Market Analytics',
      description: 'Real-time market data and property value predictions.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: MessageSquare,
      title: 'Real-time Chat',
      description: 'Connect instantly with agents and property owners.',
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Verified Properties',
      description: 'All properties are verified and authenticated for your safety.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Optimized mobile experience for property hunting on the go.',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Core Features That 
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              {' '}Revolutionize{' '}
            </span>
            Real Estate
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience the future of property discovery with our cutting-edge features 
            designed to make your real estate journey seamless and efficient.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
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
          <button className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreFeatures;
