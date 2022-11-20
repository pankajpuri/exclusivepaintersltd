import React, { Component } from "react";
class ContactForm extends Component {
  state = {};
  render() {
    return (
      <section
        className="contact-info-area w-padding2 product"
        id="contactForm"
      >
        <div className="container">
          <div
            className="row"
            style={{ justifyContent: "space-between!important" }}
          >
            <div className=" col-sm-6 col-md-6">
              <div className="contact-caption mb-50">
                <h3>If Not Now, When? Let’s Work Together!</h3>
                <p>
                  When surroundings do not change, the paint must surely change.
                  Change is the only constant and it can be good. Just like you,
                  the home or office needs a facelift. Use high quality painting
                  to enliven your home or office.{" "}
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
    );
  }
}

export default ContactForm;
