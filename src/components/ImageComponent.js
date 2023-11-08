import React from "react";
import { Card, CardMedia } from "@mui/material";

const ImageComponent = () => {
  const imageUrl = "https://images.unsplash.com/photo-1508020268086-b96cf4f4bb2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D";
  // imageUrl og description props kan endres av kursdeltakerne
  return (
    <Card sx={{ my: 4 }}>
      <CardMedia component="img" image={imageUrl} height={650} />
    </Card>
  );
};

export default ImageComponent; 
