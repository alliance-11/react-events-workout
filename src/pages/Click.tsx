export function Click() {

  // button events to change data

  const addItem: React.MouseEventHandler<HTMLButtonElement> = () => {
  }

  const updateItem: React.MouseEventHandler<HTMLButtonElement> = () => {
  }

  const deleteItem: React.MouseEventHandler<HTMLButtonElement> = () => {
  }


  return (
    <div>
      <h2>Basic Events - CLICK</h2>

      <div>
        <button onClick={ addItem }>Add Item</button>
        <button onClick={ updateItem }>Update Item</button>
        <button onClick={ deleteItem }>Delete Item</button>
      </div>

    </div>
  )

}
