import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Navbar } from "./Components/Navbar";
import { Error } from "./pages/error";
import  Productspage from "./pages/Productspage";


import { Footer } from "./Components/Footer";
import { Logout } from "./pages/Logout";
import { Contact } from "./pages/Contact";
import Profile from "./pages/Profile";
 import ProductDetails from "./pages/ProductDetails";

// 🟢 NEW IMPORTS
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";



const MainLayout = () => (
  <>
    <Navbar />
  
    <Outlet />
    <Footer />
  </>
);

const AuthLayout = () => (
  <>
    <Outlet />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>

        {/* 🔵 Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
         

<Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/propro" element={<Productspage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/logout" element={<Logout />} />
        </Route>

        {/* 🟡 Auth Layout Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* 🔴 Error Page */}
        <Route path="/*" element={<Error />} />

      </Routes>
    </Router>
  );
};

export default App;
