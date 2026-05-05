import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-cont">
        
        {/* Column 1: Logo + About */}
        <div className="footer-column">
          <h2 className="logo">Eligent Picks </h2>
          <p className="tagline">Everything you need, just a click away.</p>
          <div className="social-icons">
         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-facebook-f"></i>
</a>
<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-twitter"></i>
</a>
<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-instagram"></i>
</a>
<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-linkedin-in"></i>
</a>

          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/propro">Products</a></li>
            <li><a href="/cart">Shopping Charts </a></li>
            <li><a href="/my-orders">Order </a></li>
            <li><a href="/contact">Contact US</a></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
              <li><a href="/profile">Profile </a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/propro">Our products  </a></li>
            <li><a href="/propro">Explore</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-column">
          <h3>Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Elegent Picks. All Rights Reserved.
      </div>
    </footer>
  );
};
