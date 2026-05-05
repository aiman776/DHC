const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { orderItems, totalPrice } = req.body;

  try {
    const order = new Order({
      user: req.user._id,
      orderItems,
      totalPrice,
    });

    await order.save();
    res.status(201).json(order);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate('orderItems.product');

    res.json(orders);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ NEW: Cancel Order
exports.cancelOrder = async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = "Cancelled";
    await order.save();

    res.json({ message: "Order cancelled successfully", order });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
