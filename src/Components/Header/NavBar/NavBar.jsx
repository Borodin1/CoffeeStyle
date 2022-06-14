import React from "react";

const NavBar = () => {
  return (
    <div className="navBar">
      <ul className="menu">
        <li>
          <a href="#h">Home</a>
        </li>
        <li>
          <a href="#p">Our Product</a>
        </li>
        <li>
          <a href="#b">Blog</a>
        </li>
        <li>
          <a href="#a">About</a>
        </li>
        <li>
          <a href="#c">Contact</a>
        </li>
        <li>
          <a href="#s">Style Guide</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
