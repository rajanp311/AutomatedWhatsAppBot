import React, { useState } from 'react';
import { 
  Save, 
  Key, 
  MessageSquare, 
  Globe, 
  Shield, 
  Bell,
  Database,
  Smartphone,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Eye,
  EyeOff
} from 'lucide-react';

const SettingsPage = () => {
  const [showApiKey, setShowApiKey] = useState(false);
  const [showWebhookSecret, setShowWebhookSecret] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('connected');
  const [autoProcessing, setAutoProcessing] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const [settings, setSettings] = useState({
    whatsappApiKey: 'wak_xxxxxxxxxxxxxxxxxxxxxxxxxx',
    whatsappPhoneNumber: '+1234567890',
    webhookUrl: 'https://your-domain.com/webhook',
    webhookSecret: 'whsec_xxxxxxxxxxxxxxxxxx',
    businessName: 'LentilExport Pro',
    defaultCurrency: 'USD',
    backupCurrency: 'CAD',
    timeZone: 'America/Toronto',
    orderProcessingHours: '9:00 AM - 6:00 PM',
    autoReplyEnabled: true,
    orderConfirmationTemplate: 'Thank you for your order! We have received your request for {{quantity}} MT of {{product}}. Our team will send you a proforma invoice within 2 hours.',
    priceInquiryTemplate: 'Current price for {{product}}: ${{price}}/MT {{currency}}. Shipping terms: {{terms}}. Valid until {{expiry}}.',
    outOfStockTemplate: 'Sorry, {{product}} is currently out of stock. Expected availability: {{date}}. Would you like to be notified when available?'
  });

  const handleSave = () => {
    // Save settings logic here
    alert('Settings saved successfully!');
  };

  const testConnection = () => {
    setConnectionStatus('testing');
    setTimeout(() => {
      setConnectionStatus('connected');
    }, 2000);
  };

  const sampleOrderMessage = `Hello,
I'd like to place the following order for export out of the UAE:

Product: Lentils
Order Details:
• Red Lentils (Whole) – 5 MT @ $710/MT = $3,550
• Green Lentils – 3 MT @ $750/MT = $2,250
• Masoor Dal (Split Red Lentils) – 2 MT @ $690/MT = $1,380

Total Quantity: 10 Metric Tons
Total Order Value: $7,180 USD
Shipping Terms: CIF Port of Mombasa, Kenya
Packaging: 25 kg PP bags
Preferred Shipping Date: On or before August 15, 2025

Kindly confirm availability and send proforma invoice with banking details.

Thank you,
Rajan Parmar
Parmar Commodities 
+1 4379861403`;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <Save className="h-4 w-4" />
          <span>Save Changes</span>
        </button>
      </div>

      {/* WhatsApp API Configuration */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <MessageSquare className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">WhatsApp Business API</h3>
            <p className="text-sm text-gray-600">Configure your WhatsApp Business API integration</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">API Access Token</label>
            <div className="relative">
              <input
                type={showApiKey ? 'text' : 'password'}
                value={settings.whatsappApiKey}
                onChange={(e) => setSettings({...settings, whatsappApiKey: e.target.value})}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter your WhatsApp API key"
              />
              <button
                type="button"
                onClick={() => setShowApiKey(!showApiKey)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number ID</label>
            <input
              type="text"
              value={settings.whatsappPhoneNumber}
              onChange={(e) => setSettings({...settings, whatsappPhoneNumber: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="+1234567890"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Webhook URL</label>
            <input
              type="url"
              value={settings.webhookUrl}
              onChange={(e) => setSettings({...settings, webhookUrl: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="https://your-domain.com/webhook"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Webhook Secret</label>
            <div className="relative">
              <input
                type={showWebhookSecret ? 'text' : 'password'}
                value={settings.webhookSecret}
                onChange={(e) => setSettings({...settings, webhookSecret: e.target.value})}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter webhook secret"
              />
              <button
                type="button"
                onClick={() => setShowWebhookSecret(!showWebhookSecret)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showWebhookSecret ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${
              connectionStatus === 'connected' ? 'bg-green-500' :
              connectionStatus === 'testing' ? 'bg-yellow-500' : 'bg-red-500'
            }`}></div>
            <span className="text-sm font-medium text-gray-900">
              {connectionStatus === 'connected' ? 'Connected' :
               connectionStatus === 'testing' ? 'Testing...' : 'Disconnected'}
            </span>
          </div>
          <button
            onClick={testConnection}
            disabled={connectionStatus === 'testing'}
            className="flex items-center space-x-2 px-3 py-1 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`h-4 w-4 ${connectionStatus === 'testing' ? 'animate-spin' : ''}`} />
            <span>Test Connection</span>
          </button>
        </div>
      </div>

      {/* Business Configuration */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Globe className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Business Configuration</h3>
            <p className="text-sm text-gray-600">Configure your business details and preferences</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
            <input
              type="text"
              value={settings.businessName}
              onChange={(e) => setSettings({...settings, businessName: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Default Currency</label>
            <select
              value={settings.defaultCurrency}
              onChange={(e) => setSettings({...settings, defaultCurrency: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="USD">USD - US Dollar</option>
              <option value="AED">AED - UAE Dirham</option>
              <option value="TRY">TRY - Turkish Lira</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="KES">KES - Kenyan Shilling</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Backup Currency (CAD)</label>
            <input
              type="text"
              value={settings.backupCurrency}
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
            <select
              value={settings.timeZone}
              onChange={(e) => setSettings({...settings, timeZone: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="America/Toronto">America/Toronto (EST/EDT)</option>
              <option value="Asia/Dubai">Asia/Dubai (GST)</option>
              <option value="Europe/Istanbul">Europe/Istanbul (TRT)</option>
              <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
              <option value="Africa/Nairobi">Africa/Nairobi (EAT)</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Order Processing Hours</label>
            <input
              type="text"
              value={settings.orderProcessingHours}
              onChange={(e) => setSettings({...settings, orderProcessingHours: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="9:00 AM - 6:00 PM"
            />
          </div>
        </div>
      </div>

      {/* Automation Settings */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <Smartphone className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Automation Settings</h3>
            <p className="text-sm text-gray-600">Configure automatic message processing and responses</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Auto-process Orders</h4>
              <p className="text-sm text-gray-600">Automatically extract order details from WhatsApp messages</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={autoProcessing}
                onChange={(e) => setAutoProcessing(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Push Notifications</h4>
              <p className="text-sm text-gray-600">Receive notifications for new orders and messages</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Message Templates */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
            <MessageSquare className="h-5 w-5 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Auto-Reply Templates</h3>
            <p className="text-sm text-gray-600">Customize automatic response messages</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Order Confirmation Template</label>
            <textarea
              rows={3}
              value={settings.orderConfirmationTemplate}
              onChange={(e) => setSettings({...settings, orderConfirmationTemplate: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Inquiry Template</label>
            <textarea
              rows={3}
              value={settings.priceInquiryTemplate}
              onChange={(e) => setSettings({...settings, priceInquiryTemplate: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Out of Stock Template</label>
            <textarea
              rows={3}
              value={settings.outOfStockTemplate}
              onChange={(e) => setSettings({...settings, outOfStockTemplate: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Order Processing Example */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            <Database className="h-5 w-5 text-orange-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Order Processing Example</h3>
            <p className="text-sm text-gray-600">How the system processes incoming WhatsApp orders</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Sample WhatsApp Message</h4>
            <div className="bg-gray-50 p-4 rounded-lg border">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">{sampleOrderMessage}</pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Extracted Information</h4>
            <div className="space-y-3">
              <div className="bg-emerald-50 p-3 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span className="font-medium text-emerald-900">Customer Details</span>
                </div>
                <div className="text-sm text-emerald-800">
                  <p>Name: Rajan Parmar</p>
                  <p>Company: Parmar Commodities</p>
                  <p>Phone: +1 4379861403</p>
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-blue-900">Order Details</span>
                </div>
                <div className="text-sm text-blue-800">
                  <p>• Red Lentils: 5 MT @ $710/MT</p>
                  <p>• Green Lentils: 3 MT @ $750/MT</p>
                  <p>• Masoor Dal: 2 MT @ $690/MT</p>
                  <p>Total: $7,180 USD</p>
                </div>
              </div>

              <div className="bg-purple-50 p-3 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <span className="font-medium text-purple-900">Shipping Info</span>
                </div>
                <div className="text-sm text-purple-800">
                  <p>Terms: CIF Port of Mombasa, Kenya</p>
                  <p>Packaging: 25 kg PP bags</p>
                  <p>Ship Date: Before Aug 15, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-900">Auto-Processing Status</h4>
              <p className="text-sm text-yellow-800 mt-1">
                When enabled, the system will automatically extract order details, check inventory availability, 
                add the customer to your database, and send a confirmation message with proforma invoice details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;