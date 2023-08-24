import React, { Component } from "react";
import $ from "jquery";
// import "google-maps-reviews/google-maps-reviews.js";
// import "google-maps-reviews/google-maps-reviews.css";
// import googlePlaces from "google-maps-reviews/google-maps-reviews.js";
import "../loader";
import "google-places-data/google-places.js";
class Reviews extends Component {
  componentDidMount() {
    $(() => {
      $("#google-reviews").googlePlaces({
        placeId: "ChIJySgVASFHDW0RUU63nGKKMwc", //"ChIJySgVASFHDW0RUU63nGKKMwc", //Find placeID @: https://developers.google.com/places/place-id
        render: ["reviews"],
        min_rating: 0,
        max_row: 0,
        rotateTime: 5000,
        months: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      });
    });
  }
  render() {
    return (
      <section
        id="review-section"
        className="container-fluid"
        // style={{ height: "100vh!important" }}
      >
        <div className="container">
          <div className="row">
            <h1 className="pb-4 text-center section-heading">Reviews</h1>
            <div className="d-flex justify-content-center">
              <div className="col-lg-6">
                hello
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
