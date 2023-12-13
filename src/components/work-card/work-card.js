import * as React from "react";
import { Box, Card, Typography } from "@mui/material";
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from "@cloudinary/react";

const WorkCard = ({ onClick = null, cloudinaryImage, name, description }) => {
  return (
    <Card
      className="group relative cursor-pointer hover:scale-105 transition duration-150 ease-in-out"
      raised
      onClick={onClick}
    >
      <Box className="flex justify-center items-center">
        <AdvancedImage
          style={{ width: "-webkit-fill-available" }}
          cldImg={cloudinaryImage}
          plugins={[
            lazyload(),
            responsive({ steps: 100 }),
            placeholder({ mode: "blur" }),
          ]}
        />
      </Box>
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
