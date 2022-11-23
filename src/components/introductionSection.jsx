import React from "react";
const IntroductionSection = () => {
  return (
    <section id="introduction-section" className="container-fluid">
      <div className="conatiner mb-5 mt-5">
        <div
          className="row"
          // style={{
          //   justifyContent: "center",
          //   alignItems: "center",
          //   display: "flex",
          // }}
        >
          <div className="col-lg-7 ">
            <img src="../images/introductions/intro.jpeg" alt="" />
          </div>
          <div className="col-lg-5">
            <h1>Welcome to Exclusive Painters</h1>
            <p>
              Exclusive Painters is a full-service painting company serving
              central Auckland. We are proud to offer superior customer service
              and professional workmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
