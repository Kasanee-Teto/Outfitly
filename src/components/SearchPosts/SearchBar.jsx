import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Cari judul post..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
