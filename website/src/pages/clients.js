import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Footer from "../components/footer";
import GetWindow from "../components/getWindow";

import background from "../assets/bgMDC.png";

const useStyles = makeStyles((theme) => ({
  articleContainer: {
    marginTop: "8vh",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "center",
  },
  servicesBox: {
    marginTop: "5em",
    marginRight: "2em",
    marginLeft: "2em",
    marginBottom: "2em",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  typeTitle: {
    color: theme.palette.common.gray,
    fontSize: "2em",
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
    marginLeft: "2em",
    marginRight: "2em",
  },
  divLine: {
    width: "65%",
    color: theme.palette.common.blue,
    backgroundColor: theme.palette.common.blue,
    height: 1,
  },
}));

const Clients = () => {
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
          <Box className={classes.servicesBox}>
            <Typography className={classes.typeTitle} component="p">
              Mobile Data Centers
            </Typography>
            <br />
          </Box>
          <Box
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <hr className={classes.divLine} style={{ float: "left" }} />
          </Box>
          <Box className={classes.servicesBox}>
            <Typography className={classes.type} component="p">
              Portable Containerized Data Centers provide a fully functional
              data center in a pod-like form with a complete physical
              infrastructure including two (2) hour fire rated, power, cooling
              systems and remote monitoring. Portable Containerized Data Centers
              also have all the elements of the secure operating environments
              found in traditional “raised-floor” data centers, including fire
              protection, smoke, humidity, condensation and temperature changes.
              It can support multiple technology vendors and multiple systems in
              an industry standard rack environment. The modular containment
              structure provides practical and efficient mobility as it can be
              quickly deployed. Once deployed to a remote site or location, the
              containment structure can be started in a plug and play fashion,
              thereby minimizing the connection time to external utilities. The
              modular containment structure houses and maintains for operation
              various types of information technologies (IT) equipment, such as
              computer servers, Network Area Storage devices, data communication
              routers and switches and the support equipment to make them
              operational such as electrical switchboards, stand-by generators,
              high precision air conditioning, and uninterruptible power supply
              are within the modular containment structure. The structure offers
              a secured and stable environment, which includes minimizing any
              external temperature transmission into the containment structure,
              regardless of the external environmental conditions.
            </Typography>
            <br />
            <Typography className={classes.type} component="p">
              Containerized data centers are an important and growing market for
              companies and governmental agencies that require mobile and
              emergency “ready” solutions for sensitive applications. Other
              industry clients use the systems for sensitive applications, such
              as a data-processing hub during oil exploration, while some
              militaries buy the data-centers-in-a-box to put processing power
              closer to the front lines. Militaries have shown the greatest
              interest in a mobile data center that can be moved closer to
              ongoing operations.
            </Typography>
            <br />
            <Typography className={classes.type} component="p">
              Other commercial sectors that are interested in this application
              are the oil and gas industry has shown interest for deploying data
              centers in remote locations currently being explored, in addition
              to the movie and animation studios that look into look to augment
              their ability to crunch the numbers needed for today’s
              computation-intensive special effects.
            </Typography>
            <br />
            <Typography className={classes.type} component="p">
              A great potential use for these portable containerized data
              centers is for disaster recovery. Hospitals, as well as, financial
              and educational institutions in which the traditional data center
              facilities are unavailable or have been destroyed. The containers
              could be used as a temporary or permanent solution. The ability to
              deploy these containers rapidly and in any location helps enable
              business continuity, allowing for easy hardware migration and an
              expedited disaster recovery processes.
            </Typography>
          </Box>
          <Box className={classes.servicesBox}></Box>
        </Paper>
        <Footer />
      </Grid>
    </>
  );
};

export default Clients;
