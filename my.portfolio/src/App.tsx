import React from 'react';
import './App.css';
import face from './face.png';
import {Box, Container} from "@mui/material";
import { GitHub } from './pages/GitHub';
import { LinkedIn } from './pages/LinkedIn';
import { Home } from './pages/Home';
import Resume from './pages/Resume';
import { Routes, Route } from 'react-router';





export const App = () => {
    var getHomeState = window.location.href.endsWith('/Home');
    //script src for linkedIn badge

    return (

        <Box>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/LinkedIn' element={<LinkedIn/>}/>
                    <Route path='/GitHub' element={<GitHub/>}/>
                    <Route path='/Resume' element={<Resume/>}/>
                </Routes>
        </Box>
    );
}

