import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <section className="banner">
          <div className="banner_contents">
            <h1 className="banner_title">
              Hire Experienced Painters
              <br />
              for the
              <br />
              Complete Solutions
            </h1>
            <div className="enquireBtn">
              <button className="enquireBtn btn btn-danger">Enquire Now</button>
            </div>
          </div>
          <div className="banner_fadeBottom" />
        </section>
        {/* <!--End of Banner--> */}
        {/* <!--Start of Product--> */}
        <section className="product">
          <div className="container">
            <div className="row product-marginbtm50">
              <h3 className="product_title">Our Suppliers</h3>
              <div className="col-sm-4 row_poster">
                <img src="../Images/paintingbrand/resene.jpg" alt="" />
              </div>
              <div className="col-sm-4 row_poster">
                <img src="../Images/paintingbrand/dulux.jpg" alt="" />
              </div>
              <div className="col-sm-4 row_poster">
                <img src="../Images/paintingbrand/aalto.jpg" alt="" />
              </div>
            </div>
            <div className="row product-marginbtm50">
              <div className="col-sm-4 row_poster">
                <img src="../Images/paintingbrand/porters.jpg" alt="" />
              </div>
              <div className="col-sm-4 row_poster">
                <img src="../Images/paintingbrand/sikkens.jpg" alt="" />
              </div>
              <div className="col-sm-4 row_poster">
                <img src="../Images/paintingbrand/wattyl.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!--End of Product--> */}
        {/* <!--Services Area Start--> */}
        {/* 
        <section className="categories-area section-padding3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="section-tittle mb-70">
                  <h2>What Services you will Get from us!</h2>
                </div>
              </div>
            </div>
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
                            src="../Images/Interior/in66.jpg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Interior/in6.jpg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Interior/in1.jpg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Interior/in2.jpg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Interior/in3.jpg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Interior/in4.jpg"
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
                            src="../Images/Exterior/ex1.jpg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Exterior/ex2.jpg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Exterior/ex22.jpg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Exterior/ex3.jpg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Exterior/ex33.jpeg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Exterior/ex6.jpg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Exterior/ex66.jpg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Exterior/ex5.jpg"
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
              <div className="col-md-4 col-sm-4">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <div
                      id="RoofRenoCarousel"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="item active">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Renovation&Roof/r1.jpg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Renovation&Roof/r2.jpg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Renovation&Roof/roof.jpg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Renovation&Roof/Renovating1.jpg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Renovation&Roof/Renovating.jpg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Renovation&Roof/Renovating2.jpg"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                        <div className="item">
                          <img
                            style={{ height: "185px" }}
                            src="../Images/Renovation&Roof/Renovating3.png"
                            alt=""
                            className="center-block img-thumbnail"
                          />
                        </div>
                      </div>
                    
                      <a
                        className="left carousel-control"
                        href="#RoofRenoCarousel"
                        data-slide="prev"
                      >
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="right carousel-control"
                        href="#RoofRenoCarousel"
                        data-slide="next"
                      >
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">Renovating & Roof Painting</a>
                    </h5>
                    <p>
                      Is your home or commercial premise in need of renovation
                      painting services?Do you worry at the very thought of
                      painting the roof all by yourself? We are here to help.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!--Services Area End--> */}
        {/* <!-- Contact Info Start --> */}
        {/* <section className="contact-info-area w-padding2 product">
          <div className="container">
            <div
              className="row"
              style={{ justifyContent: "space-between!important" }}
            >
              <div className=" col-sm-6 col-md-6">
                <div className="contact-caption mb-50">
                  <h3>If Not Now, When? Let’s Work Together!</h3>
                  <p>
                    When surroundings do not change, the paint must surely
                    change. Change is the only constant and it can be good. Just
                    like you, the home or office needs a facelift. Use high
                    quality painting to enliven your home or office.{" "}
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <form
                  className=" contact-wrapper"
                  style={{ padding: "0px 15px" }}
                >
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Email"
                  />

                  <input
                    type="tel"
                    className="form-control"
                    id="Mobile"
                    placeholder="Mobile"
                  />
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    placeholder="Your Message"
                  ></textarea>
                  <button type="submit" className="btn submit-btn2">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="categories-area section-padding3">
          <div className="container">
            <div className="row">
              <div className="col-md-6"></div>
            </div>
          </div>
        </section> */}
      </div>
    );
  }
}

export default Home;
