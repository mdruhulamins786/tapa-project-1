import React, { useState } from "react";
import Header from "./header/Header";
import SearchBox from "./search_board/SearchBox";
import CarsList from "./cars_list/CarsList";
import cars from "../../../public/cars";

import AddCars from "../../page/AddCars";
import { addToLS, saveCartToLS } from "../../page/localStore";

const CarsBoard = () => {
  const [quary, setQuary] = useState("");
  const [show, setShow] = useState(false);
  const [datas, setData] = useState(cars);
  const [newData, setNewData] = useState([]);

  const addCars = (car) => {
    setNewData([...newData, car]);

    saveCartToLS(car.id);
  };

  console.log(newData);

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

      <AddCars cars={newData} />
      <CarsList
        search={search()}
        onIsFavourite={toggleFavourite}
        onAddCars={addCars}
      />
    </div>
  );
};

export default CarsBoard;
