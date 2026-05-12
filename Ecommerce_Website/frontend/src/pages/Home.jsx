import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Newsletter } from "../components/Newsletter";
import axios from "axios";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:2000/api/products");

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
 

<section className="home-hero">

  {/* LEFT SIDEBAR */}
  <div className="hero-left">
    <ul>
      <li>Automobiles</li>
      <li>Clothes and wear</li>
      <li>Home interiors</li>
      <li>Computer and tech</li>
      <li>Tools, equipments</li>
      <li>Sports and outdoor</li>
      <li>Animal and pets</li>
      <li>Machinery tools</li>
      <li>More category</li>
    </ul>
  </div>

  {/* CENTER BANNER */}
  <div className="hero-center">
    <div className="hero-content">
      <p>Latest trending</p>
      <h2>Electronic items</h2>
      <button>Learn more</button>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="hero-right">

    <div className="user-card">
      <p>Hi, user<br />let’s get started</p>
      <button className="join">Join now</button>
      <button className="login">Log in</button>
    </div>

    <div className="promo-card blue">
      <p>Get US $10 off with a new supplier</p>
    </div>

    <div className="promo-card orange">
      <p>Send quotes with supplier preferences</p>
    </div>

  </div>

</section>


<section className="deals">

  {/* LEFT SIDE */}
  <div className="deals-left">
    <h3>Deals and offers</h3>
    <p>Electronic equipments</p>

    <div className="timer">
      <div><span>04</span><p>Days</p></div>
      <div><span>13</span><p>Hour</p></div>
      <div><span>34</span><p>Min</p></div>
      <div><span>56</span><p>Sec</p></div>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="deals-right">

    {/* Smart Watches */}
    <div className="deal-card">
     <img src="/Image/tech/8.jpg" alt="Smart watch" />
      <p>Smart Watches</p>
      <span className="discount">-25%</span>
    </div>

    {/* Laptops */}
    <div className="deal-card">
     <img src="/Image/tech/7.jpg" alt="Smart watch" />
      <p>Laptops</p>
      <span className="discount">-15%</span>
    </div>

    {/* GoPro Cameras */}
    <div className="deal-card">
     <img src="/Image/tech/6.jpg" alt="Smart watch" />
      <p>GoPro cameras</p>
      <span className="discount">-40%</span>
    </div>

    {/* Headphones */}
    <div className="deal-card">
      <img src="/Image/tech/5.jpg" alt="Smart watch" />
      <p>Headphones</p>
      <span className="discount">-25%</span>
    </div>

    {/* Canon Cameras */}
    <div className="deal-card">
    <img src="/Image/tech/4.jpg" alt="Smart watch" />
      <p>Canon cameras</p>
      <span className="discount">-25%</span>
    </div>

  </div>

</section>
<section className="home-outdoor">

  {/* LEFT SIDE */}
  <div className="outdoor-left">
    <h3>Home and outdoor</h3>
    <button>Source now</button>
  </div>

  {/* RIGHT SIDE */}
  <div className="outdoor-right">

    <div className="outdoor-card">
      <p>Soft chairs</p>
      <span>From<br />USD 19</span>
     <img src="/Image/interior/1.jpg" alt="Smart watch" />
    </div>

    <div className="outdoor-card">
      <p>Sofa & chair</p>
      <span>From<br />USD 19</span>
     <img src="/Image/interior/6.jpg" alt="Smart watch" />
    </div>

    <div className="outdoor-card">
      <p>Kitchen dishes</p>
      <span>From<br />USD 19</span>
     <img src="/Image/interior/5.jpg" alt="Smart watch" />
    </div>

    <div className="outdoor-card">
      <p>Smart watches</p>
      <span>From<br />USD 19</span>
      <img src="/Image/interior/3.jpg" alt="Smart watch" />
    </div>

    <div className="outdoor-card">
      <p>Kitchen mixer</p>
      <span>From<br />USD 100</span>
     <img src="/Image/interior/9.jpg" alt="Smart watch" />
    </div>

    <div className="outdoor-card">
      <p>Blenders</p>
      <span>From<br />USD 39</span>
    <img src="/Image/interior/8.jpg" alt="Smart watch" />
    </div>

    <div className="outdoor-card">
      <p>Home appliance</p>
      <span>From<br />USD 19</span>
     <img src="/Image/interior/7.jpg" alt="Smart watch" />
    </div>

    <div className="outdoor-card">
      <p>Coffee maker</p>
      <span>From<br />USD 10</span>
      <img src="/Image/interior/4.jpg" alt="Smart watch" />
    </div>

  </div>

