import React from "react";
import { removeTodoAction } from "../../../store/todoReducer";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { previousPageAction, setFirstPageAction, setLastPageAction } from "../../../store/pageReducer";

export const RemoveTodoButton = ({ todo }) => {
    const todos = useSelector(store => store.todo.todos)
    const todoTotal = todos.length - 1
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeTodoAction(todo.id))
        dispatch(setLastPageAction(todoTotal - 1))
        if (todoTotal % 5 === 0) {
            dispatch(previousPageAction())
        }
        dispatch(setFirstPageAction())

    }

    return (
        <BsTrash style={{ cursor: "pointer" }} onClick={handleRemove}></BsTrash>
    )
}

