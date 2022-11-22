import React from "react";

const Projects = ({ datas }) => {
  return (
    <section id="slider" className="container-fluid mb-5 mt-5 pt-5">
      <div className="row">
        <h1 className="text-center pb-4">
          <b>Our Projects</b>
        </h1>

        <div className="slider">
          <div className="owl-carousel">
            {datas.map((data) => (
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
      </div>
    </section>
  );
};

export default Projects;
