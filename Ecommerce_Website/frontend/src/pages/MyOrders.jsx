import './MyOrders.css';
import { useEffect, useState } from 'react';
import API from "../services/api";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await API.get('/orders/my');
        setOrders(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const handleCancel = async (id) => {
    try {
      await API.put(`/orders/cancel/${id}`);

      setOrders(prev =>
        prev.map(order =>
          order._id === id
            ? { ...order, status: "Cancelled" }
            : order
        )
      );
    } catch (err) {
      console.error("Cancel failed:", err);
    }
  };

  if (loading) return <p className="loading">Loading orders...</p>;
  if (orders.length === 0) return <p className="no-orders">You have no orders yet.</p>;

  return (
    <div>
    

      <div className="my-orders-page">
       
        <div className="orders-container">
 <h3> MyOrders </h3><br/>
       {orders.map(order => (
  <div className="order-box" key={order._id}>

    <p><strong>Order ID:</strong> {order._id}</p>

    <p>
      <strong>Status:</strong>
      <span className={`status ${order.status.toLowerCase()}`}>
        {order.status}
      </span>
    </p>

    <p><strong>Total Price:</strong> ${order.totalPrice}</p>
    <p><strong>Items:</strong></p>

    <ul className="order-items-list">
      {order.orderItems?.length > 0 ? (
        order.orderItems.map((item, index) => (
          
          <li key={item.product?._id || index} className="order-item">

            <img
              src={item.product?.image}
              alt={item.product?.name}
              className="order-item-img"
            />

            <div className="order-item-details">
              <p><strong>{item.product?.name || "Product"}</strong></p>
              <p>Qty: {item.quantity}</p>
              <p>${item.price * item.quantity}</p>
            </div>

          </li>

        ))
      ) : (
        <li>No items found</li>
      )}
    </ul>

    {order.status !== "Cancelled" && order.status !== "Completed" && (
      <button
        className="cancel-btn"
        onClick={() => handleCancel(order._id)}
      >
        Cancel Order
      </button>
    )}

  </div>
))}


        </div>
      </div>
    </div>
  );
};

export default MyOrders;
