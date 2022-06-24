import React from "react";

const Modal = ({
  active,
  setActive,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modalContent active" : "modalContent"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cartItems">
          <div className="cartHeader">Cart Items</div>

          {cartItems.length === 0 && (
            <div className="cartItemsEmpty">No items are added.</div>
          )}

          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cartItemsList">
                <img
                  className="cartItemsImage"
                  src={item.img}
                  alt={item.name}
                />
                <div className="cartItemsName">{item.name}</div>
                <div className="cartItemsFunction">
                  <button
                    className="cartItemsAdd"
                    onClick={() => handleAddProduct(item)}
                  >
                    +
                  </button>
                  <button
                    className="cartItemsRemove"
                    onClick={() => handleRemoveProduct(item)}
                  >
                    -
                  </button>
                </div>
                <div className="cartItemsPrice">
                  {item.quantity}*${item.price}
                </div>
              </div>
            ))}
          </div>
          <div className="cartItemsTotalPriceName">
            Total Price
            <div className="cartItemsTotalPrice">${totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
