import React from "react";
import { Todo } from "../Todo";
import { List, Paper } from "@mui/material";
import SingleTodo from "./SingleTodo";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  setTodos,
}: TodoListProps) => {
  return (
    <Paper
      elevation={3} // Adds a shadow effect
      sx={{
        padding: 2,
        marginTop: 2,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
      }}
    >
      <List>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
