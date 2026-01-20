"use client";

import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const handleOnSubmit = () => {};
  return (
    <form className="searchbar" onSubmit={handleOnSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer />
      </div>
    </form>
  );
};

export default SearchBar;
