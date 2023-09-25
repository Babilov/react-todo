import React from "react";
import cl from "./MyInput.module.css";

export const MyInput = ({ setTodo }) => {
  return (
    <div>
      <input
        className={cl.input}
        type="text"
        onChange={(e) => setTodo(e.target.value)}
      />
    </div>
  );
};
