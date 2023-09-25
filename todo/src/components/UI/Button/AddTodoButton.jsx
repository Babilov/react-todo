import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../../../store/todoReducer";
import cl from "./ButtonStyles/AddTodoButton.module.css"
import { setLastPageAction } from "../../../store/pageReducer";

export const AddTodoButton = ({ children, todo }) => {
    const todos = useSelector(store => store.todo.todos)
    const dispatch = useDispatch();

    const addTodo = (todo) => {
        if (todo) {
            const todoItem = {
                todo,
                id: Date.now(),
            }
            dispatch(addTodoAction(todoItem))
            dispatch(setLastPageAction(todos.length))
        }
    }

    return (
        <button className={cl.btn} onClick={() => addTodo(todo)}>
            {children}
        </button>
    )
}