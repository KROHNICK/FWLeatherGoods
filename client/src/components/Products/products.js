import React, { Component } from "react";

import Product from "./product";
import "./products.css";

class Products extends Component {
  render() {
    return (
      <div className="container">
        <div className="prod-container">
          {this.props.products.map(p => {
            return (
              <Product
                id={p.id}
                name={p.name}
                price={p.price}
                description={p.description}
                image={p.image}
                stock={p.stock}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Products;
