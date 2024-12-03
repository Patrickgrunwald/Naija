import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  count?: number;
}

export function StarRating({ rating, size = 'md', showCount = false, count }: StarRatingProps) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const filled = i < Math.floor(rating);
    const half = i === Math.floor(rating) && rating % 1 !== 0;
    
    return (
      <Star
        key={i}
        className={`
          ${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'}
          ${filled ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
          ${half ? 'text-yellow-400 fill-yellow-400/50' : ''}
        `}
      />
    );
  });

  return (
    <div className="flex items-center">
      <div className="flex">{stars}</div>
      {showCount && count !== undefined && (
        <span className={`ml-2 text-gray-600 ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : 'text-lg'}`}>
          ({count})
        </span>
      )}
    </div>
  );
}