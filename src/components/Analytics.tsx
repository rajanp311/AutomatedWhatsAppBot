import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  MessageCircle, 
  Users, 
  IndianRupee, 
  Calendar,
  Download,
  Filter,
  BarChart3,
  PieChart
} from 'lucide-react';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [activeChart, setActiveChart] = useState('engagement');

  const stats = [
    {
      title: 'Total Messages Sent',
      value: '3,240',
      change: '+12.5%',
      changeType: 'positive',
      icon: MessageCircle,
      color: 'bg-blue-500'
    },
    {
      title: 'Response Rate',
      value: '87%',
      change: '+5.2%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      title: 'Active Buyers',
      value: '248',
      change: '+8 new',
      changeType: 'positive',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      title: 'Revenue Generated',
      value: '₹1,24,580',
      change: '+18.3%',
      changeType: 'positive',
      icon: IndianRupee,
      color: 'bg-emerald-500'
    }
  ];

  const campaignPerformance = [
    {
      name: 'Daily Morning Outreach',
      sent: 1240,
      responded: 1079,
      responseRate: 87,
      orders: 156,
      revenue: '₹45,680'
    },
    {
      name: 'Weekly Price Update',
      sent: 558,
      responded: 363,
      responseRate: 65,
      orders: 89,
      revenue: '₹32,400'
    },
    {
      name: 'New Product Launch',
      sent: 248,
      responded: 228,
      responseRate: 92,
      orders: 67,
      revenue: '₹28,900'
    },
    {
      name: 'Evening Follow-up',
      sent: 372,
      responded: 167,
      responseRate: 45,
      orders: 34,
      revenue: '₹12,600'
    }
  ];

  const topBuyers = [
    { name: 'Mumbai Traders', orders: 45, revenue: '₹18,900', responseRate: 95 },
    { name: 'Rajesh Kumar', orders: 32, revenue: '₹12,800', responseRate: 88 },
    { name: 'Delhi Suppliers', orders: 28, revenue: '₹11,200', responseRate: 82 },
    { name: 'Anita Devi', orders: 24, revenue: '₹9,600', responseRate: 91 },
    { name: 'Priya Sharma', orders: 22, revenue: '₹8,800', responseRate: 86 }
  ];

  const lentilPerformance = [
    { name: 'Masoor Dal', orders: 128, revenue: '₹38,400', inquiries: 245 },
    { name: 'Arhar Dal', orders: 96, revenue: '₹34,560', inquiries: 198 },
    { name: 'Chana Dal', orders: 87, revenue: '₹19,575', inquiries: 156 },
    { name: 'Moong Dal', orders: 73, revenue: '₹24,090', inquiries: 134 },
    { name: 'Urad Dal', orders: 54, revenue: '₹15,390', inquiries: 98 }
  ];

  const MockChart = ({ title, data }: { title: string; data: any[] }) => (
    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
      <div className="text-center">
        <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-500 font-medium">{title}</p>
        <p className="text-sm text-gray-400">Interactive chart would be here</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <div className="flex items-center space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
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
                <span className="text-sm text-gray-500 ml-2">from last period</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Performance Overview</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveChart('engagement')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                activeChart === 'engagement' 
                  ? 'bg-emerald-100 text-emerald-700' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Engagement
            </button>
            <button
              onClick={() => setActiveChart('revenue')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                activeChart === 'revenue' 
                  ? 'bg-emerald-100 text-emerald-700' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Revenue
            </button>
          </div>
        </div>
        <MockChart title="Performance Chart" data={[]} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Campaign Performance */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Campaign Performance</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {campaignPerformance.map((campaign) => (
                <div key={campaign.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <span>{campaign.sent} sent</span>
                      <span>{campaign.responded} responded</span>
                      <span>{campaign.orders} orders</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{campaign.revenue}</div>
                    <div className="text-sm text-emerald-600">{campaign.responseRate}% response</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Buyers */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Buyers</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topBuyers.map((buyer, index) => (
                <div key={buyer.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{buyer.name}</p>
                      <p className="text-sm text-gray-600">{buyer.orders} orders • {buyer.responseRate}% response</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{buyer.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lentil Performance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Lentil Performance</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lentil Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Inquiries
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversion Rate
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {lentilPerformance.map((lentil) => (
                <tr key={lentil.name} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-emerald-600 font-semibold text-sm">
                          {lentil.name.charAt(0)}
                        </span>
                      </div>
                      <span className="font-medium text-gray-900">{lentil.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {lentil.orders}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {lentil.revenue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {lentil.inquiries}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-600">
                    {Math.round((lentil.orders / lentil.inquiries) * 100)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* WhatsApp Bot Analytics */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">WhatsApp Bot Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">3,240</p>
            <p className="text-sm text-gray-600">Messages Processed</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">248</p>
            <p className="text-sm text-gray-600">Active Conversations</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">2.3s</p>
            <p className="text-sm text-gray-600">Average Response Time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;