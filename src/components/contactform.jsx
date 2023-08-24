import React, { useState } from "react";
import { toast } from "react-toastify";
import config from "./config/default.json";
import http from "./services/httpService";
function ContactForm() {
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitText, setSubmitText] = useState("Send Message");
  async function doSubmit() {
    //call the server;
    const datas = { email, mobileNumber, message };
    try {
      await http.post(config.apiUrlSendEmail, datas);
      setSubmitText("Sent!");
      setEmail("");
      setMobileNumber("");
      setMessage("");
      toast("Message sent. Thank you!");
      setTimeout(() => {
        setSubmitText("Send Message");
      }, 5000);
    } catch (ex) {
      console.log("specific excpected error:", ex);
    }
  }
  return (
    <section className="contact-info-area w-padding2 product" id="contactForm">
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
            <form className=" contact-wrapper" style={{ padding: "0px 15px" }}>
              <input
                id="inputEmail"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                value={email}
                placeholder="Email"
              />

              <input
                id="Mobile"
                type="tel"
                className="form-control"
                onChange={(e) => setMobileNumber(e.target.value)}
                value={mobileNumber}
                placeholder="Mobile"
              />
              <textarea
                id="message"
                name="message"
                className="form-control"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Your Message"
              ></textarea>
              <button
                type="submit"
                className="btn submit-btn2"
                onClick={doSubmit}
              >
                {submitText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
