import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import './App.css';

const useStyles = makeStyles(theme => ({
  siteBackground: {
    display:'flex',
    flexDirection:'column',
    minHeight:'100vh',
    minWidth:'100vw',
    background: theme.palette.primary.main
   },
  title: {
     background: theme.palette.primary.light
   }
}))

export const App = () => {
  const classes = useStyles();
  return (
    <Box className={classes.siteBackground}>
      <Box 
        className={classes.title}
        flexGrow={1}
      >
        test
      </Box>
      <Box>
        <p>test</p><p>test</p>
      </Box>
    </Box>
  );
}