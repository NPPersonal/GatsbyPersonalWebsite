import * as React from "react";
import { Box } from "@mui/material";
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from "@cloudinary/react";

const CarouselCard = ({ cloudinaryImage, imageHeight = 400 }) => {
  return (
    <Box className="flex justify-center items-center">
      <AdvancedImage
        style={{ height: imageHeight }}
        cldImg={cloudinaryImage}
        plugins={[
          lazyload(),
          responsive({ steps: 100 }),
          placeholder({ mode: "blur" }),
        ]}
      />
    </Box>
  );
};

export default CarouselCard;
