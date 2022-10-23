import { TodoItem } from "./TodoItem"

export const TodoList = () => {

    const todos = ['dormir', 'cenar', 'leer', 'programar','dormir', 'cenar', 'leer', 'programar','dormir', 'cenar', 'leer', 'programar','dormir', 'cenar', 'leer', 'programar']

  return (
    <ul className="todo-list">
        {
            todos.map((todo, i) => (
                <TodoItem key={i} todo={todo}/>
            ))
        }
    </ul>
  )
}
