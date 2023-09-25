import React, { useState } from "react";
import { MyInput } from "../MyInput/MyInput";
import { AddTodoButton } from "../Button/AddTodoButton";
import { TodoItemList } from "../TodoItemList/TodoItemList"
import cl from "./MyMainBlock.module.css"

export const MyMainBlock = () => {

    const [todo, setTodo] = useState("");

    return (
        <div className={cl.mainBlock}>
            <div className={cl.inputDescriptionBlock}>
                <h5>Add Todo</h5>
                <div className={cl.inputBlock}>
                    <MyInput setTodo={setTodo}></MyInput>
                    <AddTodoButton todo={todo}>Submit</AddTodoButton>
                </div>
            </div>
            <div className={cl.todoBlock}>
                <h5>Todo List</h5>
                <TodoItemList></TodoItemList>
            </div>

        </div>
    )
}