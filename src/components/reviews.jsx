import React, { Component } from "react";
import $ from "jquery";
import googlePlaces from "google-maps-reviews";
class Reviews extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <section className="container-fluid">
        <div className="container mb-5 mt-5">
          <div className="row">
            <h1>Reviews</h1>

            <div id="google-reviews"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Reviews;
