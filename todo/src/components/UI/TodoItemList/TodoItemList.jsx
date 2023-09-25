import React from "react";
import { useSelector } from "react-redux";

import { MyPagination } from "../Pagination/MyPagination";
import { TodoItem } from "../TodoItem/TodoItem";
import cl from "./TodoItemList.module.css";

export const TodoItemList = () => {
  const todos = useSelector((store) => store.todo.todos);
  const page = useSelector((store) => store.page.currentPage);
  return (
    <div>
      {todos.length > 0 ? (
        <div className={cl.todoItemsWithPagination}>
          <div>
            {todos.slice(page * 5 - 5, page * 5).map((todo) => (
              <TodoItem todo={todo}></TodoItem>
            ))}
          </div>
          <MyPagination />
        </div>
      ) : (
        <div className={cl.noTodos}> No todos yet... </div>
      )}
    </div>
  );
};
