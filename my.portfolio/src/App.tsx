import React from 'react';
import './App.css';
import face from './face.png';
import {Box, Container} from "@mui/material";
import {Appbar} from "./Components/Appbar";
import { GitHub } from './pages/GitHub';
import { LinkedIn } from './pages/LinkedIn';
import { Home } from './pages/Home';
import Resume from './pages/Resume';
import { Routes, Route } from 'react-router';

const siteBackground = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
} as const
const content = {
    bgcolor: 'primary.dark'
}
const title = {
    bgcolor: 'primary.main',
    color: 'text.primary'
}
const frame = {
    display: 'inline',
    position: 'relative',
    bgcolor: 'primary.dark'
} as const
const portrait = {
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
} as const
const center = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
}as const
const routerGrid = {
    position: 'absolute',
    maxWidth: '80%',
    left: '0',
    right: '0',
    margin: 'auto',
    textAlign: "center",
    bottom: 0,//USING grid for the formatting router  ALSO look into elevating this off page
}
const menuButton = {
    marginRight: 'theme.spacing',
}

export const App = () => {
    var getHomeState = window.location.href.endsWith('/Home');
    //script src for linkedIn badge

    return (

        <Box sx={siteBackground}>
            <Box sx={content}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/LinkedIn' element={<LinkedIn/>}/>
                    <Route path='/GitHub' element={<GitHub/>}/>
                    <Route path='/Resume' element={<Resume/>}/>
                </Routes>
            </Box>
            <Box
                sx={{...title, ...frame}}
                flexGrow={1}
            >
                <Container sx={{bgcolor:'primary.dark'}}>

                    <img src={face} style={getHomeState ? portrait : center} alt="face"/>

                </Container>
            </Box>

        </Box>
    );
}

