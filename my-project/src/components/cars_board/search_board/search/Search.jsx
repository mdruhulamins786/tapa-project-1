import React from "react";

const Search = ({ setQuary }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="search cars.."
        className="border rounded-md px-2 py-1 mr-2"
        onChange={(e) => setQuary(e.target.value)}
      />
    </div>
  );
};

export default Search;
