import React from "react";
const Footer = () => {
  return (
    <section id="footer" className="container-fuild">
      <div className="container p-2">
        <div className="row mt-5">
          <div
            className="col-lg"
            // style={{ display: "flex", flexDirection: "column" }}
          >
            <h4 className="ms-5">Contact Us</h4>
            <ul>
              <li>
                <a href="tel:+64225276078">
                  <i className="fa fa-phone me-2" aria-hidden="true" />
                  022 527 6078
                </a>
              </li>
              <li>
                <a href="mailto:exclusivepaintersltd@gmail.com">
                  <i className="fa fa-envelope me-2" aria-hidden="true" />
                  exclusivepaintersltd@gmail.com
                </a>
              </li>
              <li>
                <a className="address-marker" href="#">
                  <i className="fa fa-map-marker me-2" aria-hidden="true" />
                  <p>
                    1/411 Blockhouse Bay Road, Blockhouse Bay, Auckland 0600
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg">
            <h4 className="ms-4">Follow Us</h4>
            <ul className="social-media">
              <li>
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
          <div className="col-lg">
            <ul
              className="footer-menu"
              style={{
                listStyle: "none",
                textDecorationLine: "underline",
              }}
            >
              <li>About Us</li>
              <li>Services</li>
              <li>Products</li>
              <li>Career</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
