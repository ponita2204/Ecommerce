import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "jquery-nice-select/css/nice-select.css";
import "../css/style.css"; // Ensure the path to `style.css` is correct
import "../css/responsive.css"; // Ensure the path to `responsive.css` is correct
import "bootstrap/dist/js/bootstrap.bundle.min";
import Herosection from "./Herosection";
import OfferSection from "./offer";
import FoodSection from "./food";
import Aboutsc from "./aboutsc";
import Footersc from "./footer";
import Booktablesc from "./booktablesc";


const Home = () => {
  return (
    <>
      <Herosection />
      <OfferSection />
      {/* <FoodSection /> */}
      <Aboutsc />
      <Booktablesc />
      <Footersc />
    </>
  );
};

export default Home;
