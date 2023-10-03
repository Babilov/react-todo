import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodoAction } from "../../../store/todoReducer";
import { setPageAction } from "../../../store/pageReducer";
import cl from "./ButtonStyles/AddTodoButton.module.css";

export const AddTodoButton = ({ children, todo }) => {
  const dispatch = useDispatch();

  const todos = useSelector((store) => store.todo.todos);
  const filtredTodos = useSelector((store) => store.todo.filtredTodos);
  const currentPage = useSelector((store) => store.page.currentPage);

  const todosLength = filtredTodos.length
    ? filtredTodos.length + 1
    : todos.length + 1;

  const addTodo = (todo) => {
    if (todo) {
      const todoItem = {
        todo,
        id: Date.now(),
      };

      const action = {
        todosLength,
      };

      dispatch(addTodoAction(todoItem));
      currentPage * 5 < todosLength
        ? (action.page = Math.ceil(todosLength / 5))
        : (action.page = currentPage);
      dispatch(setPageAction(action));
    }
  };

  return (
    <button className={cl.btn} onClick={() => addTodo(todo)}>
      {children}
    </button>
  );
};
