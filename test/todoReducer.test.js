import { todoReducer } from "../src/todoReducer"

describe('Pruebas en todoReducer', () => {
    
    const initialState = [
        { id: 1, description: 'tarea 1', done: false },
        { id: 2, description: 'tarea 2', done: false },
    ];

    test('debe regresar el valor inicial', () => {

        const todos = todoReducer(initialState,);
        expect(initialState).toStrictEqual(todos);

    });

    test('debe agregar el todo', () => {

        const action = {
            type: 'ADD',
            payload: {
                id: 3,
                description: 'tarea nueva',
                done: true
            }
        }

        const todos = todoReducer(initialState, action);
        expect(todos.includes(action.payload)).toBeTruthy();
        expect(todos).toContain(action.payload);
        
    });

    test('debe eliminiar el todo', () => { 

        const action = {
            type:'DELETE',
            payload: 1
        }
        
        const todos = todoReducer(initialState, action);
        expect(todos.length).toBe(1);
        expect(todos).toHaveLength(1);
     })
    test('debe hacer el togle del todo', () => { 

        const action = {
            type:'TOGGLE',
            payload: 1
        }
        
        const todos = todoReducer(initialState, action);
        expect(todos[0].done).toBeTruthy();

    });

    test('debe editar un todo', () => { 
        const description = "Hacer testing";

        const action = {
            type:'EDIT',
            payload: {
                id: 1,
                description
            }
        }
        
        const todos = todoReducer(initialState, action);
        expect(todos[0].description).toBe(description);

    });
})