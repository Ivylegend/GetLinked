import React, { useState } from "react";
import Logo from "../../assets/images/getlinkedlogo.png";
import Menu from "../../assets/images/nav-menu.png";
import Close from "../../assets/images/Vectorcancel.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="app__navbar">
      <div className="nav_logo">
        <Link className="link" to="/">
          <img src={Logo} />
        </Link>
      </div>
      <div className="nav__links">
        <ul>
          <Link to="#timeline" className="link">
            <li>Timeline</li>
          </Link>
          <Link className="link">
            <li>Overview</li>
          </Link>
          <Link to="#faqs" className="link">
            <li>FAQs</li>
          </Link>
          <Link className="link" to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
        <Link className="link" to="/register">
          <button
            onClick={handleClick}
            className={`gradient btn ${clicked ? "clicked" : ""}`}
          >
            Register
          </button>
        </Link>
      </div>

      {/* Mobile Menu  */}
      <div className="app-mobile-menu">
        <img
          className="menu"
          src={Menu}
          onClick={() => settoggle((prev) => !prev)}
        />
        {toggle && (
          <div className="mobile-menu slide-bottom slide-top">
            <img src={Close} onClick={() => settoggle((prev) => !prev)} />
            <ul>
              <Link to="#timeline" className="link">
                <li onClick={() => settoggle((prev) => !prev)}>Timeline</li>
              </Link>
              <Link className="link">
                <li onClick={() => settoggle((prev) => !prev)}>Overview</li>
              </Link>
              <Link to="#faqs" className="link">
                <li onClick={() => settoggle((prev) => !prev)}>FAQs</li>
              </Link>
              <Link className="link" to="/contact">
                <li onClick={() => settoggle((prev) => !prev)}>Contact</li>
              </Link>
            </ul>
            <Link className="link" to="/register">
              <button
                onClick={() => settoggle((prev) => !prev)}
                className="gradient btn"
              >
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
