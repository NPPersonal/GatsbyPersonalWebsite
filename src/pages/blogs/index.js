// i18next-extract-mark-ns-start blogs

import * as React from "react";
import { useMediumRSS } from "../../hooks/use-medium-rss";
import ReactLoading from "react-loading";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Box,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import CommonLayout from "../../layouts/common-layout";
import Seo from "../../components/seo/seo";
import { MUIThemeContext } from "../../components/mui-theme/mui-theme-provider";
import SpinText from "../../components/spin-text/spin-text";
import RenderInView from "../../components/render-in-view/render-in-view";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";

const blogLink = "https://medium.com/software-dev-explore";

const Blog = () => {
  const { t } = useI18next();
  const {
    feed,
    items,
    fetching,
    error,
    getRSSFeed,
    thumbnailFromContent,
    htmlToText,
  } = useMediumRSS();

  const { theme } = React.useContext(MUIThemeContext);
  const loadingColor = theme.palette.loading.main;
  const letterSpinColor = theme.palette.spinLetter.main;

  const datetimeToDate = (datetime) => {
    const newDateTime = new Date(datetime);
    return newDateTime.toDateString();
  };

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  React.useEffect(() => {
    getRSSFeed("tomneo2004");
  }, []);

  if (error) {
    return <CommonLayout>Oooops something went wrong {error}</CommonLayout>;
  }

  if (fetching) {
    return (
      <CommonLayout>
        <Box className="flex justify-center my-8">
          <ReactLoading type="balls" color={loadingColor} />
        </Box>
      </CommonLayout>
    );
  }

  return (
    <CommonLayout>
      <RenderInView
        options={{
          delay: 1000,
          triggerOnce: true,
          trackVisibility: true,
        }}
      >
        <Typography className="my-4" variant="h3" align="center">
          <SpinText
            text={t("blogs-title")}
            duration={250}
            sequential
            randLetterColor={letterSpinColor}
          />
        </Typography>
      </RenderInView>
      <Grid container>
        {items.map((item, i) => {
          //extract thumnail from post content
          const thumbnail = thumbnailFromContent(item.content);

          //extract short text from content which is html string
          const shortContent = htmlToText(item.content, 0, 400, " .....");
          return (
            <Grid
              key={`${item["title"]}-${i}`}
              className="p-4 flex justify-center content-center"
              item
              xs={12}
              md={6}
            >
              <Card
                className="cursor-pointer w-[100%] hover:scale-105 transition duration-150 ease-in-out"
                raised
                onClick={() => openLink(item["link"])}
              >
                <CardHeader
                  title={item["title"]}
                  subheader={datetimeToDate(item["pubDate"])}
                  avatar={<Avatar src={feed["image"]} />}
                />
                <CardMedia
                  component="img"
                  image={thumbnail}
                  height={300}
                  alt={`${item["title"]}-thumbnail`}
                />
                <Box className="flex flex-wrap content-between">
                  {item["categories"].map((cat, i) => {
                    return (
                      <Chip className="m-2" key={`${cat}-${i}`} label={cat} />
                    );
                  })}
                </Box>
                <Typography
                  className="p-4 leading-[20px]"
                  variant="body1"
                  paragraph
                >
                  {shortContent}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Box className="py-4 flex justify-center">
        <Button variant="contained" onClick={() => openLink(blogLink)}>
          {t("more")} ➡
        </Button>
      </Box>
    </CommonLayout>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "blogs"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default Blog;

export const Head = () => (
  <Seo title="Blog" description="My blogs from Medium" />
);
