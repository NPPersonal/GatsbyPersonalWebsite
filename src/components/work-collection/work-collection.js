import * as React from "react";
import { Masonry } from "@mui/lab";
import WorkCard from "../work-card/work-card";
import { getCloudinaryImage } from "../../libs/cloudinary";
import GatsbyStyledLink from "../gatsby-styled-link/gatsby-styled-link";
import { ExGrow } from "../mui-extension/transition-extension";

const WorkCollection = ({ mdxDataNodes }) => {
  return (
    <Masonry
      columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
      spacing={{ xs: 2, sm: 2, md: 4, lg: 5, xl: 6 }}
    >
      {mdxDataNodes.map((item, i) => {
        const image = getCloudinaryImage(item.frontmatter.preview_img_id)
          .format("auto")
          .quality("auto");
        return (
          <GatsbyStyledLink
            key={item.id}
            to={`/projects/${item.frontmatter.slug}`}
          >
            <ExGrow in timeout={1000}>
              <WorkCard
                cloudinaryImage={image}
                name={item.frontmatter.name}
                description={item.frontmatter.description}
              />
            </ExGrow>
          </GatsbyStyledLink>
        );
      })}
    </Masonry>
  );
};

export default WorkCollection;
