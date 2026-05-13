import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

// ShoppingList component
// Handles filtering items by category and search text,
// and renders the shopping list UI.
function ShoppingList({ items, onItemFormSubmit }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  // Updates selected category state when dropdown changes
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Updates search state when user types in search field
  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  // Filters items based on selected category and search text
  const itemsToDisplay = items.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;