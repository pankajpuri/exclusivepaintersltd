import React, { Component } from "react";
import getJobDatas, { jobDatas } from "./datas/jobDatas";
class Jobcards extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    jobDatas: getJobDatas(),
  };
  render() {
    return (
      <section className="categories-area section-padding3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-tittle mb-70">
                <h2>What Services you will Get from us!</h2>
              </div>
            </div>
          </div>
          {this.state.jobDatas.map((item) => (
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <div
                      id="InteriorCarousel"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="item active">
                          <img
                            style={{ height: "185px" }}
                            src=""
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                      </div>
                      <a
                        className="left carousel-control"
                        href="#InteriorCarousel"
                        data-slide="prev"
                      >
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="right carousel-control"
                        href="#InteriorCarousel"
                        data-slide="next"
                      >
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">Interior Painting</a>
                    </h5>
                    <p>
                      If you are struggling to get an interior paint finish
                      which can help tie together your architraves, the
                      skirtings, the furniture, items of fine art, etc., it is
                      time to get your home or business painted to enhance its
                      look.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <div
                      id="ExteriorCarousel"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="item active">
                          <img
                            style={{ height: "185px" }}
                            src=""
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                      </div>
                      <a
                        className="left carousel-control"
                        href="#ExteriorCarousel"
                        data-slide="prev"
                      >
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="right carousel-control"
                        href="#ExteriorCarousel"
                        data-slide="next"
                      >
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">Exterior Painting</a>
                    </h5>
                    <p>
                      Have you ever thought how your home or business looks from
                      the outside? It is time to act fast and end your
                      frustration with the sloppy job done by uncaring painters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Jobcards;
