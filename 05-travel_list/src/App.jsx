import React, { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
const App = () => {
  const [items, setItems] = useState([]);

  function addHandleItems(item) {
    setItems((itemNo) => [...items, item]);
  }
  function deleteHandleItems(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setItems((items)=>items.map((item)=> item.id === id ? {...item, packed: !item.packed}:item))
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={addHandleItems} />
      <PackageList
        itemList={items}
        onDeleteItems={deleteHandleItems}
        onToggleItem={handleToggle}
      />
      <Stats />
    </div>
  );
};
const Logo = () => {
  return <h1>Far AwAy from Home</h1>;
};
const Form = ({ onAddItems }) => {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (description === "") return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      Add these Itema in Bucket list
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 5 }, (_, i) => i + 1).map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
const PackageList = ({ itemList, onDeleteItems,onToggleItem }) => {
  return (
    <div className="list">
      <ul>
        {itemList.map((items, id) => (
          <Item item={items} key={id} onDeleteItems={onDeleteItems} onToggleItem={ onToggleItem} />
        ))}
      </ul>
    </div>
  );
};
const Item = ({ item, onDeleteItems ,onToggleItem }) => {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={()=>onToggleItem(item.id) } />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button style={{ color: "red" }} onClick={() => onDeleteItems(item.id)}>
        X
      </button>
    </li>
  );
};
const Stats = () => {
  return (
    <div className="stats">
      You have x items on your list, and you have already packed X
    </div>
  );
};

export default App;
