import React, { useState } from "react";
import Header from "./header/Header";
import SearchBox from "./search_board/SearchBox";
import CarsList from "./cars_list/CarsList";
import cars from "../../../public/cars";

const CarsBoard = () => {
  const [quary, setQuary] = useState("");
  const [show, setShow] = useState(false);
  const [datas, setData] = useState(cars);
  // const [newData, setNewData] = useState([]);

  const deleteCars = (id) => {
    const dataNew = datas.filter((data) => data.id !== id);
    setData(dataNew);
  };

  const toggleFavourite = (id) => {
    setData(
      datas.map((data) =>
        data.id === id ? { ...data, isPremium: !data.isPremium } : data
      )
    );
  };

  const search = () => {
    return datas.filter(
      (ca) =>
        ca.title.toLowerCase().includes(quary.toLowerCase()) ||
        ca.brand.toLowerCase().includes(quary.toLowerCase())
    );
  };

  return (
    <div className="mx-auto px-4 py-2">
      <Header />
      <SearchBox show={show} setShow={setShow} setQuary={setQuary} />
      <CarsList
        search={search()}
        onIsFavourite={toggleFavourite}
        onDeleteCars={deleteCars}
      />
    </div>
  );
};

export default CarsBoard;
