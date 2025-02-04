import React from "react";
import Search from "./search/Search";
import ShowButton from "./show_button/ShowButton";

const SearchBox = ({ show, setShow, setQuary }) => {
  return (
    <div className="flex gap-2 mb-4">
      <Search setQuary={setQuary} />
      <ShowButton show={show} setShow={setShow} />
    </div>
  );
};

export default SearchBox;
