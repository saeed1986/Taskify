import React from "react";
import { TextField, Button, Box } from "@mui/material"; // Importing MUI components

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  todo,
  setTodo,
  handleAdd,
}) => {
  return (
    <form onSubmit={handleAdd}>
      {" "}
      {/* Attach onSubmit to the form element */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <TextField
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          label="Enter a task"
          variant="outlined"
          fullWidth
          sx={{ marginRight: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginLeft: 2 }}
        >
          Go
        </Button>
      </Box>
    </form>
  );
};

export default InputField;
