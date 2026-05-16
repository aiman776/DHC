import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import API from "../services/api";
import { useCart } from "../context/CartContext.jsx";

const savedItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=400&q=80",
    price: 99.5,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    price: 99.5,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    price: 99.5,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80",
    price: 99.5,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
];

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    resetDemoCart,
  } = useCart();

  // SAVE CART
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // TOTALS
  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + Number(item.price) * Number(item.quantity),
    0
  );

  const discount = subtotal > 100 ? 60 : 0;

  const tax = cartItems.length > 0 ? 14 : 0;

  const totalPrice = subtotal - discount + tax;

  // PRODUCT IMAGE
  const getProductImage = (item) =>
    item.image ||
    item.thumbnail ||
    item.img ||
    item.photo ||
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80";

  // PRODUCT NAME
  const getProductName = (item) =>
    item.name ||
    item.title ||
    item.productName ||
    "Product name";

  // CONFIRM ORDER
  const handleConfirmOrder = async () => {
    try {

      if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
      }

      // ORDER DATA
      const orderData = {
        orderItems: cartItems.map((item) => ({
          product: item.productId,
          quantity: item.quantity,
          price: item.price,
        })),

        totalPrice,
      };

      // API REQUEST
      const response = await API.post(
        "/orders",
        orderData
      );

      console.log(response.data);

      alert("Order placed successfully!");

      // CLEAR CART
      clearCart();

      // REDIRECT
      navigate("/orders");

    } catch (error) {

      console.log(error);

      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      }

      alert("Failed to place order.");
    }
  };

  return (
    <main className="cart-wrapper">

      <section className="cart-page">

        {/* LEFT SIDE */}
        <div className="cart-left-column">

          <h2 className="cart-title">
            My cart ({cartItems.length})
          </h2>

          {cartItems.length === 0 ? (

            <div className="empty-cart-box">

              <h3>Your cart is empty</h3>

              <p>
                Add some products to see them here.
              </p>

              <div className="empty-actions">

                <button
                  className="back-btn"
                  onClick={() => navigate("/")}
                >
                  ← Back to shop
                </button>

                <button
                  className="remove-all-btn"
                  onClick={resetDemoCart}
                >
                  Load demo cart
                </button>

              </div>
            </div>

          ) : (

            <div className="cart-items-box">

              {cartItems.map((item) => (

                <div
                  className="cart-item"
                  key={item.productId}
                >

                  {/* LEFT */}
                  <div className="cart-item-left">

                    <img
                      src={getProductImage(item)}
                      alt={getProductName(item)}
                    />

                    <div className="item-details">

                      <h3>
                        {getProductName(item)}
                      </h3>

                      <p>
                        Size: {item.size || "medium"},
                        Color: {item.color || "blue"},
                        Material: {item.material || "Plastic"}
                      </p>

                      <p>
                        Seller: {item.seller || "Artel Market"}
                      </p>

                      <div className="item-buttons">

                        <button
                          className="remove-btn"
                          onClick={() =>
                            removeFromCart(item.productId)
                          }
                        >
                          Remove
                        </button>

                        <button className="save-btn">
                          Save for later
                        </button>

                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="cart-right">

                    <p className="item-price">
                      ${Number(item.price).toFixed(2)}
                    </p>

                    <select
                      className="qty-select"
                      value={item.quantity}
                      onChange={(event) =>
                        updateQuantity(
                          item.productId,
                          Number(event.target.value)
                        )
                      }
                    >

                      {[1,2,3,4,5,6,7,8,9,10].map((qty) => (
                        <option
                          key={qty}
                          value={qty}
                        >
                          Qty: {qty}
                        </option>
                      ))}

                    </select>

                  </div>
                </div>
              ))}

              {/* BOTTOM */}
              <div className="cart-bottom">

                <button
                  className="back-btn"
                  onClick={() => navigate("/")}
                >
                  ← Back to shop
                </button>

                <button
                  className="remove-all-btn"
                  onClick={clearCart}
                >
                  Remove all
                </button>

              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        {cartItems.length > 0 && (

          <aside className="cart-right-column">

            {/* COUPON */}
            <div className="coupon-box">

              <p>Have a coupon?</p>

              <div className="coupon-input-row">

                <input
                  type="text"
                  placeholder="Add coupon"
                />

                <button className="apply-btn">
                  Apply
                </button>

              </div>
            </div>

            {/* SUMMARY */}
            <div className="cart-summary">

              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Discount:</span>

                <span className="discount">
                  - ${discount.toFixed(2)}
                </span>
              </div>

              <div className="summary-row">
                <span>Tax:</span>

                <span className="tax">
                  + ${tax.toFixed(2)}
                </span>
              </div>

              <hr />

              <div className="total-row">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              {/* CHECKOUT BUTTON */}
              <button
                className="checkout-btn"
                onClick={handleConfirmOrder}
              >
                Checkout
              </button>

              <div className="payment-icons">
                <span>💳</span>
                <span>🟠</span>
                <span>🅿️</span>
                <span>💰</span>
              </div>

            </div>
          </aside>
        )}
      </section>

      {/* EXTRA */}
      {cartItems.length > 0 && (

        <section className="cart-extra">

          {/* BADGES */}
          <div className="trust-badges">

            <div className="badge-item">
              <div className="badge-icon">🔒</div>

              <div>
                <h4>Secure payment</h4>
                <p>Have you ever finally just</p>
              </div>
            </div>

            <div className="badge-item">
              <div className="badge-icon">💬</div>

              <div>
                <h4>Customer support</h4>
                <p>Have you ever finally just</p>
              </div>
            </div>

            <div className="badge-item">
              <div className="badge-icon">🚚</div>

              <div>
                <h4>Free delivery</h4>
                <p>Have you ever finally just</p>
              </div>
            </div>

          </div>

          {/* SAVED ITEMS */}
          <div className="saved-later">

            <h3>Saved for later</h3>

            <div className="saved-grid">

              {savedItems.map((item) => (

                <div
                  className="saved-card"
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="saved-card-info">

                    <p className="saved-price">
                      ${item.price.toFixed(2)}
                    </p>

                    <p className="saved-name">
                      {item.name}
                    </p>

                    <button className="move-to-cart-btn">
                      🛒 Move to cart
                    </button>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PROMO */}
          <div className="promo-banner">

            <div>
              <h3>
                Super discount on more than 100 USD
              </h3>

              <p>
                Have you ever finally just write dummy info
              </p>
            </div>

            <button
              className="shop-now-btn"
              onClick={() => navigate("/")}
            >
              Shop now
            </button>

          </div>
        </section>
      )}
    </main>
  );
};

export default Cart;