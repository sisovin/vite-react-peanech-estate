import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Zap, Building } from 'lucide-react';
import { subscriptionPlans } from '../../data/mockData';

const PaymentPlans: React.FC = () => {
  const planIcons = {
    'Basic': Zap,
    'Professional': Crown,
    'Enterprise': Building
  };

  const planColors = {
    'Basic': 'from-gray-500 to-gray-600',
    'Professional': 'from-primary-500 to-accent-500',
    'Enterprise': 'from-purple-500 to-indigo-500'
  };

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
            Choose Your
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              {' '}Perfect Plan{' '}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Whether you're an individual agent or a large agency, 
            we have the right plan to scale your real estate business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {subscriptionPlans.map((plan, index) => {
            const IconComponent = planIcons[plan.name as keyof typeof planIcons];
            const colorClass = planColors[plan.name as keyof typeof planColors];
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${
                  plan.popular 
                    ? 'transform scale-105 z-10' 
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 ${
                  plan.popular 
                    ? 'border-primary-200 dark:border-primary-700' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}>
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${colorClass} p-4 mb-4`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        ${plan.price}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">
                        /{plan.period}
                      </span>
                    </div>
                    
                    {plan.period === 'monthly' && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Save 20% with annual billing
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check size={20} className={`text-green-500 mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:shadow-lg transform hover:scale-105'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Secure Payment Options
            </h3>
            
            <div className="flex justify-center items-center space-x-8 mb-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" 
                alt="Visa" 
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
                alt="Mastercard" 
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" 
                alt="PayPal" 
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" 
                alt="American Express" 
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center justify-center space-x-2">
                <Check size={16} className="text-green-500" />
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Check size={16} className="text-green-500" />
                <span>30-day Money Back</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Check size={16} className="text-green-500" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentPlans;
