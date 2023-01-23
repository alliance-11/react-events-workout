import { useState } from "react";

export function Fruits() {
  // state for fruit DATA
  const [fruitStrings, setFruitStrings] = useState([
    "apple",
    "banana",
    "cherry",
  ]);
  const [fruitObjects, setFruitObjects] = useState([
    { _id: "f1", name: "apple" },
    { _id: "f2", name: "banana" },
    { _id: "f3", name: "cherry" },
  ]);

  // state for holding NEW items
  const [fruitStringNew, setFruitStringNew] = useState("");
  const [fruitObjectNew, setFruitObjectNew] = useState({
    _id: Math.random().toString(),
    name: "",
  });

  const onAddFruitFlat = () => {
    setFruitStrings([...fruitStrings, fruitStringNew]);
    setFruitStringNew("");
  };

  const handleFruitObjectChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFruitObjectNew({ ...fruitObjectNew, name: e.target.value });
  };

  const onAddFruitObject = () => {
    setFruitObjects([...fruitObjects, fruitObjectNew] )
    setFruitObjectNew({...fruitObjectNew, _id: Date.now().toString(), name:""})
  };

  return (
    <div>
      <h2>Data Add Training</h2>
      {/* STRING */}
      <div>
        <h3>Add Fruit "STRING"</h3>
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={fruitStringNew}
          onChange={(e) => setFruitStringNew(e.target.value)}
        />
        <button onClick={onAddFruitFlat}>Add</button>
      </div>
      {/* TODO: map through fruit strings and show */}
      <div className="fruits-flat">
        {fruitStrings.map((fruitString) => (
          <div key={fruitString} className="str">
            {fruitString}
          </div>
        ))}
      </div>
      {/* OBJECT */}
      <div>
        <h3>Add Fruit "OBJECT"</h3>
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={fruitObjectNew.name}
          onChange={handleFruitObjectChange}
        />
        <button onClick={onAddFruitObject}>Add</button>
      </div>
      {/* TODO: map through fruit objects and show */}
      <div className="fruits-objects">
        {fruitObjects.map((fruit) => (
          <div key={fruit._id} className="name">
            {fruit.name}
          </div>
        ))}
      </div>
    </div>
  );
}
