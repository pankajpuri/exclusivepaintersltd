import React, { Component } from "react";
import getJobDatas from "./datas/jobDatas";
import Fade from "react-reveal/Fade";
class Projects extends Component {
  state = { datas: [] };
  componentDidMount() {
    const datas = getJobDatas();
    this.setState({ datas });
  }

  render() {
    return (
      <section id="slider" className="container-fluid mb-5 mt-5 pt-5">
        <div className="row">
          <h1 className="text-center">
            <b>Our Projects</b>
          </h1>
          <Fade bottom>
            <div className="slider">
              <div className="owl-carousel">
                {this.state.datas.map((data) => (
                  <div className="slider-card mb-3" key={data.id}>
                    <div
                      key={data.id}
                      className="d-flex justify-content-center align-items-center mb-4"
                    >
                      <img src={data.intSource} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default Projects;
