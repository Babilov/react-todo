import React from "react";
import { BsArrowRightSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  nextPageAction,
  setFirstPageAction,
  setLastPageAction,
} from "../../../store/pageReducer";
import cl from "./MyPaginationBtn.module.css";

export const NextPage = () => {
  const dispatch = useDispatch();

  const isLastPage = useSelector((store) => store.page.isLastPage);

  const todos = useSelector((store) => store.todo.todos);

  const nextPage = () => {
    dispatch(nextPageAction());
    dispatch(setFirstPageAction());
    dispatch(setLastPageAction(todos.length - 1));
  };

  return (
    <div onClick={nextPage} className={isLastPage ? cl.disabled : "btn"}>
      <BsArrowRightSquare />
    </div>
  );
};
