import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(
      (item) => item.productId === product._id
    );

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        productId: product._id,
        price: product.price,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart ✅");
  };

  return (
    <div className="product-c">
      <img src={product.image} alt={product.name} />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>

      <div className="card-actions">
        <Link to={`/product/${product._id}`} className="view-btn">
          View Details
        </Link>

        <button onClick={addToCart} className="add-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
