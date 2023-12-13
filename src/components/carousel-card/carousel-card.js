import * as React from "react";
import { Box } from "@mui/material";
import { CloudinaryImage } from "@cloudinary/url-gen";
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from "@cloudinary/react";
import { pad } from "@cloudinary/url-gen/actions/resize";

const CarouselCard = ({ imageId = "", imageHeight = 400 }) => {
  const image = new CloudinaryImage(imageId, {
    cloudName: "dgquji7zg",
  })
    .format("auto")
    .quality("auto");
  return (
    <Box className="flex justify-center items-center">
      <AdvancedImage
        style={{ height: imageHeight }}
        cldImg={image}
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
