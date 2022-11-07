import React from "react";
const Work = () => {
  return (
    <section className="container-fluid">
      <div className="container mb-5 mt-5">
        <div className="row">
          <h1 className="text-center">Our Projects</h1>

          <div
            id="carouselExampleControls"
            className="carousel  slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg">
                    <img
                      src="../Images/introductions/1.jpeg"
                      className="d-block w-100 centered"
                      alt="..."
                    />
                  </div>
                  {/* <div className="col-lg-6">
                    <img
                      src="../Images/introductions/2.jpeg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div> */}
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg">
                    <img
                      src="../Images/introductions/3.jpeg"
                      className="d-block w-100 centered"
                      alt="..."
                    />
                  </div>
                  {/* <div className="col-lg-6">
                    <img
                      src="../Images/introductions/4.jpeg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div> */}
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg">
                    <img
                      src="../Images/introductions/5.jpeg"
                      className="d-block w-100 centered"
                      alt="..."
                    />
                  </div>
                  {/* <div className="col-lg-6">
                    <img
                      src="../Images/introductions/55.jpeg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div> */}
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
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
              data-bs-target="#carouselExampleControls"
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
    </section>
  );
};

export default Work;
