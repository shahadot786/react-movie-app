import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="search">
      <div>
        <img src="/search.svg" alt="Search Icon" />
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
