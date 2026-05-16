import "./productspage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

import SidebarFilter from "../Components/SidebarFilter";
import { Newsletter } from "../Components/Newsletter.jsx";
import { Link, useLocation } from "react-router-dom";

export const Productspage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const location = useLocation();

  // GRID / LIST VIEW
  const isListView = location.pathname === "/listview";

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:2000/api/products"
        );

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

   
      <div className="products-page">

        {/* SIDEBAR */}
        <div className="sidebar">
          <SidebarFilter />
        </div>

        {/* PRODUCTS CONTENT */}
        <div className="products-content">

          {/* TOPBAR */}
          <div className="products-topbar">

            <div className="items-count">
              {products.length} items in <b>Mobile accessory</b>
            </div>

            <div className="topbar-actions">

              <label className="verified-box">
                <input type="checkbox" />
                Verified only
              </label>

              <select>
                <option>Featured</option>
                <option>Newest</option>
                <option>Low Price</option>
                <option>High Price</option>
              </select>

              {/* VIEW BUTTONS */}
              <div className="view-buttons">

                <Link
                  to="/gridview"
                  className={`view-btn ${!isListView ? "active" : ""}`}
                >
                  ⏹️
                </Link>

                <Link
                  to="/listview"
                  className={`view-btn ${isListView ? "active" : ""}`}
                >
                  ☰
                </Link>

              </div>
            </div>
          </div>

          {/* PRODUCTS SECTION */}
          <div className="products-section">

            {loading ? (
              <p>Loading products...</p>
            ) : products.length === 0 ? (
              <p>No products found</p>
            ) : (
              <>
                {/* GRID / LIST */}
                <div
                  className={
                    isListView ? "products-list" : "products-grid"
                  }
                >
                  {currentProducts.map((product) => (
                    <Link
                      to={`/product/${product._id}`}
                      className="product-link"
                      key={product._id}
                    >
                      <div className="product-card">

                        {/* IMAGE */}
                        <div className="image-box">
                          <img
                            src={product.image}
                            alt={product.name}
                          />
                        </div>

                        {/* INFO */}
                        <div className="product-info">

                          <div className="price">
                            ${product.price}
                          </div>

                          <div className="stars">
                            ⭐⭐⭐⭐☆
                          </div>

                          <h3>{product.name}</h3>

                          {/* LIST VIEW DETAILS */}
                          {isListView && (
                            <div className="list-details">

                              <p className="description">
                                {product.description ||
                                  "Premium quality product with modern design and long lasting durability."}
                              </p>

                              <div className="extra-info">
                                <span className="stock">
                                  In Stock
                                </span>

                                <span className="shipping">
                                  Free Shipping
                                </span>
                              </div>

                            </div>
                          )}

                          {/* BUTTON */}
                          {/* <button
                            onClick={(e) => {
                              e.preventDefault();
                              addToCart(product);
                            }}
                          >
                            Add to Cart
                          </button> */}

                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* PAGINATION */}
                <div className="pagination">

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      className={
                        currentPage === index + 1
                          ? "active-page"
                          : ""
                      }
                      onClick={() =>
                        setCurrentPage(index + 1)
                      }
                    >
                      {index + 1}
                    </button>
                  ))}

                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <Newsletter />
    </>
  );
};

export default Productspage;