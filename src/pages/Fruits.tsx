import { useState } from "react"

export function Fruits() {

  // state for fruit DATA
  const [fruitStrings, setFruitStrings] = useState(["apple", "banana", "cherry"])
  const [fruitObjects, setFruitObjects] = useState([
    { _id: "f1", name: "apple" },
    { _id: "f2", name: "banana" },
    { _id: "f3", name: "cherry" },
  ])

  // state for holding NEW items
  const [fruitStringNew, setFruitStringNew] = useState("")
  const [fruitObjectNew, setFruitObjectNew] = useState({ _id: Math.random(), name: "" })

  const onAddFruitFlat = () => {

  }

  const onAddFruitObject = () => {

  }

  return (
    <div>
      <h2>Data Add Training</h2>
      <div>
        <h3>Add Fruit (string)</h3>
        <input type="text" name="name" autoComplete="off" />
        <button>Add</button>
      </div>
      <div>
        <h3>Add Fruit (object)</h3>
        <input type="text" name="name" autoComplete="off"/>
        <button>Add</button>
      </div>

      {/* TODO: map through fruit strings and show */}
      <div className="fruits-flat">

      </div>
      {/* TODO: map through fruit objects and show */}
      <div className="fruits-objects">

      </div>
    </div>
  )

}