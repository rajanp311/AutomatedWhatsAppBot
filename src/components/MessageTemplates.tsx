import React, { useState } from 'react';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Copy, 
  MessageSquare, 
  Clock, 
  Star,
  Search,
  Filter
} from 'lucide-react';

const MessageTemplates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const templates = [
    {
      id: 1,
      name: 'Daily Morning Greeting',
      category: 'Daily Outreach',
      message: 'Good morning! 🌅 What lentils would you like to buy today? We have fresh stock of:\n\n• Masoor Dal - ₹85/kg\n• Arhar Dal - ₹120/kg\n• Chana Dal - ₹75/kg\n• Moong Dal - ₹110/kg\n\nReply with your requirements!',
      usageCount: 1240,
      lastUsed: '2 hours ago',
      isFavorite: true,
      responseRate: 87
    },
    {
      id: 2,
      name: 'Price Update Notification',
      category: 'Price Updates',
      message: 'Price Update Alert! 📈\n\nNew rates effective today:\n• Masoor Dal: ₹85/kg (↑₹3)\n• Arhar Dal: ₹120/kg (↓₹5)\n• Chana Dal: ₹75/kg (no change)\n• Moong Dal: ₹110/kg (↑₹2)\n\nPlace your order now!',
      usageCount: 558,
      lastUsed: '3 days ago',
      isFavorite: false,
      responseRate: 65
    },
    {
      id: 3,
      name: 'New Product Launch',
      category: 'Promotions',
      message: 'Exciting News! 🎉\n\nWe now have premium organic lentils available:\n• Organic Masoor Dal - ₹95/kg\n• Organic Arhar Dal - ₹135/kg\n\nLimited stock available. Order now for the best quality!',
      usageCount: 248,
      lastUsed: '1 week ago',
      isFavorite: true,
      responseRate: 92
    },
    {
      id: 4,
      name: 'Evening Follow-up',
      category: 'Follow-up',
      message: 'Good evening! 🌆\n\nStill thinking about your lentil order? We have fresh stock available and can deliver tomorrow.\n\nReply "PRICES" to see current rates or "ORDER" to place your order.',
      usageCount: 372,
      lastUsed: '2 days ago',
      isFavorite: false,
      responseRate: 45
    },
    {
      id: 5,
      name: 'Order Confirmation',
      category: 'Order Management',
      message: 'Order Confirmed! ✅\n\nThank you for your order:\n• {{lentil_name}} - {{quantity}}kg\n• Rate: ₹{{price}}/kg\n• Total: ₹{{total}}\n\nDelivery scheduled for tomorrow. Track your order: {{tracking_link}}',
      usageCount: 890,
      lastUsed: '1 hour ago',
      isFavorite: true,
      responseRate: 95
    },
    {
      id: 6,
      name: 'Stock Alert',
      category: 'Inventory',
      message: 'Limited Stock Alert! ⚠️\n\n{{lentil_name}} is running low. Only {{remaining_stock}}kg left.\n\nOrder now to avoid disappointment. Reply with your requirements!',
      usageCount: 156,
      lastUsed: '5 hours ago',
      isFavorite: false,
      responseRate: 78
    }
  ];

  const categories = ['all', 'Daily Outreach', 'Price Updates', 'Promotions', 'Follow-up', 'Order Management', 'Inventory'];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || template.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const CreateTemplateModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Template</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Template Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter template name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Daily Outreach</option>
                <option>Price Updates</option>
                <option>Promotions</option>
                <option>Follow-up</option>
                <option>Order Management</option>
                <option>Inventory</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your message template..."
            />
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Available Variables:</h4>
            <div className="text-sm text-blue-800 space-y-1">
              <p><code>{'{{buyer_name}}'}</code> - Buyer's name</p>
              <p><code>{'{{lentil_name}}'}</code> - Lentil name</p>
              <p><code>{'{{price}}'}</code> - Current price</p>
              <p><code>{'{{quantity}}'}</code> - Quantity</p>
              <p><code>{'{{total}}'}</code> - Total amount</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={() => setShowCreateModal(false)}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => setShowCreateModal(false)}
            className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
          >
            Create Template
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Message Templates</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Create Template</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTemplates.map((template) => (
          <div key={template.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{template.name}</h3>
                  <p className="text-sm text-gray-600">{template.category}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {template.isFavorite && (
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                )}
                <button className="text-gray-400 hover:text-gray-600">
                  <Edit2 className="h-4 w-4" />
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <Copy className="h-4 w-4" />
                </button>
                <button className="text-gray-400 hover:text-red-600">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mb-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-800 whitespace-pre-wrap">{template.message}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{template.usageCount} uses</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{template.lastUsed}</span>
                </div>
              </div>
              <div className="text-emerald-600 font-medium">
                {template.responseRate}% response rate
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Template Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Templates</p>
              <p className="text-2xl font-bold text-gray-900">{templates.length}</p>
            </div>
            <MessageSquare className="h-8 w-8 text-emerald-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Favorite Templates</p>
              <p className="text-2xl font-bold text-gray-900">
                {templates.filter(t => t.isFavorite).length}
              </p>
            </div>
            <Star className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Response Rate</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(templates.reduce((sum, t) => sum + t.responseRate, 0) / templates.length)}%
              </p>
            </div>
            <MessageSquare className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      {showCreateModal && <CreateTemplateModal />}
    </div>
  );
};

export default MessageTemplates;