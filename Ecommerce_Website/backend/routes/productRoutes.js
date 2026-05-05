const express = require('express');
const {
  getAllProducts,
  getProductById
} = require('../controllers/productController');

const router = express.Router();
// Seed route FIRST
router.get('/seed', async (req, res) => {
  try {
    const products = [
    {
    name: "Wireless Headphones",
    price: 59.99,
    description: "High-quality wireless headphones with noise cancellation.",
    image: "https://images.unsplash.com/photo-1518444021434-2b6b3f8c9b6e",
    category: "Electronics"
  },
  {
    name: "Bluetooth Earbuds",
    price: 39.99,
    description: "Compact earbuds with deep bass and long battery life.",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    category: "Electronics"
  },
  {
    name: "Smart Watch",
    price: 79.99,
    description: "Fitness tracking smart watch with heart rate monitor.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "Wearables"
  },
  {
    name: "Men Casual Watch",
    price: 49.99,
    description: "Stylish casual wrist watch for everyday wear.",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
    category: "Wearables"
  },
  {
    name: "Mobile Back Cover",
    price: 12.99,
    description: "Shockproof mobile back cover with premium finish.",
    image: "https://images.unsplash.com/photo-1601593346740-925612772716",
    category: "Accessories"
  },
  {
    name: "Leather Wallet",
    price: 24.99,
    description: "Premium quality leather wallet with multiple slots.",
    image: "https://images.unsplash.com/photo-1601593346740-925612772716",
    category: "Accessories"
  },
  {
    name: "Fashion Sunglasses",
    price: 19.99,
    description: "UV-protected stylish sunglasses for outdoor use.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    category: "Wearables"
  },
  {
    name: "Laptop Backpack",
    price: 34.99,
    description: "Water-resistant backpack suitable for laptop and travel.",
    image: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f",
    category: "Accessories"
  },
  {
    name: "Gaming Headset",
    price: 69.99,
    description: "Over-ear gaming headset with clear mic and surround sound.",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440",
    category: "Electronics"
  },
  {
    name: "Phone Holder Stand",
    price: 9.99,
    description: "Adjustable mobile phone stand for desk use.",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f",
    category: "Accessories"
  }


    ];

    const Product = require('../models/Product');
    await Product.insertMany(products);

    res.send("Seed products added successfully!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Existing routes AFTER seed
router.get('/', getAllProducts);
router.get('/:id', getProductById);

module.exports = router;
