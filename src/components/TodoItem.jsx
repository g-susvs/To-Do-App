import { useContext, useRef, useState } from "react"
import { TodoContext } from "../context/TodoContext"
import { BtnDelete, BtnEdit, BtnSave } from "./Buttons"

export const TodoItem = ({ todo }) => {


    const [edit, setEdit] = useState(false)
    const [description, setDescription] = useState(todo.description)
    const inputRef = useRef('')

    const { handleToggleTodo, handleEditTodo } = useContext(TodoContext)

    const onInputChange = (event) => {
        const { value } = event.target
        setDescription(value)
    }
    const focusInput = () => {
        inputRef.current.focus()
    }
    const onKeyUp = (event) => {
        if(event.keyCode == 13){
            handleEditTodo( todo.id ,description)
            setEdit(false)
        }
      }
    return (
        <li
            className="todo-item"
        >
            <input
                className="check"
                type="checkbox"
                onClick={ () => handleToggleTodo(todo.id) }
                defaultChecked={todo.done}
                />
            {
                (!edit)
                ? <label>
                        {todo.description}
                    </label>
                    : <input
                    ref={inputRef}
                    className="input-edit-todo"
                    placeholder="Agrega una tarea"
                    value={description}
                    onChange={onInputChange}
                    onKeyUp={onKeyUp}
                    />
            }

            <div className="options">
                {
                    (!edit)
                        ? <BtnEdit id={todo.id} edit={setEdit} focus={focusInput} />
                        : <BtnSave id={todo.id} description={description} edit={setEdit} />
                }

                <BtnDelete id={todo.id} />

            </div>

        </li>
    )
}