</section>

<section className="electronics">

  {/* LEFT SIDE */}
  <div className="electronics-left">
    <h3>Consumer electronics and gadgets</h3>
    <button>Source now</button>
  </div>

  {/* RIGHT SIDE */}
  <div className="electronics-right">

    <div className="electronics-card">
      <p>Smart watches</p>
      <span>From<br />USD 19</span>
  <img src="/Image/tech/8.jpg" alt="Smart watch" />
    </div>

    <div className="electronics-card">
      <p>Cameras</p>
      <span>From<br />USD 89</span>
      <img src="/Image/tech/6.jpg" alt="cameras" />
    </div>

    <div className="electronics-card">
      <p>Headphones</p>
      <span>From<br />USD 10</span>
       <img src="/Image/tech/9.jpg" alt="headphone" />
    </div>

    <div className="electronics-card">
      <p>Smart watches</p>
      <span>From<br />USD 90</span>
       <img src="/Image/tech/10.jpg" alt="Smart watch" />
    </div>

    <div className="electronics-card">
      <p>Gaming set</p>
      <span>From<br />USD 35</span>
        <img src="/Image/tech/5.jpg" alt="gaming set" />
    </div>

    <div className="electronics-card">
      <p>Laptops & PC</p>
      <span>From<br />USD 340</span>
       <img src="/Image/tech/7.jpg" alt="laptop" />
    </div>

    <div className="electronics-card">
      <p>Smartphones</p>
      <span>From<br />USD 19</span>
       <img src="/Image/tech/3.jpg" alt="smartphone" />
    </div>

    <div className="electronics-card">
      <p>Electric kettle</p>
      <span>From<br />USD 240</span>
    <img src="/Image/tech/1.jpg" alt="Electric" />
    </div>

  </div>

</section>

<section className="inquiry">

  <div className="inquiry-container">

    {/* LEFT TEXT */}
    <div className="inquiry-left">
      <h2>An easy way to send requests to all suppliers</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt.
      </p>
    </div>

    {/* RIGHT FORM */}
    <div className="inquiry-form-box">
      <h4>Send quote to suppliers</h4>

      <form>
        <input type="text" placeholder="What item you need?" />

        <textarea placeholder="Type more details"></textarea>

        <div className="form-row">
          <input type="number" placeholder="Quantity" />

          <select>
            <option>Pcs</option>
            <option>Kg</option>
            <option>Boxes</option>
          </select>
        </div>

        <button type="submit">Send inquiry</button>
      </form>
    </div>

  </div>

</section>

<section className="products">

  <h3 className="products-title">Recommended items</h3>

  <div className="products-grid">

    {/* CARD 1 */}
    <div className="product-card">
     <img src="/Image/cloth/1.jpg" alt="Smart watch" />
      <h4>$10.30</h4>
      <p>T-shirts with multiple colors, for men</p>
    </div>

    {/* CARD 2 */}
    <div className="product-card">
   <img src="/Image/cloth/3.jpg" alt="Smart watch" />
      <h4>$10.30</h4>
      <p>Jeans shorts for men blue color</p>
    </div>

    {/* CARD 3 */}
    <div className="product-card">
     <img src="/Image/cloth/7.jpg" alt="Smart watch" />
      <h4>$12.50</h4>
      <p>Brown winter coat medium size</p>
    </div>

    {/* CARD 4 */}
    <div className="product-card">
     <img src="/Image/cloth/6.jpg" alt="Smart watch" />
      <h4>$34.00</h4>
      <p>Jeans bag for travel for men</p>
    </div>

    {/* CARD 5 */}
    <div className="product-card">
     <img src="/Image/cloth/5.jpg" alt="Smart watch" />
      <h4>$99.00</h4>
      <p>Leather wallet</p>
    </div>

    {/* CARD 6 */}
    <div className="product-card">
    <img src="/Image/cloth/4.jpg" alt="Smart watch" />
      <h4>$9.99</h4>
      <p>Canon camera black, 100x zoom</p>
    </div>

    {/* CARD 7 */}
    <div className="product-card">
     <img src="/Image/tech/9.jpg" alt="Smart watch" />
      <h4>$8.99</h4>
      <p>Headset for gaming with mic</p>
    </div>

    {/* CARD 8 */}
    <div className="product-card">
    <img src="/Image/cloth/5.jpg" alt="Smart watch" />
      <h4>$10.30</h4>
      <p>Smartwatch silver color modern</p>
    </div>

    {/* CARD 9 */}
    <div className="product-card">
     <img src="/Image/interior/3.jpg" alt="Smart watch" />
      <h4>$10.30</h4>
      <p>Blue wallet for men leather material</p>
    </div>

    {/* CARD 10 */}
    <div className="product-card">
     <img src="/Image/tech/10.jpg" alt="Smart watch" />
      <h4>$80.95</h4>
      <p>Electric kettle for travel</p>
    </div>

  </div>

