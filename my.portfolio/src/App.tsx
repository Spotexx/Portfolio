import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useContext } from 'react';
import SwipeableViews from "react-swipeable-views";
import './App.css';
import { UserContext } from './Contexts/PageContext';
import { GitHub } from './pages/GitHub';
import { GitHub2 } from './pages/GitHub2';
import { Home } from './pages/Home';
import { LinkedIn } from './pages/LinkedIn';
import Resume from './pages/Resume';
import circleFace from './picturesOther/circleFace.png';
import Pagify from './react-mui-pagify/Pagify/index';
import { centerItem, flexWrapperInnerStyle, flexWrapperOuterStyle } from './styles';

export const App = () => {
    const { pageId, setPageId } = useContext<any>(UserContext);

    const handleChangePageValue = (index: number) => {
        setPageId(index);
    };






    return (
        <Box >
            <Pagify>
                <Home />
                <Box sx={{ ...centerItem, ...flexWrapperOuterStyle }}>
                    <Box sx={{ ...flexWrapperInnerStyle, overflow: 'hidden', height: '90%', width: '90%', bgcolor: 'primary.dark' }}>
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
                            style={{ backgroundColor: 'primary.light', flex: 61.8, overflow: 'auto', height: '100%' }}
                            axis={"x"}
                            index={pageId}
                            onChangeIndex={handleChangePageValue}
                        >

                            <LinkedIn />
                            <GitHub />
                            <GitHub2 />
                            <Resume />
                        </SwipeableViews>
                    </Box>
                </Box>
            </Pagify>
        </Box>
    );
}

