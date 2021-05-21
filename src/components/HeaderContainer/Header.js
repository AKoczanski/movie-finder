import React from "react";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import SortMovies from "./SortMovies/SortMovies";

const Header = () => {
  return (
    <div className="header">
      <HeaderTitle />
      <SortMovies />
    </div>
  );
};

export default Header;
