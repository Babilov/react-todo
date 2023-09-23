import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveTodoButton } from "../Button/RemoveTodoButton";
import { ChangeTodoButton } from "../Button/ChangeTodoButton";
import cl from "./TodoItem.module.css"
import { updateTodoAction } from "../../../store/todoReducer";

export const TodoItem = () => {

    const dispatch = useDispatch()
    const todos = useSelector(store => store.todo.todos)
    const [id, setId] = useState(0)

    const handleChange = (actionData) => {
        dispatch(updateTodoAction(actionData))
        console.log(todos)

    }

    return (
        <div>
            {todos.length > 0
                ? <div> {todos.map(todo =>
                    <div className={cl.todoItem} key={todo.id}>
                        <input onChange={(e) => handleChange({ event: e, todo })} type="text"
                            className={cl.todoItemText} value={todo.todo}
                            readOnly={id !== todo.id}
                            disabled={id !== todo.id}

                        />
                        <div>

                            <ChangeTodoButton todo={todo} setId={setId}></ChangeTodoButton>
                            <RemoveTodoButton todo={todo}></RemoveTodoButton>
                        </div>
                    </div>

                )}
                </div>
                : <div> No todos </div>
            }
        </div>
    )
}