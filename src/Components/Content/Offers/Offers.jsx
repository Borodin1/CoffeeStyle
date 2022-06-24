import React from "react";
import Premium from "../Premium/Premium";
import Featured from "./Featured/Featured";
import Products from "./Products/Products";

const Offers = (props) => {
  let mugsElements = props.mugData.map((mug) => (
    <Featured
      id={mug.id}
      img={mug.img}
      name={mug.name}
      price={mug.price}
      crossed={mug.crossedPrice}
    />
  ));
  return (
    <div className="offers">
      <div className="featured" id="offers">
        <h2>Featured Mugs</h2>
        <div className="mugs">{mugsElements}</div>
      </div>
      <div className="products">
        <h2>More Products</h2>
        <div className="items">
          {props.productData.map((product) => (
            <Products
              key={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
              crossedPrice={product.crossedPrice}
              product={product}
              handleAddProduct={props.handleAddProduct}
              addToOrder={props.addToOrder}
            />
          ))}
        </div>
        <button onClick={props.addProduct}>More Product</button>
        <button onClick={props.remoteProduct}>Hide Product</button>
      </div>
      <Premium
        premBook={props.premBook}
        premCup1={props.premCup1}
        premCup2={props.premCup2}
      />
    </div>
  );
};

export default Offers;
