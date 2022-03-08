import { Box } from "@mui/material";
import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { LinkedIn } from './pages/LinkedIn';
import LinkTree from './pages/LinkTree';
import { LolStats } from './pages/LolStats';
import { MedicationTracker } from "./pages/MedicationTracker";
import Pagify from './react-mui-pagify/Pagify/index';

export const App = () => {
    return (
        <Box >
            <Pagify>
                <Home />
                <LinkedIn />
                <MedicationTracker />
                <LolStats />
                <LinkTree />
            </Pagify >
        </Box >
    );
}

