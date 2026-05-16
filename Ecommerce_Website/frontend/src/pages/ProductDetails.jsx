import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import { useCart } from "../context/CartContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [activeTab, setActiveTab] = useState("description");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get(`/products/${id}`);
        setProduct(res.data);

        const firstImage =
          res.data?.images?.[0] ||
          res.data?.image ||
          "https://via.placeholder.com/500x500?text=Product";

        setSelectedImage(firstImage);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const galleryImages = useMemo(() => {
    if (!product) return [];

    const images = product.images?.length
      ? product.images
      : [
          product.image || "https://via.placeholder.com/500x500?text=Product",
          product.image || "https://via.placeholder.com/500x500?text=Product",
          product.image || "https://via.placeholder.com/500x500?text=Product",
          product.image || "https://via.placeholder.com/500x500?text=Product",
          product.image || "https://via.placeholder.com/500x500?text=Product",
          product.image || "https://via.placeholder.com/500x500?text=Product",
        ];

    return images.slice(0, 6);
  }, [product]);

  const relatedProducts = [
    {
      name: "Xiaomi Redmi 8 Original",
      price: "$32.00-$40.00",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=300",
    },
    {
      name: "Smart Watch Silver",
      price: "$32.00-$40.00",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
    },
    {
      name: "Wireless Headphones",
      price: "$32.00-$40.00",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
    },
    {
      name: "Men Denim Shorts",
      price: "$32.00-$40.00",
      image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300",
    },
    {
      name: "Electric Kettle Black",
      price: "$32.00-$40.00",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300",
    },
    {
      name: "Wooden File Holder",
      price: "$32.00-$40.00",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=300",
    },
  ];

  const youMayLike = [
    {
      name: "Men Blazers Sets Elegant Formal",
      price: "$7.00 - $99.50",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=120",
    },
    {
      name: "Men Shirt Sleeve Polo Contrast",
      price: "$7.00 - $99.50",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=120",
    },
    {
      name: "Apple Watch Series Space Gray",
      price: "$7.00 - $99.50",
      image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=120",
    },
    {
      name: "Basketball Crew Socks Long Stuff",
      price: "$7.00 - $99.50",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=120",
    },
    {
      name: "New Summer Men's casual T-Shirts",
      price: "$7.00 - $99.50",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=120",
    },
  ];

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  if (loading) {
    return <div className="product-loading">Loading product...</div>;
  }

  if (!product) {
    return <div className="product-error">Product not found!</div>;
  }

  return (
    <div className="details-page">
         
      <main className="details-wrapper">
       

       {/* Product Main Card */}
        <section className="product-main-card">
          <div className="gallery-section">
            <div className="main-image-box">
              <img src={selectedImage} alt={product.name} />
            </div>

            <div className="thumb-list">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  className={`thumb-item ${selectedImage === img ? "active" : ""}`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="product-center-info">
            <div className="stock-status">✓ In stock</div>

            <h1>{product.name || "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle"}</h1>

            <div className="rating-row">
              <span className="stars">★★★★★</span>
              <span className="rating">{product.rating || "9.3"}</span>
              <span className="dot">•</span>
              <span>💬 {product.reviews || 32} reviews</span>
              <span className="dot">•</span>
              <span>🧺 {product.sold || 154} sold</span>
            </div>

            <div className="price-box">
              <div className="price-tier first">
                <strong>${product.price || "98.00"}</strong>
                <span>50-100 pcs</span>
              </div>
              <div className="price-tier">
                <strong>$90.00</strong>
                <span>100-700 pcs</span>
              </div>
              <div className="price-tier">
                <strong>$78.00</strong>
                <span>700+ pcs</span>
              </div>
            </div>

            <div className="info-table">
              <div>
                <span>Price:</span>
                <p>Negotiable</p>
              </div>
              <div>
                <span>Type:</span>
                <p>{product.type || "Classic shoes"}</p>
              </div>
              <div>
                <span>Material:</span>
                <p>{product.material || "Plastic material"}</p>
              </div>
              <div>
                <span>Design:</span>
                <p>{product.design || "Modern nice"}</p>
              </div>
              <div>
                <span>Customization:</span>
                <p>Customized logo and design custom packages</p>
              </div>
              <div>
                <span>Protection:</span>
                <p>Refund Policy</p>
              </div>
              <div>
                <span>Warranty:</span>
                <p>2 years full warranty</p>
              </div>
            </div>
          </div>

          <aside className="suppliercards">
            <div className="suppliertop">
              <div className="supplier-avatar">R</div>
              <div>
                <span>Supplier</span>
                <strong>Guanjoi Trading LLC</strong>
              </div>
            </div>

            <div className="suppliersdetails">
              <p>🇩🇪 Germany, Berlin</p>
              <p>🛡 Verified Seller</p>
              <p>🌐 Worldwide shipping</p>
            </div>

            <button className="primary-btn">Send inquiry</button>
            <button className="outline-btn" onClick={handleAddToCart}>
              Add to cart
            </button>

            <button className="save-btn">♡ Save for later</button>
          </aside>
        </section>

        {/* Details and Sidebar */}
        <section className="content-grid">
          <div className="description-card">
            <div className="tabs">
              {["description", "reviews", "shipping", "seller"].map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "description"
                    ? "Description"
                    : tab === "reviews"
                    ? "Reviews"
                    : tab === "shipping"
                    ? "Shipping"
                    : "About seller"}
                </button>
              ))}
            </div>

            <div className="tab-content">
              {activeTab === "description" && (
                <>
                  <p>
                    {product.description ||
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                  </p>

                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                  </p>

                  <table className="spec-table">
                    <tbody>
                      <tr>
                        <td>Model</td>
                        <td>#8786867</td>
                      </tr>
                      <tr>
                        <td>Style</td>
                        <td>Classic style</td>
                      </tr>
                      <tr>
                        <td>Certificate</td>
                        <td>ISO-898921212</td>
                      </tr>
                      <tr>
                        <td>Size</td>
                        <td>34mm x 450mm x 19mm</td>
                      </tr>
                      <tr>
                        <td>Memory</td>
                        <td>36GB RAM</td>
                      </tr>
                    </tbody>
                  </table>

                  <ul className="feature-list">
                    <li>Some great feature name here</li>
                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                    <li>Duis aute irure dolor in reprehenderit</li>
                    <li>Some great feature name here</li>
                  </ul>
                </>
              )}

              {activeTab === "reviews" && (
                <p>Customer reviews will appear here.</p>
              )}

              {activeTab === "shipping" && (
                <p>
                  Worldwide shipping available. Delivery time depends on supplier and
                  destination country.
                </p>
              )}

              {activeTab === "seller" && (
                <p>
                  Guanjoi Trading LLC is a verified supplier based in Germany,
                  Berlin.
                </p>
              )}
            </div>
          </div>

          <aside className="like-card">
            <h3>You may like</h3>

            {youMayLike.map((item, index) => (
              <div className="like-item" key={index}>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <span>{item.price}</span>
                </div>
              </div>
            ))}
          </aside>
        </section>

        {/* Related Products */}
        <section className="related-card">
          <h2>Related products</h2>

          <div className="related-grid">
            {relatedProducts.map((item, index) => (
              <div className="related-item" key={index}>
                <div className="related-img-box">
                  <img src={item.image} alt={item.name} />
                </div>
                <p>{item.name}</p>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Discount Banner */}
        <section className="discount-banner">
          <div>
            <h2>Super discount on more than 100 USD</h2>
            <p>Have you ever finally just write dummy info</p>
          </div>
          <button>Shop now</button>
        </section>
      </main>

   
    </div>
  );
};

export default ProductDetails;