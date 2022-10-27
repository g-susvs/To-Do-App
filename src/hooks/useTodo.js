import { useReducer } from 'react'
import { todoReducer } from '../todoReducer'

const init = () => {

    const todos = JSON.parse(localStorage.getItem('todos')) 

    return (todos)
        ? todos
        : []

}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    localStorage.setItem('todos',JSON.stringify(todos)) // todos guardados

    const pendingCounter = todos.filter( todo => todo.done == false).length
    
    const completedCounter = todos.filter( todo => todo.done == true).length

    // const pendingTodos = todos.filter( todo => todo.done == false)
    
    // const completedTodos = todos.filter( todo => todo.done == true)

    const handleNewTodo = (description) => {
        const action = {
            type: 'ADD',
            payload: {
                id: new Date().getTime() * 3,
                description,
                done: false
            }
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: 'TOGGLE',
            payload: id
        })
    }
    const handleEditTodo = (id, description) => {
        dispatch({
            type: 'EDIT',
            payload: {
                id,
                description
            }
        })
    }

    return{
        todos,
        pendingCounter,
        completedCounter,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        handleEditTodo
    }
}
