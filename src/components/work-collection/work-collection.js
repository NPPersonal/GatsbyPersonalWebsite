import * as React from "react";
import { Masonry } from "@mui/lab";
import WorkCard from "../work-card/work-card";
import { getCloudinaryImage } from "../../libs/cloudinary";
import GatsbyStyledLink from "../gatsby-styled-link/gatsby-styled-link";

const WorkCollection = ({ mdxDataNodes }) => {
  return (
    <Masonry
      columns={{ xs: 1, sm: 2, md: 3 }}
      spacing={{ xs: 1, sm: 1, md: 4 }}
    >
      {mdxDataNodes.map((item) => {
        const image = getCloudinaryImage(item.frontmatter.preview_img_id)
          .format("auto")
          .quality("auto");
        return (
          <GatsbyStyledLink
            key={item.id}
            to={`/works/${item.frontmatter.slug}`}
          >
            <WorkCard
              cloudinaryImage={image}
              name={item.frontmatter.name}
              description={item.frontmatter.description}
            />
          </GatsbyStyledLink>
        );
      })}
    </Masonry>
  );
};

export default WorkCollection;
