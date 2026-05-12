import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-cont">

        {/* Brand */}
        <div className="footer-column brand-col">
          <div className="brand-box">
            <div className="brand-icon">🛍️</div>
            <h2>Brand</h2>
          </div>

          <p className="tagline">
            Best information about the company goes here but now lorem ipsum is
          </p>

          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* About */}
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Partnership */}
        <div className="footer-column">
          <h3>Partnership</h3>
          <ul>
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Information */}
        <div className="footer-column">
          <h3>Information</h3>
          <ul>
            <li>Help Center</li>
            <li>Money Refund</li>
            <li>Shipping</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Users */}
        <div className="footer-column">
          <h3>For users</h3>
          <ul>
            <li>Login</li>
            <li>Register</li>
            <li>Settings</li>
            <li>My Orders</li>
          </ul>
        </div>

        {/* Get App */}
        <div className="footer-column">
          <h3>Get app</h3>
          <div className="app-buttons">
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Ecommerce. All rights reserved.
      </div>
    </footer>
  );
};