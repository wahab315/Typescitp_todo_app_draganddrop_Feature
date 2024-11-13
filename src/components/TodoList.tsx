import React from "react";
import SingleTodo from "./SingleTodo";
import { TodoModel } from "../models/todoModels";

interface props {
  todos: Array<TodoModel>;
}

const TodoList: React.FC<props> = ({ todos }) => {
  return (
    <>
      <div className="container">
        {todos.map((el) => (
          <SingleTodo text={el.text} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
