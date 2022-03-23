
import { Box, Chip, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import React from 'react';
import { ElevatedPaper } from "../Components/ElevatedPaper";
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
            <ElevatedPaper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60%', padding: '20px' }}>
                <Box sx={{ flexDirection: 'column', ...flexWrapperInnerStyle, width: '70%', alignItems: 'center', ...titleContainer }}>
                </Box>
                <Box sx={{ ...flexWrapperInnerStyle, height: 'auto', width: '100%', flexDirection: ['column', 'column', 'column', 'row'], alignItems: 'center' }}>
                    <Box sx={{ flex: [1, 2], height: '100%', width: '90%' }}>
                        <Box sx={{ ...flexWrapperInnerStyle, flexDirection: 'column', ...centerItem }}>
                            <ImageListItem sx={{ ...picEffect, position: 'relative' }}>

                                <img
                                    style={{ width: '100%', }}
                                    src={sitePic1}
                                    alt="sitePic1"
                                />
                                <div>
                                    <ImageListItemBar
                                        sx={{ width: '100%' }}
                                        title={'Champion stats tracker'}
                                        subtitle={'https://github.com/Spotexx/lolstats'}
                                    />
                                </div>
                                <Typography component={"span"} sx={{ ...titleStyle, ...imgTextEffect }} onClick={() => window.open('http://lolstatsportfolio.herokuapp.com/', "_blank")}>
                                    <Typography component={"p"} sx={{ fontSize: ['1rem', '1.5rem', '2.5rem'], width: 'auto', margin: '0 auto', textAlign: 'center', color: 'white' }}>
                                        Click to view live version
                                    </Typography>
                                </Typography>
                            </ImageListItem>
                        </Box>

                    </Box>
                </Box>
                <Typography component={"div"} sx={{ fontSize: '2.5rem' }}>Description:</Typography>
                <Typography component={"div"} sx={{ fontSize: ['1rem', , '1.5rem'], textAlign: 'justify' }}>
                    This was a passion project that I built in ReactJS to manipulate and view data about various characters in the online game:League of Legends.
                    I was the Sole author on this project responsible for both the front-end and back-end.
                </Typography>
                <Typography component={"div"} sx={{ fontSize: ['1rem', , '1.5rem'], textAlign: 'justify' }}><a href={"https://github.com/Spotexx/lolstats"}>https://github.com/Spotexx/lolstats</a></Typography>

                <Typography component={"div"} sx={{ fontSize: '1.5rem', textAlign: 'left', fontWeight: 'bold', width: '100%' }}>
                    <Chip label="React JS" variant='outlined' color='secondary' /><Chip label="Material UI" variant='outlined' color='secondary' /><Chip label="Chart JS" variant='outlined' color='secondary' /><Chip label="PapaParse" variant='outlined' color='secondary' /><Chip label="Node" variant='outlined' color='secondary' /><Chip label="GitHub" variant='outlined' color='secondary' /><Chip label="Heroku" variant='outlined' color='secondary' />
                </Typography>
            </ElevatedPaper>
        </Box >
    );
};