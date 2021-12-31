import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Footer from "../components/footer";
import GetWindow from "../components/getWindow";

import background from "../assets/bgHome.png";
import liebert from "../assets/liebert.png";
import liebertg from "../assets/liebertg.png";
import seresco from "../assets/seresco.png";
import serescog from "../assets/serescog.png";
import fauv from "../assets/fauv.png";
import fauvg from "../assets/fauvg.png";

const useStyles = makeStyles((theme) => ({
  articleContainer: {
    marginTop: "8vh",
    marginRight: 0,
    marginLeft: 0,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "center",
    float: "center",
  },
  brands: {
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  brandName: {
    color: theme.palette.common.blue,
    margin: "auto",
    fontSize: "2em",
    fontFamily: "Lato",
    fontWeight: 0,
  },
  brandDesc: {
    color: theme.palette.common.gray,
    fontSize: "1em",
    fontFamily: "Lato",
    fontWeight: 0,
    margin: "auto",
  },
  logo: {
    float: "right",
    margin: "2em",
    width: "100%",
    height: "auto",
  },
  logog: {
    margin: "auto",
    width: "100%",
    height: "auto",
  },
  divLine: {
    width: "75%",
    color: theme.palette.common.blue,
    backgroundColor: theme.palette.common.blue,
    height: 1,
  },
}));

const Home = () => {
  const classes = useStyles();
  const { width } = GetWindow();
  let textAlignmentLeft = width > 1350 ? "left" : "center";
  let textAlignmentRight = width > 1350 ? "right" : "center";
  let articleWidth = width > 800 ? "75%" : "100%";

  useEffect(() => {
    document.body.style = `background-image: url("${background}")`;
  }, []);

  return (
    <>
      <Grid container spacing={2} alignItems="stretch" justifyContent="center">
        <Paper
          elevation={0}
          className={classes.articleContainer}
          style={{ width: articleWidth }}
        >
          <Box style={{ marginBottom: "7em" }}></Box>
          <Box className={classes.brands}>
            <Grid item xs={5} style={{ textAlign: "center" }}>
              <Button
                target="_blank"
                href="https://www.vertiv.com/en-us/products/brands/liebert/"
              >
                <img alt="liebert" src={liebert} className={classes.logo} />
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.brandName} component="p">
                LIEBERT
              </Typography>
              <hr className={classes.divLine} style={{ float: "left" }} />
              <br />
              <br />
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - Precision AC units
              </Typography>
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - Uninterruptible Power System (UPS)
              </Typography>
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - Power Distribution Units
              </Typography>
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - Monitoring
              </Typography>
            </Grid>
          </Box>
          <Box style={{ marginBottom: "2em" }}></Box>
          <Box className={classes.brands}>
            <Grid item xs={5} style={{ textAlign: "center" }}>
              <Button target="_blank" href="https://serescodehumidifiers.com/">
                <img alt="seresco" src={seresco} className={classes.logo} />
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.brandName} component="p">
                SERESCO
              </Typography>
              <hr className={classes.divLine} style={{ float: "left" }} />
              <br />
              <br />
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - 100% OA Units
              </Typography>
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - Natatorium Units
              </Typography>
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - Spa Units
              </Typography>
            </Grid>
          </Box>
          <Box style={{ marginBottom: "2em" }}></Box>
          <Box className={classes.brands}>
            <Grid item xs={5} style={{ textAlign: "center" }}>
              <Button target="_blank" href="https://www.freshaireuv.com/">
                <img alt="fauv" src={fauv} className={classes.logo} />
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.brandName} component="p">
                FRESH-AIRE UV
              </Typography>
              <hr className={classes.divLine} style={{ float: "left" }} />
              <br />
              <br />
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - HVAC Ultraviolet Indoor System
              </Typography>
            </Grid>
          </Box>
          <Box style={{ marginBottom: "2em" }}></Box>
          <Box
            className={classes.brands}
            style={{ textAlign: "center", alignItems: "center" }}
            display="flex"
            flexDirection={width > 850 ? "row" : "column"}
          >
            <Grid item xs={5}>
              <Typography className={classes.brandName} component="p">
                SOLUTIONS FOR:{" "}
              </Typography>
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - Residential
              </Typography>
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - Commercial
              </Typography>
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - Industrial
              </Typography>
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - Institutional
              </Typography>
              <br />
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.brandName} component="p">
                SPECIALIZING IN:{" "}
              </Typography>
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - Precision Cooling
              </Typography>
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - Dehumidification
              </Typography>
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - Power
              </Typography>
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - Racks & Cabinets
              </Typography>
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - Secure Technology Infrastructure
              </Typography>
            </Grid>
          </Box>
          <hr className={classes.divLine} style={{ marginTop: "1.5em" }} />
          <Box
            className={classes.brands}
            display="flex"
            flexDirection={width > 1350 ? "row" : "column"}
          >
            <Grid
              item
              xs={width > 1200 ? 3 : 4}
              style={{ textAlign: textAlignmentRight }}
            >
              <img
                alt="liebertg"
                src={liebertg}
                className={classes.logog}
                style={{ alignSelf: "right" }}
              />
            </Grid>
            <Grid
              item
              xs={width > 1200 ? 3 : 4}
              style={{ textAlign: "center" }}
            >
              <img
                alt="fauvg"
                src={fauvg}
                className={classes.logog}
                style={{ alignSelf: "center" }}
              />
            </Grid>
            <Grid
              item
              xs={width > 1200 ? 3 : 4}
              style={{ textAlign: textAlignmentLeft }}
            >
              <img
                alt="serescog"
                src={serescog}
                className={classes.logog}
                style={{ alignSelf: "left" }}
              />
            </Grid>
          </Box>
          <Box style={{ marginBottom: "1em" }}></Box>
        </Paper>
        <Footer />
      </Grid>
    </>
  );
};

export default Home;
