import './checkout.css';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Checkout = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);

    const totalPrice = storedCart.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0
    );
    setTotal(totalPrice);
  }, []);

  // ✅ FIXED FUNCTION
  const handleConfirmOrder = async () => {
    try {
      if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }

      const orderData = {
        orderItems: cart.map(item => ({
          product: item.productId,
          quantity: item.quantity,
          price: item.price,
        })),
        totalPrice: total
      };

      await API.post("/orders", orderData);

      alert("Order placed successfully!");

      // ✅ correct key
      localStorage.removeItem("cart");
      setCart([]);
      setTotal(0);

      navigate("/my-orders");

    } catch (error) {
      console.error(error);
      alert("Failed to place order.");
    }
  };

  if (cart.length === 0)
    return <p className="empty-cart">Your cart is empty!</p>;

  return (
    <div className="checkout-page">
      <div className="hero-section-check">
        <h1 className="hero-title-check">Checkout</h1>
      </div>

      <div className="checkout-container">
        <h2>Order Summary</h2>

        <div className="checkout-items">
          {cart.map(item => (
            <div key={item.productId} className="checkout-item">
              <img
                src={item.image}
                alt={item.name}
                className="checkout-product-img"
              />
              <p><strong>{item.name}</strong></p>
              <p>Qty: {item.quantity}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
          ))}
        </div>

        <div className="checkout-summary">
          <h2>Total: ${total}</h2>

          <button
            className="confirm-order-btn"
            onClick={handleConfirmOrder}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
