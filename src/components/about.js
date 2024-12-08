import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "jquery-nice-select/css/nice-select.css";
import "./css/style.css"; // Ensure the path to `style.css` is correct
import "./css/responsive.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Aboutimg from"./images/about-img.png"
import Navbar from "../navbar";
const About = () => {
  return (
    <div className="sub_page">
      <Navbar/>

      {/* About Section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={Aboutimg} alt="About Us" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>We Are Nitaa</h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
                <a href="/about">Read More</a>
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
                  Location 58p SenSok, PhnomPenh City
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

export default About;
