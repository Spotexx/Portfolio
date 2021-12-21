import React, { useContext } from 'react';
import './App.css';
import { Box, Container, Divider, List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import { GitHub } from './pages/GitHub';
import { LinkedIn } from './pages/LinkedIn';
import { Home } from './pages/Home';
import Resume from './pages/Resume';
import { Routes, Route } from 'react-router';
import SwipeableViews from "react-swipeable-views";
import { UserContext } from './Contexts/PageContext';
import { backgroundStyle, centerItem, flexWrapperInnerStyle, flexWrapperOuterStyle } from './styles';
import circleFace from './picturesOther/circleFace.png';


export const App = () => {
    var getHomeState = window.location.href.endsWith('/Home');
    const { pageId, setPageId } = useContext<any>(UserContext);

    const handleChangePageValue = (index: number) => {
        setPageId(index);
    };

    const heightSelector = () => {
        if (pageId === 3) {
            return undefined;
        } else {
            return '100vh';
        }
    }
    return (
        // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_smooth_scroll
        <Box >
            <Home />
            <Box sx={{ ...centerItem, ...flexWrapperOuterStyle }}>
                <Paper elevation={5} sx={{ ...flexWrapperInnerStyle, overflow: 'hidden', height: '90%', width: '90%', bgcolor: 'primary.dark' }}>
                    <Box sx={{ ...flexWrapperInnerStyle, flex: 38.2, flexDirection: 'column' }}>
                        <Box sx={{ flex: 61.8, ...flexWrapperInnerStyle, ...centerItem }}>
                            <img src={circleFace} alt='face' width='300' height='300' />
                        </Box>
                        <Divider orientation='horizontal' flexItem variant='middle' />
                        <Box sx={{ flex: 38.2, ...flexWrapperInnerStyle }}>
                            <List>
                                <ListItem >
                                    <ListItemButton>
                                        <ListItemText primary="Introduction" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton>
                                        <ListItemText primary="Project 1" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton>
                                        <ListItemText primary="Project 2" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton>
                                        <ListItemText primary="Resume" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                    <Divider orientation="vertical" variant='middle' flexItem />
                    <SwipeableViews
                        style={{ backgroundColor: 'primary.light', flex: 61.8, overflow: 'hidden' }}
                        axis={"x"}
                        index={pageId}
                        onChangeIndex={handleChangePageValue}
                    >

                        <LinkedIn />
                        <GitHub />
                        <Resume />
                    </SwipeableViews>
                </Paper>
            </Box>
        </Box>
    );
}

