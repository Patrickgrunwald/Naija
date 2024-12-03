import React from 'react';
import { BarChart3, Users, Star, MessageSquare, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Profile Views', value: '2,847', change: '+12.5%', icon: Users },
  { label: 'Project Inquiries', value: '156', change: '+8.2%', icon: MessageSquare },
  { label: 'Average Rating', value: '4.8', change: '+0.3', icon: Star },
  { label: 'Response Rate', value: '94%', change: '+2.1%', icon: TrendingUp },
];

export function ArchitectDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
          Edit Profile
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-8 h-8 text-emerald-600" />
              <span className={`text-sm font-medium ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: 'New project inquiry received', time: '2 hours ago' },
              { action: 'Profile viewed by potential client', time: '4 hours ago' },
              { action: 'New review received (5 stars)', time: '1 day ago' },
              { action: 'Message received from client', time: '1 day ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                <span className="text-gray-700">{activity.action}</span>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Upcoming Projects</h2>
          <div className="space-y-4">
            {[
              { name: 'Modern Office Complex', status: 'In Discussion', date: 'March 25, 2024' },
              { name: 'Residential Villa', status: 'Proposal Stage', date: 'April 2, 2024' },
              { name: 'Cultural Center', status: 'Planning', date: 'April 15, 2024' },
            ].map((project, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <h4 className="font-medium">{project.name}</h4>
                  <span className="text-sm text-gray-500">{project.status}</span>
                </div>
                <span className="text-sm text-gray-500">{project.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Performance Metrics</h2>
          <div className="space-y-4">
            {[
              { metric: 'Client Satisfaction', value: '96%' },
              { metric: 'Project Completion Rate', value: '94%' },
              { metric: 'On-time Delivery', value: '92%' },
              { metric: 'Budget Adherence', value: '95%' },
            ].map((metric, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                <span className="text-gray-700">{metric.metric}</span>
                <span className="font-medium text-emerald-600">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Recent Reviews</h2>
          <div className="space-y-4">
            {[
              { client: 'John D.', rating: 5, comment: 'Exceptional work and attention to detail' },
              { client: 'Sarah M.', rating: 4, comment: 'Great communication throughout the project' },
              { client: 'Michael R.', rating: 5, comment: 'Innovative solutions and professional team' },
            ].map((review, index) => (
              <div key={index} className="py-2 border-b last:border-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{review.client}</span>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}