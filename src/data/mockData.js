export const categories = [
  {
    id: 1,
    name: "Street Food",
    icon: "🌮",
    description: "Delicious street food favorites"
  },
  {
    id: 2,
    name: "Vegan",
    icon: "🥗",
    description: "Healthy plant-based options"
  },
  {
    id: 3,
    name: "Desserts",
    icon: "🍰",
    description: "Sweet treats and desserts"
  },
  {
    id: 4,
    name: "Pizza",
    icon: "🍕",
    description: "Fresh baked pizzas"
  },
  {
    id: 5,
    name: "Burgers",
    icon: "🍔",
    description: "Juicy burgers and sandwiches"
  },
  {
    id: 6,
    name: "Asian",
    icon: "🍜",
    description: "Authentic Asian cuisine"
  },
  {
    id: 7,
    name: "Drinks",
    icon: "🥤",
    description: "Refreshing beverages"
  },
  {
    id: 8,
    name: "Salads",
    icon: "🥗",
    description: "Fresh and healthy salads"
  },
  {
    id: 9,
    name: "Sandwiches",
    icon: "🥪",
    description: "Tasty sandwiches for any time"
  },
  {
    id: 10,
    name: "Pasta",
    icon: "🍝",
    description: "Classic and modern pasta dishes"
  },
  {
    id: 11,
    name: "Soups",
    icon: "🥣",
    description: "Warm and comforting soups"
  },
  {
    id: 12,
    name: "Seafood",
    icon: "🦐",
    description: "Fresh seafood specialties"
  }
];

