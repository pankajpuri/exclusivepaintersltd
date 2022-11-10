import React from "react";
import Fade from "react-reveal/Fade";
const IntroductionSection = () => {
  return (
    <section className="container-fluid">
      <div className="conatiner mb-5 mt-5">
        <div
          className="row"
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div className="col-lg-7 col-md-7 col-sm-7">
            <Fade bottom>
              <img
                src="../assests/images/introductions/intro.jpeg"
                alt=""
                style={{
                  objectFit: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "80%",
                  height: "60vh",
                }}
              />
            </Fade>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 pe-2">
            <Fade bottom>
              <h1>Welcome to Exclusive Painters</h1>
              <p style={{ textAlign: "justify", width: "80%" }}>
                Exclusive Painters is a full-service painting company serving
                central Auckland. We are proud to offer superior customer
                service and professional workmanship.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
