import { GitHub, LinkedIn, QuestionMarkRounded } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import * as React from "react";

const support_icons = {
  LinkIn: <LinkedIn />,
  GitHub: <GitHub />,
};

/**
 *
 * @param socialLinks an array of object of social links where object contain `title:string`,
 * `link:string`, `icon:Node|string`(if string then default supported icon will be used, supported icon
 * name are `LinkIn`, `GitHub`)
 * @param align align to `left`, `center` or `right` default `center`
 * @returns
 */
const SocialLinks = ({ socialLinks = [], align = "center" }) => {
  const link_aligns = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };
  const openLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <Box className={`m-2 flex ${link_aligns[align]} content-center`}>
      {socialLinks.map((link, i) => {
        let icon = (typeof link.icon === "string"
          ? support_icons[link.icon]
          : link.icon) || <QuestionMarkRounded />;
        return (
          <IconButton
            key={`${link.title}-${i}`}
            aria-label={`${link.title}`}
            onClick={() => openLink(link.link)}
          >
            {icon}
          </IconButton>
        );
      })}
    </Box>
  );
};

export default SocialLinks;
