import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPageAction } from "../../../store/pageReducer";
import { filterTodoAction } from "../../../store/todoReducer";
import cl from "./SearchTodo.module.css";

export const SearchTodo = () => {
  const handleChange = () => {
    dispatch(filterTodoAction(ref.current.value));
    dispatch(setPageAction(1));
  };

  const dispatch = useDispatch();

  const todos = useSelector((store) => store.todo.todos);

  const ref = useRef();

  return (
    <div className={cl.searchBlcok}>
      <h5>Search...</h5>
      <input ref={ref} onChange={handleChange} className={cl.search} />
    </div>
  );
};
