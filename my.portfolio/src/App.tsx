import React, { useContext, useEffect, useRef, useState } from 'react';
import './App.css';
import { Box, Container, Divider, List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import { GitHub } from './pages/GitHub';
import { GitHub2 } from './pages/GitHub2';
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
    const page2 = useRef(null);
    const [offset, setOffset] = useState(0.0);

    const handleChangePageValue = (index: number) => {
        setPageId(index);
    };



    useEffect(() => {
        window.onscroll = () => {
            //if scrollling down
            if (window.pageYOffset > offset) {
                    //set href to page2
                    window.location.href = '#page2';


                setOffset(window.pageYOffset);
                
            }
        }
    }, [])

    const heightSelector = () => {
        if (pageId === 3) {
            return undefined;
        } else {
            return '100vh';
        }
    }
    return (
        // https://www.npmjs.com/package/smooth-scroll
        <Box >
            
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
                                    <ListItemButton onClick={() => setPageId(0)}>
                                        <ListItemText primary="Introduction" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton onClick={() => setPageId(1)}>
                                        <ListItemText primary="Project 1" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton onClick={() => setPageId(2)}>
                                        <ListItemText primary="Project 2" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem >
                                    <ListItemButton onClick={() => setPageId(3)}>
                                        <ListItemText primary="Resume" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                    <Divider orientation="vertical" variant='middle' flexItem />
                    <SwipeableViews
                        id='page2'
                        style={{ backgroundColor: 'primary.light', flex: 61.8, overflow: 'hidden' }}
                        axis={"x"}
                        index={pageId}
                        onChangeIndex={handleChangePageValue}
                    >

                        <LinkedIn />
                        <GitHub />
                        <GitHub2 />
                        <Resume />
                    </SwipeableViews>
                </Paper>
            </Box>
        </Box>
    );
}

