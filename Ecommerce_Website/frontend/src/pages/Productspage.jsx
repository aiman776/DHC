import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";


export const Productspage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
    const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:7000/api/products");

        // backend se jo aaye wahi set hoga
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  
  return (
    <div>
      <div className="hero-section-pro">
        <h1 className="hero-title-pro">Our Products</h1>
      </div>
    <section className="products-section">
      <h2>Our Products List</h2>

      {loading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <div className="price">${product.price}</div>
                <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
             
            </div>
          ))}
        </div>
      )}
    </section>
    </div>
  );
};

export default Productspage;
