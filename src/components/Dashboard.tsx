import React from 'react';
import { 
  Users, 
  Package, 
  MessageCircle, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  DollarSign,
  MapPin
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Active Importers',
      value: '186',
      change: '+8 new',
      changeType: 'positive',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Campaigns',
      value: '3',
      change: '+1',
      changeType: 'positive',
      icon: MessageCircle,
      color: 'bg-emerald-500'
    },
    {
      title: 'Today\'s Orders',
      value: '$47,250',
      change: '+12.5%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Response Rate',
      value: '87%',
      change: '+5.1%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'order',
      buyer: 'Parmar Commodities',
      message: 'Ordered 10 MT Mixed Lentils - $7,180',
      time: '2 minutes ago',
      status: 'completed',
      location: 'Canada → Kenya'
    },
    {
      id: 2,
      type: 'campaign',
      buyer: 'Weekly Export Updates',
      message: 'Sent to 186 importers',
      time: '1 hour ago',
      status: 'sent',
      location: 'Global'
    },
    {
      id: 3,
      type: 'inquiry',
      buyer: 'Al-Rashid Trading',
      message: 'Inquiry for Red Lentils to Dubai',
      time: '3 hours ago',
      status: 'pending',
      location: 'UAE'
    },
    {
      id: 4,
      type: 'order',
      buyer: 'Istanbul Imports',
      message: 'Ordered 25 MT Green Lentils - ₺89,500',
      time: '5 hours ago',
      status: 'completed',
      location: 'Turkey'
    }
  ];

  const topProducts = [
    { name: 'Red Lentils (Whole)', orders: 45, revenue: '$32,850', volume: '125 MT' },
    { name: 'Green Lentils', orders: 38, revenue: '$28,500', volume: '98 MT' },
    { name: 'Masoor Dal (Split)', orders: 32, revenue: '$22,080', volume: '87 MT' },
    { name: 'Chana Dal', orders: 28, revenue: '$19,600', volume: '76 MT' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>Last updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-2">from last week</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="xl:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.status === 'completed' ? 'bg-green-100' :
                      activity.status === 'sent' ? 'bg-blue-100' : 'bg-yellow-100'
                    }`}>
                      {activity.status === 'completed' ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : activity.status === 'sent' ? (
                        <MessageCircle className="h-5 w-5 text-blue-600" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{activity.buyer}</p>
                      <p className="text-sm text-gray-600">{activity.message}</p>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-3 w-3 text-gray-400 mr-1" />
                        <span className="text-xs text-gray-500">{activity.location}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Export Products */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Export Products</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.orders} orders • {product.volume}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{product.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Operations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors">
            <MessageCircle className="h-6 w-6 text-emerald-600 mb-2" />
            <p className="font-medium text-gray-900">Send Export Updates</p>
            <p className="text-sm text-gray-600">Broadcast to all importers</p>
          </button>
          <button className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
            <Package className="h-6 w-6 text-blue-600 mb-2" />
            <p className="font-medium text-gray-900">Update Export Prices</p>
            <p className="text-sm text-gray-600">Modify FOB/CIF rates</p>
          </button>
          <button className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors">
            <Users className="h-6 w-6 text-purple-600 mb-2" />
            <p className="font-medium text-gray-900">Add New Importer</p>
            <p className="text-sm text-gray-600">Expand global network</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;