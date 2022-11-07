import React, { Component } from "react";
import Products from "./products";
import IntroductionSection from "./introductionSection";
import Work from "./work";
import Reviews from "./reviews";
class Home extends Component {
  render() {
    return (
      <div>
        <section
          className="banner container-fluid"
          id="home"
          style={{
            paddingRight: "0",
            paddingLeft: "0",
          }}
        >
          <div className="banner_contents">
            <h1 className="banner_title">
              Hire Experienced Painters
              <br />
              for the
              <br />
              Complete Solutions
            </h1>
            {/* <div className="enquireBtn">
              <NavLink className="nav-link"to="/contactform">
                <button className="enquireBtn btn btn-danger">
                  Enquire Now
                </button>
              </NavLink>
            </div> */}
          </div>
          <div className="banner_fadeBottom" />
        </section>
        <IntroductionSection />
        <Work />
        <Reviews />
        <Products />
        {/* <Jobcards /> */}
      </div>
    );
  }
}

export default Home;
