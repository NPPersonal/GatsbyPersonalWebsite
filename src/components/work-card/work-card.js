import * as React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const WorkCard = ({ onClick = null, preivew_img_url, name, description }) => {
  return (
    <Card
      className="group relative cursor-pointer hover:scale-105 transition duration-150 ease-in-out"
      raised
      onClick={onClick}
    >
      <CardMedia
        className="group-hover:blur-sm"
        component="img"
        image={preivew_img_url}
        alt={name}
      />
      <Box className="absolute invisible group-hover:visible top-0 left-0 right-0 bottom-0 px-4 py-4 text-white backdrop-blur-sm bg-black/50">
        <Typography className="mb-4" variant="h4" align="center">
          {name}
        </Typography>
        <Typography variant="body">{description}</Typography>
      </Box>
    </Card>
  );
};

export default WorkCard;
