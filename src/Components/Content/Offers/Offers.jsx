import React from "react";
import Premium from "../Premium/Premium";
import Featured from "./Featured/Featured";
import Products from "./Products/Products";

const Offers = (props) => {
  return (
    <div className="offers">
      <Featured mug1={props.mug1} mug2={props.mug2} />
      <Products
        product1={props.product1}
        product2={props.product2}
        product3={props.product3}
        product4={props.product4}
        product5={props.product5}
        product6={props.product6}
        product7={props.product7}
        product8={props.product8}
        product9={props.product9}
      />
      <Premium
        premBook={props.premBook}
        premCup1={props.premCup1}
        premCup2={props.premCup2}
      />
    </div>
  );
};

export default Offers;
