import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HeroBg from "./components/images/hero-bg.jpg";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa"; // Import icons



const Navbar = () => {

  const [showSearch, setShowSearch] = useState(false); // State to toggle search box
  const toggleSearch = () => {
    setShowSearch(!showSearch); // Toggle the visibility of the search box
  };
  return (
    <div className="hero_area">
      <div className="bg-box">
        <img src={HeroBg} alt="Background" />
      </div>
      {/* Header Section */}
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link className="navbar-brand" to="/">
              <span>Nitaa</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span> </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    exact
                    activeClassName="active"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/menu"
                    activeClassName="active"
                  >
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about"
                    activeClassName="active"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/book"
                    activeClassName="active"
                  >
                    Book Table
                  </Link>
                </li>
              </ul>
              <div className="user_option">
                <Link to="/" className="user_link">
                  <FaUser className="icon" />
                </Link>
                <Link className="cart_link" to="/cart">
                  <FaShoppingCart className="icon" />
                </Link>
                <form className="form-inline">
                  <button className="btn my-2 my-sm-0 nav_search-btn" type="">
                    <FaSearch
                      className="icon search-icon"
                      onClick={toggleSearch}
                    />
                    {showSearch && (
                      <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                      />
                    )}
                  </button>
                </form>
                <Link to="/order-online" className="order_online">
                  Order Online
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
