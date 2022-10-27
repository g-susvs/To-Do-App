
export const todoReducer = (initialState = [], action = {}) => {

    switch (action.type) {
        case 'ADD':
            return [action.payload, ...initialState];
            
        case 'DELETE':
            return initialState.filter(todo => todo.id != action.payload);
            
            case 'TOGGLE':
                return initialState.map(todo => {
                    if(todo.id == action.payload){
                        return {
                            ...todo,
                            done: !todo.done
                        }
                    }
                    return todo;
                });
                
        case 'EDIT':
            return initialState.map( todo => {
                if(todo.id == action.payload.id){
                    return {
                        ...todo,
                        description: action.payload.description
                    }
                }
                return todo
            });
        default:
            return initialState;
    }

}