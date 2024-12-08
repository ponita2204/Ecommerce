import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "jquery-nice-select/css/nice-select.css";
import "../css/style.css"; // Ensure the path to `style.css` is correct
import "../css/responsive.css"; // Ensure the path to `responsive.css` is correct
import HeroBg from "../images/hero-bg.jpg";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa"; // Import icons

function Herosection() {
  return (
    <div className="hero_area">
      {/* Background Image */}
      <div className="bg-box">
        <img src={HeroBg} alt="Hero Background" />
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
                <li className="nav-item active">
                  <Link to="/">
                    <a className="nav-link">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/menu">
                    <a className="nav-link">Menu</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about">
                    <a className="nav-link">About</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/booktable">
                    <a className="nav-link" href="book.html">
                      Book Table
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="user_option">
                <Link to="/Account" className="user_link">
                  <FaUser className="icon" />
                </Link>
                <Link to="/cart" className="cart_link" href="#">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </Link>
                <Link to="/search" className="form-inline">
                  <button className="btn nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </Link>
                <Link to="/Order" className="order_online">
                  Order Online
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className="slider_section">
        <div className="container">
          <div
            id="customCarousel1"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <div className="detail-box">
                        <h1>Fast Food Restaurant</h1>
                        <p>
                          Doloremque, itaque aperiam facilis rerum, commodi,
                          temporibus sapiente ad mollitia laborum quam quisquam
                          esse error unde. Tempora ex doloremque, labore, sunt
                          repellat dolore, iste magni quos nihil ducimus libero
                          ipsam.
                        </p>
                        <div className="btn-box">
                          <a href="#" className="btn1">
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <div className="detail-box">
                        <h1>Fast Food Restaurant</h1>
                        <p>
                          Doloremque, itaque aperiam facilis rerum, commodi,
                          temporibus sapiente ad mollitia laborum quam quisquam
                          esse error unde. Tempora ex doloremque, labore, sunt
                          repellat dolore, iste magni quos nihil ducimus libero
                          ipsam.
                        </p>
                        <div className="btn-box">
                          <a href="#" className="btn1">
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <div className="detail-box">
                        <h1>Fast Food Restaurant</h1>
                        <p>
                          Doloremque, itaque aperiam facilis rerum, commodi,
                          temporibus sapiente ad mollitia laborum quam quisquam
                          esse error unde. Tempora ex doloremque, labore, sunt
                          repellat dolore, iste magni quos nihil ducimus libero
                          ipsam.
                        </p>
                        <div className="btn-box">
                          <a href="#" className="btn1">
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicators */}
            <div className="container">
              <ol className="carousel-indicators">
                <li
                  data-bs-target="#customCarousel1"
                  data-bs-slide-to="0"
                  className="active"
                ></li>
                <li data-bs-target="#customCarousel1" data-bs-slide-to="1"></li>
                <li data-bs-target="#customCarousel1" data-bs-slide-to="2"></li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Herosection;
