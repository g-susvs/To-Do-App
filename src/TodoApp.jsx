import { TodoAdd, TodoCounter, TodoList,  } from "./components"

export const TodoApp = () => {
  return (
    <div className="container">
      
      <div className="todo-header">
        <img src="./src/assets/icon-logo.png" alt="logo" />
        <h1>TODO-LIST</h1>
      </div>

      <TodoAdd />
      
      <TodoCounter />

      <TodoList />

    </div>
  )
}
