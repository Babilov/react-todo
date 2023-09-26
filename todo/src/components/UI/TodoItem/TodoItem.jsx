import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPageAction } from "../../../store/pageReducer";
import { removeTodoAction, updateTodoAction } from "../../../store/todoReducer";
import { RemoveTodoButton } from "../Button/RemoveTodoButton";
import { ChangeTodoButton } from "../Button/ChangeTodoButton";

import cl from "./TodoItem.module.css";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const todos = useSelector((store) => store.todo.todos);
  const currentPage = useSelector((store) => store.page.currentPage);

  const [isEdit, setIsEdit] = useState(false);

  const todosLength = todos.length - 1;

  const handleChange = (actionData) => {
    dispatch(updateTodoAction(actionData));
  };

  const handleBlur = () => {
    if (todo.todo.length === 0) {
      dispatch(removeTodoAction(todo.id));
      const action = {
        todosLength: todosLength,
      };
      Math.ceil(todosLength / 5) < currentPage
        ? (action.page = currentPage - 1)
        : (action.page = currentPage);
      dispatch(setPageAction(action));
    }
    setIsEdit(false);
  };

  const handleEditClick = () => {
    setIsEdit(true);
  };

  return (
    <div className={cl.todoItem}>
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
