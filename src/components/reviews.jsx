import React, { Component } from "react";
import "jquery/dist/jquery.js";
import "google-maps-reviews/google-maps-reviews.js";
import "google-maps-reviews/google-maps-reviews.css";
// import renderReviews from "google-maps-reviews/google-maps-reviews.js";
// import googlePlaces from "google-maps-reviews/google-maps-reviews.js";
class Reviews extends Component {
  state = {
    reviews: "",
  };

  render() {
    return (
      <section
        id="review-section"
        className="container-fluid"
        style={{ height: "100vh!important" }}
      >
        <div className="container mb-5 mt-5">
          <div className="row">
            <h1 className="pb-4 text-center text-decoration-line">Reviews</h1>
            <div className="d-flex justify-content-center">
              <div className="col-lg-6">
                <div
                  id="google-reviews"
                  className="shadow-lg p-3 mb-5 bg-body "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Reviews;
