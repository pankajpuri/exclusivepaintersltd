import React, { Component } from "react";
import img3 from "./assests/images/introductions/img3.jpeg";
class About extends Component {
  state = {};
  render() {
    return (
      <section id="About">
        <div className="container-fit">
          <img
            alt=""
            src={img3}
            style={{ objectFit: "cover", height: "50vh", width: "100%" }}
          />
          <div className="container">
            <div className="row">
              <h3 className="about_title">About us</h3>
              <p className="aboutParagraph">
                Exclusive Painters is a professional painting company based in
                Central Auckland. We have been in business for over 10 years and
                have built a reputation for excellence in the painting industry.
                Our team of experienced and skilled painters are dedicated to
                providing top-quality services to our clients. <br></br>
                <br></br>We offer a wide range of painting services for both
                residential and commercial properties, including interior and
                exterior painting, staining, and refinishing. No job is too big
                or too small for our team, and we take great pride in the
                attention to detail and professionalism we bring to every
                project.<br></br>
                <br></br> In addition to our top-notch painting services, we
                also offer color consultation to help our clients choose the
                perfect palette for their space. Our team is knowledgeable about
                the latest trends and can provide expert advice on how to
                achieve the desired look for any room. At Exclusive Painters,
                customer satisfaction is our top priority. We go above and
                beyond to ensure that our clients are completely happy with the
                end result. We are fully licensed and insured, and all of our
                work is guaranteed. <br></br>
                <br></br>If you are in need of professional painting services in
                Central Auckland, look no further than Exclusive Painters.
                Contact us today to schedule a consultation and get started on
                your painting project. <br></br>
                <br></br>In addition to our painting services, we also offer a
                variety of other services to meet the needs of our clients.
                These include wallpaper installation, drywall repair, and
                carpentry work. Our team is skilled in all aspects of home
                improvement, so you can trust us to handle any project you may
                have. We understand that having work done on your home or
                business can be disruptive, which is why we take great care to
                minimize the impact of our work on your daily life. Our team is
                always respectful of your property and works efficiently to
                complete the job on time. We are proud to be a locally-owned and
                operated business serving the Central Auckland area. We have
                built strong relationships with our clients and have a
                reputation for honesty and integrity. We always go above and
                beyond to ensure that our clients are completely satisfied with
                our work. <br></br>
                <br></br>Thank you for considering Exclusive Painters for your
                painting and home improvement needs. We look forward to working
                with you and bringing your vision to life. Contact us today to
                schedule a consultation and get started on your project.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
