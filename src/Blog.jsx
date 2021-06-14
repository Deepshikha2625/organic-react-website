import React from "react";
import {
  Container,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  root: {
    width: "100vw",
    height: "100vh",
  },
}));
const Blog = () => {
  const Classes = useStyles();
  return (
    <div className="col-12 Blog">
      <div className="Box">
        <Container className={Classes.root}>
          <img src="../images/leave.png" className="rounded" alt="..."></img>
          <h1 className="text-center mb-sm-3">Read Our Blog</h1>
          <p className="text-center m-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Grid item xs={12} container spacing={2}>
            <Grid className="my-sm-3 mx-sm-5" item sm={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className="card"
                    image="../images/soap.png"
                    style={{ height: 220 }}
                  />
                </CardActionArea>
              </Card>
              <CardContent>
                <Typography variant="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </Typography>
                <br />
                <Typography variant="p" className="text">
                  Read More
                </Typography>
              </CardContent>
            </Grid>

            <Grid className="my-sm-3 mx-sm-5" item sm={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className="card"
                    image="../images/container-product.png"
                    style={{ height: 220 }}
                  />
                </CardActionArea>
              </Card>
              <CardContent>
                <Typography variant="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </Typography>
                <br />
                <Typography variant="p" className="text">
                  Read More
                </Typography>
              </CardContent>
            </Grid>

            <Grid className="my-sm-3 mx-sm-5" item sm={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className="card"
                    image="../images/Bottles.png"
                    style={{ height: 220 }}
                  />
                </CardActionArea>
              </Card>
              <CardContent>
                <Typography variant="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </Typography>
                <br />
                <Typography variant="p" className="text">
                  Read More
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
