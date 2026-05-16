import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { useState } from "react";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      {/* TOP NAVBAR */}
      <div className="navbarcontainer">

    {/* LOGO */}
<div className="logo-brand">
  <NavLink to="/" className="logo-link">
    
    <img
      src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
      alt="Logo"
    />

    <h2>Brand</h2>

  </NavLink>
</div>

        {/* SEARCH BAR */}
        <div className="search-box">
          <input type="text" placeholder="Search" />

          <select>
            <option>All category</option>
          </select>

          <button>Search</button>
        </div>

        {/* RIGHT ICONS */}
        <ul className="nav-icons">

          <li>
            <NavLink to="/" className="icon-box">
              <i className="fa-solid fa-house"></i>
              <span>Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/propro" className="icon-box">
              <i className="fa-solid fa-box-open"></i>
              <span>Products</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="icon-box">
              <i className="fa-regular fa-message"></i>
              <span>Message</span>
            </NavLink>
          </li>

          {isLoggedIn ? (

            <>
             <li>
                <NavLink to="/profile" className="icon-box">
                  <i className="fa-regular fa-user"></i>
                  <span>Profile</span>
                </NavLink>
              </li>
                 <li>
                <NavLink to="/orders" className="icon-box">
                  <i className="fa-solid fa-bag-shopping"></i>
                  <span>Orders</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="icon-box">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>Cart</span>
                </NavLink>
              </li>

           

             
            </>
          ) : (
            <li>
              <NavLink to="/login" className="icon-box">
                <i className="fa-solid fa-right-to-bracket"></i>
                <span>Login</span>
              </NavLink>
            </li>
          )}

        </ul>

        {/* MOBILE MENU BUTTON */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

      </div>

      {/* SECOND NAVBAR */}
      <div className="bottom-navbar">

        <div className="bottom-container">

          <div className="bottom-left">

            <NavLink to="/">☰ All category</NavLink>

            <NavLink to="/offers">
              Hot offers
            </NavLink>

            <NavLink to="/gift">
              Gift boxes
            </NavLink>

            <NavLink to="/projects">
              Projects
            </NavLink>

            <NavLink to="/menu">
              Menu item
            </NavLink>

            <NavLink to="/help">
              Help ▾
            </NavLink>

          </div>

          <div className="bottom-right">
            <span>English, USD ▾</span>
            <span>Ship to ▾</span>
          </div>

        </div>

      </div>
      {/* MOBILE DROPDOWN MENU */}
{menuOpen && (
  <ul className="mobile-menu">
    
    <li>
      <NavLink to="/" onClick={() => setMenuOpen(false)}>
        Home
      </NavLink>
    </li>

    <li>
      <NavLink to="/propro" onClick={() => setMenuOpen(false)}>
        Products
      </NavLink>
    </li>

    <li>
      <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
        Message
      </NavLink>
    </li>

    {isLoggedIn && (
      <>
        <li>
          <NavLink to="/orders" onClick={() => setMenuOpen(false)}>
            Orders
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile" onClick={() => setMenuOpen(false)}>
            Profile
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
            Cart
          </NavLink>
        </li>
      </>
    )}

    {!isLoggedIn && (
      <li>
        <NavLink to="/login" onClick={() => setMenuOpen(false)}>
          Login
        </NavLink>
      </li>
    )}

  </ul>
)}

    </header>
  );
};