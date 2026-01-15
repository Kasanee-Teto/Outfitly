import React, { useState } from "react";
import SearchBar from "./SearchBar";

const SearchPosts = ({ posts, onFilter }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (value) => {
    setQuery(value);
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );
    onFilter(filtered);
  };

  return (
    <div className="mb-4">
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default SearchPosts;
