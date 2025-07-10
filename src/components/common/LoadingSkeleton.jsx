import React from 'react';

const LoadingSkeleton = ({ className = '', variant = 'default' }) => {
  const baseClasses = 'animate-pulse bg-muted rounded';
  
  const variants = {
    default: 'h-4 w-full',
    card: 'h-48 w-full',
    avatar: 'h-10 w-10 rounded-full',
    button: 'h-10 w-24',
    text: 'h-4 w-3/4',
    title: 'h-6 w-1/2',
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`} />
  );
};

export const FoodCardSkeleton = () => {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <LoadingSkeleton variant="card" />
      <div className="p-4 space-y-3">
        <LoadingSkeleton variant="title" />
        <LoadingSkeleton variant="text" />
        <LoadingSkeleton variant="text" className="w-1/2" />
        <div className="flex justify-between items-center">
          <LoadingSkeleton variant="button" />
          <LoadingSkeleton variant="button" />
        </div>
      </div>
    </div>
  );
};

export const MenuSkeletonGrid = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <FoodCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default LoadingSkeleton;

