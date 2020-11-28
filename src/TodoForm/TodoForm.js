import React from 'react'

function TodoForm({addTodo}) {
  const [value, setValue] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    if (!value) return;
    addTodo(value)
    setValue('')
  }

  return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="New ToDo"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }

export default TodoForm;
