import React from "react";

const Product = props => {
  return (
    <>
      <h3>{props.name}</h3>
      <h4>${props.price}</h4>
      <h4>Description: {props.description}</h4>
      <img src={props.image} />
      <h4>In Stock: {props.stock}</h4>
    </>
  );
};

export default Product;
