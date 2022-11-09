import React, { Component } from "react";
import getJobDatas from "./datas/jobDatas";
class Work extends Component {
  constructor(props) {
    super(props);
  }
  state = { datas: getJobDatas() };
  render() {
    return (
      <section id="slider" className="container-fluid mb-5 mt-5 pt-5">
        <div className="row">
          <h1 className="text-center">
            <b>Our Projects</b>
          </h1>
          <div className="slider">
            <div className="owl-carousel">
              {/* <div class="slider-card">
                <div class="d-flex justify-content-center align-items-center mb-4">
                  <img src="../Images/introductions/1.jpeg" alt="" />
                </div>
              </div> */}
              {this.state.datas.map((data) => (
                <div className="slider-card mb-3" key={data.id}>
                  <div
                    key={data.id}
                    className="d-flex justify-content-center align-items-center mb-4"
                  >
                    <img src={data.intSource} alt=""></img>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
