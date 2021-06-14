import React from "react";
import {
  Container,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  root: {
    width: "66vw",
    height: "117vh",
  },
}));
const Products = () => {
  const Classes = useStyles();
  return (
    <div className="col-10 m-5 p-5 mx-auto">
      <div className="Box m-5 p-5">
        <Container className={Classes.root}>
          <img src="../images/leave.png" className="rounded" alt="..." />
          <h1 className="text-center  mb-sm-5">Welcome to Nature</h1>
          <p className="text-center para-nature m-5 p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Grid className="m-1 p-3 box-card" container spacing={3}>
            <Grid item sm={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className="card"
                    image="../images/organic.png"
                    style={{ height: 240 }}
                  />
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item sm={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className="card"
                    image="../images/organicfill.png"
                    style={{ height: 240 }}
                  />
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item sm={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className="card"
                    image="../images/organic.png"
                    style={{ height: 240 }}
                  />
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item sm={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className="card"
                    image="../images/organic.png"
                    style={{ height: 240 }}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Products;
