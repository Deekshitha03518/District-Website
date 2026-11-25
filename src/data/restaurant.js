export const restaurants = [
  {
    id: 1,
    name: "The Garden Cafe",
    cuisine: "Continental • Italian",
    location: "Indiranagar, Bengaluru",
    rating: 4.8,
    time: "20–30 min",
    price: "₹800 for two",
    category: "Cafe",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900"
  },
  {
    id: 2,
    name: "Spice Route",
    cuisine: "North Indian • Mughlai",
    location: "Koramangala, Bengaluru",
    rating: 4.6,
    time: "25–35 min",
    price: "₹1,000 for two",
    category: "Indian",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900"
  },
  {
    id: 3,
    name: "Urban Pizza House",
    cuisine: "Pizza • Italian",
    location: "HSR Layout, Bengaluru",
    rating: 4.7,
    time: "15–25 min",
    price: "₹700 for two",
    category: "Italian",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900"
  },
  {
    id: 4,
    name: "Sushi Garden",
    cuisine: "Japanese • Asian",
    location: "Whitefield, Bengaluru",
    rating: 4.5,
    time: "30–40 min",
    price: "₹1,200 for two",
    category: "Asian",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=900"
  },
  {
    id: 5,
    name: "Burger Boulevard",
    cuisine: "Burgers • Fast Food",
    location: "Jayanagar, Bengaluru",
    rating: 4.4,
    time: "15–20 min",
    price: "₹500 for two",
    category: "Fast Food",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900"
  },
  {
    id: 6,
    name: "The Coffee Room",
    cuisine: "Coffee • Desserts",
    location: "Malleshwaram, Bengaluru",
    rating: 4.7,
    time: "10–20 min",
    price: "₹450 for two",
    category: "Cafe",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900"
  }
];


export const foodMenus = {
  "The Garden Cafe": [
    { id: 1, name: "Veg Sandwich", price: 120, category: "Starters" },
    { id: 2, name: "Pasta Alfredo", price: 220, category: "Main Course" },
    { id: 3, name: "Chocolate Brownie", price: 100, category: "Desserts" },
    { id: 4, name: "Cold Coffee", price: 110, category: "Drinks" }
  ],

  "Spice Route": [
    { id: 5, name: "Paneer Tikka", price: 180, category: "Starters" },
    { id: 6, name: "Veg Biryani", price: 220, category: "Main Course" },
    { id: 7, name: "Butter Naan", price: 45, category: "Main Course" },
    { id: 8, name: "Mango Lassi", price: 90, category: "Drinks" }
  ],

  "Urban Pizza House": [
    { id: 9, name: "Margherita Pizza", price: 250, category: "Pizza" },
    { id: 10, name: "Farmhouse Pizza", price: 350, category: "Pizza" },
    { id: 11, name: "Garlic Bread", price: 130, category: "Starters" },
    { id: 12, name: "Lemon Soda", price: 70, category: "Drinks" }
  ],

  "Sushi Garden": [
    { id: 13, name: "Veg Sushi Roll", price: 240, category: "Starters" },
    { id: 14, name: "Teriyaki Bowl", price: 290, category: "Main Course" },
    { id: 15, name: "Miso Soup", price: 120, category: "Starters" },
    { id: 16, name: "Green Tea", price: 80, category: "Drinks" }
  ],

  "Burger Boulevard": [
    { id: 17, name: "Classic Veg Burger", price: 150, category: "Burgers" },
    { id: 18, name: "Cheese Burger", price: 190, category: "Burgers" },
    { id: 19, name: "French Fries", price: 100, category: "Sides" },
    { id: 20, name: "Chocolate Shake", price: 130, category: "Drinks" }
  ],

  "Coffee Room": [
    { id: 21, name: "Cappuccino", price: 120, category: "Drinks" },
    { id: 22, name: "Cold Coffee", price: 140, category: "Drinks" },
    { id: 23, name: "Cheese Sandwich", price: 160, category: "Snacks" },
    { id: 24, name: "Blueberry Muffin", price: 90, category: "Desserts" }
  ]
};


export const categories = [
  "All",
  "Indian",
  "Italian",
  "Asian",
  "Fast Food",
  "Cafe"
];