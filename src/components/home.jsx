import React, { Component } from "react";
import Products from "./products";
import Jobcards from "./jobcards";
import ContactForm from "./contactform";

class Home extends Component {
  render() {
    return (
      <div
        className="scrollspy-example"
        data-bs-spy="scroll"
        data-bs-target="#mainNav"
        data-bs-offset="0"
        tabIndex={0}
      >
        <section className="banner container-fluid" id="home">
          <div className="banner_contents">
            <h1 className="banner_title">
              Hire Experienced Painters
              <br />
              for the
              <br />
              Complete Solutions
            </h1>
            <div className="enquireBtn">
              <button className="enquireBtn btn btn-danger">Enquire Now</button>
            </div>
          </div>
          <div className="banner_fadeBottom" />
        </section>
        <Products />
        {/* <Jobcards /> */}
        <ContactForm />
      </div>
    );
  }
}

export default Home;
