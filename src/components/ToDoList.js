import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Stack,
} from "@mui/material";

const ToDoList = () => {
  const [todos, setTodos] = useState([]); // Holder styr på todos som en array
  const [input, setInput] = useState(""); // Holder styr på brukerens input

  // Legger til en ny todo i listen
  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input.trim()]);
      setInput(""); // Nullstiller input feltet etter å ha lagt til en todo
    }
  };

  // Håndterer endringer i input-feltet
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Stack direction="column" spacing={1}>
      <TextField
        label="Ny oppgave"
        variant="outlined"
        value={input}
        onChange={handleInputChange}
      />
      <Button onClick={addTodo} variant="contained" style={{ margin: "8px" }}>
        Legg til
      </Button>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index} secondaryAction={null}>
            <ListItemText primary={todo} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default ToDoList;
