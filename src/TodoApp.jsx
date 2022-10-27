import { TodoAdd, TodoCounter, TodoList, } from "./components"
import { TodoProvider } from "./context/TodoProvider"

export const TodoApp = () => {

  return (
    <TodoProvider>
      <div className="container">

        <div className="todo-header">
          {/* <img src="./assets/icon-logo.png" alt="logo" /> */}
          <h1>TODO-APP</h1>
        </div>

        <TodoAdd />

        <TodoCounter />

        <TodoList/>

      </div>
    </TodoProvider>
  )
}
