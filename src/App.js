import * as React from "react";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import DailyQuote from "./components/DailyQuote";
import Footer from "./components/Footer";
import Stack from "@mui/material/Stack";
import CalendarWidget from "./components/CalendarWidget";
import WeatherWidget from "./components/WeatherWidget";

export default function App() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        px: {
          xs: 0,
          sm: 2,
          md: 2,
        },
      }}
    >
      <Header />
      <Stack
        spacing={2}
        mt={2}
        direction={{
          xs: "column",
          sm: "column",
          md: "row",
        }}
      >
        <Stack direction="column" spacing={2} flexGrow={1}>
          <ToDoList />
          <WeatherWidget />
          <DailyQuote />
        </Stack>
        <CalendarWidget />
      </Stack>
      <Footer />
    </Container>
  );
}
