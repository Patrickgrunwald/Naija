import React from 'react';
import { BookOpen, Clock, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'Sustainable Architecture in Nigeria: A Modern Approach',
    excerpt: 'Exploring how Nigerian architects are incorporating sustainable practices into modern design...',
    content: '',
    author: 'Dr. Oluwaseun Adebayo',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&h=400',
    tags: ['Sustainability', 'Modern Design', 'Nigerian Architecture'],
    readTime: 8
  },
  {
    id: '2',
    title: 'Traditional Elements in Contemporary Design',
    excerpt: 'How architects are blending traditional Nigerian architectural elements with contemporary styles...',
    content: '',
    author: 'Chioma Okonkwo',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&h=400',
    tags: ['Traditional', 'Contemporary', 'Design'],
    readTime: 6
  },
  {
    id: '3',
    title: 'Urban Planning Challenges in Lagos',
    excerpt: 'Addressing the unique challenges and opportunities in urban planning for Lagos...',
    content: '',
    author: 'Ibrahim Hassan',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&h=400',
    tags: ['Urban Planning', 'Lagos', 'Development'],
    readTime: 10
  }
];

export function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <BookOpen className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Architecture Blog</h1>
        <p className="text-xl text-gray-600">
          Insights, trends, and news from the world of architecture
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 relative h-96">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Clock className="w-4 h-4 mr-1" />
              <span>{blogPosts[0].readTime} min read</span>
              <span className="mx-2">•</span>
              <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
            <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {blogPosts[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 relative h-48">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Clock className="w-4 h-4 mr-1" />
                <span>{post.readTime} min read</span>
                <span className="mx-2">•</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}