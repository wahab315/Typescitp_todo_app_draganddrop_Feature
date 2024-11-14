import React from "react";
import SingleTodo from "./SingleTodo";
import { TodoModel } from "../models/todoModels";

interface props {
  todos: Array<TodoModel>;
  setTodos: React.Dispatch<React.SetStateAction<Array<TodoModel>>>;
}

const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  const handleCompleted = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="container">
        {todos.map((el) => (
          <SingleTodo
            todos={todos}
            setTodos={setTodos}
            key={el.id}
            id={el.id}
            text={el.text}
            isCompleted={el.isDone}
            handleDone={() => handleCompleted(el.id)}
            handleDelete={() => handleDelete(el.id)}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
