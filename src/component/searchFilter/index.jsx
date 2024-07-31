import React from "react";

function SearchFilter({ searchQuery, searchBook }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={searchBook}
      />
    </div>
  );
}

export default SearchFilter;
