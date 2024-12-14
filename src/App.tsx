import React, { useState } from "react";
import { Container, Typography } from "@mui/material"; // Importing MUI components
import InputField from "./components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
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
      <div>
        {/* Displaying the list of todos */}
        {todos.map((task) => (
          <div key={task.id}>
            <span>{task.todo}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default App;
