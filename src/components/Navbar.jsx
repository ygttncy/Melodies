import { Link, NavLink } from "react-router-dom";
import Button from "./common/Button";
import "../styles/components/navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__left">
        {/* Search component buraya entegre edilecek */}
        <input
          type="text"
          className="navbar__search"
          placeholder="Search For Musics, Artists, ..."
        />
      </div>

      <nav className="navbar__center">
        <NavLink to="/about" className="navbar__link">About Us</NavLink>
        <NavLink to="/contact" className="navbar__link">Contact</NavLink>
        <NavLink to="/premium" className="navbar__link">Premium</NavLink>
      </nav>

      <div className="navbar__right">
        <Button variant="outline">Login</Button>
        <Button variant="primary">Sign Up</Button>
      </div>
    </header>
  );
};

export default Navbar;
