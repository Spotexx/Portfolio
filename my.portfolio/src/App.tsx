import { Box, makeStyles, Grid } from '@material-ui/core';
import React from 'react';
import './App.css';
import face from './face.png';
import { AccountCircle, Folder, LinkedIn, GitHub ,Description, Brightness4, Home } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  siteBackground: {
    display:'flex',
    flexDirection:'column',
    minHeight:'100vh',
    minWidth:'100vw',
   },
  content: {
    background: theme.palette.primary.main
  },
  title: {
     background: theme.palette.primary.light
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
  }
}))

export const App = () => {
  const classes = useStyles();
  return (
    <Box className={classes.siteBackground}>
      <Box 
        className={`${classes.title} ${classes.frame}`}
        flexGrow={1}
      >
        <img src={face} className={classes.portrait} alt="face" />
        <Grid 
          className={classes.routerGrid}
          container
          direction="row"
          justify="center"
          spacing={3}
        >
          <Grid item xs={4} sm={4} md={4} lg={2} xl={2} spacing ={4}><AccountCircle /></Grid>
          <Grid item xs={4} sm={4} md={4} lg={2} xl={2} spacing ={4}><Folder /></Grid>
          <Grid item xs={4} sm={4} md={4} lg={2} xl={2} spacing ={4}><LinkedIn /></Grid>
          <Grid item xs={4} sm={4} md={4} lg={2} xl={2} spacing ={4}><GitHub /></Grid>
          <Grid item xs={4} sm={4} md={4} lg={2} xl={2} spacing ={4}><Description /></Grid>
          <Grid item xs={4} sm={4} md={4} lg={2} xl={2} spacing ={4}><Brightness4 /></Grid>
          <Grid item xs={4} sm={4} md={4} lg={2} xl={2} spacing ={4}><Home /></Grid>
        </Grid>
      </Box>
      <Box className={classes.content}>
        <p>test</p><p>test</p><p>test</p><p>test</p><p>test</p><p>test</p>
      </Box>
    </Box>
  );
}