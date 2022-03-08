import { Box } from "@mui/material";
import React from 'react';
import './App.css';
import { GitHub } from './pages/GitHub';
import { GitHub2 } from './pages/GitHub2';
import { Home } from './pages/Home';
import { LinkedIn } from './pages/LinkedIn';
import Resume from './pages/Resume';
import Pagify from './react-mui-pagify/Pagify/index';

export const App = () => {
    return (
        <Box >
            <Pagify>
                <Home />
                <LinkedIn />
                <GitHub />
                <GitHub2 />
                <Resume />
            </Pagify >
        </Box >
    );
}

