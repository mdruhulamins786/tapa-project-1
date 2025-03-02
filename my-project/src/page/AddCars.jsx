import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const AddCars = ({ cars }) => {
  const [quantity, setQuntity] = useState(1);

  const addPrice = () => {
    setQuntity((quantity) => quantity + 1);
  };
  const oddPrice = () => {
    if (quantity < 1) return;
    setQuntity(quantity - 1);
  };

  console.log(quantity);

  return (
    <div>
      <p>{cars.length}</p>
      {/* 0000000000000 */}
      {/* 0000000000000 */}
      {/* 0000000000000 */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {cars.map((car) => {
          const { id, title, brand, year, price, isPremium } = car;

          return (
            <div className="" key={id}>
              <div className="border rounded-md p-5">
                <div className="mb-2 flex justify-between items-center ">
                  <p className="text-orange-500 text-xl font-semibold">
                    {title}
                  </p>
                  <button>
                    <FaStar color={isPremium ? "red" : "black"} />
                  </button>
                </div>
                <p>Brand: {brand}</p>
                <p>Quantity: {quantity}</p>
                <p>Price: {price}</p>
                <p>Premium: {isPremium ? "Yes" : "No"}</p>
                <div className="gap-5 flex my-5">
                  <button onClick={oddPrice} className="bg-orange-500 px-2">
                    -
                  </button>
                  <button onClick={addPrice} className="bg-orange-500 px-2">
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 0000000000000 */}
      {/* 0000000000000 */}
      {/* 0000000000000 */}
    </div>
  );
};

export default AddCars;