export const foodItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic pizza with fresh tomatoes, mozzarella cheese, and basil leaves",
    price: 1080,
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=600&h=400&fit=crop&auto=format",
    category: "Pizza",
    categoryId: 4,
    storeId: 4,
    rating: 4.5,
    reviews: 128,
    preparationTime: "25-30 min",
    isVegetarian: true,
    isVegan: false,
    spiceLevel: "mild",
    addOns: [
      { id: 1, name: "Extra Cheese", price: 170 },
      { id: 2, name: "Mushrooms", price: 130 },
      { id: 3, name: "Olives", price: 85 }
    ]
  },
  {
    id: 2,
    name: "Chicken Burger",
    description: "Grilled chicken breast with lettuce, tomato, and special sauce",
    price: 850,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop&auto=format",
    category: "Burgers",
    categoryId: 5,
    rating: 4.3,
    reviews: 95,
    preparationTime: "15-20 min",
    isVegetarian: false,
    isVegan: false,
    spiceLevel: "mild",
    addOns: [
      { id: 4, name: "Bacon", price: 210 },
      { id: 5, name: "Avocado", price: 170 },
      { id: 6, name: "Extra Patty", price: 340 }
    ]
  },
  {
    id: 3,
    name: "Pad Thai",
    description: "Traditional Thai stir-fried noodles with shrimp, tofu, and peanuts",
    price: 980,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&auto=format",
    category: "Asian",
    categoryId: 6,
    rating: 4.7,
    reviews: 203,
    preparationTime: "20-25 min",
    isVegetarian: false,
    isVegan: false,
    spiceLevel: "medium",
    addOns: [
      { id: 7, name: "Extra Shrimp", price: 255 },
      { id: 8, name: "Crushed Peanuts", price: 40 },
      { id: 9, name: "Lime Wedge", price: 20 }
    ]
  },
  {
    id: 4,
    name: "Quinoa Buddha Bowl",
    description: "Nutritious bowl with quinoa, roasted vegetables, and tahini dressing",
    price: 1190,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&auto=format",
    category: "Vegan",
    categoryId: 2,
    rating: 4.6,
    reviews: 87,
    preparationTime: "15-20 min",
    isVegetarian: true,
    isVegan: true,
    spiceLevel: "mild",
    addOns: [
      { id: 10, name: "Avocado", price: 170 },
      { id: 11, name: "Hemp Seeds", price: 130 },
      { id: 12, name: "Extra Tahini", price: 85 }
    ]
  },
  {
    id: 5,
    name: "Fish Tacos",
    description: "Fresh fish tacos with cabbage slaw and chipotle mayo",
    price: 765,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=600&h=400&fit=crop&auto=format",
    category: "Street Food",
    categoryId: 1,
    rating: 4.4,
    reviews: 156,
    preparationTime: "12-15 min",
    isVegetarian: false,
    isVegan: false,
    spiceLevel: "medium",
    addOns: [
      { id: 13, name: "Extra Fish", price: 300 },
      { id: 14, name: "Guacamole", price: 170 },
      { id: 15, name: "Jalapeños", price: 40 }
    ]
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center, served with vanilla ice cream",
    price: 595,
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=600&h=400&fit=crop&auto=format",
    category: "Desserts",
    categoryId: 3,
    rating: 4.8,
    reviews: 234,
    preparationTime: "10-12 min",
    isVegetarian: true,
    isVegan: false,
    spiceLevel: "none",
    addOns: [
      { id: 16, name: "Extra Ice Cream", price: 170 },
      { id: 17, name: "Whipped Cream", price: 85 },
      { id: 18, name: "Fresh Berries", price: 210 }
    ]
  },
  {
    id: 7,
    name: "BBQ Chicken Pizza",
    description: "Pizza topped with BBQ chicken, red onions, and cilantro",
    price: 1360,
    image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=600&h=400&fit=crop&auto=format",
    category: "Pizza",
    categoryId: 4,
    rating: 4.5,
    reviews: 178,
    preparationTime: "25-30 min",
    isVegetarian: false,
    isVegan: false,
    spiceLevel: "mild",
    addOns: [
      { id: 19, name: "Extra BBQ Sauce", price: 85 },
      { id: 20, name: "Jalapeños", price: 40 },
      { id: 21, name: "Extra Chicken", price: 255 }
    ]
  },
  {
    id: 8,
    name: "Veggie Burger",
    description: "Plant-based patty with lettuce, tomato, and vegan mayo",
    price: 935,
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=600&h=400&fit=crop&auto=format",
    category: "Burgers",
    categoryId: 5,
    rating: 4.2,
    reviews: 92,
    preparationTime: "15-20 min",
    isVegetarian: true,
    isVegan: true,
    spiceLevel: "mild",
    addOns: [
      { id: 22, name: "Vegan Cheese", price: 170 },
      { id: 23, name: "Avocado", price: 170 },
      { id: 24, name: "Sweet Potato Fries", price: 300 }
    ]
  },
  {
    id: 9,
    name: "Chicken Ramen",
    description: "Rich chicken broth with noodles, soft-boiled egg, and green onions",
    price: 1060,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&auto=format",
    category: "Asian",
    categoryId: 6,
    rating: 4.6,
    reviews: 167,
    preparationTime: "20-25 min",
    isVegetarian: false,
    isVegan: false,
    spiceLevel: "medium",
    addOns: [
      { id: 25, name: "Extra Egg", price: 130 },
      { id: 26, name: "Bamboo Shoots", price: 85 },
      { id: 27, name: "Chili Oil", price: 40 }
    ]
  },
  {
    id: 10,
    name: "Churros",
    description: "Crispy fried dough sticks dusted with cinnamon sugar",
    price: 510,
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=600&h=400&fit=crop&auto=format",
    category: "Desserts",
    categoryId: 3,
    rating: 4.4,
    reviews: 145,
    preparationTime: "8-10 min",
    isVegetarian: true,
    isVegan: false,
    spiceLevel: "none",
    addOns: [
      { id: 28, name: "Chocolate Dip", price: 130 },
      { id: 29, name: "Caramel Dip", price: 130 },
      { id: 30, name: "Extra Cinnamon", price: 20 }
    ]
  },
  {
    id: 11,
    name: "Mango Smoothie",
    description: "Refreshing mango smoothie with yogurt and honey",
    price: 320,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&auto=format",
    category: "Drinks",
    categoryId: 7,
    rating: 4.8,
    reviews: 110,
    preparationTime: "5-7 min",
    isVegetarian: true,
    isVegan: false,
    spiceLevel: "none",
    addOns: [
      { id: 31, name: "Chia Seeds", price: 40 },
      { id: 32, name: "Extra Mango", price: 60 }
    ]
  },
  {
    id: 12,
    name: "Iced Coffee",
    description: "Chilled coffee with milk and ice, perfect for summer",
    price: 210,
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=600&h=400&fit=crop&auto=format",
    category: "Drinks",
    categoryId: 7,
    rating: 4.5,
    reviews: 98,
    preparationTime: "3-5 min",
    isVegetarian: true,
    isVegan: false,
    spiceLevel: "none",
    addOns: [
      { id: 33, name: "Extra Shot", price: 50 },
      { id: 34, name: "Whipped Cream", price: 30 }
    ]
  },
  {
    id: 13,
    name: "Lemonade",
    description: "Classic homemade lemonade with fresh lemons",
    price: 150,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=600&h=400&fit=crop&auto=format",
    category: "Drinks",
    categoryId: 7,
    rating: 4.6,
    reviews: 120,
    preparationTime: "2-4 min",
    isVegetarian: true,
    isVegan: true,
    spiceLevel: "none",
    addOns: [
      { id: 35, name: "Mint Leaves", price: 20 },
      { id: 36, name: "Extra Lemon", price: 15 }
    ]
  },
  {
    id: 14,
    name: "Masala Chai",
    description: "Traditional Indian spiced tea with milk",
    price: 120,
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=600&h=400&fit=crop&auto=format",
    category: "Drinks",
    categoryId: 7,
    rating: 4.9,
    reviews: 140,
    preparationTime: "5-8 min",
    isVegetarian: true,
    isVegan: false,
    spiceLevel: "mild",
    addOns: [
      { id: 37, name: "Extra Spices", price: 10 },
      { id: 38, name: "Ginger", price: 10 }
    ]
  },
  {
    id: 15,
    name: "Berry Blast Juice",
    description: "Mixed berry juice with strawberries, blueberries, and raspberries",
    price: 260,
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=600&h=400&fit=crop&auto=format",
    category: "Drinks",
    categoryId: 7,
    rating: 4.7,
    reviews: 105,
    preparationTime: "4-6 min",
    isVegetarian: true,
    isVegan: true,
    spiceLevel: "none",
    addOns: [
      { id: 39, name: "Extra Berries", price: 50 },
      { id: 40, name: "Honey", price: 20 }
    ]
  },
  // Salads
  {
    id: 16,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan, croutons, and Caesar dressing",
    price: 690,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&auto=format",
    category: "Salads",
    categoryId: 8,
    rating: 4.4,
    reviews: 80,
    preparationTime: "10-12 min",
    isVegetarian: true,
    isVegan: false,
    spiceLevel: "none",
    addOns: [
      { id: 41, name: "Grilled Chicken", price: 210 },
      { id: 42, name: "Extra Parmesan", price: 85 }
    ]
  },
  {
    id: 17,
    name: "Greek Salad",
    description: "Tomatoes, cucumbers, olives, feta cheese, and olive oil",
    price: 720,
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=600&h=400&fit=crop&auto=format",
    category: "Salads",
    categoryId: 8,
    rating: 4.5,
    reviews: 65,
    preparationTime: "8-10 min",
    isVegetarian: true,
    isVegan: false,
    spiceLevel: "none",
    addOns: [
      { id: 43, name: "Extra Feta", price: 90 },
      { id: 44, name: "Olives", price: 60 }
    ]
  },
  // Sandwiches
  {
    id: 18,
    name: "Club Sandwich",
    description: "Triple-layered sandwich with chicken, bacon, lettuce, and tomato",
    price: 850,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop&auto=format",
    category: "Sandwiches",
    categoryId: 9,
    rating: 4.3,
    reviews: 70,
    preparationTime: "12-15 min",
    isVegetarian: false,
    isVegan: false,
    spiceLevel: "mild",
    addOns: [
      { id: 45, name: "Extra Bacon", price: 120 },
      { id: 46, name: "Cheese", price: 70 }
    ]
  },
  {
    id: 19,
    name: "Caprese Sandwich",
    description: "Fresh mozzarella, tomatoes, basil, and pesto on ciabatta",
    price: 790,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&auto=format",
    category: "Sandwiches",
    categoryId: 9,
    rating: 4.6,
    reviews: 55,
    preparationTime: "10-12 min",
    isVegetarian: true,
    isVegan: false,
    spiceLevel: "none",
    addOns: [
      { id: 47, name: "Extra Pesto", price: 60 },
      { id: 48, name: "Tomato", price: 30 }
    ]
  },
  // Pasta
  {
    id: 20,
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta with pancetta, egg, and parmesan",
    price: 980,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&auto=format",
    category: "Pasta",
    categoryId: 10,
    rating: 4.7,
    reviews: 120,
    preparationTime: "15-20 min",
    isVegetarian: false,
    isVegan: false,
    spiceLevel: "none",
    addOns: [
      { id: 49, name: "Extra Parmesan", price: 85 },
      { id: 50, name: "Bacon", price: 110 }
    ]
  },
  {
    id: 21,
    name: "Penne Arrabbiata",
    description: "Penne pasta in a spicy tomato sauce with garlic and chili",
    price: 870,
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=600&h=400&fit=crop&auto=format",
    category: "Pasta",
    categoryId: 10,
    rating: 4.4,
    reviews: 90,
    preparationTime: "12-15 min",
    isVegetarian: true,
    isVegan: true,
    spiceLevel: "hot",
    addOns: [
      { id: 51, name: "Extra Chili", price: 30 },
      { id: 52, name: "Olives", price: 60 }
    ]
  },
  // Soups
  {
    id: 22,
    name: "Tomato Basil Soup",
    description: "Creamy tomato soup with fresh basil and a touch of cream",
    price: 540,
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=600&h=400&fit=crop&auto=format",
    category: "Soups",
    categoryId: 11,
    rating: 4.5,
    reviews: 60,
    preparationTime: "8-10 min",
    isVegetarian: true,
    isVegan: false,
    spiceLevel: "mild",
    addOns: [
      { id: 53, name: "Croutons", price: 30 },
      { id: 54, name: "Cream", price: 40 }
    ]
  },
  {
    id: 23,
    name: "Chicken Corn Soup",
    description: "Classic chicken soup with sweet corn and herbs",
    price: 620,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=600&h=400&fit=crop&auto=format",
    category: "Soups",
    categoryId: 11,
    rating: 4.6,
    reviews: 75,
    preparationTime: "10-12 min",
    isVegetarian: false,
    isVegan: false,
    spiceLevel: "mild",
    addOns: [
      { id: 55, name: "Extra Corn", price: 30 },
      { id: 56, name: "Egg", price: 40 }
    ]
  },
  // Seafood
  {
    id: 24,
    name: "Grilled Salmon",
    description: "Salmon fillet grilled to perfection with lemon butter sauce",
    price: 1450,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&auto=format",
    category: "Seafood",
    categoryId: 12,
    rating: 4.8,
    reviews: 110,
    preparationTime: "18-22 min",
    isVegetarian: false,
    isVegan: false,
    spiceLevel: "mild",
    addOns: [
      { id: 57, name: "Lemon Wedge", price: 20 },
      { id: 58, name: "Herb Butter", price: 50 }
    ]
  },
  {
    id: 25,
    name: "Garlic Butter Shrimp",
    description: "Juicy shrimp sautéed in garlic butter sauce, served with rice",
    price: 1320,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&auto=format",
    category: "Seafood",
    categoryId: 12,
    rating: 4.7,
    reviews: 95,
    preparationTime: "15-18 min",
    isVegetarian: false,
    isVegan: false,
    spiceLevel: "mild",
    addOns: [
      { id: 59, name: "Extra Shrimp", price: 210 },
      { id: 60, name: "Rice", price: 70 }
    ]
  }
];

export const featuredItems = foodItems.filter(item => item.rating >= 4.5);

export const trendingItems = [1, 3, 6, 9].map(id => foodItems.find(item => item.id === id));

