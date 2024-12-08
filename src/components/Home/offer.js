import React from "react";
import Imgoffer1 from"../images/o1.jpg"
import Imgoffer2 from "../images/o2.jpg";

const OfferSection = () => {
  return (
    <section className="offer_section layout_padding-bottom">
      <div className="offer_container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src={Imgoffer1} alt="Tasty Thursdays" />
                </div>
                <div className="detail-box">
                  <h5>Tasty Thursdays</h5>
                  <h6>
                    <span>20%</span> Off
                  </h6>
                  <a href="#">Order Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src={Imgoffer2}alt="Pizza Days" />
                </div>
                <div className="detail-box">
                  <h5>Pizza Days</h5>
                  <h6>
                    <span>15%</span> Off
                  </h6>
                  <a href="#">Order Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
