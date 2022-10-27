import { useState } from "react";
import { useTodo } from "../hooks/useTodo"
import { TodoContext } from "./TodoContext"

export const TodoProvider = ({children}) => {

    const [activeTodo, setActiveTodo] = useState('all');
    const usetodo= useTodo();

  return (
    <TodoContext.Provider value={{...usetodo, activeTodo, setActiveTodo}} >
        { children }
    </TodoContext.Provider>
)
}
