import React from "react";

const Products = (props) => {
  return (
    <div className="products">
      <h2>More Products</h2>
      <div className="items">
        <div className="product">
          <img src={props.product1} alt="product1" />
          <h2>Red Love Cup</h2>
          <p>$25.00</p>
          <p className="crossed">$ 37.00 USD</p>
        </div>
        <div className="product">
          <img src={props.product2} alt="product2" />
          <h2>Black Tea Cup</h2>
          <p>$25.00</p>
          <p className="crossed">$ 29.00 USD</p>
        </div>
        <div className="product">
          <img src={props.product3} alt="product3" />
          <h2>B&W Essentials Mug</h2>
          <p className="crossed">$ 19.00 USD</p>
        </div>
        <div className="product">
          <img src={props.product4} alt="product4" />
          <h2>Winter Style Mug</h2>
          <p>$ 25.00 USD</p>
        </div>
        <div className="product">
          <img src={props.product5} alt="product5" />
          <h2>Ceramic Tea</h2>
          <p>$ 46.00 USD</p>
        </div>
        <div className="product">
          <img src={props.product6} alt="product6" />
          <h2>No Handle Bar Cup</h2>
          <p>$ 34.00 USD</p>
        </div>
        <div className="product">
          <img src={props.product7} alt="product7" />
          <h2>Espresso Cup by Mugs.co</h2>
          <p>$ 25.00 USD</p>
        </div>
        <div className="product">
          <img src={props.product8} alt="product8" />
          <h2>Pink Premium Ceramic</h2>
          <p>$ 99.00 USD</p>
        </div>
        <div className="product">
          <img src={props.product9} alt="product9" />
          <h2>Summer Designer Cup</h2>
          <p>$ 29.00 USD</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
