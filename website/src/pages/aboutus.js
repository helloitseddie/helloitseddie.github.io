import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Footer from "../components/footer";
import GetWindow from "../components/getWindow";

import background from "../assets/bgAbout.png";
import liebert from "../assets/liebert.png";
import seresco from "../assets/seresco.png";
import fauv from "../assets/fauv.png";

const useStyles = makeStyles((theme) => ({
  articleContainer: {
    marginTop: "8vh",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "center",
  },
  aboutUsBox: {
    marginTop: "5em",
    marginRight: "2em",
    marginLeft: "2em",
    marginBottom: "3em",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  type: {
    color: theme.palette.common.gray,
    fontSize: "1em",
    fontFamily: "Lato",
    fontWeight: 0,
  },
  typeTitle: {
    color: theme.palette.common.gray,
    fontSize: "2em",
    fontFamily: "Lato",
    fontWeight: 500,
    marginTop: "0.5em",
  },
  logo: {
    float: "right",
    margin: "2em",
    width: "100%",
    height: "auto",
  },
  divLine: {
    width: "65%",
    color: theme.palette.common.blue,
    backgroundColor: theme.palette.common.blue,
    height: 1,
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  const { width } = GetWindow();
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
          <Box style={{ marginBottom: "6em" }}></Box>
          <Box className={classes.aboutUsBox}>
            <Typography className={classes.typeTitle} component="p">
              About Us
            </Typography>
            <br />
          </Box>
          <Box
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexWrap: "wrap",
              margin: 0,
            }}
          >
            <hr className={classes.divLine} style={{ float: "left" }} />
          </Box>
          <Box className={classes.aboutUsBox}>
            <Grid item>
              <Typography className={classes.type} component="p">
                AC Engineering has over 28 years of continuous sales and design
                experience in the critical application and solutions for data
                centers. ACE is committed to provide integrated solutions for
                mission critical applications ranging from the smallest server
                room to the largest data center. In addition, ACE is able to
                support its customers during and after the construction process,
                including all aspects of system procurement, start-up,
                commissioning, monitoring and maintenance to ensure that these
                systems work as designed, and adapt to the company’s needs. Some
                of the products represented by AC Engineering are:
              </Typography>
            </Grid>
          </Box>
          <Box className={classes.aboutUsBox}>
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
                Liebert is a global leader in critical continuity products and
                services. In this rapidly-changing business, Liebert provides
                solutions to ensure the IT department is protected and always
                running so that your business operates continuously and
                seamlessly, with minimal or no downtime.
              </Typography>
            </Grid>
          </Box>
          <Box className={classes.aboutUsBox}>
            <Grid item xs={5} style={{ textAlign: "center" }}>
              <Button
                target="_blank"
                href="https://www.vertiv.com/en-us/products/brands/liebert/"
              >
                <img alt="liebert" src={seresco} className={classes.logo} />
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.brandName} component="p">
                SERESCO builds the most advanced dehumidifiers in the world and
                enjoys a reputation for quality, reliability and value. Seresco
                provides an end-to-end solution including technologically
                advanced and energy efficient products combined with their
                WebSentry technology. WebSentry’s 24-7 factory performance
                monitoring, secure remote trouble-shooting capabilities, and
                email maintenance reminders for the lifetime of your equipment.
              </Typography>
            </Grid>
          </Box>
          <Box className={classes.aboutUsBox}>
            <Grid item xs={5} style={{ textAlign: "center" }}>
              <Button
                target="_blank"
                href="https://www.vertiv.com/en-us/products/brands/liebert/"
              >
                <img alt="liebert" src={fauv} className={classes.logo} />
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.brandName} component="p">
                Fresh-Aire UV is recognized the world over as a leader in the
                areas of UV light disinfection and indoor air quality. Our
                products fight odors, reduce indoor air pollution, and provide
                chemical-free air and surface disinfection. Fresh-Aire UV lights
                are a safe and effective green technology. They save energy by
                keeping HVAC equipment cleaner, allowing it to operate more
                efficiently. This also reduces the need for toxic cleaning
                chemicals.
              </Typography>
            </Grid>
          </Box>
        </Paper>
        <Footer />
      </Grid>
    </>
  );
};

export default AboutUs;
