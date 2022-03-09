
import { Box, ImageListItem, ImageListItemBar, Paper, Typography } from "@mui/material";
import React from 'react';
import sitePic1 from '../portfolioPictures/LolSite1.png';
import { backgroundStyle, centerItem, flexWrapperInnerStyle, flexWrapperOuterStyle, titleContainer, titleStyle } from "../styles";


const picEffect = {
    position: 'relative',
    overflow: 'hidden',
    width: '70%',
    height: '90%',
    '&:hover img': {
        transition: 'all 0.5s ease-in-out',
        filter: 'blur(2px)',
    },
    '&:hover div': {
        transition: 'all 0.5s ease-in-out',
        opacity: '0',
    }
} as const
const imgTextEffect = {
    top: '0',
    color: 'text.secondary',
    bgcolor: 'background.pic',
    width: '100%',
    height: '100%',
    padding: '10px',
    position: 'absolute',
    opacity: '0',
    transition: 'all 0.5s ease-in-out',
    '&:hover': {
        backgroundOpacity: '0.5',
        opacity: '100',
    }
} as const

export const LolStats = () => {

    return (
        <Box sx={{ ...flexWrapperOuterStyle, ...backgroundStyle, flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60%', padding: '20px' }}>
                <Box sx={{ flexDirection: 'column', ...flexWrapperInnerStyle, width: '70%', alignItems: 'center', ...titleContainer }}>
                    <Typography variant="body1" sx={{ ...titleStyle, textAlign: 'center' }}>Lol Stats Tracker</Typography>
                </Box>
                <Box sx={{ ...flexWrapperInnerStyle, height: 'auto', width: '100%', flexDirection: ['column', 'column', 'column', 'row'] }}>
                    <Box sx={{ flex: [1, 2], height: '100%', width: '90%', }}>
                        <Box sx={{ ...flexWrapperInnerStyle, flexDirection: 'column', ...centerItem }}>
                            <ImageListItem sx={{ ...picEffect }}>

                                <img
                                    style={{ width: '100%', }}
                                    src={sitePic1}
                                    alt="sitePic1"
                                />
                                <div>
                                    <ImageListItemBar
                                        sx={{ width: '100%' }}
                                        title={'Champion stats tracker'}
                                        subtitle={'https://github.com/Spotexx/lolstats (code depricated)'}
                                    />
                                </div>
                                <Typography sx={{ ...titleStyle, ...imgTextEffect }} onClick={() => window.open('http://lolstatsportfolio.herokuapp.com/', "_blank")}>
                                    <Typography sx={{ ...titleStyle, color: 'white' }}>Champion Stats Tracker</Typography>
                                    <Typography sx={{ fontSize: '2.5rem' }}>
                                        Tags:
                                        <br />
                                        React, Material-UI, Hook Router, Responsive design, papaparse
                                    </Typography>
                                </Typography>
                            </ImageListItem>
                        </Box>

                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};