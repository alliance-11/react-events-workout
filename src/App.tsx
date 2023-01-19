import { useState } from 'react'
import './App.css'

function App() {

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
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Add Fruit (string)</h2>
          <input type="text" name="name" />
          <button>Add</button>
        </div>
        <div>
          <h2>Add Fruit (object)</h2>
          <input type="text" name="name" />
          <button>Add</button>
        </div>
        // TODO: map through fruit strings and show
        <div className="fruits-flat"></div>
        // TODO: map through fruit objects and show
        <div className="fruits-objects"></div>
      </header>
    </div>
  )
}

export default App
