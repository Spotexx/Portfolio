import React, {useContext} from 'react';
import './App.css';
import face from './face.png';
import { Box, Container } from "@mui/material";
import { GitHub } from './pages/GitHub';
import { LinkedIn } from './pages/LinkedIn';
import { Home } from './pages/Home';
import Resume from './pages/Resume';
import { Routes, Route } from 'react-router';
import SwipeableViews from "react-swipeable-views";
import { UserContext } from './Contexts/PageContext';
import { backgroundStyle } from './styles';


export const App = () => {
    var getHomeState = window.location.href.endsWith('/Home');
    const {pageId, setPageId} = useContext<any>(UserContext);

    const handleChangePageValue = (index: number) => {
        setPageId(index);
      };

    const heightSelector = () => {
        if(pageId === 3){
            return undefined;
        }else{
            return '100vh';
        }
    }
    return (

        <Box style={{height:heightSelector(), overflow:'hidden'}}>
            <Home/>
            <SwipeableViews
                style={{backgroundColor:'primary.light'}}
                axis={"x"}
                index={pageId}
                onChangeIndex={handleChangePageValue}
            >
                
                <LinkedIn/>
                <GitHub/>
                <Resume/>
            </SwipeableViews>
        </Box>
    );
}

