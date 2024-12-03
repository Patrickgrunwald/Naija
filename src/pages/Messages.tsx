import React from 'react';
import { MessageSquare, Send, Search, Phone, Video } from 'lucide-react';
import { sampleFirms } from '../data/sampleFirms';

const conversations = sampleFirms.map(firm => ({
  id: firm.id,
  name: firm.name,
  logo: firm.logo,
  lastMessage: 'Thank you for your interest in our services...',
  timestamp: '10:30 AM',
  unread: Math.floor(Math.random() * 3),
}));

export function Messages() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {/* Conversations List */}
          <div className="border-r">
            <div className="p-4 border-b">
              <h1 className="text-2xl font-bold mb-4">Messages</h1>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="overflow-y-auto h-[600px]">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className="p-4 border-b hover:bg-gray-50 cursor-pointer flex items-center"
                >
                  <img
                    src={conv.logo}
                    alt={conv.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium truncate">{conv.name}</h3>
                      <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                        {conv.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                  </div>
                  {conv.unread > 0 && (
                    <span className="ml-2 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {conv.unread}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-2 lg:col-span-3 flex flex-col h-[700px]">
            <div className="p-4 border-b flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={conversations[0].logo}
                  alt={conversations[0].name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h2 className="font-bold">{conversations[0].name}</h2>
                  <span className="text-sm text-gray-500">Online</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Phone className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Video className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
                  <p className="text-gray-800">Hello! How can we help you today?</p>
                  <span className="text-xs text-gray-500 mt-1">10:30 AM</span>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-emerald-500 text-white rounded-lg p-3 max-w-[70%]">
                  <p>I'm interested in your sustainable design services.</p>
                  <span className="text-xs text-emerald-100 mt-1">10:32 AM</span>
                </div>
              </div>
            </div>

            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}