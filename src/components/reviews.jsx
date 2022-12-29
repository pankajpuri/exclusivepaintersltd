import React, { Component } from "react";
import $ from "jquery";
import "jquery/dist/jquery.js";
import "google-maps-reviews/google-maps-reviews.js";
import "google-maps-reviews/google-maps-reviews.css";
import googlePlaces from "google-maps-reviews/google-maps-reviews.js";

class Reviews extends Component {
  state = {
    reviews: [],
  };
  // componentDidMount() {
  //   const reviews = googlePlaces(window.google, "google-reviews", {
  //     placeId: "ChIJySgVASFHDW0RUU63nGKKMwc",
  //     maxRows: 1, // max rows of reviews to be displayed
  //     minRating: 4, // minimum rating of reviews to be displayed
  //   });
  //   console.log("list: ", reviews);
  // }
  render() {
    return (
      <section
        id="review-section"
        className="container-fluid"
        // style={{ height: "100vh!important" }}
      >
        import Reviews from './reviews';
        <div className="container">
          <div className="row">
            <h1 className="pb-4 text-center section-heading">Reviews</h1>
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
