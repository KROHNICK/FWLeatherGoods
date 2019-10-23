import React from "react";

const Product = props => {
  return (
    <>
      <h3>{props.name}</h3>
      <h4>{props.price}</h4>
      <h4>{props.description}</h4>
    </>
  );
};

export default Product;
