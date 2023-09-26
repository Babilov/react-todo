import React from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { previousPageAction, setPage } from "../../../store/pageReducer";
import cl from "./MyPaginationBtn.module.css";

export const PreviousPage = () => {
  const dispatch = useDispatch();

  const isFirstPage = useSelector((store) => store.page.isFirstPage);

  const previousPage = () => {
    dispatch(previousPageAction());
  };

  return (
    <div onClick={previousPage} className={isFirstPage ? cl.disabled : cl.btn}>
      <BsArrowLeftSquare />
    </div>
  );
};
