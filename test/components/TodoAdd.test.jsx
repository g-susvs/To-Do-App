import { render, screen } from "@testing-library/react"
import { TodoAdd } from "../../src/components"
import { TodoContext } from "../../src/context/TodoContext";
import { useTodo } from "../../src/hooks/useTodo";

describe('Pruebas en <TodoAdd />', () => { 

    test('debe renderiza correctamente', () => { 
        render(
            <TodoContext.Provider value={{ ...useTodo }}>
                <TodoAdd/>
            </TodoContext.Provider>
           
       );
       const btnAdd = screen.getByRole('button');

       expect(btnAdd.innerHTML).toBe('+');
     })

 })