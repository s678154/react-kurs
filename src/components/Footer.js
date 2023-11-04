import * as React from "react";
import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box mt={5} py={3} textAlign="center" borderTop={1} borderColor="grey.200">
      <Typography variant="caption" display="block" gutterBottom>
        Nyttige Ressurser:
      </Typography>
      <Link href="https://react.dev" target="_blank" rel="noopener" mr={2}>
        React
      </Link>
      <Link href="https://vercel.com/" target="_blank" rel="noopener" mr={2}>
        Vercel
      </Link>
      <Link
        href="https://github.com/dittBrukernavn/dittRepo"
        target="_blank"
        rel="noopener"
        mr={2}
      >
        Github Repo
      </Link>
      <Link
        href="https://code.visualstudio.com/"
        target="_blank"
        rel="noopener"
        mr={2}
      >
        VSCode
      </Link>
      <Link href="https://nodejs.org/en/" target="_blank" rel="noopener" mr={2}>
        Node.js
      </Link>
      <Link href="https://mui.com/" target="_blank" rel="noopener" mr={2}>
        Material UI
      </Link>
      <Link
        href="https://desktop.github.com/"
        target="_blank"
        rel="noopener"
        mr={2}
      >
        GitHub Desktop
      </Link>
      {/* Flere lenker etter behov */}
    </Box>
  );
}
