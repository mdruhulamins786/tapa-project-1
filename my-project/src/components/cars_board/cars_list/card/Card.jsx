import React from "react";
import BuyButton from "../Buy_Button/BuyButton";

const Card = ({ show, car }) => {
  const { title, brand, year, price, isPremium } = car;

  return (
    <>
      {show ? (
        <div>
          {isPremium && (
            <div className="border rounded-md p-5">
              <p className="text-orange-500 text-xl font-semibold mb-2">
                {title}
              </p>
              <p>Brand: {brand}</p>
              <p>Year: {year}</p>
              <p>Price: {price}</p>
              <p>Premium: {isPremium ? "Yes" : "No"}</p>
              <BuyButton>Buy Now</BuyButton>
            </div>
          )}
        </div>
      ) : (
        <div className="border rounded-md p-5">
          <p className="text-orange-500 text-xl font-semibold mb-2">{title}</p>
          <p>Brand: {brand}</p>
          <p>Year: {year}</p>
          <p>Price: {price}</p>
          <p>Premium: {isPremium ? "Yes" : "No"}</p>
          <BuyButton>Buy Now</BuyButton>
        </div>
      )}
    </>
  );
};

export default Card;
