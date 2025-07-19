import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Share2, 
  TrendingUp, 
  Target, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Bell,
  Users,
  BarChart3
} from 'lucide-react';

const MarketingFeatures: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const marketingFeatures = [
    {
      icon: Share2,
      title: 'Social Media Integration',
      description: 'Seamlessly share properties across all major social platforms with automated posting.',
      color: 'from-blue-500 to-indigo-500',
      stats: '500% increase in visibility'
    },
    {
      icon: TrendingUp,
      title: 'Market Analytics',
      description: 'Real-time market trends and property value predictions powered by AI.',
      color: 'from-green-500 to-emerald-500',
      stats: '95% accuracy rate'
    },
    {
      icon: Target,
      title: 'Targeted Advertising',
      description: 'Reach the right buyers with precision-targeted advertising campaigns.',
      color: 'from-purple-500 to-pink-500',
      stats: '3x higher conversion'
    },
    {
      icon: Users,
      title: 'Lead Generation',
      description: 'Advanced lead capture and nurturing system with automated follow-ups.',
      color: 'from-orange-500 to-red-500',
      stats: '250% more leads'
    }
  ];

  const socialPlatforms = [
    { name: 'Facebook', icon: Facebook, color: 'bg-blue-600', followers: '125K' },
    { name: 'Instagram', icon: Instagram, color: 'bg-pink-600', followers: '89K' },
    { name: 'Twitter', icon: Twitter, color: 'bg-sky-500', followers: '67K' },
    { name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-700', followers: '45K' }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              {' '}Marketing{' '}
            </span>
            Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Amplify your property marketing with our comprehensive suite of tools 
            designed to maximize exposure and generate quality leads.
          </p>
        </motion.div>

        {/* Marketing Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {marketingFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <div className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {feature.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Social Media Integration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Social Media Reach
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {socialPlatforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className={`w-10 h-10 ${platform.color} rounded-lg flex items-center justify-center`}>
                    <platform.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">
                      {platform.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {platform.followers} followers
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <BarChart3 className="text-primary-600 dark:text-primary-400" size={24} />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Engagement Analytics
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Total Reach:</span>
                  <div className="font-bold text-primary-600 dark:text-primary-400">326K</div>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Engagement:</span>
                  <div className="font-bold text-accent-600 dark:text-accent-400">12.5%</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 text-white"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Mail size={32} />
              <h3 className="text-2xl font-bold">Stay Updated</h3>
            </div>
            
            <p className="text-primary-100 mb-8 leading-relaxed">
              Get the latest market insights, new property listings, and exclusive deals 
              delivered straight to your inbox. Join 50,000+ subscribers!
            </p>

            {!subscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-white text-primary-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Subscribe Now
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2">Welcome aboard! 🎉</h4>
                <p className="text-primary-100">
                  You'll receive your first newsletter within 24 hours.
                </p>
              </motion.div>
            )}

            <div className="mt-8 pt-8 border-t border-white/20">
              <h4 className="font-semibold mb-4">Newsletter Benefits:</h4>
              <ul className="space-y-2 text-sm text-primary-100">
                <li>• Weekly market analysis and trends</li>
                <li>• Exclusive property previews</li>
                <li>• Investment tips and strategies</li>
                <li>• Local area insights and developments</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Marketing Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Marketing Performance
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  2.5M+
                </div>
                <div className="text-gray-600 dark:text-gray-400">Monthly Views</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">
                  45%
                </div>
                <div className="text-gray-600 dark:text-gray-400">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  15K+
                </div>
                <div className="text-gray-600 dark:text-gray-400">Active Leads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  98%
                </div>
                <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingFeatures;
