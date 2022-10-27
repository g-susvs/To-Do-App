import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export const TodoCounter = () => {

  const {
    pendingCounter,
    completedCounter,
    activeTodo,
    setActiveTodo
  } = useContext(TodoContext)

  const onActiveTodo = (option)=>{
    (activeTodo == option)
      ? setActiveTodo('all')
      : setActiveTodo(option)
  }

  return (
    <section className="todo-counter">
      <div
        className={`pending ${( activeTodo == false)?'active-false':null}`}
        onClick={() => onActiveTodo(false)}>
        Pendientes
        <span className="counter">
          {pendingCounter}
        </span>
      </div>

      <div
        className={`completed ${( activeTodo == true )?'active-true':null}`}
        onClick={() => onActiveTodo(true) }>
          Completados
        <span className="counter">
          {completedCounter}
        </span>
      </div>
    </section>
  )
}
