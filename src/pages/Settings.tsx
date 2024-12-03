import React from 'react';
import { Settings as SettingsIcon, Bell, Moon, Globe, Shield, Trash2 } from 'lucide-react';

export function Settings() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <SettingsIcon className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Account Settings</h1>
        <p className="text-xl text-gray-600">
          Manage your account preferences and settings
        </p>
      </div>

      <div className="space-y-6">
        {/* Profile Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Profile Information</h2>
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                defaultValue="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                defaultValue="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                defaultValue="+234 123 456 7890"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Bell className="w-5 h-5 text-gray-600 mr-2" />
            <h2 className="text-xl font-bold">Notification Settings</h2>
          </div>
          <div className="space-y-4">
            {[
              'Email notifications for new messages',
              'Project updates and announcements',
              'Newsletter and promotional content',
              'Review notifications',
            ].map((setting) => (
              <label key={setting} className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                />
                <span className="ml-2 text-gray-700">{setting}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Moon className="w-5 h-5 text-gray-600 mr-2" />
            <h2 className="text-xl font-bold">Appearance</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Theme
              </label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-2">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
          </div>
        </div>

        {/* Language Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Globe className="w-5 h-5 text-gray-600 mr-2" />
            <h2 className="text-xl font-bold">Language & Region</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Language
              </label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-2">
                <option>English</option>
                <option>Yoruba</option>
                <option>Hausa</option>
                <option>Igbo</option>
              </select>
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Shield className="w-5 h-5 text-gray-600 mr-2" />
            <h2 className="text-xl font-bold">Privacy</h2>
          </div>
          <div className="space-y-4">
            {[
              'Show my profile to other users',
              'Allow others to contact me',
              'Share my activity status',
            ].map((setting) => (
              <label key={setting} className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                />
                <span className="ml-2 text-gray-700">{setting}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Trash2 className="w-5 h-5 text-red-600 mr-2" />
            <h2 className="text-xl font-bold">Account Actions</h2>
          </div>
          <div className="space-y-4">
            <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
              Delete Account
            </button>
          </div>
        </div>

        {/* Save Changes */}
        <div className="flex justify-end">
          <button className="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}