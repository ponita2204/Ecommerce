import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "jquery-nice-select/css/nice-select.css";
import "./css/style.css"; // Ensure the path to `style.css` is correct
import "./css/responsive.css"; // Ensure the path to `responsive.css` is correct
import Navbar from "../navbar";

const BookTable = () => {
  return (
    <div className="sub_page">
      <Navbar/>

      {/* Book Section */}
      <section className="book_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Book A Table</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form_container">
                <form>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div>
                    <select className="form-control nice-select wide" required>
                      <option value="" disabled selected>
                        How many persons?
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div>
                    <input type="date" className="form-control" required />
                  </div>
                  <div className="btn_box">
                    <button type="submit" className="btn btn-primary">
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450964!2d144.95373631567385!3d-37.81720974203245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sph!4v1633524320982!5m2!1sen!2sph"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
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

export default BookTable;