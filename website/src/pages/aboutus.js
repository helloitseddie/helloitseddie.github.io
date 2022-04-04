import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

import Footer from "../components/footer";
import GetWindow from "../components/getWindow";

import background from "../assets/bg.png";

import { getBrands } from "../actions/brandActions";

const useStyles = makeStyles((theme) => ({
  articleContainer: {
    marginTop: "8vh",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "center",
  },
  aboutUsBox: {
    marginTop: "3em",
    marginRight: "2em",
    marginLeft: "2em",
    marginBottom: "3em",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
  },
  type: {
    color: theme.palette.common.blue,
    fontSize: "1.25em",
    fontFamily: "Lato",
    fontWeight: 100,
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

const Brand = (brand) => {
  const classes = useStyles();

  return (
    <Box className={classes.aboutUsBox}>
      <Grid item xs={5} style={{ textAlign: "center" }}>
        <Button target="_blank" href={brand.brand.url}>
          <img
            alt={brand.brand.brand}
            src={brand.brand.logo.url}
            className={classes.logo}
          />
        </Button>
      </Grid>
      <Grid item xs={5}>
        <Typography className={classes.brandName} component="p">
          {brand.brand.aboutUs.json.content[0].content[0].value}
        </Typography>
      </Grid>
    </Box>
  );
};

const AboutUs = () => {
  const classes = useStyles();
  const { width } = GetWindow();
  let articleWidth = width > 800 ? "75%" : "100%";
  const [showSpinner, setShowSpinner] = useState(false);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    document.body.style = `background-image: url("${background}")`;
  }, []);

  useEffect(() => {
    const refreshBrands = async () => {
      try {
        setShowSpinner(true);
        let response = await getBrands();
        setBrands(response);
        setShowSpinner(false);
      } catch (error) {
        console.error(error);
        setShowSpinner(false);
      }
    };
    if (brands === undefined || brands.length === 0) refreshBrands();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <Box
            className={classes.aboutUsBox}
            style={{
              marginRight: width > 800 ? "10em" : "3em",
              marginLeft: width > 800 ? "10em" : "3em",
            }}
          >
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
          <Box style={{ marginBottom: "6em" }}></Box>
          {showSpinner && <LinearProgress />}
          {brands !== undefined &&
            brands.length !== 0 &&
            brands.map((brand, index) => {
              return <Brand key={index} brand={brand} />;
            })}
          <Box style={{ marginTop: "7em" }}></Box>
        </Paper>
        <Footer />
      </Grid>
    </>
  );
};

export default AboutUs;
