import * as React from "react";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { Stack } from "@mui/material";

export default function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Stack direction="column" spacing={2} mt={2}>
        <ToDoList />
      </Stack>
    </Container>
  );
}
