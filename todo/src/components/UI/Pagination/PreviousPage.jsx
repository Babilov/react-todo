import React from "react";
import { BsArrowLeftSquare } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux";
import { previousPageAction, setFirstPageAction, setLastPageAction } from "../../../store/pageReducer";
import cl from "./MyPaginationBtn.module.css"


export const PreviousPage = () => {

    const isFirstPage = useSelector(store => store.page.isFirstPage)

    const previousPage = () => {
        dispatch(previousPageAction())
        dispatch(setLastPageAction())
        dispatch(setFirstPageAction())
    }


    const dispatch = useDispatch()

    return (
        <div onClick={previousPage} className={(isFirstPage) ? cl.disabled : "btn"}><BsArrowLeftSquare></BsArrowLeftSquare></div>
    )
}