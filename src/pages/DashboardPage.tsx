import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Home, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  Settings,
  Bell,
  Eye,
  Heart,
  MessageSquare,
  Star
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { role } = useParams<{ role: string }>();

  const getDashboardData = (userRole: string) => {
    switch (userRole) {
      case 'user':
        return {
          title: 'User Dashboard',
          stats: [
            { label: 'Saved Properties', value: '23', icon: Heart, color: 'text-red-500' },
            { label: 'Property Views', value: '156', icon: Eye, color: 'text-blue-500' },
            { label: 'Scheduled Tours', value: '8', icon: Calendar, color: 'text-green-500' },
            { label: 'Messages', value: '12', icon: MessageSquare, color: 'text-purple-500' },
          ],
          sections: ['Saved Properties', 'Recent Searches', 'Scheduled Tours', 'Messages']
        };
      case 'agent':
        return {
          title: 'Agent Dashboard',
          stats: [
            { label: 'Active Listings', value: '34', icon: Home, color: 'text-blue-500' },
            { label: 'Total Leads', value: '127', icon: Users, color: 'text-green-500' },
            { label: 'This Month Sales', value: '$2.4M', icon: DollarSign, color: 'text-emerald-500' },
            { label: 'Client Rating', value: '4.9', icon: Star, color: 'text-yellow-500' },
          ],
          sections: ['My Properties', 'Lead Management', 'Calendar', 'Performance']
        };
      case 'admin':
        return {
          title: 'Admin Dashboard',
          stats: [
            { label: 'Total Properties', value: '2,847', icon: Home, color: 'text-blue-500' },
            { label: 'Active Agents', value: '156', icon: Users, color: 'text-green-500' },
            { label: 'Monthly Revenue', value: '$84K', icon: DollarSign, color: 'text-emerald-500' },
            { label: 'Platform Growth', value: '+23%', icon: TrendingUp, color: 'text-purple-500' },
          ],
          sections: ['Analytics', 'User Management', 'Property Management', 'Revenue']
        };
      default:
        return {
          title: 'Dashboard',
          stats: [],
          sections: []
        };
    }
  };

  const dashboardData = getDashboardData(role || 'user');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {dashboardData.title}
            </h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Bell size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Settings size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-700 ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Performance Analytics
              </h3>
              <div className="h-80 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg">
                <BarChart3 size={48} className="text-gray-400" />
                <span className="ml-4 text-gray-500 dark:text-gray-400">
                  Chart would be rendered here
                </span>
              </div>
            </div>
          </motion.div>

          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 dark:text-white">
                        New property inquiry received
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                {dashboardData.sections.map((section) => (
                  <button
                    key={section}
                    className="w-full text-left px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {section}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Sections for Admin */}
        {role === 'admin' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Property Performance Evaluation
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm text-gray-900 dark:text-white">High-performing Properties</span>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">234</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm text-gray-900 dark:text-white">Under-performing Properties</span>
                  <span className="text-sm font-medium text-red-600 dark:text-red-400">45</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm text-gray-900 dark:text-white">Average Days on Market</span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">28 days</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Assets Evaluation
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm text-gray-900 dark:text-white">Total Portfolio Value</span>
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">$124M</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm text-gray-900 dark:text-white">Monthly Appreciation</span>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">+2.3%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm text-gray-900 dark:text-white">ROI This Quarter</span>
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">15.7%</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
