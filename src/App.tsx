import React, { useState } from "react";
import { Container, Typography } from "@mui/material"; // Importing MUI components
import InputField from "./components/InputField";
import { Todo } from "./Todo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo(""); // Clear input after adding the task
    }
  };

  console.log(todos); // Log the todos array to check if tasks are added

  return (
    <Container maxWidth="sm">
      <Typography
        sx={{ marginLeft: 2 }}
        variant="h4"
        align="center"
        gutterBottom
      >
        Taskify App
      </Typography>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </Container>
  );
};

export default App;
