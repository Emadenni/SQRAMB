import React from "react";
import "./search.scss"
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    console.log("Search for:", query);
    //Logic research
  };

  return (
    <form className="search-container" onSubmit={handleSearch}>
      <input type="search" id="search" placeholder="Search..." />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
