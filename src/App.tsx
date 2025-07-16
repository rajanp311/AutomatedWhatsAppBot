import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  Package, 
  MessageCircle, 
  FileText, 
  BarChart3, 
  Menu, 
  X,
  Bell,
  Settings,
  Cog
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import BuyersManagement from './components/BuyersManagement';
import InventoryManagement from './components/InventoryManagement';
import CampaignManagement from './components/CampaignManagement';
import MessageTemplates from './components/MessageTemplates';
import Analytics from './components/Analytics';
import SettingsPage from './components/SettingsPage';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'buyers', name: 'Buyers', icon: Users },
    { id: 'inventory', name: 'Inventory', icon: Package },
    { id: 'campaigns', name: 'Campaigns', icon: MessageCircle },
    { id: 'templates', name: 'Templates', icon: FileText },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'settings', name: 'Settings', icon: Cog },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'buyers':
        return <BuyersManagement />;
      case 'inventory':
        return <InventoryManagement />;
      case 'campaigns':
        return <CampaignManagement />;
      case 'templates':
        return <MessageTemplates />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Package className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">LentilExport Pro</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 md:hidden">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-8 md:mt-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                    activeTab === item.id
                      ? 'bg-emerald-50 text-emerald-700 border-r-2 border-emerald-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-600'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 md:ml-0">
          <main className="p-6">
            {renderContent()}
          </main>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;