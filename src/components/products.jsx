import React, { Component } from "react";
import getImageSource from "./datas/productDatas";
class Products extends Component {
  state = {
    imagesource: getImageSource(),
  };
  render() {
    return (
      <section className="product" id="products">
        <div className="container">
          <div className="row product-marginbtm50">
            <h3 className="product_title">Our Suppliers</h3>

            {this.state.imagesource.map((item) => (
              <div
                key={item.id}
                className="col-sm-4 row_poster product-marginbtm50"
              >
                <img src={item.imagesource} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
