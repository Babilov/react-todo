import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";

import { setPageAction } from "../../../store/pageReducer";
import { removeTodoAction } from "../../../store/todoReducer";

export const RemoveTodoButton = ({ todo }) => {
  const dispatch = useDispatch();

  const todos = useSelector((store) => store.todo.todos);
  const filtredTodos = useSelector((store) => store.todo.filtredTodos);
  const currentPage = useSelector((store) => store.page.currentPage);

  const todosLength = filtredTodos ? filtredTodos.length - 1 : todos.length - 1;

  const handleRemove = () => {
    dispatch(removeTodoAction(todo.id));
    const action = {
      todosLength: todosLength,
    };

    Math.ceil(todosLength / 5) < currentPage
      ? (action.page = currentPage - 1)
      : (action.page = currentPage);
    dispatch(setPageAction(action));
  };

  return <BsTrash style={{ cursor: "pointer" }} onClick={handleRemove} />;
};
