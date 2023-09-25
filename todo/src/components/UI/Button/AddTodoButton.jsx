import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodoAction } from "../../../store/todoReducer";
import { setLastPageAction } from "../../../store/pageReducer";
import cl from "./ButtonStyles/AddTodoButton.module.css";

export const AddTodoButton = ({ children, todo }) => {
  const dispatch = useDispatch();

  const todos = useSelector((store) => store.todo.todos);

  const addTodo = (todo) => {
    if (todo) {
      const todoItem = {
        todo,
        id: Date.now(),
      };
      dispatch(addTodoAction(todoItem));
      dispatch(setLastPageAction(todos.length));
    }
  };

  return (
    <button className={cl.btn} onClick={() => addTodo(todo)}>
      {children}
    </button>
  );
};
