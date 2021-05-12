import React from "react";


function Search({ searchTerm, onUpdatedSearch }) {
    return (
      <div>
        <label>Search</label>
        <input
        type="text"
        id="search"
        placeholder="search"
        value={searchTerm}
        onChange={(e) => onUpdatedSearch(e.target.value)}
        />
      </div>
    );
  }
  
  export default Search;
  