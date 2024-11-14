import React, { useState, useRef, useEffect } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { MdSaveAlt } from "react-icons/md";
import { TodoModel } from "../models/todoModels";

interface props {
  text: string;
  id: string;
  isCompleted: boolean;
  todos: Array<TodoModel>;
  handleDone: () => void;
  handleDelete: () => void;
  setTodos: React.Dispatch<React.SetStateAction<Array<TodoModel>>>;
}

const SingleTodo: React.FC<props> = ({
  text,
  todos,
  id,
  setTodos,
  isCompleted,
  handleDone,
  handleDelete,
}) => {
  const [isEdit, setISEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(text);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleEditTodo = (id: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editTodo } : todo))
    );
    setISEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);

  return (
    <>
      <form action="submit" className="todos__single">
        {isEdit ? (
          <input
            type="todos__single--text"
            ref={inputRef}
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : (
          <>{isCompleted ? <s>{text}</s> : <span>{text}</span>}</>
        )}

        <div>
          {isEdit ? (
            <span className="icon" onClick={() => handleEditTodo(id)}>
              <MdSaveAlt />
            </span>
          ) : (
            <span
              className="icon"
              onClick={() => {
                setISEdit(!isEdit);
              }}
            >
              <AiFillEdit />
            </span>
          )}

          <span className="icon" onClick={handleDelete}>
            <AiFillDelete />
          </span>
          <span className="icon" onClick={handleDone}>
            <MdDone />
          </span>
        </div>
      </form>
    </>
  );
};

export default SingleTodo;
