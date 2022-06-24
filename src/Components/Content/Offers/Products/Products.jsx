import React from "react";

const Products = (props) => {
  return (
    <div className="product" key={props.key}>
      <img src={props.img} alt={props.id} />
      <h2>{props.name}</h2>
      <p>${props.price}</p>
      <p className="crossed">${props.crossedPrice}USD</p>
      <div>
        <button
          className="productAddButton"
          onClick={() => props.handleAddProduct(props.product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
