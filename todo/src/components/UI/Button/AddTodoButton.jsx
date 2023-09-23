import React from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../../../store/todoReducer";
import cl from "./ButtonStyles/AddTodoButton.module.css"

export const AddTodoButton = ({ children, todo }) => {

    const dispatch = useDispatch();

    const addTodo = (todo) => {
        if (todo) {
            const todoItem = {
                todo,
                id: Date.now(),
            }
            dispatch(addTodoAction(todoItem))
        }
    }

    return (
        <button className={cl.btn} onClick={() => addTodo(todo)}>
            {children}
        </button>
    )
}