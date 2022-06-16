import React from "react";

const Cart = (props) => {
  console.log(props);
  return (
    <div className="cart">
      <button className="popUpButton" onClick={() => props.setActive(true)}>
        <img src={props.bag} alt="bag" />
        <p>Cart</p>
      </button>
    </div>
  );
};

export default Cart;
