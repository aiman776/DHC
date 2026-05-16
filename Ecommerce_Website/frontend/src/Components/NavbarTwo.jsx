import "./NavbarTwo.css";

const NavbarTwo = () => {
  return (
    <div className="navbar-two">

      <a href="/">Home</a>

      <span className="arrow">›</span>

      <a href="/">Clothings</a>

      <span className="arrow">›</span>

      <a href="/">Men’s wear</a>

      <span className="arrow">›</span>

      <span className="active-page">Summer clothing</span>

    </div>
  );
};

export default NavbarTwo;