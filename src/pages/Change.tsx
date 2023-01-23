import { useState } from "react"

export function Change() {

  const [name, setName] = useState("")

  const changeName: React.ChangeEventHandler<HTMLInputElement> = ( event ) => {

  }

  return (
    <div>
      <h2>Basic Events</h2>

      <div>
        <label>Name: </label><input type="text" onChange={changeName} autoComplete="off" />
      </div>

      <div>
        <label>Name: </label><input type="text" onChange={(e) => changeName(e)} autoComplete="off" />
      </div>
    </div>
  )

}
