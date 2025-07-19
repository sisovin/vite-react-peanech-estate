import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin, Heart, Eye, Calendar, Filter } from 'lucide-react';
import { generateProperties } from '../../data/mockData';

const PropertiesSection: React.FC = () => {
  const [properties] = useState(generateProperties(8));
  const [filter, setFilter] = useState('all');
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

  const filteredProperties = properties.filter(property => {
    if (filter === 'all') return property.featured;
    if (filter === 'sale') return property.status === 'sale';
    if (filter === 'rent') return property.status === 'rent';
    return true;
  });

  const formatPrice = (price: number, status: string) => {
    if (status === 'rent') {
      return `$${(price / 100).toFixed(0)}/month`;
    }
    return `$${(price / 1000).toFixed(0)}K`;
  };

  const BookingModal: React.FC<{ property: any; onClose: () => void }> = ({ property, onClose }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Book a Viewing
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Preferred Time
            </label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option>9:00 AM</option>
              <option>11:00 AM</option>
              <option>1:00 PM</option>
              <option>3:00 PM</option>
              <option>5:00 PM</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Message
            </label>
            <textarea
              rows={3}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Any specific questions or requirements..."
            ></textarea>
          </div>
          <div className="flex gap-4 pt-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const [bookingProperty, setBookingProperty] = useState<any>(null);

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
            Featured
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              {' '}Properties{' '}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover our handpicked selection of premium properties, 
            carefully curated to meet your lifestyle and investment needs.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setFilter('sale')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'sale'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'
              }`}
            >
              For Sale
            </button>
            <button
              onClick={() => setFilter('rent')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'rent'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'
              }`}
            >
              For Rent
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Filter size={16} />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      property.status === 'sale' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      For {property.status === 'sale' ? 'Sale' : 'Rent'}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <Heart size={16} className="text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors mr-2">
                      <Eye size={16} className="text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                      {property.title}
                    </h3>
                    <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                      {formatPrice(property.price, property.status)}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <MapPin size={14} className="mr-1" />
                    <span className="text-sm truncate">{property.location}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-6">
                    <div className="flex items-center">
                      <Bed size={16} className="mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath size={16} className="mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Square size={16} className="mr-1" />
                      <span>{property.area.toLocaleString()} ft²</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
                      View Details
                    </button>
                    <button
                      onClick={() => setBookingProperty(property)}
                      className="flex items-center justify-center p-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                    >
                      <Calendar size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105">
            View All Properties
          </button>
        </motion.div>

        {/* Booking Modal */}
        {bookingProperty && (
          <BookingModal
            property={bookingProperty}
            onClose={() => setBookingProperty(null)}
          />
        )}
      </div>
    </section>
  );
};

export default PropertiesSection;
