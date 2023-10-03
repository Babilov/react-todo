import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPageAction } from "../../../store/pageReducer";
import { filterTodoAction } from "../../../store/todoReducer";
import cl from "./SearchTodo.module.css";

export const SearchTodo = () => {
  const dispatch = useDispatch();

  const filtredTodos = useSelector((store) => store.todo.filtredTodos);

  const ref = useRef();

  const handleChange = () => {
    dispatch(filterTodoAction(ref.current.value));
    const todosLength = filtredTodos.length;
    dispatch(setPageAction({ page: 1, todosLength }));
  };

  return (
    <div className={cl.searchBlcok}>
      <h5>Search...</h5>
      <input ref={ref} onChange={handleChange} className={cl.search} />
    </div>
  );
};
