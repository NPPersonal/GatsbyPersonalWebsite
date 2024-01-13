import * as React from "react";
import MainLayout from "../../layouts/main-layout";
import { useMediumRSS } from "../../hooks/use-medium-rss";
import {
  CircularProgress,
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

const blogLink = "https://medium.com/software-dev-explore";

const Blog = () => {
  const {
    feed,
    items,
    fetching,
    error,
    getRSSFeed,
    thumbnailFromContent,
    htmlToText,
  } = useMediumRSS();

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
        <CircularProgress />
      </CommonLayout>
    );
  }

  return (
    <CommonLayout>
      {feed && (
        <Typography className="my-4" variant="h3" align="center">
          {feed["description"]}
        </Typography>
      )}
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
          More ➡
        </Button>
      </Box>
    </CommonLayout>
  );
};

export default Blog;

export const Head = () => (
  <Seo title="Blog" description="My blogs from Medium" />
);
