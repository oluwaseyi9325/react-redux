
export const ADDACTION = (title: string) => {
    return {
        type: 'ADD_TODO',
        title,
    }
}

export const TOGGLEACTION = (id: string) => {
    return {
        type: 'TOGGLE_TODO',
        id,
    }
}

const TodoState={
    todos: [
        {
        },
    ]
}

const TodoReducer = (state= TodoState, action: any) => {
    console.log(action.t)
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {
                title: action.title,   
            }
            return {
                ...state,
                todos: [...state.todos, newTodo],
            }
        // case 'TOGGLE_TODO':
        //     return {
        //         ...state,
        //         todos: state.todos.map((todo) =>
        //             todo.id === action.id
        //                 ? { ...todo, completed: !todo.completed }
        //                 : todo
        //         ),
        //     }
        // case 'DELETE_TODO':
        //     return {
        //         ...state,
        //         todos: state.todos.filter((todo) => todo.id !== action.id),
        //     }
        default:
            return state
    }
}

export default TodoReducer