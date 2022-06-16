import React from "react";

const Products = (props) => {
  return (
    <div className="product" key={props.id}>
      <img src={props.img} alt={props.id} />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <p className="crossed">{props.crossedPrice}</p>
    </div>
  );
};

export default Products;
