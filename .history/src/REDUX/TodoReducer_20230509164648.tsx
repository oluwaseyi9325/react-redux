
const TodoState={
    todos: [
        {
            id: '1',
            title: 'Todo One',
            completed: false,
        },
    ]
}

const TodoReducer = (state: TodoState, action: TodoAction): TodoState => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo: Todo = {
                id: uuidv4(),
                title: action.title,
                completed: false,
            }
            return {
                ...state,
                todos: [...state.todos, newTodo],
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.id),
            }
        default:
            return state
    }
}

export default TodoReducer