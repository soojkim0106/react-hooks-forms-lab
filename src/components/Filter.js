import React from "react";

function Filter({
  onCategoryChange,
  search,
  selectedCategory,
  onSearchChange,
}) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        value={search}
        onChange={onSearchChange}
        placeholder="Search..."
      />
      <select
        name="filter"
        onChange={onCategoryChange}
        value={selectedCategory}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
