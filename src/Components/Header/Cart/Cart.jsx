import React from "react";

const Cart = (props) => {
  return (
    <div className="cart">
      <img src={props.bag} alt="bag" />
      <a href="#c">Cart</a>
    </div>
  );
};

export default Cart;
