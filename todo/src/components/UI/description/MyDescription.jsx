import React from "react";

import cl from "./MyDescription.module.css";

export const MyDescription = () => {
  return (
    <div className={cl.description}>
      <h1 className={cl.description_h1}>ToDoList</h1>
      <h2 className={cl.description_h2}>
        This is a "TodoList" application that will help you organize your life
        effectively and manage your time successfully. This app offers a simple,
        intuitive interface that makes it easy to create and manage scheduled
        to-do lists.
      </h2>
    </div>
  );
};
