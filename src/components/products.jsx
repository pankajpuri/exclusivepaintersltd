import React, { Component } from "react";
class Products extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <section className="product" id="products">
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
    );
  }
}

export default Products;
