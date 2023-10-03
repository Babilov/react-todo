import { getCursorPosition } from "../utils/getCursorPosition";

const defaultState = {
  todos: [],
  filtredTodos: [],
  filter: "",
};

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const FILTER_TODO = "FILTER_TODO";

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      if (!state.filter || action.payload.todo.indexOf(state.filter) === -1) {
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      } else {
        return {
          ...state,
          todos: [...state.todos, action.payload],
          filtredTodos: [...state.filtredTodos, action.payload],
        };
      }

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        filtredTodos: state.filtredTodos.filter(
          (todo) => todo.id !== action.payload
        ),
      };

    case UPDATE_TODO:
      const [selectionStart, inputType] = getCursorPosition(action);
      let char = "";
      let value = state.todos.filter(
        (todo) => todo.id === action.payload.todo.id
      )[0];

      if (inputType === "insertText") {
        char = action.payload.event.nativeEvent.data;
        value.todo =
          value.todo.slice(0, selectionStart - 1) +
          char +
          value.todo.slice(selectionStart - 1);
      } else {
        if (
          inputType === "deleteContentBackward" ||
          inputType === "deleteContentForward"
        ) {
          value.todo =
            value.todo.slice(0, selectionStart) +
            value.todo.slice(selectionStart + 1);
        }
      }

      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === value.id ? value : todo)),
        filtredTodos: state.filtredTodos.map((todo) =>
          todo.id === value.id ? value : todo
        ),
      };

    case FILTER_TODO:
      if (action.payload) {
        return {
          ...state,
          filtredTodos: state.todos.filter(
            (todo) => todo.todo.indexOf(action.payload) !== -1
          ),
          filter: action.payload,
        };
      } else {
        return {
          ...state,
          filtredTodos: [],
          filter: null,
        };
      }

    default:
      return state;
  }
};

export const addTodoAction = (payload) => ({ type: ADD_TODO, payload });
export const removeTodoAction = (payload) => ({ type: REMOVE_TODO, payload });
export const updateTodoAction = (payload) => ({ type: UPDATE_TODO, payload });
export const filterTodoAction = (payload) => ({ type: FILTER_TODO, payload });
