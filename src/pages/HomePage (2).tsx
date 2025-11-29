import React, { useState, useEffect } from 'react';
import { Search, MapPin, Bed, Bath, Square, Heart, Star, Menu, X, Filter, Grid, Map, ChevronDown, Phone, Mail, User, Building, Calendar, DollarSign, Eye, Share2, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  // Mock data
  const popularLocations = [
    { id: 1, name: 'Phnom Penh', properties: 1247, image: 'https://placehold.co/300x200/4f46e5/ffffff?text=Phnom+Penh' },
    { id: 2, name: 'Sihanoukville', properties: 892, image: 'https://placehold.co/300x200/059669/ffffff?text=Sihanoukville' },
    { id: 3, name: 'Siem Reap', properties: 634, image: 'https://placehold.co/300x200/dc2626/ffffff?text=Siem+Reap' },
    { id: 4, name: 'Battambang', properties: 421, image: 'https://placehold.co/300x200/7c3aed/ffffff?text=Battambang' },
    { id: 5, name: 'Kampot', properties: 287, image: 'https://placehold.co/300x200/ea580c/ffffff?text=Kampot' },
    { id: 6, name: 'Kep', properties: 156, image: 'https://placehold.co/300x200/0891b2/ffffff?text=Kep' }
  ];

  const featuredProperties = [
    {
      id: 1,
      title: 'Luxury Villa in Phnom Penh',
      location: 'Phnom Penh, Cambodia',
      price: '$450,000',
      type: 'Villa',
      bedrooms: 4,
      bathrooms: 3,
      size: '350 sqm',
      image: 'https://placehold.co/400x300/4f46e5/ffffff?text=Luxury+Villa',
      featured: true,
      agent: 'John Smith'
    },
    {
      id: 2,
      title: 'Modern Apartment Downtown',
      location: 'Siem Reap, Cambodia',
      price: '$125,000',
      type: 'Apartment',
      bedrooms: 2,
      bathrooms: 2,
      size: '120 sqm',
      image: 'https://placehold.co/400x300/059669/ffffff?text=Modern+Apartment',
      featured: true,
      agent: 'Sarah Johnson'
    },
    {
      id: 3,
      title: 'Beachfront Condo',
      location: 'Sihanoukville, Cambodia',
      price: '$89,000',
      type: 'Condo',
      bedrooms: 1,
      bathrooms: 1,
      size: '80 sqm',
      image: 'https://placehold.co/400x300/dc2626/ffffff?text=Beachfront+Condo',
      featured: true,
      agent: 'Mike Chen'
    }
  ];

  const propertyTypes = [
    { id: 'house', name: 'House', count: 1247 },
    { id: 'apartment', name: 'Apartment', count: 892 },
    { id: 'land', name: 'Land', count: 634 },
    { id: 'shophouse', name: 'Shophouse', count: 421 },
    { id: 'condo', name: 'Condo', count: 287 },
    { id: 'commercial', name: 'Commercial', count: 156 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Cambodia Real Estate Market Trends 2024',
      excerpt: 'Latest insights into property investment opportunities in Cambodia',
      category: 'Market Trends',
      date: '2024-01-15',
      image: 'https://placehold.co/300x200/4f46e5/ffffff?text=Market+Trends'
    },
    {
      id: 2,
      title: 'Foreign Ownership Guide in Cambodia',
      excerpt: 'Complete guide to property ownership rights for foreigners',
      category: 'Buying',
      date: '2024-01-12',
      image: 'https://placehold.co/300x200/059669/ffffff?text=Foreign+Ownership'
    },
    {
      id: 3,
      title: 'Best Investment Areas in Phnom Penh',
      excerpt: 'Top neighborhoods for property investment in the capital',
      category: 'Investment',
      date: '2024-01-10',
      image: 'https://placehold.co/300x200/dc2626/ffffff?text=Phnom+Penh+Investment'
    }
  ];

  const Header = () => (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">Peanech.com</div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Buy</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Rent</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Developments</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Commercial</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Agents</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">News</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-700 hover:text-blue-600 transition-colors">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Post Property
            </button>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 py-2 space-y-2">
            <a href="#" className="block py-2 text-gray-700">Buy</a>
            <a href="#" className="block py-2 text-gray-700">Rent</a>
            <a href="#" className="block py-2 text-gray-700">Developments</a>
            <a href="#" className="block py-2 text-gray-700">Commercial</a>
            <a href="#" className="block py-2 text-gray-700">Agents</a>
            <a href="#" className="block py-2 text-gray-700">News</a>
            <a href="#" className="block py-2 text-gray-700">Sign In</a>
          </div>
        </motion.div>
      )}
    </header>
  );

  const HeroSection = () => (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Dream Property in Cambodia
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Discover the best properties for sale and rent across Cambodia
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {['buy', 'rent', 'developments', 'commercial'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search location..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              <option value="phnom-penh">Phnom Penh</option>
              <option value="siem-reap">Siem Reap</option>
              <option value="sihanoukville">Sihanoukville</option>
            </select>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="land">Land</option>
            </select>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const PopularLocations = () => (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Locations
          </h2>
          <p className="text-xl text-gray-600">
            Discover properties in Cambodia's most sought-after areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularLocations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
                  <p className="text-blue-200">{location.properties} properties</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const FeaturedProperties = () => (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600">
            Handpicked properties that stand out from the crowd
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
                  <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{property.bedrooms} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>{property.bathrooms} baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span>{property.size}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">{property.agent}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const PropertyTypes = () => (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Property Types
          </h2>
          <p className="text-xl text-gray-600">
            Find the perfect property that matches your needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {propertyTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.name}</h3>
              <p className="text-gray-600">{type.count} properties</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const NewsSection = () => (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Guides
          </h2>
          <p className="text-xl text-gray-600">
            Stay updated with the latest real estate insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );

  const Newsletter = () => (
    <section className="py-16 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Get the latest property listings and market insights delivered to your inbox
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">Peanech.com</div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for property transactions in Cambodia.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Buy Property</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rent Property</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Agents</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Market News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Buying Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +855 12 345 678
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@peanech.com
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Phnom Penh, Cambodia
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Peanech.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  const HomePage = () => (
    <div>
      <HeroSection />
      <PopularLocations />
      <FeaturedProperties />
      <PropertyTypes />
      <NewsSection />
      <Newsletter />
    </div>
  );

  const PropertyListings = () => (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button className="text-blue-600 text-sm">Clear All</button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Any Price</option>
                    <option>$50,000 - $100,000</option>
                    <option>$100,000 - $200,000</option>
                    <option>$200,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>All Locations</option>
                    <option>Phnom Penh</option>
                    <option>Siem Reap</option>
                    <option>Sihanoukville</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>All Types</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Land</option>
                    <option>Condo</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Any</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
          
          {/* Property Listings */}
          <div className="lg:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
                1,247 Properties Found
              </h2>
              <div className="flex items-center space-x-4">
                <select className="p-2 border border-gray-300 rounded-lg">
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <div className="flex border border-gray-300 rounded-lg">
                  <button className="p-2 hover:bg-gray-100">
                    <Grid className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 border-l border-gray-300">
                    <Map className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProperties.map((property) => (
                <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{property.title}</h3>
                      <span className="text-xl font-bold text-blue-600">{property.price}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        <span>{property.bedrooms} beds</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        <span>{property.bathrooms} baths</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        <span>{property.size}</span>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Previous
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg ${
                    page === 1
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'listings':
        return <PropertyListings />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {renderContent()}
      <Footer />
    </div>
  );
};

export default App;