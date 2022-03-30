import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Footer from "../components/footer";
import GetWindow from "../components/getWindow";

import background from "../assets/bg.png";
import liebert from "../assets/liebert.png";
import seresco from "../assets/seresco.png";
import fauv from "../assets/fauv.png";
import flexair from "../assets/flexair.png";

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
                AC Engineering Inc. has over 40 years of continuous sales and
                design experience in South Florida involving critical
                application and solutions for commercial and residential
                buildings.
              </Typography>
              <br />
            </Grid>
            <Grid item>
              <Typography className={classes.type} component="p">
                AC Engineering Inc. is committed to providing integrated
                solutions for mission critical applications involving precision
                cooling and power support for data centers and healthcare
                buildings, dehumidification for indoor pool environments, UV
                lighting and indoor air quality solutions, and pre-fabricated
                custom solutions for industrial-commercial rated HVAC and
                electrical markets. In addition, AC Engineering Inc. is able to
                support our customers during and after the construction process,
                including all aspects of system procurement, start-up,
                commissioning, monitoring, and maintenance to ensure that these
                systems work as designed and adapt to the individual needs of
                the end user.
              </Typography>
            </Grid>
            <Grid item>
              <br />
              <Typography className={classes.type} component="p">
                AC Engineering Inc. has vast experience and expertise in the
                following product lines, as well as many others, and can be
                counted on as your consultative partner for your next project:
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
                seamlessly, with minimal or no downtime, as is vital to the
                operation of a data center.
              </Typography>
            </Grid>
          </Box>
          <Box className={classes.aboutUsBox}>
            <Grid item xs={5} style={{ textAlign: "center" }}>
              <Button target="_blank" href="https://serescodehumidifiers.com/">
                <img alt="seresco" src={seresco} className={classes.logo} />
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.brandName} component="p">
                SERESCO builds the most advanced dehumidifiers in the world and
                enjoys a reputation for quality, reliability and value as the
                industry experts in pool dehumidification systems. Seresco
                provides an end-to-end solution including technologically
                advanced and energy efficient products combined with their
                WebSentry technology. WebSentry’s 24-7 factory performance
                monitoring, secure remote trouble-shooting capabilities, and
                critical email notification alerts provide the user with peace
                of mind for the lifetime of your equipment.
              </Typography>
            </Grid>
          </Box>
          <Box className={classes.aboutUsBox}>
            <Grid item xs={5} style={{ textAlign: "center" }}>
              <Button target="_blank" href="https://www.freshaireuv.com/">
                <img alt="freshair" src={fauv} className={classes.logo} />
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.brandName} component="p">
                Fresh-Aire UV is recognized worldwide as a leader in the
                engineering discipline of UV light disinfection and indoor air
                quality. Fresh Aire UV’s products fight odors, reduce indoor air
                pollution, and provide chemical-free air and surface
                disinfection. Fresh-Aire UV lights are a safe and effective
                green technology. They save energy by keeping HVAC equipment
                cleaner, which allows it to operate more efficiently and reduces
                the need for toxic cleaning chemicals.
              </Typography>
            </Grid>
          </Box>
          <Box className={classes.aboutUsBox}>
            <Grid item xs={5} style={{ textAlign: "center" }}>
              <Button target="_blank" href="https://flexairinc.com/">
                <img
                  alt="flexair"
                  src={flexair}
                  className={classes.logo}
                  style={{ width: "50%" }}
                />
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.brandName} component="p">
                With over 50 years of combined industry knowledge, Flex Air is
                focused on delivering industry leading and energy-efficient,
                high performance HVAC systems from custom air handling solutions
                to modular systems, fluid pumping systems, and everything in
                between. Every solution is meticulously engineered to meet and
                exceed their customers’ expectations
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
