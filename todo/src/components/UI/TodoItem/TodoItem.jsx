import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  previousPageAction,
  setFirstPageAction,
  setLastPageAction,
} from "../../../store/pageReducer";
import { removeTodoAction, updateTodoAction } from "../../../store/todoReducer";
import { RemoveTodoButton } from "../Button/RemoveTodoButton";
import { ChangeTodoButton } from "../Button/ChangeTodoButton";

import cl from "./TodoItem.module.css";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const todos = useSelector((store) => store.todo.todos);

  const [isEdit, setIsEdit] = useState(false);

  const todoTotal = todos.length - 1;

  const handleChange = (actionData) => {
    dispatch(updateTodoAction(actionData));
  };

  const handleBlur = () => {
    if (todo.todo.length === 0) {
      dispatch(removeTodoAction(todo.id));
      dispatch(setLastPageAction(todoTotal - 1));
      if (todoTotal % 5 === 0) {
        dispatch(previousPageAction());
      }
      dispatch(setFirstPageAction());
    }
    setIsEdit(false);
  };

  const handleEditClick = () => {
    setIsEdit(true);
  };

  return (
    <div className={cl.todoItem} key={todo.id}>
      {isEdit ? (
        <input
          onChange={(event) => handleChange({ event, todo })}
          type="text"
          className={cl.todoItemText}
          value={todo.todo}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span>{todo.todo}</span>
      )}

      <div className={cl.icons}>
        <ChangeTodoButton onClick={handleEditClick} />
        <RemoveTodoButton todo={todo} />
      </div>
    </div>
  );
};
