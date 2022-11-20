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
        className="container-fluid"
        style={{ height: "100vh!important" }}
      >
        <div className="container mb-5 mt-5">
          <div className="row product-marginbtm50">
            <div className="col-lg">
              <h1 className="product_title">Reviews</h1>
              <div id="google-reviews"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Reviews;
