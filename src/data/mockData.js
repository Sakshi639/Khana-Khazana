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
    image: "https://plus.unsplash.com/premium_photo-1675103909059-03622a545e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyZ2FyaXRhJTIwcGl6emF8ZW58MHx8MHx8fDA%3D?w=600&h=400&fit=crop&auto=format",
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
    image: "https://www.istockphoto.com/photo/crispy-chicken-burger-gm539243164-96109731?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FChicken-Burger&utm_medium=affiliate&utm_source=unsplash&utm_term=Chicken+Burger%3A%3A%3A?",
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
    image: "https://media.istockphoto.com/id/1262880166/photo/world-famous-freshly-stir-fried-cooked-thai-recipe-of-prawn-pad-thai-noodles-on-a-round.webp?a=1&b=1&s=612x612&w=0&k=20&c=WNeojuGPM0evPmWKCUYGJVrzI_JRix20TO5sUsLscrA=",
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
    image: "https://media.istockphoto.com/id/1416818056/photo/colourful-vegan-bowl-with-quinoa-and-sweet-potato.webp?a=1&b=1&s=612x612&w=0&k=20&c=V6o4WjJz0fTGsc5H85mKWiiBqnxfLIcmEe2JkrDF67g=",
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
    image: "https://media.istockphoto.com/id/1200136076/photo/shrimp-street-tacos.webp?a=1&b=1&s=612x612&w=0&k=20&c=PRcOz2N_Nog2Cd8rToGhEjMHKiOy_e8PUAX2fnGAIVA=",
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
    image: "https://media.istockphoto.com/id/1386273499/photo/chocolava.webp?a=1&b=1&s=612x612&w=0&k=20&c=PxfLooIKsju7xWlrI_imoDJvCq7eVvliNc8TYGG6ih8=",
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
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QkJRJTIwQ2hpY2tlbiUyMFBpenphfGVufDB8fDB8fHww?w=600&h=400&fit=crop&auto=format",
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
    image: "https://images.unsplash.com/photo-1520073201527-6b044ba2ca9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFZlZ2dpZSUyMEJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D?w=600&h=400&fit=crop&auto=format",
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
    image: "https://images.unsplash.com/photo-1740813626726-d811be64edbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMFJhbWVufGVufDB8fDB8fHww?w=600&h=400&fit=crop&auto=format",
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
    image: "https://media.istockphoto.com/id/1441732227/photo/churros-plate-and-hot-chocolate-mug.webp?a=1&b=1&s=612x612&w=0&k=20&c=WyLekTtlmcKFKZNbf_FGO18zDHagnscidqVdctCqjsk=",
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
    image: "https://images.unsplash.com/photo-1653542773369-51cce8d08250?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1hbmdvJTIwU21vb3RoaWV8ZW58MHx8MHx8fDA%3D?w=600&h=400&fit=crop&auto=format",
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
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SWNlZCUyMENvZmZlZXxlbnwwfHwwfHx8MA%3D%3D?w=600&h=400&fit=crop&auto=format",
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
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGVtb25hZGV8ZW58MHx8MHx8fDA%3D?",
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
    image: "https://plus.unsplash.com/premium_photo-1671379526961-1aebb82b317b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFzYWxhJTIwQ2hhaXxlbnwwfHwwfHx8MA%3D%3D?",
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
    image: "https://images.unsplash.com/photo-1457518919282-b199744eefd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJlcnJ5JTIwJTIwSnVpY2V8ZW58MHx8MHx8fDA%3D?",
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
    image: "https://media.istockphoto.com/id/1338803225/photo/chicken-caesar-salad-with-the-classic-dressing-being-poured-and-croutons.webp?a=1&b=1&s=612x612&w=0&k=20&c=wEXziisGO5zgDnr9muwJASzIlN9q0yKaaAMPKOdes7k=?",
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
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3JlZWslMjBTYWxhZHxlbnwwfHwwfHx8MA%3D%3D?",
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
    image: "https://images.unsplash.com/photo-1665233272941-ae681d11fc06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2x1YiUyMFNhbmR3aWNofGVufDB8fDB8fHww?",
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
    image: "https://plus.unsplash.com/premium_photo-1739988546008-4caafc8dc18d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2FwcmVzZSUyMFNhbmR3aWNofGVufDB8fDB8fHww?",
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
    image: "https://media.istockphoto.com/id/943785646/photo/spaghetti-carbonara-with-garlic-bread.webp?a=1&b=1&s=612x612&w=0&k=20&c=A48lw7nAML-umMfqKbMfVe3irvcAaOkBPUpKVOFhP48=?",
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
    image: "https://media.istockphoto.com/id/522393408/photo/penne-pasta-with-chili-sauce-arrabiata.webp?a=1&b=1&s=612x612&w=0&k=20&c=zOmxRLD_kPqrJ8l3ucRIw277plbgrwhTJqqZYMMmJV8=?",
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
    image: "https://media.istockphoto.com/id/1201090615/photo/tomato-soup-with-basil-in-a-bowl.webp?a=1&b=1&s=612x612&w=0&k=20&c=cRTooo7LN9jHXbcFNci3F_nAK9_78YixQqPZcWoAuts=?",
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
    image: "https://images.unsplash.com/photo-1665594051407-7385d281ad76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMENvcm4lMjBTb3VwfGVufDB8fDB8fHww?",
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
    image: "https://media.istockphoto.com/id/1214416414/photo/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=AgidLz6RYOwAgDjKVOfDQhR6ePaRIRR6fcIM5Fp9P0A=?",
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
    image: "https://media.istockphoto.com/id/1414307299/photo/closeup-garlic-butter-shrimp-in-pan.webp?a=1&b=1&s=612x612&w=0&k=20&c=RcXKgoUJc1exWAGC-mPBCQY6IXVY1qxARs_8sP_zOGE=?",
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

