
import { Box, ImageListItem, ImageListItemBar, Paper, Typography } from "@mui/material";
import React from 'react';
import sitePic1 from '../portfolioPictures/LolSite1.png';
import { backgroundStyle, centerItem, flexWrapperInnerStyle, flexWrapperOuterStyle, titleContainer, titleStyle } from "../styles";


const picEffect = {
    position: 'relative',
    overflow: 'hidden',
    width: '90%',
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
                </Box>
                <Box sx={{ ...flexWrapperInnerStyle, height: 'auto', width: '100%', flexDirection: ['column', 'column', 'column', 'row'], alignItems: 'center' }}>
                    <Box sx={{ flex: [1, 2], height: '100%', width: '90%' }}>
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
                                    <Typography sx={{ fontSize: '2.5rem', width: 'auto', margin: '0 auto', textAlign: 'center', color: 'white' }}>
                                        Click to view live version
                                    </Typography>
                                </Typography>
                            </ImageListItem>
                        </Box>

                    </Box>
                </Box>
                <Typography sx={{ fontSize: '2.5rem' }}>Description:</Typography>
                <Typography sx={{ fontSize: '1.5rem', textAlign: 'justify' }}>
                    A passion project built in ReactJS to manipulate and view data about various characters in League of Legends.
                    I was the Sole author on this project responsible for both the front-end and back end. LolStats makes use of:

                </Typography>
                <Typography sx={{ fontSize: '1.5rem', textAlign: 'left', fontWeight: 'bold', width: '100%' }}>
                    React js, Material UI, Chart JS, PapaParse, Node, GitHub, Heroku.
                </Typography>
            </Paper>
        </Box >
    );
};