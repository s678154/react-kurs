import React from "react";
import { Typography, Box } from "@mui/material";

const Description = () => {
  // Teksten nedenfor kan redigeres av kursdeltakerne for å tilpasse beskrivelsen
  const descriptionText =
    "Start dagen din med oversikt og inspirasjon. Her på Daily får du tilgang til dine viktigste oppgaver, dagens vær og en daglig dose med inspirasjon.";

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        En ny dag, en ny mulighet
      </Typography>
      <Typography variant="body1">{descriptionText}</Typography>
    </Box>
  );
};

export default Description;
