const express = require('express');
const {
  createOrder,
  getMyOrders,
  cancelOrder   // ✅ Added
} = require('../controllers/orderController');

const { authMiddleware } = require('../middlewares/auth-middleware');

const router = express.Router();

router.post('/', authMiddleware, createOrder);
router.get('/my', authMiddleware, getMyOrders);

// ✅ NEW Cancel Route
router.put('/cancel/:id', authMiddleware, cancelOrder);

module.exports = router;
