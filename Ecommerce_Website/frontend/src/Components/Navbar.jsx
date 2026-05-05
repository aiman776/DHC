import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { useState } from "react";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        {/* Logo */}
        <div className="logo-brand">
          <NavLink to="/">
            <img src="/images/logo2.png" alt="Logo" />
          </NavLink>
        </div>

        {/* Hamburger / Close Button */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

        {/* Navigation Drawer */}
        <nav className={menuOpen ? "nav-drawer open" : "nav-drawer"}>
          <ul onClick={() => setMenuOpen(false)}>
            {/* Common */}
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
                <li>
              <NavLink to="/propro"> Our Products </NavLink>
            </li>
            <li>
              <NavLink to="/cart"> Shopping Cart</NavLink>
            </li>
              <li><NavLink to="/contact">Contact us </NavLink></li>

            {/* Logged In User */}
            {isLoggedIn ? (
              <>
                <li>
                  <NavLink to="/my-orders">My Orders</NavLink>
                </li>

               <li><NavLink to="/profile">Profile</NavLink></li>

              </>
            ) : (
              /* Not Logged In */
              <li>
                <NavLink to="/login">SignUp / Login</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
