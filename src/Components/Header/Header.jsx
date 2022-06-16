import React from "react";
import Cart from "./Cart/Cart";
import NavBar from "./NavBar/NavBar";

const Header = (props) => {
  return (
    <div className="header">
      <img src={props.logo} alt="logo" />
      <NavBar />
      <Cart bag={props.bag} setActive={props.setActive} />
    </div>
  );
};

export default Header;
