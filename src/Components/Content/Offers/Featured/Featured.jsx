import React from "react";

const Featured = (props) => {
  return (
    <div className="mug">
      <img src={props.img} alt={props.id} />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <p className="crossed">{props.crossedPrice}</p>
    </div>
  );
};

export default Featured;
