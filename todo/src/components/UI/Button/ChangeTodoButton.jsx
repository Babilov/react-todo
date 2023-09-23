import React from "react";
import { BsPencil } from "react-icons/bs"
import cl from "./ButtonStyles/ChangeTodoButton.module.css"

export const ChangeTodoButton = ({ todo, setId }) => {

    const handleChanging = () => {
        setId(todo.id)
    }

    return (
        <BsPencil onClick={handleChanging} className={cl.changeButton}></BsPencil>
    )
}