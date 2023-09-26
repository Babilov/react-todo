import React from "react";
import { useSelector } from "react-redux";

import { MyPagination } from "../Pagination/MyPagination";
import { TodoItem } from "../TodoItem/TodoItem";
import cl from "./TodoItemList.module.css";

export const TodoItemList = () => {
  const todos = useSelector((store) => store.todo.todos);
  const filtredTodos = useSelector((store) => store.todo.filtredTodos);
  const page = useSelector((store) => store.page.currentPage);

  const filtredTodosLength = filtredTodos.length;

  const todoList = filtredTodosLength ? filtredTodos : todos;

  return (
    <div>
      {todos.length ? (
        <div className={cl.todoItemsWithPagination}>
          <div>
            {todoList.slice(page * 5 - 5, page * 5).map((todo) => (
              <TodoItem key={todo.id} todo={todo}></TodoItem>
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
