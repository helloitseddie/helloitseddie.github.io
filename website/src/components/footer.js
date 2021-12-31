import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import GetWindow from "./getWindow";

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: "#333",
    marginTop: "auto",
    position: "flex",
  },
  text: {
    color: "white",
    fontFamily: "Lato",
    fontSize: "0.8em",
    margin: 0,
  },
  tabContainer: {
    margin: 0,
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { height } = GetWindow();
  const divRef = useRef();
  const [offset, setOffset] = useState(height - 50);

  useEffect(() => {
    if (divRef.current !== undefined) {
      setOffset(
        divRef.current.offsetHeight + divRef.current.offsetTop >= height - 50
          ? height - 100
          : divRef.current.offsetHeight + divRef.current.offsetTop
      );
    }
  }, [divRef, height]);

  return (
    <React.Fragment>
      <div ref={divRef}></div>
      <Grid
        container
        spacing={2}
        alignItems="stretch"
        justifyContent="center"
        direction="row"
        className={classes.bar}
        style={{ height: `calc(100vh - ${offset}px)` }}
      >
        <Grid item xs={6} style={{ textAlign: "right", marginTop: "0.5em" }}>
          <Typography className={classes.text} component="p">
            © Copyright - AC Engineering, Inc. All Rights Reserved | Developed
            by Edward Briscoe
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            textAlign: "left",
            marginTop: "0.5em",
            marginBottom: "0.5em",
          }}
        >
          <Typography
            className={classes.text}
            component={Link}
            to="/"
            style={{ textDecoration: "none" }}
          >
            Home |{" "}
          </Typography>
          <Typography
            className={classes.text}
            component={Link}
            to="/about"
            style={{ textDecoration: "none" }}
          >
            About Us |{" "}
          </Typography>
          <Typography
            className={classes.text}
            component={Link}
            to="/services"
            style={{ textDecoration: "none" }}
          >
            Services |{" "}
          </Typography>
          <Typography
            className={classes.text}
            component={Link}
            to="/clients"
            style={{ textDecoration: "none" }}
          >
            Clients |{" "}
          </Typography>
          <Typography
            className={classes.text}
            component={Link}
            to="/contact"
            style={{ textDecoration: "none" }}
          >
            Contact Us
          </Typography>
        </Grid>
        <Box sx={{ display: "flex" }} className={classes.bar}></Box>
      </Grid>
    </React.Fragment>
  );
}
