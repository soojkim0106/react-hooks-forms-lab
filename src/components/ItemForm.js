import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [categoryName, setCategoryName] = useState("Produce");
  const [newFood, setNewFood] = useState("");

  const onHandleCategory = (e) => {
    setCategoryName(e.target.value);
  };

  const onNewFood = (e) => {
    setNewFood(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: newFood,
      category: categoryName,
    });
    setNewFood("");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onNewFood} value={newFood} />
      </label>

      <label>
        Category:
        <select
          name="category"
          onChange={onHandleCategory}
          value={categoryName}
        >
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
