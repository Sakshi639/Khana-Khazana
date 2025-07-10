import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { item, quantity = 1, addOns = [] } = action.payload;
      const cartItemId = `${item.id}-${addOns.map(a => a.id).join('-')}`;
      
      const existingItem = state.items.find(cartItem => cartItem.cartItemId === cartItemId);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(cartItem =>
            cartItem.cartItemId === cartItemId
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem
          )
        };
      }
      
      const addOnPrice = addOns.reduce((total, addOn) => total + addOn.price, 0);
      const totalPrice = (item.price + addOnPrice) * quantity;
      
      return {
        ...state,
        items: [
          ...state.items,
          {
            cartItemId,
            ...item,
            quantity,
            addOns,
            addOnPrice,
            totalPrice
          }
        ]
      };
    }
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.cartItemId !== action.payload.cartItemId)
      };
    
    case 'UPDATE_QUANTITY': {
      const { cartItemId, quantity } = action.payload;
      
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => item.cartItemId !== cartItemId)
        };
      }
      
      return {
        ...state,
        items: state.items.map(item =>
          item.cartItemId === cartItemId
            ? {
                ...item,
                quantity,
                totalPrice: (item.price + item.addOnPrice) * quantity
              }
            : item
        )
      };
    }
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };
    
    case 'APPLY_PROMO_CODE':
      return {
        ...state,
        promoCode: action.payload.code,
        discount: action.payload.discount
      };
    
    case 'REMOVE_PROMO_CODE':
      return {
        ...state,
        promoCode: null,
        discount: 0
      };
    
    default:
      return state;
  }
};

const initialState = {
  items: [],
  promoCode: null,
  discount: 0
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  // Calculate totals
  const subtotal = state.items.reduce((total, item) => total + item.totalPrice, 0);
  const deliveryFee = subtotal > 25 ? 0 : 2.99;
  const tax = subtotal * 0.08; // 8% tax
  const discountAmount = subtotal * (state.discount / 100);
  const total = subtotal + deliveryFee + tax - discountAmount;
  
  const cartCount = state.items.reduce((count, item) => count + item.quantity, 0);
  
  const addToCart = (item, quantity = 1, addOns = []) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { item, quantity, addOns }
    });
  };
  
  const removeFromCart = (cartItemId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { cartItemId }
    });
  };
  
  const updateQuantity = (cartItemId, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { cartItemId, quantity }
    });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  const applyPromoCode = (code, discount) => {
    dispatch({
      type: 'APPLY_PROMO_CODE',
      payload: { code, discount }
    });
  };
  
  const removePromoCode = () => {
    dispatch({ type: 'REMOVE_PROMO_CODE' });
  };
  
  const value = {
    items: state.items,
    cartCount,
    subtotal,
    deliveryFee,
    tax,
    discountAmount,
    total,
    promoCode: state.promoCode,
    discount: state.discount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    applyPromoCode,
    removePromoCode
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;