</section>

<section className="services">
  <h3>Our Services</h3>

  <div className="services-grid">

    {/* Source from Industry Hubs */}
    <div className="service-card">
      <div className="service-img">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
          alt="Industry sourcing"
        />
        <div className="service-icon">🔍</div>
      </div>
      <p>Source from Industry Hubs</p>
    </div>

    {/* Customize Products */}
    <div className="service-card">
      <div className="service-img">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800&auto=format&fit=crop"
          alt="Customized products"
        />
        <div className="service-icon">🛡️</div>
      </div>
      <p>Customize Your Products</p>
    </div>

    {/* Shipping */}
    <div className="service-card">
      <div className="service-img">
        <img
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=800&auto=format&fit=crop"
          alt="Shipping service"
        />
        <div className="service-icon">🚚</div>
      </div>
      <p>Fast & Reliable Shipping</p>
    </div>

    {/* Product Monitoring */}
    <div className="service-card">
      <div className="service-img">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
          alt="Product monitoring"
        />
        <div className="service-icon">📊</div>
      </div>
      <p>Product Monitoring</p>
    </div>

  </div>
</section>


     <section className="suppliers">
  <h3>Suppliers by region</h3>

  <div className="suppliers-grid">

    <div className="supplier-card">
      <img src="https://flagcdn.com/w40/ae.png" className="flag-img" />
      <div>
        <p className="country">Arabic Emirates</p>
        <p className="site">shopname.ae</p>
      </div>
    </div>

    <div className="supplier-card">
      <img src="https://flagcdn.com/w40/au.png" className="flag-img" />
      <div>
        <p className="country">Australia</p>
        <p className="site">shopname.au</p>
      </div>
    </div>

    <div className="supplier-card">
      <img src="https://flagcdn.com/w40/us.png" className="flag-img" />
      <div>
        <p className="country">United States</p>
        <p className="site">shopname.us</p>
      </div>
    </div>

    <div className="supplier-card">
      <img src="https://flagcdn.com/w40/ru.png" className="flag-img" />
      <div>
        <p className="country">Russia</p>
        <p className="site">shopname.ru</p>
      </div>
    </div>

    <div className="supplier-card">
      <img src="https://flagcdn.com/w40/it.png" className="flag-img" />
      <div>
        <p className="country">Italy</p>
        <p className="site">shopname.it</p>
      </div>
    </div>

    <div className="supplier-card">
      <img src="https://flagcdn.com/w40/dk.png" className="flag-img" />
      <div>
        <p className="country">Denmark</p>
        <p className="site">shopname.dk</p>
      </div>
    </div>

    <div className="supplier-card">
      <img src="https://flagcdn.com/w40/fr.png" className="flag-img" />
      <div>
        <p className="country">France</p>
        <p className="site">shopname.fr</p>
      </div>
    </div>

    <div className="supplier-card">
      <img src="https://flagcdn.com/w40/cn.png" className="flag-img" />
      <div>
        <p className="country">China</p>
        <p className="site">shopname.cn</p>
      </div>
    </div>

    <div className="supplier-card">
      <img src="https://flagcdn.com/w40/gb.png" className="flag-img" />
      <div>
        <p className="country">Great Britain</p>
        <p className="site">shopname.uk</p>
      </div>
    </div>

  </div>
</section>

      <Newsletter />

     
    </>
  );
};
