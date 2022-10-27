import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"

export const TodoAdd = () => {

  const { handleNewTodo } = useContext(TodoContext)

  const [description, setDescription] = useState('')

  const onInputChange = (event) => {
    const { value } = event.target;
    setDescription(value)
  }

  const onKeyUp = (event) => {
    if (event.keyCode == 13) {
      if (description.trim().length <= 2) return
      handleNewTodo(description)
      setDescription('')
    }
  }

  return (
    <div className="todo-add">
      <input
        type="text"
        placeholder="Agrega una tarea"
        onChange={onInputChange}
        onKeyUp={onKeyUp}
        value={description}
      />
      <button
        className="btn-add"
        onClick={() => {
          if (description.trim().length <= 2) return
          handleNewTodo(description)
          setDescription('')
        }}
      >
        +
      </button>
    </div>

  )
}
