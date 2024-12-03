import React from 'react';
import { MessageSquare, ThumbsUp, Flag } from 'lucide-react';
import { StarRating } from '../../components/StarRating';

const reviews = [
  {
    id: 1,
    author: 'John Smith',
    rating: 5,
    date: '2024-03-15',
    project: 'Modern Office Complex',
    comment: 'Exceptional work on our office building. The team showed great attention to detail and delivered beyond our expectations.',
    likes: 12,
    response: 'Thank you for your kind words! It was a pleasure working with you on this project.'
  },
  {
    id: 2,
    author: 'Sarah Johnson',
    rating: 4,
    date: '2024-03-10',
    project: 'Residential Villa',
    comment: 'Professional team with excellent communication throughout the project. Would recommend their services.',
    likes: 8
  },
  {
    id: 3,
    author: 'Michael Brown',
    rating: 5,
    date: '2024-03-05',
    project: 'Cultural Center',
    comment: 'Innovative solutions and great attention to sustainability requirements. The final result exceeded our expectations.',
    likes: 15,
    response: 'We appreciate your feedback and are glad we could meet your sustainability goals!'
  }
];

export function ArchitectReviews() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reviews</h1>
          <div className="flex items-center gap-4">
            <StarRating rating={4.8} showCount count={156} />
            <span className="text-gray-600">156 total reviews</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Stats */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Rating Breakdown</h2>
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center mb-2">
                <span className="w-12">{rating} stars</span>
                <div className="flex-grow mx-4">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-yellow-400 rounded-full"
                      style={{ width: `${rating === 5 ? 75 : rating === 4 ? 20 : 5}%` }}
                    />
                  </div>
                </div>
                <span className="w-12 text-right text-gray-600">
                  {rating === 5 ? '75%' : rating === 4 ? '20%' : '5%'}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Review Stats</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Response Rate</span>
                  <span className="font-medium">95%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-emerald-500 rounded-full" style={{ width: '95%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Average Response Time</span>
                  <span className="font-medium">4 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="lg:col-span-3 space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg">{review.author}</h3>
                  <p className="text-sm text-gray-600">
                    Project: {review.project}
                  </p>
                </div>
                <StarRating rating={review.rating} size="sm" />
              </div>
              
              <p className="text-gray-700 mb-4">{review.comment}</p>
              
              {review.response && (
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium mb-2">Your Response:</p>
                  <p className="text-gray-600">{review.response}</p>
                </div>
              )}

              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center hover:text-gray-900">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {review.likes} Helpful
                  </button>
                  <button className="flex items-center hover:text-gray-900">
                    <Flag className="w-4 h-4 mr-1" />
                    Report
                  </button>
                </div>
                <span>{new Date(review.date).toLocaleDateString()}</span>
              </div>

              {!review.response && (
                <div className="mt-4 pt-4 border-t">
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                    Write a Response
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}