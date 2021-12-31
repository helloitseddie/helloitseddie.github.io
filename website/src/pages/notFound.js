import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Footer from "../components/footer";
import GetWindow from "../components/getWindow";

import background from "../assets/bgServices.png";

const useStyles = makeStyles((theme) => ({
  articleContainer: {
    marginTop: "8vh",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "center",
  },
  servicesBox: {
    marginTop: "5.5em",
    marginRight: "2em",
    marginLeft: "2em",
    marginBottom: "5.5em",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  typeTitle: {
    color: theme.palette.common.gray,
    fontSize: "3em",
    fontFamily: "Lato",
    fontWeight: 500,
  },
  typeSubTitle: {
    color: theme.palette.common.gray,
    fontSize: "1.5em",
    fontFamily: "Lato",
    fontWeight: 500,
  },
  type: {
    color: theme.palette.common.gray,
    fontSize: "1em",
    fontFamily: "Lato",
    fontWeight: 0,
  },
  divLineTitle: {
    width: "100%",
    color: theme.palette.common.blue,
    backgroundColor: theme.palette.common.blue,
    height: 1,
  },
  divLine: {
    width: "75%",
    color: theme.palette.common.blue,
    backgroundColor: theme.palette.common.blue,
    height: 1,
  },
}));

const NotFound = () => {
  const classes = useStyles();
  const { width } = GetWindow();
  let articleWidth = width > 800 ? "75%" : "100%";

  useEffect(() => {
    document.body.style = `background-image: url("${background}")`;
  }, []);

  return (
    <footer>
      <Grid container spacing={2} alignItems="stretch" justifyContent="center">
        <Paper
          elevation={0}
          className={classes.articleContainer}
          style={{ width: articleWidth }}
        >
          <Box className={classes.servicesBox}>
            <hr
              className={classes.divLineTitle}
              style={{ float: "left", marginTop: "2em" }}
            />
            <Grid item style={{ textAlign: "center" }}>
              <Typography className={classes.typeTitle} component="p">
                Services We Offer
              </Typography>
            </Grid>
            <hr className={classes.divLineTitle} style={{ float: "left" }} />
          </Box>
          <Box
            className={classes.servicesBox}
            style={{ textAlign: "center", alignItems: "center" }}
            display="flex"
            flexDirection={width > 850 ? "row" : "column"}
          >
            <Grid item xs={5} style={{ textAlign: "center" }}>
              <Typography className={classes.typeSubTitle} component="p">
                Power
              </Typography>
              <hr className={classes.divLine} style={{ float: "center" }} />
              <br />
              <Typography className={classes.type} component="p">
                {" "}
                - AC Power
              </Typography>
              <Typography className={classes.type} component="p">
                {" "}
                - Connectivity
              </Typography>
              <Typography className={classes.type} component="p">
                {" "}
                - DC Power
              </Typography>
              <Typography className={classes.type} component="p">
                {" "}
                - Power Stitching & Controls
              </Typography>
              <Typography className={classes.type} component="p">
                {" "}
                - Precision Cooling
              </Typography>
              <Typography className={classes.type} component="p">
                {" "}
                - Surge Protection
              </Typography>
            </Grid>
            <Box style={{ marginBottom: "4em" }}></Box>
            <Grid item xs={5} style={{ textAlign: "center" }}>
              <Typography className={classes.typeSubTitle} component="p">
                Dehumidification
              </Typography>
              <hr className={classes.divLine} style={{ float: "center" }} />
              <br />
              <Typography className={classes.type} component="p">
                {" "}
                - Refrigeration-based dehumidifiers
              </Typography>
              <Typography className={classes.type} component="p">
                {" "}
                - Dedicated out-door infrastructure
              </Typography>
              <Typography className={classes.type} component="p">
                {" "}
                - Infrastructure Management & Monitoring
              </Typography>
              <Typography className={classes.type} component="p">
                {" "}
                - Racks & Integrated Cabinets
              </Typography>
              <br />
              <br />
            </Grid>
          </Box>
        </Paper>
        <Footer />
      </Grid>
    </footer>
  );
};

export default NotFound;
