import React, { useState } from 'react';
import { X, Star, Clock, Leaf, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { useCart } from '../../contexts/CartContext';

const FoodModal = ({ item, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const { addToCart } = useCart();

  if (!isOpen || !item) return null;

  const handleAddOnChange = (addOn, checked) => {
    if (checked) {
      setSelectedAddOns([...selectedAddOns, addOn]);
    } else {
      setSelectedAddOns(selectedAddOns.filter(a => a.id !== addOn.id));
    }
  };

  const calculateTotalPrice = () => {
    const addOnPrice = selectedAddOns.reduce((total, addOn) => total + addOn.price, 0);
    return (item.price + addOnPrice) * quantity;
  };

  const handleAddToCart = () => {
    addToCart(item, quantity, selectedAddOns);
    onClose();
    setQuantity(1);
    setSelectedAddOns([]);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover"
            onError={(e) => {
              e.target.src = `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=300&fit=crop&crop=center`;
            }}
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 bg-background/80 hover:bg-background"
          >
            <X className="w-4 h-4" />
          </Button>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {item.isVegetarian && (
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Leaf className="w-3 h-3 mr-1" />
                Vegetarian
              </Badge>
            )}
            {item.isVegan && (
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Vegan
              </Badge>
            )}
            {item.spiceLevel !== 'none' && item.spiceLevel !== 'mild' && (
              <Badge variant="destructive">
                🌶️ {item.spiceLevel}
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title and Rating */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">{item.name}</h2>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                  {item.rating} ({item.reviews} reviews)
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {item.preparationTime}
                </div>
              </div>
            </div>
            <span className="text-2xl font-bold text-primary">
              ₹{item.price.toLocaleString('en-IN')}
            </span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-6">{item.description}</p>

          {/* Add-ons */}
          {item.addOns && item.addOns.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Customize Your Order</h3>
              <div className="space-y-3">
                {item.addOns.map((addOn) => (
                  <div key={addOn.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id={`addon-${addOn.id}`}
                        checked={selectedAddOns.some(a => a.id === addOn.id)}
                        onCheckedChange={(checked) => handleAddOnChange(addOn, checked)}
                      />
                      <label htmlFor={`addon-${addOn.id}`} className="text-sm font-medium">
                        {addOn.name}
                      </label>
                    </div>
                    <span className="text-sm font-medium">
                      +₹{addOn.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={incrementQuantity}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-muted-foreground mb-1">Total</div>
              <div className="text-xl font-bold text-primary">
                ₹{calculateTotalPrice().toLocaleString('en-IN')}
              </div>
            </div>
          </div>

          <Button
            className="w-full mt-6"
            onClick={handleAddToCart}
          >
            Add to Cart - ₹{calculateTotalPrice().toLocaleString('en-IN')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodModal;

