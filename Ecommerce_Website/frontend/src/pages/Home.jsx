import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <>
 
      {/* Hero Section 1 */}
      <div className="hero-section">
        <div className="overlay">
          <h1 className="hero-title">
            Smart Shopping, Better Choices
          </h1>

          <p className="hero-subtitle">
            Discover quality products at the best prices.
            <br />
            Browse, add to cart, and place your order easily with our
            simple and secure shopping experience.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-green">
              Contact For More Detail 
            </Link>

            <Link to="/cart" className="btn btn-dark">
              View Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Products Section */}
{/* <section className="products-section">
  <h2>Our Products</h2>

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
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  )}
</section> */}

{/* About section  */}
    <section class="about-section">
  <div class="about-image">
    <img src="images/abouttttt.png" alt="About Our Store"/>
  </div>

  
  <div class="about-content">
    <h2>About Our Store</h2>

    <p>
      Welcome to <span class="bold">ShopSphere</span>, your one-stop destination for 
      <span class="bold">everything you need</span>. From fashion and electronics 
      to home essentials, beauty products, and more — we bring it all under one roof.
    </p>

    <p>
      Our mission is simple: to provide <span class="bold">high-quality products</span>,
      affordable prices, and a smooth shopping experience for everyone. 
      We carefully select our products to ensure value, durability, and style.
    </p>

    <p>
      With secure payments, fast delivery, and customer-first support, 
      we make online shopping easy, reliable, and enjoyable.
    </p>

    <a href="/propro" class="btn"> Our Products</a>
  </div>
</section>

      {/* Hero Section 2 */}
      <section className="hero">
        <div className="hero-inner-s2">
          <h1 className="hero-title-s2">
            Everything You Need, In One Place
          </h1>

          <p className="hero-sub">
            Explore a wide range of products carefully selected
            to meet your daily needs.  
            From quality items to affordable prices, our store
            makes online shopping fast, easy, and reliable.
            <br />
            <br />
            “Simple shopping, trusted service.”
          </p>

          <Link to="/propro" className="btn btn-green">
            Explore Products
          </Link>
        </div>
      </section>
    </>
  );
};
