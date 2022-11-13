import { act, renderHook } from "@testing-library/react";
import { useTodo } from "../../src/hooks/useTodo"

describe('Prueba useTodo', () => {
    test('debe retornar los valores iniciales', () => {

        const { result } = renderHook(useTodo);
        const {
            todos,
            handleNewTodo,
            completedCounter,
            handleDeleteTodo,
            handleEditTodo,
            handleToggleTodo,
            pendingCounter
        } = result.current;

        expect(todos).toHaveLength(0);
        expect(completedCounter).toBe(0)
        expect(pendingCounter).toBe(0)
        expect(completedCounter).toEqual(expect.any(Number));
        expect(pendingCounter).toEqual(expect.any(Number));
        expect(handleNewTodo).toEqual(expect.any(Function));
        expect(handleToggleTodo).toEqual(expect.any(Function));
        expect(handleDeleteTodo).toEqual(expect.any(Function));
        expect(handleEditTodo).toEqual(expect.any(Function));
    });

    test('debe agregar todos', () => {
        const { result } = renderHook(useTodo);
        const { handleNewTodo } = result.current;
        act(() => handleNewTodo('tarea nueva'));
        
        expect(result.current.todos).toHaveLength(1);
        expect(result.current.pendingCounter).toBe(1);
        
    });
    
})