import React from "react";

import "./product.css";

const Product = props => {
  return (
    <div className="prod">
      <h3>{props.name}</h3>
      <h4>${props.price}</h4>
      <h4>Description: {props.description}</h4>
      <img src={props.image} />
      <h4>In Stock: {props.stock}</h4>
    </div>
  );
};

export default Product;
