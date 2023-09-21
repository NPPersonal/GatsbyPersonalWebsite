import * as React from "react";
import MainLayout from "../../layouts/main-layout";
import { useMediumRSS } from "../../hooks/use-medium-rss";
import {
  CircularProgress,
  Container,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Box,
  CardActions,
  IconButton,
  Avatar,
  Typography,
  Tooltip,
  Button,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";

const blogLink = "https://medium.com/software-dev-explore";

const Blog = () => {
  const { feed, items, fetching, error, getRSSFeed } = useMediumRSS();

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
    return <MainLayout>Oooops something went wrong {error}</MainLayout>;
  }

  if (fetching) {
    return (
      <MainLayout>
        <CircularProgress />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Container>
        {feed && (
          <Typography className="my-4" variant="h3" align="center">
            {feed["description"]}
          </Typography>
        )}
        <Grid container>
          {items.map((item, i) => {
            return (
              <Grid
                key={`${item["title"]}-${i}`}
                className="p-4 flex justify-center content-center"
                xs={12}
                md={6}
              >
                <Card
                  className="w-[100%] hover:scale-105 transition duration-150 ease-in-out"
                  raised
                >
                  <CardHeader
                    title={item["title"]}
                    subheader={datetimeToDate(item["pubDate"])}
                    avatar={<Avatar src={feed["image"]} />}
                  />
                  <CardMedia
                    component="img"
                    image={item["thumbnail"]}
                    height="190"
                    alt={`${item["title"]}-thumbnail`}
                  />
                  <Box className="flex flex-wrap content-between">
                    {item["categories"].map((cat, i) => {
                      return (
                        <Chip className="m-2" key={`${cat}-${i}`} label={cat} />
                      );
                    })}
                  </Box>
                  <CardActions>
                    <Tooltip title="See on Medium" arrow>
                      <IconButton onClick={() => openLink(item["link"])}>
                        <ArticleIcon />
                      </IconButton>
                    </Tooltip>
                  </CardActions>
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
      </Container>
    </MainLayout>
  );
};

export default Blog;
