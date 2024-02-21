import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ handleSubmit }) {
  const [categoryName, setCategoryName] = useState("Produce");
  const [newFood, setNewFood] = useState("");

  const onHandleCategory = (e) => {
    setCategoryName(e.target.value);
  };

  const handleNewFood = (e) => {
    setNewFood(e.target.value);
  };

  const onItemFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      id: uuid(),
      name: newFood,
      category: categoryName,
    });
    setNewFood("");
  };

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleNewFood}
          value={newFood}
        />
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
