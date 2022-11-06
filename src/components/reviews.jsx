import React, { Component } from "react";
import googlePlaces from "google-maps-reviews";
class Reviews extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <h1>Reviews</h1>
        <div id="schema">Schema - </div>
        <div id="custom-address-id">Address - </div>
        <div id="google-phone">Phone - </div>
        <div id="google-reviews"></div>
      </div>
    );
  }
}

export default Reviews;
