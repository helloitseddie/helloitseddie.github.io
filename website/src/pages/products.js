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
    width: "80%",
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

const Services = () => {
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
    <footer>
      <Grid container spacing={2} alignItems="stretch" justifyContent="center">
        <Paper
          elevation={0}
          className={classes.articleContainer}
          style={{ width: articleWidth }}
        >
          <Box className={classes.servicesBox}>
            <Grid item style={{ textAlign: "center", marginTop: "2em" }}>
              <Typography className={classes.typeTitle} component="p">
                Services We Offer
              </Typography>
            </Grid>
            <hr
              className={classes.divLineTitle}
              style={{ float: "left", marginTop: "1em" }}
            />
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
                - Power Switching & Controls
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
                Dehumidification and Humidification
              </Typography>
              <hr className={classes.divLine} style={{ float: "center" }} />
              <br />
              <Typography className={classes.type} component="p">
                {" "}
                - Specialized natatorium dehumidification solutions
              </Typography>
              <Typography className={classes.type} component="p">
                {" "}
                - Specialized healthcare application humidification solutions
              </Typography>
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
            </Grid>
          </Box>
          <Box
            className={classes.servicesBox}
            style={{ textAlign: "center", alignItems: "center" }}
            display="flex"
            flexDirection={width > 850 ? "row" : "column"}
          >
            <Grid item xs={5} style={{ textAlign: "center" }}>
              <Typography className={classes.typeSubTitle} component="p">
                Indoor Air Quality
              </Typography>
              <hr className={classes.divLine} style={{ float: "center" }} />
              <br />
              <Typography className={classes.type} component="p">
                {" "}
                - UV Lighting Integration and Technology
              </Typography>
            </Grid>
            <Box style={{ marginBottom: "4em" }}></Box>
            <Grid item xs={5} style={{ textAlign: "center" }}>
              <Typography className={classes.typeSubTitle} component="p">
                Prefabricated Custom Units
              </Typography>
              <hr className={classes.divLine} style={{ float: "center" }} />
              <br />
              <Typography className={classes.type} component="p">
                {" "}
                - Custom modular mechanical and electrical
              </Typography>
            </Grid>
          </Box>
          <Box className={classes.servicesBox}>
            <Grid item style={{ textAlign: "center", marginTop: "2em" }}>
              <Typography className={classes.typeTitle} component="p">
                Products We Offer
              </Typography>
            </Grid>
            <hr
              className={classes.divLineTitle}
              style={{ float: "left", marginTop: "1em" }}
            />
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
    </footer>
  );
};

export default Services;
