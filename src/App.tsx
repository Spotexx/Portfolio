import { Box } from "@mui/material";
import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { LinkedIn } from './pages/LinkedIn';
import LinkTree from './pages/LinkTree';
import { LolStats } from './pages/LolStats';
import { MedicationTracker } from "./pages/MedicationTracker";
import { Technologies } from "./pages/Technologies";
import Pagify from './react-mui-pagify/Pagify/index';

export const App = () => {
    return (
        //todo: SVG FIX MONGO DB, HTML, JS, CSS
        //todo: add description to champ tracker paper and change hover text to 
        //todo: change color and fonts
        //create custom scrollbar
        <Box >
            <Pagify>
                <Home />
                <LinkedIn />
                <Technologies />
                <MedicationTracker />
                <LolStats />
                <LinkTree />
            </Pagify >
        </Box >
    );
}

