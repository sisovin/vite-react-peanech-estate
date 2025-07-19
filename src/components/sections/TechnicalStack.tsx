import React from 'react';
import { motion } from 'framer-motion';

const TechnicalStack: React.FC = () => {
  const technologies = [
    { name: 'React', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', category: 'Frontend' },
    { name: 'TypeScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', category: 'Language' },
    { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', category: 'Backend' },
    { name: 'MongoDB', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', category: 'Database' },
    { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg', category: 'Cloud' },
    { name: 'Docker', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', category: 'DevOps' },
    { name: 'GraphQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg', category: 'API' },
    { name: 'Redis', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg', category: 'Cache' }
  ];

  const features = [
    {
      title: 'High Performance',
      description: 'Optimized for speed with server-side rendering and intelligent caching',
      metric: '99.9% Uptime'
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to handle millions of properties and thousands of concurrent users',
      metric: '10M+ Properties'
    },
    {
      title: 'Real-time Updates',
      description: 'Live property updates, instant messaging, and real-time market data',
      metric: '<100ms Response'
    },
    {
      title: 'Advanced Security',
      description: 'Enterprise-grade security with end-to-end encryption and secure payments',
      metric: 'ISO 27001 Certified'
    }
  ];

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
            Powered by 
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              {' '}Cutting-Edge{' '}
            </span>
            Technology
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our platform is built on a robust technical foundation ensuring reliability, 
            scalability, and exceptional performance for all your real estate needs.
          </p>
        </motion.div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technology Stack
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl hover:shadow-lg transition-all group-hover:-translate-y-2">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform"
                  />
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {tech.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Performance Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {feature.metric}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Microservices Architecture
            </h3>
            <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
              <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Frontend</span>
              </div>
              <div className="text-gray-400">→</div>
              <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-sm font-medium text-gray-900 dark:text-white">API Gateway</span>
              </div>
              <div className="text-gray-400">→</div>
              <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Services</span>
              </div>
              <div className="text-gray-400">→</div>
              <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Database</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalStack;
