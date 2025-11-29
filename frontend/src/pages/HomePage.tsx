import React, { useState } from 'react';
import { Search, MapPin, Home, Bed, Bath, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [searchData, setSearchData] = useState({
    search: '',
    type: '',
    city: '',
    priceRange: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', searchData);
  };

  // Featured Properties Data
  const featuredProperties = [
    {
      id: 1,
      title: 'Luxury Villa in BKK1',
      price: '$850,000',
      location: 'BKK1, Phnom Penh',
      bedrooms: 5,
      bathrooms: 4,
      area: '450 m²',
      image: 'https://placehold.co/400x300/2563eb/ffffff?text=Luxury+Villa',
      badge: 'Featured',
      agent: 'Century 21',
    },
    {
      id: 2,
      title: 'Modern Condo Riverside',
      price: '$320,000',
      location: 'Riverside, Phnom Penh',
      bedrooms: 3,
      bathrooms: 2,
      area: '120 m²',
      image: 'https://placehold.co/400x300/059669/ffffff?text=Modern+Condo',
      badge: 'New',
      agent: 'Remax',
    },
    {
      id: 3,
      title: 'Penthouse TK Avenue',
      price: '$1,200,000',
      location: 'Toul Kork, Phnom Penh',
      bedrooms: 4,
      bathrooms: 3,
      area: '280 m²',
      image: 'https://placehold.co/400x300/7c3aed/ffffff?text=Penthouse',
      badge: 'Hot Deal',
      agent: 'CBRE',
    },
    {
      id: 4,
      title: 'Shophouse Daun Penh',
      price: '$680,000',
      location: 'Daun Penh, Phnom Penh',
      bedrooms: 6,
      bathrooms: 5,
      area: '300 m²',
      image: 'https://placehold.co/400x300/dc2626/ffffff?text=Shophouse',
      badge: 'Investment',
      agent: 'IPS Cambodia',
    },
  ];

  // Hot Projects Data
  const hotProjects = [
    {
      id: 1,
      title: 'The Peak Residences',
      location: 'BKK1, Phnom Penh',
      price: 'From $180,000',
      image: 'https://placehold.co/400x250/2563eb/ffffff?text=The+Peak',
      badge: 'New Launch',
    },
    {
      id: 2,
      title: 'Skyline Tower',
      location: 'Chroy Changvar',
      price: 'From $95,000',
      image: 'https://placehold.co/400x250/059669/ffffff?text=Skyline+Tower',
      badge: 'Pre-Sale',
    },
    {
      id: 3,
      title: 'Garden City Villa',
      location: 'Sen Sok, Phnom Penh',
      price: 'From $250,000',
      image: 'https://placehold.co/400x250/7c3aed/ffffff?text=Garden+City',
      badge: 'Ready Soon',
    },
    {
      id: 4,
      title: 'Ocean View Condo',
      location: 'Sihanoukville',
      price: 'From $120,000',
      image: 'https://placehold.co/400x250/dc2626/ffffff?text=Ocean+View',
      badge: 'Beach Front',
    },
  ];

  // Locations Data
  const locations = [
    { name: 'Phnom Penh', count: '2,500+ properties', icon: '🏙️' },
    { name: 'Siem Reap', count: '850+ properties', icon: '🏛️' },
    { name: 'Sihanoukville', count: '1,200+ properties', icon: '🏖️' },
    { name: 'Battambang', count: '320+ properties', icon: '🌾' },
    { name: 'Kampot', count: '280+ properties', icon: '🏞️' },
    { name: 'Kep', count: '150+ properties', icon: '🦀' },
  ];

  // News Data
  const newsArticles = [
    {
      id: 1,
      title: 'Cambodia Real Estate Market Outlook 2024',
      excerpt: 'Experts predict continued growth in property sector with increased foreign investment...',
      category: 'Market News',
      date: 'Jan 15, 2024',
      image: 'https://placehold.co/400x250/2563eb/ffffff?text=Market+Outlook',
    },
    {
      id: 2,
      title: 'Top 10 Neighborhoods to Invest in Phnom Penh',
      excerpt: 'Discover the most promising areas for property investment in the capital city...',
      category: 'Investment Guide',
      date: 'Jan 12, 2024',
      image: 'https://placehold.co/400x250/059669/ffffff?text=Investment+Guide',
    },
    {
      id: 3,
      title: 'Understanding Property Tax in Cambodia',
      excerpt: 'A comprehensive guide to property taxation and ownership regulations...',
      category: 'Legal Guide',
      date: 'Jan 10, 2024',
      image: 'https://placehold.co/400x250/7c3aed/ffffff?text=Tax+Guide',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero Search Section */}
      <section
        className="relative bg-cover bg-center py-16 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://placehold.co/1600x600/2563eb/ffffff?text=Phnom+Penh+Skyline')`,
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Find Your Dream Property in Cambodia
            </h1>
            <p className="text-xl text-blue-100">
              Discover thousands of properties for sale and rent across Phnom Penh, Siem Reap, Sihanoukville and more
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-xl p-6 shadow-2xl max-w-6xl mx-auto">
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <input
                type="text"
                placeholder="Search by location, project, or keyword..."
                className="col-span-1 lg:col-span-2 px-4 py-3 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] text-gray-800"
                value={searchData.search}
                onChange={(e) => setSearchData({ ...searchData, search: e.target.value })}
              />
              <select
                className="px-4 py-3 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] text-gray-800 bg-white appearance-none bg-[url('data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20fill=%27none%27%20viewBox=%270%200%2020%2020%27%3e%3cpath%20stroke=%27%236B7280%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%20stroke-width=%271.5%27%20d=%27m6%208%204%204%204-4%27/%3e%3c/svg%3e')] bg-[length:1.5em_1.5em] bg-[right_1rem_center] bg-no-repeat pr-10"
                value={searchData.type}
                onChange={(e) => setSearchData({ ...searchData, type: e.target.value })}
              >
                <option value="">Property Type</option>
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
              <select
                className="px-4 py-3 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb] text-gray-800 bg-white appearance-none bg-[url('data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20fill=%27none%27%20viewBox=%270%200%2020%2020%27%3e%3cpath%20stroke=%27%236B7280%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%20stroke-width=%271.5%27%20d=%27m6%208%204%204%204-4%27/%3e%3c/svg%3e')] bg-[length:1.5em_1.5em] bg-[right_1rem_center] bg-no-repeat pr-10"
                value={searchData.city}
                onChange={(e) => setSearchData({ ...searchData, city: e.target.value })}
              >
                <option value="">Select City</option>
                <option value="phnom-penh">Phnom Penh</option>
                <option value="siem-reap">Siem Reap</option>
                <option value="sihanoukville">Sihanoukville</option>
                <option value="battambang">Battambang</option>
              </select>
              <button
                type="submit"
                className="bg-[#2563eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#1e293b] mb-2">Featured Properties</h2>
              <p className="text-[#64748b]">Hand-picked properties by our experts</p>
            </div>
            <Link to="/properties" className="text-[#2563eb] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-[#059669] text-white px-3 py-1 rounded text-sm font-semibold">
                    {property.badge}
                  </span>
                  <span className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-semibold">
                    {property.price}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#1e293b] mb-2">{property.title}</h3>
                  <div className="flex items-center text-[#64748b] text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>
                  <div className="flex justify-between text-sm text-[#64748b] border-t border-[#e2e8f0] pt-4 mb-4">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      {property.bedrooms}
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      {property.bathrooms}
                    </div>
                    <div className="flex items-center">
                      <Home className="w-4 h-4 mr-1" />
                      {property.area}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#e2e8f0]">
                    <div className="w-10 h-10 rounded bg-[#e2e8f0] flex items-center justify-center text-[#2563eb] font-semibold text-sm">
                      {property.agent.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-[#1e293b]">{property.agent}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hot New Developments */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#1e293b] mb-2">Hot New Developments</h2>
              <p className="text-[#64748b]">Latest residential and commercial projects</p>
            </div>
            <Link to="/projects" className="text-[#2563eb] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4" style={{ scrollbarWidth: 'thin', scrollbarColor: '#2563eb #e2e8f0' }}>
            {hotProjects.map((project) => (
              <div key={project.id} className="min-w-[300px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow hover:-translate-y-1 transition-transform duration-300">
                <div className="relative h-44 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <span className="inline-block bg-[#059669] text-white px-2 py-1 rounded text-xs font-semibold mb-2">
                    {project.badge}
                  </span>
                  <h3 className="text-base font-semibold text-[#1e293b] mb-1">{project.title}</h3>
                  <div className="flex items-center text-[#64748b] text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                  <p className="text-[#2563eb] font-semibold text-lg">{project.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Properties */}
      <section className="py-16 px-4 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#1e293b] mb-2">Latest Properties</h2>
              <p className="text-[#64748b]">Recently added properties</p>
            </div>
            <Link to="/properties" className="text-[#2563eb] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-[#2563eb] text-white px-3 py-1 rounded text-sm font-semibold">
                    New
                  </span>
                  <span className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-semibold">
                    {property.price}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#1e293b] mb-2">{property.title}</h3>
                  <div className="flex items-center text-[#64748b] text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>
                  <div className="flex justify-between text-sm text-[#64748b] border-t border-[#e2e8f0] pt-4">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      {property.bedrooms}
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      {property.bathrooms}
                    </div>
                    <div className="flex items-center">
                      <Home className="w-4 h-4 mr-1" />
                      {property.area}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location-Based Filters */}
      <section className="py-16 px-4 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-2">Browse by Location</h2>
            <p className="text-[#64748b]">Find properties in your preferred area</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="text-4xl mb-3">{location.icon}</div>
                <h3 className="font-semibold text-[#1e293b] mb-1">{location.name}</h3>
                <p className="text-sm text-[#64748b]">{location.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">List Your Property with Us</h2>
            <p className="text-xl mb-8 text-blue-100">
              Reach thousands of potential buyers and tenants. Get maximum exposure for your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/list-property" className="bg-white text-[#2563eb] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                List Property
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2563eb] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate News & Guides */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#1e293b] mb-2">Real Estate News & Guides</h2>
              <p className="text-[#64748b]">Stay informed with the latest market insights</p>
            </div>
            <Link to="/news" className="text-[#2563eb] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <span className="inline-block bg-blue-100 text-[#2563eb] px-3 py-1 rounded text-xs font-semibold mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold text-[#1e293b] mb-2">{article.title}</h3>
                  <p className="text-[#64748b] text-sm mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{article.date}</span>
                    <Link to={`/news/${article.id}`} className="text-[#2563eb] font-medium hover:underline">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner & Agency Logos */}
      <section className="py-12 px-4 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#64748b] font-medium mb-8 uppercase tracking-wide">TRUSTED BY CAMBODIA'S LEADING REAL ESTATE PROFESSIONALS</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['Century 21', 'CBRE', 'Remax', 'Knight Frank', 'IPS Cambodia', 'Coldwell Banker', 'Savills', 'JLL'].map(
              (partner, index) => (
                <div key={index} className="text-[#94a3b8] font-bold text-xl min-w-[120px]">
                  {partner}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
