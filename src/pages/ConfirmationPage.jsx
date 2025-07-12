import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, Phone, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ConfirmationPage = () => {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      setOrderData(JSON.parse(savedOrder));
    }
  }, []);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">No order found</h2>
            <p className="text-muted-foreground mb-8">
              We couldn't find your order details.
            </p>
            <Link to="/">
              <Button size="lg">Go to Homepage</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h1 className="text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
          <p className="text-lg text-muted-foreground">
            Thank you for your order. We're preparing your delicious meal!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Details */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Order Details</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order ID:</span>
                  <span className="font-mono font-medium">{orderData.orderId}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order Time:</span>
                  <span className="font-medium">{formatDate(orderData.orderTime)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Amount:</span>
                  <span className="font-bold text-primary">₹{orderData.total.toLocaleString('en-IN')}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Method:</span>
                  <span className="font-medium">Cash on Delivery</span>
                </div>
              </div>
            </div>

            {/* Delivery Information */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Delivery Information
              </h2>
              
              <div className="space-y-3">
                <div>
                  <p className="font-medium">
                    {orderData.customerInfo.firstName} {orderData.customerInfo.lastName}
                  </p>
                  <p className="text-muted-foreground flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    {orderData.customerInfo.phone}
                  </p>
                </div>
                
                <div>
                  <p className="text-muted-foreground">Delivery Address:</p>
                  <p className="font-medium">
                    {orderData.customerInfo.address}<br />
                    {orderData.customerInfo.city}, {orderData.customerInfo.state} {orderData.customerInfo.zipCode}
                  </p>
                </div>
                
                {orderData.customerInfo.instructions && (
                  <div>
                    <p className="text-muted-foreground">Special Instructions:</p>
                    <p className="font-medium">{orderData.customerInfo.instructions}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Estimated Delivery */}
            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 p-6">
              <h2 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Estimated Delivery Time
              </h2>
              
              <p className="text-lg font-bold text-green-800 dark:text-green-200">
                {orderData.estimatedDelivery}
              </p>
              <p className="text-sm text-green-600 dark:text-green-300 mt-1">
                We'll send you updates via SMS
              </p>
            </div>
          </div>

          {/* Order Items */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Your Order</h2>
              
              <div className="space-y-4">
                {orderData.items.map((item) => (
                  <div key={item.cartItemId} className="flex items-start space-x-4 pb-4 border-b border-border last:border-b-0 last:pb-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=64&h=64&fit=crop&crop=center`;
                      }}
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      
                      {item.addOns && item.addOns.length > 0 && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Add-ons: {item.addOns.map(a => a.name).join(', ')}
                        </p>
                      )}
                      
                      <p className="font-medium text-primary mt-1">
                        ₹{item.totalPrice.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Next */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">What's Next?</h2>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Order Confirmation</p>
                    <p className="text-sm text-muted-foreground">We've received your order and are preparing it</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Cooking</p>
                    <p className="text-sm text-muted-foreground">Our chefs are preparing your meal with care</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-medium">On the Way</p>
                    <p className="text-sm text-muted-foreground">Your order will be delivered to your doorstep</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link to="/" className="block">
                <Button className="w-full" size="lg">
                  <Home className="h-4 w-4 mr-2" />
                  Back to Homepage
                </Button>
              </Link>
              
              <Link to="/menu" className="block">
                <Button variant="outline" className="w-full">
                  Order Again
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Support Information */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-2">
            Need help with your order?
          </p>
          <p className="text-sm text-muted-foreground">
            Call us at <span className="font-medium">+1 (555) 123-4567</span> or email{' '}
            <span className="font-medium">support@khanakhazana.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;

