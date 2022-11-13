import { render } from "@testing-library/react"
import { TodoApp } from "../src/TodoApp";

describe('Prueba <TodoApp />', () => {

    test('debe rederizar correctamente', () => {
        const {container} = render( <TodoApp />);

        expect(container).toMatchSnapshot();
    })

})