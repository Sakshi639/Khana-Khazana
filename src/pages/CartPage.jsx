import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '../contexts/CartContext';

const CartPage = () => {
  const {
    items,
    cartCount,
    subtotal,
    deliveryFee,
    tax,
    discountAmount,
    total,
    promoCode,
    updateQuantity,
    removeFromCart,
    applyPromoCode,
    removePromoCode
  } = useCart();

  const [promoInput, setPromoInput] = React.useState('');
  const [promoError, setPromoError] = React.useState('');

  // Mock promo codes
  const validPromoCodes = {
    'SAVE10': 10,
    'WELCOME15': 15,
    'STUDENT20': 20
  };

  const handlePromoSubmit = (e) => {
    e.preventDefault();
    const code = promoInput.toUpperCase();
    
    if (validPromoCodes[code]) {
      applyPromoCode(code, validPromoCodes[code]);
      setPromoError('');
      setPromoInput('');
    } else {
      setPromoError('Invalid promo code');
    }
  };

  const handleQuantityChange = (cartItemId, newQuantity) => {
    if (newQuantity >= 0) {
      updateQuantity(cartItemId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/menu">
              <Button size="lg">
                Browse Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/menu">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Menu
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Your Cart</h1>
            <p className="text-muted-foreground">
              {cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.cartItemId} className="bg-card rounded-lg border border-border p-6">
                <div className="flex items-start space-x-4">
                  {/* Item Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=80&h=80&fit=crop&crop=center`;
                    }}
                  />

                  {/* Item Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-foreground">{item.name}</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.isVegetarian && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                          Vegetarian
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

                    {/* Add-ons */}
                    {item.addOns && item.addOns.length > 0 && (
                      <div className="mb-3">
                        <p className="text-sm font-medium text-foreground mb-1">Add-ons:</p>
                        <div className="flex flex-wrap gap-1">
                          {item.addOns.map((addOn) => (
                            <Badge key={addOn.id} variant="outline" className="text-xs">
                              {addOn.name} (+₹{addOn.price.toLocaleString('en-IN')})
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quantity and Price */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium">Quantity:</span>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.cartItemId, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.cartItemId, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">
                          ₹{item.totalPrice.toLocaleString('en-IN')}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          ₹{(item.price + item.addOnPrice).toLocaleString('en-IN')} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border border-border p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <form onSubmit={handlePromoSubmit} className="space-y-2">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Promo code"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" variant="outline">
                      Apply
                    </Button>
                  </div>
                  {promoError && (
                    <p className="text-sm text-destructive">{promoError}</p>
                  )}
                </form>

                {promoCode && (
                  <div className="mt-3 flex items-center justify-between bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                    <div>
                      <span className="text-sm font-medium text-green-800 dark:text-green-200">
                        {promoCode} applied
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={removePromoCode}
                      className="text-green-800 dark:text-green-200 hover:text-green-900 dark:hover:text-green-100"
                    >
                      Remove
                    </Button>
                  </div>
                )}

                <div className="mt-3 text-xs text-muted-foreground">
                  Try: SAVE10, WELCOME15, STUDENT20
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Delivery Fee
                    {subtotal > 2000 && (
                      <span className="text-green-600 ml-1">(Free over ₹2000)</span>
                    )}
                  </span>
                  <span className="font-medium">
                    {deliveryFee === 0 ? 'Free' : `₹${deliveryFee.toLocaleString('en-IN')}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-medium">₹{tax.toLocaleString('en-IN')}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({promoCode})</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout" className="block">
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
              </Link>

              {/* Continue Shopping */}
              <Link to="/menu" className="block mt-3">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

