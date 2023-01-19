export function Submit() {

  // submit event typically used to CREATE or UPDATE data
  // EVENT is just needed to cancel default form redirect

  const addItem: React.FormEventHandler<HTMLFormElement> = () => {

  }

  return (
    <div>
      <h2>Basic Events - SUBMIT</h2>

      <form onSubmit={ addItem }>
        <h2>Add Item</h2>
        <input type="text" name="name" placeholder="Insert Name..." autoComplete="off" />
        <button >Add</button>
      </form>

    </div>
  )

}
