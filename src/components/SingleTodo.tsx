import React, { useState } from "react";
import { Todo } from "../Todo";
import { IconButton, Box, TextField } from "@mui/material";
import { Edit, Delete, CheckCircle } from "@mui/icons-material"; // Import MUI icons

interface SingleTodoProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<SingleTodoProps> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = () => {
    if (editTodo.trim() === "") return; // Prevent empty todo update

    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...t, todo: editTodo } : t))
    );
    setEdit(false); // Stop editing after saving the changes
  };

  const handleDelete = () => {
    // Logic for deleting the todo
    setTodos(todos.filter((t) => t.id !== todo.id)); // Removes the todo item from the list
    console.log("Delete clicked", todo.id);
  };

  const handleDone = () => {
    // Logic for marking the todo as done or not done
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...t, isDone: !t.isDone } : t))
    );
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
      onSubmit={(e) => {
        e.preventDefault();
        handleEdit(); // Save the edited todo when form is submitted
      }}
    >
      {/* Mark todo as done or strike through */}
      {todo.isDone ? <s>{todo.todo}</s> : <span>{todo.todo}</span>}

      <Box>
        {/* Edit Icon */}
        <IconButton
          color="primary"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(true); // Enable edit mode
            }
          }}
        >
          <Edit />
        </IconButton>

        {/* Delete Icon */}
        <IconButton color="error" onClick={handleDelete}>
          <Delete />
        </IconButton>

        {/* Complete Icon */}
        <IconButton color="success" onClick={handleDone}>
          <CheckCircle />
        </IconButton>
      </Box>

      {/* Edit Todo */}
      {edit && !todo.isDone && (
        <TextField
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          onBlur={handleEdit} // Save on blur (focus lost)
          autoFocus
          size="small"
          variant="outlined"
        />
      )}
    </form>
  );
};

export default SingleTodo;
