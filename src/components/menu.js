import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "jquery-nice-select/css/nice-select.css";
import "./css/style.css"; // Ensure the path to `style.css` is correct
import "./css/responsive.css"; // Ensure the path to `responsive.css` is correct
import Navbar from "../navbar";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch menu items from Fake Store API
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        setMenuItems(data); // Save data to state
        setLoading(false);
      } catch (err) {
        console.error("Error fetching menu items:", err);
        setError("Failed to load menu items. Please try again later.");
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Filtered menu items based on category
  const filteredMenu =
    filter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category.includes(filter));

  return (
    <div className="sub_page">
      <Navbar />

      {/* Food Section */}
      <section className="food_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>

          {/* Filters */}
          <ul className="filters_menu">
            <li
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </li>
            <li
              className={filter === "electronics" ? "active" : ""}
              onClick={() => setFilter("electronics")}
            >
              Electronics
            </li>
            <li
              className={filter === "jewelery" ? "active" : ""}
              onClick={() => setFilter("jewelery")}
            >
              Jewelery
            </li>
            <li
              className={filter === "men's clothing" ? "active" : ""}
              onClick={() => setFilter("men's clothing")}
            >
              Men's Clothing
            </li>
            <li
              className={filter === "women's clothing" ? "active" : ""}
              onClick={() => setFilter("women's clothing")}
            >
              Women's Clothing
            </li>
          </ul>

          {/* Display Items */}
          <div className="filters-content">
            <div className="row grid">
              {loading && <p>Loading menu items...</p>}
              {error && <p className="error-message">{error}</p>}
              {!loading &&
                !error &&
                filteredMenu.map((item) => (
                  <div
                    key={item.id}
                    className={`col-sm-6 col-lg-4 all ${item.category}`}
                  >
                    <div className="box">
                      <div>
                        <div className="img-box">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="detail-box">
                          <h5>{item.title}</h5>
                          <p>{item.description.slice(0, 100)}...</p>
                          <div className="options">
                            <h6>${item.price}</h6>
                            <a href="#">
                              <i className="fa fa-shopping-cart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="btn-box">
            <a href="#">View More</a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-col">
              <h4>Contact Us</h4>
              <div className="contact_link_box">
                <a href="/">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Location 58p, Sen Sok, PhnomPenh City
                </a>
                <a href="tel:+011234567890">
                  <i className="fa fa-phone" aria-hidden="true"></i> Call +885 888565388
                </a>
                <a href="mailto:demo@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                  nitapo@gmail.com
                </a>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <h4>About Nitaa</h4>
              <p>Making this the first true generator on the Internet.</p>
              <div className="footer_social">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook" aria-hidden="true"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-pinterest" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <h4>Opening Hours</h4>
              <p>Everyday</p>
              <p>10.00 AM - 10.00 PM</p>
            </div>
          </div>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved By Feane.</p>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
