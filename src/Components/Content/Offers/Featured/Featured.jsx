import React from "react";

const Featured = (props) => {
  return (
    <div className="featured">
      <h2>Featured Mugs</h2>
      <div className="mugs">
        <div className="mug1">
          <img src={props.mug1} alt="mug1" />
          <h2>Pink Premium Ceramic</h2>
          <p>$ 99.00 USD</p>
        </div>
        <div className="mug2">
          <img src={props.mug2} alt="mug2" />
          <h2>Golden Designers Mug</h2>
          <p>$50.00</p>
          <p className="crossed">$ 69.00 USD</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
