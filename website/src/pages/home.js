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
    marginRight: 0,
    marginLeft: 0,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "center",
    float: "center",
  },
  aboutUsBox: {
    marginTop: "5em",
    marginBottom: "3em",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
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
  type: {
    color: theme.palette.common.blue,
    fontSize: "1.25em",
    fontFamily: "Lato",
    fontWeight: 100,
  },
}));

const Brand = (brand) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.brands} style={{ marginTop: "3em" }}>
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
            {brand.brand.brand.toUpperCase()}
          </Typography>
          <hr className={classes.divLine} style={{ float: "left" }} />
          <br />
          <br />
          {brand.brand.description.map((attr, index) => {
            return (
              <Typography
                key={index}
                className={classes.brandDesc}
                component="p"
              >
                {" "}
                - {attr}
              </Typography>
            );
          })}
        </Grid>
      </Box>
      <Box style={{ marginBottom: "2em" }}></Box>
    </>
  );
};

const Home = () => {
  const classes = useStyles();
  const { width } = GetWindow();
  let articleWidth = width > 1250 ? "75%" : "100%";
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
          <Box style={{ marginBottom: "7em" }}></Box>
          <Box
            className={classes.aboutUsBox}
            style={{
              marginRight: width > 800 ? "10em" : "3em",
              marginLeft: width > 800 ? "10em" : "3em",
            }}
          >
            <hr className={classes.divLine} style={{ marginBottom: "1.5em" }} />
            <Box style={{ marginBottom: "4em" }}></Box>
            <Grid item>
              <Typography className={classes.type} component="p">
                AC Engineering Inc. has over 40 years of continuous sales and
                design experience in South Florida involving critical
                application and solutions for commercial and residential
                buildings. Our talented sales engineers work closely with
                engineers, contractors, and other professionals in the selection
                and application of HVAC solutions for mission critical
                applications involving precision cooling and power support for
                data centers and healthcare buildings, dehumidification for
                indoor pool environments, UV lighting and indoor air quality
                solutions, and pre-fabricated custom solutions for
                industrial-commercial rated HVAC and electrical markets.
              </Typography>
            </Grid>
            <hr
              className={classes.divLine}
              style={{ marginBottom: "1.5em", marginTop: "3em" }}
            />
          </Box>
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
              <br />
              <br />
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
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - UV Lighting
              </Typography>
              <Typography className={classes.brandDesc} component="p">
                {" "}
                - Pre-fabricated custom modular mechanical and electrical
              </Typography>
            </Grid>
            <hr className={classes.divLine} style={{ marginTop: "3em" }} />
          </Box>
          <Box style={{ marginBottom: "8em" }}></Box>
          {brands !== undefined &&
            brands.length !== 0 &&
            brands.map((brand, index) => {
              return <Brand key={index} brand={brand} />;
            })}
          <Box style={{ marginBottom: "8em" }}></Box>
          {showSpinner && <LinearProgress />}

          <Box style={{ marginBottom: "2em" }}></Box>
          <hr className={classes.divLine} style={{ marginTop: "1.5em" }} />
          <Box style={{ marginBottom: "2em" }}></Box>

          <Box style={{ marginBottom: "1em" }}></Box>
        </Paper>
        <Footer />
      </Grid>
    </>
  );
};

export default Home;
