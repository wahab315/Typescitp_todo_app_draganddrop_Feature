import React, { useState } from "react";
import InputField from "./components/InputField";
import { TodoModel } from "./models/todoModels";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<TodoModel>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: uuidv4(), text: todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log("Todos in app", todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        // CompletedTodos={CompletedTodos}
        // setCompletedTodos={setCompletedTodos}
      />
    </div>
  );
};

export default App;
