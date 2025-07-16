import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Edit2, 
  Trash2, 
  Phone, 
  MessageSquare, 
  MapPin,
  Filter,
  Download,
  UserPlus,
  Globe,
  Building,
  Package
} from 'lucide-react';

const BuyersManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const importers = [
    {
      id: 1,
      name: 'Parmar Commodities',
      contact: 'Rajan Parmar',
      phone: '+1 4379861403',
      country: 'Canada',
      city: 'Toronto',
      currency: 'CAD',
      preferredProducts: ['Red Lentils', 'Green Lentils', 'Masoor Dal'],
      lastOrder: '2 days ago - 10 MT',
      totalOrders: 23,
      totalVolume: '450 MT',
      status: 'active',
      lastResponse: 'Responded',
      shippingTerms: 'CIF'
    },
    {
      id: 2,
      name: 'Al-Rashid Trading LLC',
      contact: 'Ahmed Al-Rashid',
      phone: '+971 50 123 4567',
      country: 'UAE',
      city: 'Dubai',
      currency: 'AED',
      preferredProducts: ['Red Lentils', 'Chana Dal'],
      lastOrder: '1 week ago - 25 MT',
      totalOrders: 18,
      totalVolume: '380 MT',
      status: 'active',
      lastResponse: 'Responded',
      shippingTerms: 'FOB'
    },
    {
      id: 3,
      name: 'Istanbul Imports Co.',
      contact: 'Mehmet Özkan',
      phone: '+90 532 123 4567',
      country: 'Turkey',
      city: 'Istanbul',
      currency: 'TRY',
      preferredProducts: ['Green Lentils', 'Red Lentils'],
      lastOrder: '3 days ago - 25 MT',
      totalOrders: 45,
      totalVolume: '890 MT',
      status: 'active',
      lastResponse: 'No Response',
      shippingTerms: 'CIF'
    },
    {
      id: 4,
      name: 'Mumbai Spice Traders',
      contact: 'Suresh Patel',
      phone: '+91 98765 43213',
      country: 'India',
      city: 'Mumbai',
      currency: 'INR',
      preferredProducts: ['Masoor Dal', 'Chana Dal'],
      lastOrder: '2 weeks ago - 15 MT',
      totalOrders: 12,
      totalVolume: '180 MT',
      status: 'inactive',
      lastResponse: 'Responded',
      shippingTerms: 'FOB'
    },
    {
      id: 5,
      name: 'Nairobi Food Distributors',
      contact: 'James Mwangi',
      phone: '+254 722 123 456',
      country: 'Kenya',
      city: 'Nairobi',
      currency: 'KES',
      preferredProducts: ['Red Lentils', 'Green Lentils'],
      lastOrder: '4 days ago - 20 MT',
      totalOrders: 31,
      totalVolume: '520 MT',
      status: 'active',
      lastResponse: 'Responded',
      shippingTerms: 'CIF'
    }
  ];

  const filteredImporters = importers.filter(importer => {
    const matchesSearch = importer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         importer.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         importer.phone.includes(searchTerm) ||
                         importer.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         importer.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || importer.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const AddImporterModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Importer</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter company name"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Contact name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Canada</option>
                <option>UAE</option>
                <option>Turkey</option>
                <option>India</option>
                <option>Kenya</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="+1 XXX XXX XXXX"
            />
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter city"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Products</label>
            <select multiple className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="red">Red Lentils (Whole)</option>
              <option value="green">Green Lentils</option>
              <option value="masoor">Masoor Dal (Split)</option>
              <option value="chana">Chana Dal</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={() => setShowAddModal(false)}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => setShowAddModal(false)}
            className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
          >
            Add Importer
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Importers Management</h1>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Add Importer</span>
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search importers by company, contact, country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Importers Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Importer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location & Currency
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trading Volume
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredImporters.map((importer) => (
                <tr key={importer.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-emerald-600 font-semibold">
                          <Building className="h-5 w-5" />
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{importer.name}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <span className="text-xs">{importer.contact}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{importer.phone}</div>
                    <div className="text-sm text-gray-500">
                      Last response: {importer.lastResponse}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 flex items-center">
                      <Globe className="h-4 w-4 mr-1" />
                      {importer.country}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {importer.city} • {importer.currency}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{importer.totalOrders} orders</div>
                    <div className="text-sm text-gray-500">{importer.totalVolume} total</div>
                    <div className="text-xs text-gray-400">Last: {importer.lastOrder}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      importer.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {importer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                        <MessageSquare className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900 p-1 rounded">
                        <Phone className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 p-1 rounded">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Importers</p>
              <p className="text-2xl font-bold text-gray-900">{importers.length}</p>
            </div>
            <UserPlus className="h-8 w-8 text-emerald-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Importers</p>
              <p className="text-2xl font-bold text-gray-900">
                {importers.filter(b => b.status === 'active').length}
              </p>
            </div>
            <UserPlus className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Volume</p>
              <p className="text-2xl font-bold text-gray-900">2,420 MT</p>
            </div>
            <Package className="h-8 w-8 text-blue-600" />
          </div>
        </div>
      </div>

      {showAddModal && <AddImporterModal />}
    </div>
  );
};

export default BuyersManagement;