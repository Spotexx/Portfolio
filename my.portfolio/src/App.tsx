import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import './App.css';
import face from './face.png';

const useStyles = makeStyles(theme => ({
  siteBackground: {
    display:'flex',
    flexDirection:'column',
    minHeight:'100vh',
    minWidth:'100vw',
    // why is test appearing above the portrait #line 46
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
    bottom: '40%',
    left: 0,
    right: 0,
    margin: 'auto'
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
      </Box>
      <Box className={classes.content}>
        <p>test</p>
      </Box>
    </Box>
  );
}