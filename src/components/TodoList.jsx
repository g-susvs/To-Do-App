import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {

  const {todos, activeTodo} = useContext(TodoContext)
  let todoArr

  if(activeTodo == true || activeTodo == false){
    todoArr = todos.filter( todo => todo.done == activeTodo)
  }
  if(activeTodo == 'all'){
    todoArr = todos
  }

  return (
    <ul className="todo-list">
        {
            todoArr.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))
        }
    </ul>
  )
}
