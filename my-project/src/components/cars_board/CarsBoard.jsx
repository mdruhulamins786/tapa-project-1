import React, { useState } from "react";
import Header from "./header/Header";
import SearchBox from "./search_board/SearchBox";
import CarsList from "./cars_list/CarsList";
import cars from "../../../public/cars";

const CarsBoard = () => {
  const [quary, setQuary] = useState("");
  const [show, setShow] = useState(false);

  const search = () => {
    return cars.filter(
      (ca) =>
        ca.title.toLowerCase().includes(quary.toLowerCase()) ||
        ca.brand.toLowerCase().includes(quary.toLowerCase())
    );
  };

  return (
    <div className="mx-auto px-4 py-2">
      <Header />
      <SearchBox show={show} setShow={setShow} setQuary={setQuary} />
      <CarsList show={show} search={search()} />
    </div>
  );
};

export default CarsBoard;
