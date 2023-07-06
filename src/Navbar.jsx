import "./index.css";
import { Link } from "react-router-dom";
import BARS from "./assets/bar.png";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuBar = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="nav">
      <div className="left">
        <Link to="/" className="link">
          RealWeather
        </Link>
      </div>
      <div className="right">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/search-location" className="link">
          Check weather
        </Link>
      </div>
      <div className="bars" onClick={toggleMenuBar}>
        <img src={BARS} alt="" />
        {toggleMenu && (
          <div className="mobile-links">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/about" className="link">
              About
            </Link>
            <Link to="/search-location" className="link">
              Check weather
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
