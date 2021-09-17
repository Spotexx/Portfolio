//@ts-nocheck
import { Box, makeStyles, Container, Paper } from '@material-ui/core';
import React from 'react';
import './App.css';
import face from './face.png';
import { AccountCircle, LinkedIn, GitHub , Home } from '@material-ui/icons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useRoutes } from "hookrouter";
import { Paths } from "./Paths"

const useStyles = makeStyles(theme => ({
  siteBackground: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    background: theme.palette.primary.dark
  },
  title: {
    background: theme.palette.primary.main,
    color: theme.palette.text.primary
  },
  frame: {
    display: 'inline',
    position: 'relative',
    background: theme.palette.primary.dark
  },
  portrait: {
    maxHeight: '100%',
    maxWidth: '100%',
    width: 'auto',
    height: '30%',
    position: 'absolute',
    top: 0,
    bottom: '20%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  center:{
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  routerGrid: {
    position: 'absolute',
    maxWidth: '80%',
    left: '0',
    right: '0',
    margin: 'auto',
    textAlign: "center",
    bottom: 0,//USING grid for the formatting router  ALSO look into elevating this off page
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}))

export const App = () => {
  var getHomeState = window.location.href.endsWith('/Home');
  //script src for linkedIn badge

  const routeResult = useRoutes(Paths);
  const classes = useStyles();
  return (
    <Box className={classes.siteBackground}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            Travis Anderson_
          </Typography>
          <Container maxWidth="sm">
            <Button color="inherit" onClick={() => { window.location.href = "/Home" }}><Home /></Button>
            <Button color="inherit" onClick={() => { window.location.href = "/LinkedIn" }}><LinkedIn /></Button>
            <Button color="inherit" onClick={() => { window.location.href = "/GitHub" }}><GitHub /></Button>
            <Button color="inherit" onClick={() => { window.location.href = "/Resume" }}><AccountCircle /></Button>
            <Button color="inherit" onClick={() => { console.log(window.location.href)}}>console.log</Button>
          </Container>
        </Toolbar>
      </AppBar>
      <Box className={classes.content}>
        <Container>

          {routeResult}

        </Container>
      </Box>
      <Box
        className={`${classes.title} ${classes.frame}`}
        flexGrow={1}
      >
      <Container className={classes.content}>

        <img src={face} className={getHomeState ? classes.portrait : classes.center} alt="face" />

      </Container>
      </Box>

    </Box>
  );
}

