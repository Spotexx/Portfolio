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
        //todo: take of lol stats gif /  height: auto / shorter elevator speech move techs into another page
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

