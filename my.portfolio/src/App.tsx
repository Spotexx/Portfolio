import { Box, makeStyles, Grid, Divider } from '@material-ui/core';
import React from 'react';
import './App.css';
import face from './face.png';
import { AccountCircle, LinkedIn, GitHub , Home } from '@material-ui/icons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useRoutes } from "hookrouter";
import { Paths } from "./Paths"

const useStyles = makeStyles(theme => ({
  siteBackground: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    minWidth: '100vw',
  },
  content: {
    background: theme.palette.primary.main
  },
  title: {
    background: theme.palette.primary.main
  },
  frame: {
    display: 'inline',
    position: 'relative'
  },
  portrait: {
    maxHeight: '100%',
    maxWidth: '100%',
    width: '20vh',
    height: 'auto',
    position: 'absolute',
    top: 0,
    bottom: '20%',
    left: 0,
    right: 0,
    margin: 'auto'
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
  const routeResult = useRoutes(Paths);
  const classes = useStyles();
  return (
    <Box className={classes.siteBackground}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Travis Anderson
          </Typography>
          <Button color="inherit" onClick={() => { window.location.href = "/Home" }}><Home /></Button>
          <Button color="inherit" onClick={() => { window.location.href = "/LinkedIn" }}><LinkedIn /></Button>
          <Button color="inherit" onClick={() => { window.location.href = "/GitHub" }}><GitHub /></Button>
          <Button color="inherit" onClick={() => { window.location.href = "/Resume" }}><AccountCircle /></Button>

        </Toolbar>
      </AppBar>
      <Box className={classes.content}>
        {routeResult}
      </Box>

      <Box
        className={`${classes.title} ${classes.frame}`}
        flexGrow={1}
      ><img src={face} className={classes.portrait} alt="face" />

      </Box>
    </Box>
  );
}

