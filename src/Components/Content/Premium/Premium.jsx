import React from "react";

const Premium = (props) => {
  return (
    <div className="premiumOffer">
      <h2>Buy 2 mugs and get a coffee magazine free</h2>
      <div className="premium">
        <div className="blockPictures">
          <div>
            <img src={props.premBook} alt="premBook" />
          </div>
          <div className="cups">
            <img src={props.premCup1} alt="premCup1" />
            <img src={props.premCup2} alt="premCup2" />
          </div>
        </div>
        <div className="premiumText">
          <h3>Premium Offer</h3>
          <h2>Get our Coffee Magazine</h2>
          <p>
            The most versatile furniture system ever created. Designed to fit
            your life.
          </p>
          <a href="#S">Start Shopping</a>
        </div>
      </div>
    </div>
  );
};

export default Premium;
