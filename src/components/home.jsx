import React, { Component } from "react";
import Products from "./products";
import IntroductionSection from "./introductionSection";
import Projects from "./project";
import getJobDatas from "./datas/jobDatas";
import Reviews from "./reviews";
import "jquery-ui-dist/jquery-ui";
import "jquery/dist/jquery.js";
import "bootstrap/dist/js/bootstrap.js";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

class Home extends Component {
  state = {
    datas: [],
  };
  componentDidMount() {
    const datas = getJobDatas();
    this.setState({ datas });
  }
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
        <Projects datas={this.state.datas} />

        <Products />
        <Reviews />
        {/* <Jobcards /> */}
      </div>
    );
  }
}

export default Home;
