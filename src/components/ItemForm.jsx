import React, { useState } from "react";
import { v4 as uuid } from "uuid";

// ItemForm component
// Handles controlled form inputs and submits new items to parent state.
function ItemForm(props) {
  const [itemName, setInputText] = useState("")
  const [itemCategory, setCategorySelect] = useState("Produce")

  // Handles form submission and creates a new item object
  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    props.onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={(event) => { setInputText(event.target.value) }} value={itemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={(event) => { setCategorySelect(event.target.value) }} value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;