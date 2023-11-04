import React, { useState, useEffect } from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

export default function DailyQuote() {
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    fetch("https://api.quotable.io/random") // Eksempel på et sitat-API
      .then((response) => response.json())
      .then((data) => {
        setQuoteData(data);
      });
  }, []);

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack direction="column" spacing={1} maxWidth={620}>
          <Stack direction="row" spacing={1} color="gray">
            <LightbulbIcon color="inherit" />
            <Typography gutterBottom>Dagens sitat</Typography>
          </Stack>
          <Typography variant="body2" component="p">
            {quoteData?.content || "Laster inn tips..."}
          </Typography>
          <Typography variant="body2" component="p" color="gray">
            - {quoteData?.author}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
