import React from "react";

const SortMovies = () => {
  return (
    <select className={"header__select"}>
      <option>Sort by...</option>
      <option>Title</option>
      <option>Mark: High-Low</option>
      <option>Mark: Low-High</option>
    </select>
  );
};

export default SortMovies;
