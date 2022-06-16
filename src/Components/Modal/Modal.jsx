import React from "react";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modalContent active" : "modalContent"}
        onClick={(e) => e.stopPropagation()}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia sit
        saepe asperiores ipsum sapiente? Tempore numquam nesciunt, sint pariatur
        reprehenderit dolorem earum consequuntur ipsum placeat amet consectetur
        labore corporis quis.
      </div>
    </div>
  );
};
export default Modal;
