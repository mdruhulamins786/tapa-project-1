import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const ShowButton = ({ show, setShow }) => {
  return (
    <div className="flex justify-center items-center">
      {" "}
      <button
        onClick={() => setShow((s) => !s)}
        className={`${
          show ? "text-orange-500" : "text-red-950"
        }  px-3 py-1  font-semibold rounded mt-1`}
      >
        <FaCheckCircle></FaCheckCircle>
      </button>{" "}
      <p>Show Premiume only</p>
    </div>
  );
};

export default ShowButton;
