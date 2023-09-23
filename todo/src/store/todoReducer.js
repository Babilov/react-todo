const defaultState = {
    todos: [],
}

const ADD_TODO = "ADD_TODO"
const REMOVE_TODO = "REMOVE_TODO"
const UPDATE_TODO = "UPDATE_TODO"

export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return ({ ...state, todos: [...state.todos, action.payload] })
        case REMOVE_TODO:
            return ({ ...state, todos: state.todos.filter(todo => todo.id !== action.payload) })
        case UPDATE_TODO:
            state.todos.forEach(todo => {
                if (todo.id === action.payload.todo.id) {
                    todo.todo += action.payload.event.nativeEvent.data
                }
            });
            return ({ ...state })



        default:
            return state
    }
}

export const addTodoAction = (payload) => ({ type: ADD_TODO, payload })
export const removeTodoAction = (payload) => ({ type: REMOVE_TODO, payload })
export const updateTodoAction = (payload) => ({ type: UPDATE_TODO, payload })