export function Events() {

  const changeName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value)
  }

  return (
    <div>
      <h2>Basic Events</h2>

      <div>
        <label>Name: </label><input type="text" onChange={ changeName } />
      </div>

      <div>
        <label>Name: </label><input type="text" onChange={ (e) => changeName(e)  } />
      </div>
    </div>
  )

}
