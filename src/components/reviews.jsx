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
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div id="google-reviews"></div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Reviews;
