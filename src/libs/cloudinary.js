import { CloudinaryImage } from "@cloudinary/url-gen";

const getCloudinaryImage = (publicId) => {
  return new CloudinaryImage(publicId, {
    cloudName: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
  });
};

export { getCloudinaryImage };
