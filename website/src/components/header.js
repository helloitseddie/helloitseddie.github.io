import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { IconButton, Drawer, Hidden, Toolbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { FaBars } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

import GetWindow from "./getWindow";

import logo from "../assets/newLogo.png";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
  },
  logo: {
    height: "25%",
  },
  logoContainer: {
    marginLeft: "1em",
    marginTop: "1.5em",
    marginBottom: "1em",
    display: "flex",
    "&:hover": {
      backgroundColor: "transparent",
    },
    width: "30vw",
  },
  tabContainer: {
    marginLeft: "auto",
    marginRight: "4em",
  },
  tab: {
    ...theme.typography.tab,
    color: theme.palette.common.gray,
    minWidth: 10,
    marginLeft: "25px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  serve: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1em",
    fontFamily: "Lato",
    textTransform: "none",
    fontSize: "1.5em",
    color: theme.palette.common.gray,
  },
  menuOptions: {
    textAlign: "center",
  },
  menuText: {
    fontFamily: "Lato",
    color: theme.palette.common.gray,
  },
  icons: {
    height: "2.5rem",
    width: "2.5rem",
  },
  exit: {
    height: "2rem",
    width: "2rem",
  },
  divLine: {
    width: "75%",
    color: theme.palette.common.gray,
    backgroundColor: theme.palette.common.gray,
    height: 1,
    display: "flex",
    float: "center",
  },
}));

const Header = ({ container }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { width } = GetWindow();
  const [displayMenu, setDisplay] = useState(false);
  let onMobile = width > 1200 ? false : true;
  let logoWidth = width > 1200 ? "40%" : "60%";
  const history = useNavigate();

  const handleDrawerToggle = () => {
    setDisplay(!displayMenu);
  };

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/about":
        if (value !== 1) {
          setValue(1);
        }
        break;
      case "/services":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/clients":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/contact":
        if (value !== 4) {
          setValue(4);
        }
        break;
      default:
        setValue(5);
        break;
    }
  }, [value, history]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="secondary">
          <Toolbar disableGutters>
            <Paper elevation={0}>
              <Button
                component={Link}
                to="/"
                disableRipple
                onClick={() => setValue(0)}
                className={classes.logoContainer}
              >
                <img
                  alt="company logo"
                  src={logo}
                  className={classes.logo}
                  style={{ width: logoWidth }}
                />
              </Button>
            </Paper>
            {!onMobile && (
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                className={classes.tabContainer}
              >
                <Tab
                  className={classes.tab}
                  component={Link}
                  to="/"
                  label="Home"
                />
                <Tab
                  className={classes.tab}
                  component={Link}
                  to="/about"
                  label="About Us"
                />
                <Tab
                  className={classes.tab}
                  component={Link}
                  to="/services"
                  label="Services"
                />
                <Tab
                  className={classes.tab}
                  component={Link}
                  to="/clients"
                  label="Clients"
                />
                <Tab
                  className={classes.tab}
                  component={Link}
                  to="/contact"
                  label="Contact Us"
                />
              </Tabs>
            )}
            {onMobile && (
              <IconButton
                onClick={() => {
                  setDisplay(!displayMenu);
                }}
                style={{ marginLeft: "auto", marginRight: "2em" }}
              >
                <FaBars className={classes.icons} />
              </IconButton>
            )}
            {onMobile && (
              <nav aria-label="mailbox folders">
                <Hidden xsDown implementation="css">
                  <Drawer
                    container={container}
                    variant="temporary"
                    anchor={"right"}
                    open={displayMenu}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                      keepMounted: true,
                    }}
                  >
                    <Box className={classes.menuPopout}>
                      <Box m={3}>
                        <Grid container spacing={2} justifyContent="flex-end">
                          <Grid item>
                            <IconButton
                              onClick={() => setDisplay(!displayMenu)}
                            >
                              <IoIosCloseCircleOutline
                                className={classes.exit}
                              />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Box>
                      <List>
                        <Link to={"/"} style={{ textDecoration: "none" }}>
                          <ListItem
                            button
                            key="home"
                            onClick={() => setDisplay(!displayMenu)}
                            className={classes.menuOptions}
                          >
                            <ListItemText
                              className={classes.menuText}
                              primary={"Home"}
                            />
                          </ListItem>
                        </Link>
                        <hr className={classes.divLine} />
                        <Link to={"/about"} style={{ textDecoration: "none" }}>
                          <ListItem
                            button
                            key="about"
                            onClick={() => setDisplay(!displayMenu)}
                            className={classes.menuOptions}
                          >
                            <ListItemText
                              primary={"About Us"}
                              className={classes.menuText}
                            />
                          </ListItem>
                        </Link>
                        <hr className={classes.divLine} />
                        <Link
                          to={"/services"}
                          style={{ textDecoration: "none" }}
                        >
                          <ListItem
                            button
                            key="services"
                            onClick={() => setDisplay(!displayMenu)}
                            className={classes.menuOptions}
                          >
                            <ListItemText
                              primary={"Services"}
                              className={classes.menuText}
                            />
                          </ListItem>
                        </Link>
                        <hr className={classes.divLine} />
                        <Link
                          to={"/clients"}
                          style={{ textDecoration: "none" }}
                        >
                          <ListItem
                            button
                            key="clients"
                            onClick={() => setDisplay(!displayMenu)}
                            className={classes.menuOptions}
                          >
                            <ListItemText
                              primary={"Clients"}
                              className={classes.menuText}
                            />
                          </ListItem>
                        </Link>
                        <hr className={classes.divLine} />
                        <Link
                          to={"/contact"}
                          style={{ textDecoration: "none" }}
                        >
                          <ListItem
                            button
                            key="contact"
                            onClick={() => setDisplay(!displayMenu)}
                            className={classes.menuOptions}
                          >
                            <ListItemText
                              primary={"Contact Us"}
                              className={classes.menuText}
                            />
                          </ListItem>
                        </Link>
                      </List>
                    </Box>
                  </Drawer>
                </Hidden>
              </nav>
            )}
          </Toolbar>
          <Paper variant="outlined">
            <div
              className={classes.serve}
              style={{ textAlign: width < 1027 ? "center" : "" }}
            >
              Providing innovative computer room and power solutions to South
              Florida for over 30 years!
            </div>
          </Paper>
        </AppBar>
      </ElevationScroll>

      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
