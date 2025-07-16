import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Edit2, 
  TrendingUp, 
  TrendingDown, 
  Package, 
  AlertTriangle,
  DollarSign,
  Calendar,
  Globe,
  Truck
} from 'lucide-react';

const InventoryManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const inventory = [
    {
      id: 1,
      name: 'Red Lentils (Whole)',
      currentPrice: 710,
      previousPrice: 695,
      cadPrice: 950,
      stock: 250,
      minStock: 50,
      unit: 'MT',
      lastUpdated: '2 hours ago',
      supplier: 'Saskatchewan Growers',
      category: 'Red Lentils',
      origin: 'Canada',
      shippingTerms: 'FOB Vancouver'
    },
    {
      id: 2,
      name: 'Green Lentils',
      currentPrice: 750,
      previousPrice: 740,
      cadPrice: 1000,
      stock: 180,
      minStock: 40,
      unit: 'MT',
      lastUpdated: '4 hours ago',
      supplier: 'Prairie Pulse Co.',
      category: 'Green Lentils',
      origin: 'Canada',
      shippingTerms: 'FOB Vancouver'
    },
    {
      id: 3,
      name: 'Masoor Dal (Split Red)',
      currentPrice: 690,
      previousPrice: 685,
      cadPrice: 920,
      stock: 320,
      minStock: 60,
      unit: 'MT',
      lastUpdated: '1 hour ago',
      supplier: 'Alberta Processing',
      category: 'Split Lentils',
      origin: 'Canada',
      shippingTerms: 'FOB Vancouver'
    },
    {
      id: 4,
      name: 'Chana Dal (Split Chickpeas)',
      currentPrice: 700,
      previousPrice: 695,
      cadPrice: 935,
      stock: 150,
      minStock: 30,
      unit: 'MT',
      lastUpdated: '3 hours ago',
      supplier: 'Manitoba Mills',
      category: 'Chickpea Products',
      origin: 'Canada',
      shippingTerms: 'FOB Vancouver'
    },
    {
      id: 5,
      name: 'Yellow Peas (Split)',
      currentPrice: 420,
      previousPrice: 415,
      cadPrice: 560,
      stock: 200,
      minStock: 40,
      unit: 'MT',
      lastUpdated: '5 hours ago',
      supplier: 'Prairie Pulse Co.',
      category: 'Pea Products',
      origin: 'Canada',
      shippingTerms: 'FOB Vancouver'
    }
  ];

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const AddItemModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Product</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter product name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Red Lentils</option>
              <option>Green Lentils</option>
              <option>Split Lentils</option>
              <option>Chickpea Products</option>
              <option>Pea Products</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price ($/MT)</label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Stock (MT)</label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="0"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter supplier name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Terms</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>FOB Vancouver</option>
              <option>CIF Destination</option>
              <option>CFR Destination</option>
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
            Add Product
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Export Inventory</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Product Lines</p>
              <p className="text-2xl font-bold text-gray-900">{inventory.length}</p>
            </div>
            <Package className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Low Stock Alert</p>
              <p className="text-2xl font-bold text-gray-900">
                {inventory.filter(item => item.stock <= item.minStock).length}
              </p>
            </div>
            <AlertTriangle className="h-8 w-8 text-orange-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Inventory Value</p>
              <p className="text-2xl font-bold text-gray-900">
                ${inventory.reduce((sum, item) => sum + (item.currentPrice * item.stock), 0).toLocaleString()}
              </p>
            </div>
            <DollarSign className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Price/MT</p>
              <p className="text-2xl font-bold text-gray-900">
                ${Math.round(inventory.reduce((sum, item) => sum + item.currentPrice, 0) / inventory.length)}
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Export Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CAD Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Origin & Terms
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Package className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">${item.currentPrice}/{item.unit}</div>
                    <div className="flex items-center text-sm">
                      {item.currentPrice > item.previousPrice ? (
                        <>
                          <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                          <span className="text-green-600">
                            +${item.currentPrice - item.previousPrice}
                          </span>
                        </>
                      ) : item.currentPrice < item.previousPrice ? (
                        <>
                          <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                          <span className="text-red-600">
                            -${item.previousPrice - item.currentPrice}
                          </span>
                        </>
                      ) : (
                        <span className="text-gray-500">No change</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">CAD ${item.cadPrice}</div>
                    <div className="text-xs text-gray-500">Local pricing</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.stock} {item.unit}</div>
                    <div className="text-sm text-gray-500">
                      {item.stock <= item.minStock ? (
                        <span className="text-red-600 flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          Low stock
                        </span>
                      ) : (
                        <span className="text-green-600">In stock</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <Globe className="h-3 w-3 mr-1" />
                      {item.origin}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Truck className="h-3 w-3 mr-1" />
                      {item.shippingTerms}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                      {item.lastUpdated}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-emerald-600 hover:text-emerald-900 mr-3">
                      <Edit2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Price Alerts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Updates</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-gray-900">Red Lentils price increased by $15/MT</span>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <TrendingDown className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium text-gray-900">Green Lentils demand increased in Middle East</span>
            </div>
            <span className="text-sm text-gray-500">4 hours ago</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium text-gray-900">Green Lentils stock running low - reorder needed</span>
            </div>
            <span className="text-sm text-gray-500">1 hour ago</span>
          </div>
        </div>
      </div>

      {showAddModal && <AddItemModal />}
    </div>
  );
};

export default InventoryManagement;