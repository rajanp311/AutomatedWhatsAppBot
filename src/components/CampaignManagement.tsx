import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  Plus, 
  Clock, 
  Users, 
  MessageCircle, 
  Calendar,
  Settings,
  TrendingUp,
  CheckCircle,
  XCircle,
  Eye
} from 'lucide-react';

const CampaignManagement = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [activeTab, setActiveTab] = useState('active');

  const campaigns = [
    {
      id: 1,
      name: 'Daily Morning Outreach',
      status: 'active',
      schedule: 'Daily at 9:00 AM',
      recipients: 248,
      template: 'Good morning! What lentils would you like to buy today?',
      lastSent: '2 hours ago',
      responseRate: 87,
      totalSent: 1240,
      totalResponses: 1079,
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      name: 'Weekly Price Update',
      status: 'active',
      schedule: 'Monday at 10:00 AM',
      recipients: 186,
      template: 'New week, new prices! Check out our latest lentil rates.',
      lastSent: '3 days ago',
      responseRate: 65,
      totalSent: 558,
      totalResponses: 363,
      createdAt: '2024-01-10'
    },
    {
      id: 3,
      name: 'New Product Launch',
      status: 'completed',
      schedule: 'One-time',
      recipients: 248,
      template: 'Exciting news! We now have premium organic lentils available.',
      lastSent: '1 week ago',
      responseRate: 92,
      totalSent: 248,
      totalResponses: 228,
      createdAt: '2024-01-05'
    },
    {
      id: 4,
      name: 'Evening Follow-up',
      status: 'paused',
      schedule: 'Daily at 6:00 PM',
      recipients: 124,
      template: 'Still thinking about your lentil order? We have fresh stock available.',
      lastSent: '2 days ago',
      responseRate: 45,
      totalSent: 372,
      totalResponses: 167,
      createdAt: '2024-01-08'
    }
  ];

  const filteredCampaigns = campaigns.filter(campaign => {
    if (activeTab === 'active') return campaign.status === 'active';
    if (activeTab === 'paused') return campaign.status === 'paused';
    if (activeTab === 'completed') return campaign.status === 'completed';
    return true;
  });

  const CreateCampaignModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Campaign</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter campaign name"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Daily Outreach</option>
                <option>Weekly Update</option>
                <option>One-time Broadcast</option>
                <option>Follow-up Campaign</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Schedule</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Daily at 9:00 AM</option>
                <option>Daily at 6:00 PM</option>
                <option>Weekly on Monday</option>
                <option>Custom schedule</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Target Audience</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">All active buyers (248 contacts)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">High-value buyers (45 contacts)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Recent buyers (89 contacts)</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message Template</label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your message template..."
            />
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
            Create Campaign
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Campaign Management</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Create Campaign</span>
        </button>
      </div>

      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
              <p className="text-2xl font-bold text-gray-900">
                {campaigns.filter(c => c.status === 'active').length}
              </p>
            </div>
            <Play className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Messages Sent Today</p>
              <p className="text-2xl font-bold text-gray-900">248</p>
            </div>
            <MessageCircle className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Response Rate</p>
              <p className="text-2xl font-bold text-gray-900">87%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Recipients</p>
              <p className="text-2xl font-bold text-gray-900">248</p>
            </div>
            <Users className="h-8 w-8 text-emerald-600" />
          </div>
        </div>
      </div>

      {/* Campaign Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {['active', 'paused', 'completed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab} ({campaigns.filter(c => c.status === tab).length})
              </button>
            ))}
          </nav>
        </div>

        {/* Campaign List */}
        <div className="divide-y divide-gray-200">
          {filteredCampaigns.map((campaign) => (
            <div key={campaign.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                      campaign.status === 'paused' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{campaign.schedule}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{campaign.recipients} recipients</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Last sent: {campaign.lastSent}</span>
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-800">{campaign.template}</p>
                  </div>
                  <div className="mt-3 flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="h-4 w-4 text-blue-600" />
                      <span>{campaign.totalSent} sent</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>{campaign.totalResponses} responses</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-purple-600" />
                      <span>{campaign.responseRate}% response rate</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Settings className="h-4 w-4" />
                  </button>
                  {campaign.status === 'active' ? (
                    <button className="p-2 text-yellow-600 hover:bg-yellow-100 rounded-lg">
                      <Pause className="h-4 w-4" />
                    </button>
                  ) : campaign.status === 'paused' ? (
                    <button className="p-2 text-green-600 hover:bg-green-100 rounded-lg">
                      <Play className="h-4 w-4" />
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Bot Status */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">WhatsApp Bot Status</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-900">Bot is online and ready</span>
          </div>
          <div className="text-sm text-gray-600">
            Last message processed: 2 minutes ago
          </div>
        </div>
        <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
          <p className="text-sm text-emerald-800">
            <strong>Next scheduled campaign:</strong> Daily Morning Outreach will be sent to 248 buyers at 9:00 AM tomorrow.
          </p>
        </div>
      </div>

      {showCreateModal && <CreateCampaignModal />}
    </div>
  );
};

export default CampaignManagement;