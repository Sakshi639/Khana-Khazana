import React, { useState } from 'react';
import { Star, Plus, Clock, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '../../contexts/CartContext';
import FoodModal from './FoodModal';

const FoodCard = ({ item, className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(item, 1, []);
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div 
        className={`bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group ${className}`}
        onClick={handleCardClick}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop&crop=center`;
            }}
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {item.isVegetarian && (
              <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                <Leaf className="w-3 h-3 mr-1" />
                Veg
              </Badge>
            )}
            {item.isVegan && (
              <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                Vegan
              </Badge>
            )}
            {item.spiceLevel !== 'none' && item.spiceLevel !== 'mild' && (
              <Badge variant="destructive" className="text-xs">
                🌶️ {item.spiceLevel}
              </Badge>
            )}
          </div>

          {/* Quick Add Button */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="sm"
              onClick={handleQuickAdd}
              className="rounded-full w-8 h-8 p-0"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          {/* Rating & Delivery Badge - fixed layout */}
          <div className="absolute bottom-2 left-2 flex flex-col gap-1">
            <Badge className="bg-background/90 text-foreground border border-primary/30 flex items-center gap-1 px-2 py-1 rounded-md shadow">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-semibold text-sm">{item.rating}</span>
            </Badge>
            <Badge className="bg-background/90 text-primary border border-primary/30 flex items-center gap-1 px-2 py-1 rounded-md shadow">
              <Clock className="w-3 h-3 text-primary mr-1" />
              <span className="font-semibold text-sm">{item.preparationTime || '25 min'}</span>
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg text-foreground line-clamp-1">
              {item.name}
            </h3>
            <span className="text-lg font-bold text-primary">
              ₹{item.price.toLocaleString('en-IN')}
            </span>
          </div>

          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {item.description}
          </p>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {item.preparationTime}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {item.rating} ({item.reviews})
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button 
            className="w-full mt-4"
            onClick={handleQuickAdd}
          >
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Food Modal */}
      <FoodModal
        item={item}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default FoodCard;

