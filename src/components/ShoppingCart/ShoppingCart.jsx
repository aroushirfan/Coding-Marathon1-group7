import { useState } from "react";
import "./ShoppingCart.css";

export default function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    brand: "",
    subtotal: "",
    tax: "",
    availability: ""
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  }

  function addItem() {
    if (!newItem.brand || !newItem.subtotal || !newItem.tax || !newItem.availability) return;

    setItems(prev => [...prev, newItem]);
    setNewItem({ brand: "", subtotal: "", tax: "", availability: "" });
  }

  function deleteItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  return (
    <div className="shopping-cart">
      <h1>🛒 Shopping Cart</h1>

      <div className="form">
        <input
          type="text"
          name="brand"
          placeholder="Brand..."
          value={newItem.brand}
          onChange={handleInputChange}
        />

        <input
          type="number"
          name="subtotal"
          placeholder="Subtotal..."
          value={newItem.subtotal}
          onChange={handleInputChange}
        />

        <input
          type="number"
          name="tax"
          placeholder="Tax..."
          value={newItem.tax}
          onChange={handleInputChange}
        />

        <select
          name="availability"
          value={newItem.availability}
          onChange={handleInputChange}
        >
          <option value="">Select Availability</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>

        <button onClick={addItem}>Add Item</button>
      </div>

      {items.length === 0 && <p className="empty">No items yet — add one!</p>}

      <ol>
        {items.map((item, index) => (
          <Item key={index} item={item} index={index} deleteItem={deleteItem} />
        ))}
      </ol>
    </div>
  );
}

function Item({ item, index, deleteItem }) {
  function handleDelete() {
    deleteItem(index);
  }

  return (
    <li className="item">
      <span>
        {item.brand} — ${item.subtotal} + Tax: ${item.tax} | {item.availability}
      </span>
      <button onClick={handleDelete}>❌ Delete</button>
    </li>
  );
}
