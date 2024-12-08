import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "jquery-nice-select/css/nice-select.css";
import "../css/style.css"; // Ensure the path to `style.css` is correct
import "../css/responsive.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Aboutimg from "../images/about-img.png";


const Aboutsc = () => {
  return (
    <div className="sub_page">
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
    </div>
  );
};
export default Aboutsc;