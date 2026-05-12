import "./Newsletter.css";

export const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-container">

        <h3>Subscribe on our newsletter</h3>
        <p>
          Get daily news on upcoming offers from many suppliers all over the world
        </p>

        <div className="newsletter-form">
          <input type="email" placeholder="Email" />
          <button>Subscribe</button>
        </div>

      </div>
    </div>
  );
};