import React from "react";
import { removeTodoAction } from "../../../store/todoReducer";
import { useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";

export const RemoveTodoButton = ({ todo }) => {
    const dispatch = useDispatch();
    return (
        <BsTrash style={{ cursor: "pointer" }} onClick={() => dispatch(removeTodoAction(todo.id))}></BsTrash>
    )
}

