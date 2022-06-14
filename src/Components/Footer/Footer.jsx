import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <h3>Sign up and get free coffee bags</h3>
      <h2>Coffee Updates</h2>
      <div>
        <input
          type="email"
          placeholder="customer @coffestyle.io"
          className="email"
        />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;
