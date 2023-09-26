import React from "react";
import { BsArrowRightSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { nextPageAction } from "../../../store/pageReducer";
import cl from "./MyPaginationBtn.module.css";

export const NextPage = () => {
  const dispatch = useDispatch();

  const isLastPage = useSelector((store) => store.page.isLastPage);
  const todos = useSelector((store) => store.todo.todos);

  const nextPage = () => {
    dispatch(nextPageAction(todos.length));
  };

  return (
    <div onClick={nextPage} className={isLastPage ? cl.disabled : cl.btn}>
      <BsArrowRightSquare />
    </div>
  );
};
