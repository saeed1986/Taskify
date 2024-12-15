import React from "react";
import { Todo } from "../Todo";
import { IconButton, Box } from "@mui/material";
import { Edit, Delete, CheckCircle } from "@mui/icons-material"; // Import MUI icons

interface SingleTodoProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<SingleTodoProps> = ({
  todo,
  todos,
  setTodos,
}: SingleTodoProps) => {
  const handleEdit = () => {
    // Logic for editing the todo
    console.log("Edit clicked", todo.id);
  };

  const handleDelete = () => {
    // Logic for deleting the todo
    console.log("Delete clicked", todo.id);
  };

  const handleComplete = () => {
    // Logic for marking the todo as complete
    console.log("Complete clicked", todo.id);
  };

  return (
    <form
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "10px 0",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <span>{todo.todo}</span>
      <Box>
        {/* Edit Icon */}
        <IconButton color="primary" onClick={handleEdit}>
          <Edit />
        </IconButton>
        {/* Delete Icon */}
        <IconButton color="error" onClick={handleDelete}>
          <Delete />
        </IconButton>
        {/* Complete Icon */}
        <IconButton color="success" onClick={handleComplete}>
          <CheckCircle />
        </IconButton>
      </Box>
    </form>
  );
};

export default SingleTodo;
