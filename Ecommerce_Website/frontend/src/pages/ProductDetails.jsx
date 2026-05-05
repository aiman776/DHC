import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch single product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get(`/products/${id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // Add to cart function
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item) => item.productId === id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        productId: id,
        name: product.name,
        price: product.price,
        quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Added ${quantity} item(s) to cart!`);
    navigate("/cart"); // redirect to cart
  };

  if (loading) return <div className="loading">Loading product...</div>;
  if (!product) return <div className="error">Product not found!</div>;

  return (
     <div>
     <div className="hero-section-con">
        <h1 className="hero-title-con">Contact Us</h1>
      </div>
    <div className="product-details-page">
      <div className="hero-section-con">
        <h1 className="hero-title-con">Product Details</h1>
      </div>

      <div className="product-details-container">
        <div className="product-image-section">
          <img
            src={product.image || "https://via.placeholder.com/400"}
            alt={product.name}
            className="product-image"
          />
        </div>

        <div className="product-info-section">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>

          <div className="quantity-section">
            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="quantity-input"
            />
          </div>

          <button className="add-to-cart-btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;
