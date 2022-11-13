import { render, renderHook, screen } from "@testing-library/react"
import { useContext } from "react"
import { BtnDelete, BtnEdit } from "../../src/components/Buttons"
import { TodoContext } from "../../src/context/TodoContext"
import { useTodo } from "../../src/hooks/useTodo"

describe('Prueba a botones', () => {


    test('Debe renderizar cada button correctamente', () => {

        render(
            <TodoContext.Provider value={{ ...useTodo }}>
                <BtnEdit />
                <BtnDelete />
                <BtnEdit />
            </TodoContext.Provider>
        );

    });

})