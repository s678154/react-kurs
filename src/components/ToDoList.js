import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ToDoList() {
  const [tasks, setTasks] = React.useState(() => {
    // Get the tasks from localStorage
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = React.useState("");

  // Function to handle new task addition
  const addTask = () => {
    const updatedTasks = [...tasks, { text: newTask, completed: false }];
    setTasks(updatedTasks);
    setNewTask("");
    // Save to localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // Function to handle task completion
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // Function to handle task deletion
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index} dense button onClick={() => toggleTask(index)}>
          <Checkbox checked={task.completed} disableRipple />
          <ListItemText primary={task.text} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => deleteTask(index)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      <ListItem>
        <TextField
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTask()}
          fullWidth
          placeholder="Add a new task"
          variant="outlined"
          size="small"
        />
        <Button onClick={addTask}>Add</Button>
      </ListItem>
    </List>
  );
}
