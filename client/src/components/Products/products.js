import React, { Component } from "react";

import Product from "./product";

class Products extends Component {
  render() {
    return (
      <div className="container">
        <div>
          {/* {this.props.products.map(p => {
            return (
              <Product
                id={p.id}
                name={p.name}
                price={p.price}
                description={p.description}
                image={p.image}
              />
            );
          })} */}
        </div>
      </div>
    );
  }
}

export default Products;
