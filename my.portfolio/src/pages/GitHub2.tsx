
import React, { useContext } from 'react';
import { Box, Button, CardMedia, ImageListItemBar, ImageListItem, Paper, Typography } from "@mui/material";
import { ElevatedPaper } from "../Components/ElevatedPaper";
import { backgroundStyle, buttonStyle, centerItem, flexWrapperInnerStyle, flexWrapperOuterStyle, paperStyle, titleContainer, titleStyle } from "../styles";
import { UserContext } from '../Contexts/PageContext';
import face from '../face.png';
import sitePic1 from '../portfolioPictures/LolSite1.gif';


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
}as const
const imgTextEffect = {
    top: '0',
    color:'text.secondary',
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

export const GitHub2 = () => {
    const { pageId, setPageId } = useContext<any>(UserContext);

    return (
        <Box sx={{ ...flexWrapperInnerStyle, ...backgroundStyle, flexDirection: 'column'}}>
            <Box sx={{ flexDirection: 'column', ...flexWrapperInnerStyle, width: '100%', alignItems: 'center', ...titleContainer }}>

                <Typography variant="body1" sx={{...titleStyle,  textAlign:'center'}}>Project 2</Typography>
                <Button sx={{ ...buttonStyle }} onClick={() => window.open('https://github.com/Spotexx', "_blank")}>
                    <Typography variant={'body1'}>View My GitHub Profile </Typography>
                </Button>
            </Box>
            <Box sx={{ ...flexWrapperInnerStyle, height: ['600px', , '700px'], flexDirection: ['column', , , 'row'] }}>
                <Box sx={{ flex: [1, 2], height: '100%' }}>
                    <Box sx={{ ...flexWrapperInnerStyle, flexDirection: 'column', ...centerItem }}>
                        <ImageListItem sx={{...picEffect}}>
                           
                            <img
                                style={{maxHeight: '100%', maxWidth: '100%'}}
                                src={sitePic1}
                            />
                            <div>
                                <ImageListItemBar
                                    title={'Champion stats tracker'}
                                    subtitle={'https://github.com/Spotexx/lolstats (code depricated)'}
                                />
                            </div> 
                            <Typography sx={{...titleStyle, ...imgTextEffect}} onClick={()=>window.open('https://moonmeds.herokuapp.com/', "_blank")}>
                                <Typography sx={{...titleStyle, color:'white'}}>Champion Stats Tracker</Typography>
                                <Typography sx={{fontSize:'2.5rem'}}>
                                Tags:
                                <br/>
                                React, Material-UI, Hook Router, Responsive design, papaparse
                                </Typography>
                            </Typography>
                        </ImageListItem>
                    </Box>

                </Box>
            </Box>
        </Box>
    );
};