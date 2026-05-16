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
    description:
      "Experience crystal-clear sound quality with these premium wireless headphones designed for music lovers and gamers alike. The advanced noise cancellation technology helps block unwanted background sounds for an immersive listening experience. Soft cushioned ear cups provide maximum comfort during long usage sessions without causing discomfort. With long-lasting battery backup, you can enjoy uninterrupted entertainment throughout the day. The foldable and lightweight design makes them easy to carry while traveling or commuting. Built-in controls and microphone allow smooth calling and music management with convenience.",
    image:
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    category: "Electronics"
  },

  {
    name: "Bluetooth Earbuds",
    price: 39.99,
    description:
      "These compact Bluetooth earbuds deliver deep bass and balanced audio performance for everyday listening. The ergonomic in-ear design ensures a secure and comfortable fit during workouts, travel, or office use. Equipped with advanced Bluetooth connectivity, they provide stable and fast pairing with smartphones and other devices. The charging case offers extended battery life for all-day music and calling support. Touch controls allow easy management of calls, volume, and tracks without needing your phone. Sweat-resistant material makes them ideal for gym sessions and outdoor activities.",
    image:
      "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
    category: "Electronics"
  },

  {
    name: "Smart Watch",
    price: 79.99,
    description:
      "Stay connected and track your fitness goals with this stylish smart watch featuring multiple health monitoring functions. It includes heart rate tracking, sleep analysis, and daily activity monitoring for a healthier lifestyle. The high-resolution touch display offers a smooth and user-friendly experience with clear visuals. You can receive notifications, calls, and app alerts directly on your wrist for convenience. Its durable and water-resistant build makes it suitable for both workouts and daily use. The modern design perfectly combines technology, comfort, and fashion in one device.",
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    category: "Wearables"
  },

  {
    name: "Men Casual Watch",
    price: 49.99,
    description:
      "This elegant men's casual watch is designed to enhance your everyday style with a modern and sophisticated appearance. The durable strap and premium dial provide a comfortable fit and long-lasting performance for regular use. Its lightweight construction makes it easy to wear throughout the day without discomfort. The classic analog display gives a timeless look suitable for formal and casual outfits alike. Built with quality materials, the watch offers reliable time accuracy and durability. Perfect for office wear, parties, and daily fashion styling.",
    image:
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    category: "Wearables"
  },

  {
    name: "Mobile Back Cover",
    price: 12.99,
    description:
      "Protect your smartphone with this premium quality mobile back cover designed for style and durability. The shockproof material helps safeguard your device from accidental drops, scratches, and daily damage. Its slim and lightweight design maintains the sleek appearance of your phone without adding extra bulk. Precise cutouts ensure easy access to buttons, ports, and camera functions for smooth usability. The textured finish provides a secure grip and modern aesthetic for everyday handling. Suitable for both casual and professional use, this cover combines protection with elegance.",
    image:
      "https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg",
    category: "Accessories"
  },

  {
    name: "Leather Wallet",
    price: 24.99,
    description:
      "This premium leather wallet is crafted with high-quality material for a stylish and elegant appearance. It features multiple card slots and spacious compartments to keep your essentials organized efficiently. The slim and lightweight structure makes it comfortable to carry in your pocket every day. Durable stitching and smooth texture provide long-lasting performance with a luxurious feel. The modern design suits casual, business, and formal outfits perfectly for versatile daily use. Compact yet spacious, this wallet offers convenience, durability, and timeless fashion together.",
    image:
      "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg",
    category: "Accessories"
  },

  {
    name: "Fashion Sunglasses",
    price: 19.99,
    description:
      "Upgrade your outdoor style with these fashionable sunglasses designed for comfort and eye protection. The UV-protected lenses help shield your eyes from harmful sunlight during travel and outdoor activities. Lightweight frames provide a secure and comfortable fit for long hours of wear without irritation. The trendy modern design complements both casual and formal fashion styles effortlessly. Durable construction ensures long-lasting usage while maintaining a premium appearance. Perfect for driving, vacations, beach outings, and everyday fashion accessories.",
    image:
      "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
    category: "Wearables"
  },

  {
    name: "Laptop Backpack",
    price: 34.99,
    description:
      "Carry your essentials safely with this spacious and water-resistant laptop backpack designed for students and professionals. Multiple compartments provide organized storage for laptops, books, accessories, and travel items conveniently. The padded shoulder straps ensure comfortable carrying even during long commutes or travel journeys. Durable material and strong zippers offer reliable performance for everyday use in different environments. Its modern and stylish design makes it suitable for office, college, and casual travel purposes. Lightweight construction allows easy mobility while maintaining maximum storage capacity.",
    image:
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg",
    category: "Accessories"
  },

  {
    name: "Gaming Headset",
    price: 69.99,
    description:
      "Enhance your gaming experience with this high-performance gaming headset featuring immersive surround sound quality. The adjustable microphone delivers crystal-clear voice communication for online gaming and streaming sessions. Soft padded ear cushions provide superior comfort during long gaming hours without causing fatigue. Its durable build quality ensures long-lasting usage while maintaining a stylish gaming look. Noise isolation technology helps reduce distractions and improve focus during intense gameplay moments. Compatible with PCs, consoles, and mobile devices for versatile entertainment and communication.",
    image:
      "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg",
    category: "Electronics"
  },

  {
    name: "Phone Holder Stand",
    price: 9.99,
    description:
      "This adjustable phone holder stand provides a stable and convenient way to use your smartphone hands-free. The flexible viewing angles make it perfect for watching videos, video calls, online classes, and office work. Built with strong and durable materials, it securely holds devices without slipping or shaking during use. Its compact and lightweight design allows easy portability for home, office, or travel usage. Anti-slip padding protects your phone from scratches while ensuring a firm grip. Modern styling and practical functionality make it an essential desk accessory for everyday convenience.",
    image:
      "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg",
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
