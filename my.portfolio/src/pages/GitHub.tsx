
import React, { useContext } from 'react';
import { Box, Button, CardMedia, ImageListItemBar, ImageListItem, Paper, Typography } from "@mui/material";
import { ElevatedPaper } from "../Components/ElevatedPaper";
import { backgroundStyle, buttonStyle, centerItem, flexWrapperInnerStyle, flexWrapperOuterStyle, paperStyle, titleContainer, titleStyle } from "../styles";
import { UserContext } from '../Contexts/PageContext';
import face from '../face.png';
import MedPic1 from '../portfolioPictures/MedicationSite1.png';




export const GitHub = () => {
    const { pageId, setPageId } = useContext<any>(UserContext);

    return (
        <Box sx={{ ...flexWrapperOuterStyle, ...backgroundStyle, flexDirection: 'column' }}>
            <Box sx={{ flexDirection: ['column', 'column', 'row', 'row', 'row'], ...flexWrapperInnerStyle, width: '100%', alignItems: 'center', ...titleContainer }}>
                <CardMedia sx={{ height: '70px', width: '200px', top: 10, left: 10 }}
                    component="img"
                    image={face}
                    alt="bgImage building blocks"
                />
                <Typography variant="h1" sx={titleStyle}>GitHub</Typography>
                <Button sx={{ ...buttonStyle }} onClick={() => window.open('https://github.com/Spotexx', "_blank")}>
                    <Typography variant='body1'>View Travis's GitHub Profile </Typography>
                </Button>
            </Box>
            <Box sx={{ ...flexWrapperInnerStyle, height: ['600px', , '700px'], flexDirection: ['column', , , 'row'] }}>
                <Box sx={{ flex: [1, 2], height: '100%' }}>
                    <Box sx={{ ...flexWrapperInnerStyle, flexDirection: 'column', ...centerItem }}>
                        <ImageListItem sx={{ width: '90%' }}>
                            <CardMedia
                                //center
                                sx={{ width: '100%' }}
                                component="img"
                                image={MedPic1}
                            />
                            <ImageListItemBar
                                title={'Medication Tracker'}
                                subtitle={'https://github.com/moonryc/moonmeds/'}
                            />

                        </ImageListItem>
                    </Box>

                </Box>
                <Box sx={{ flex: [2, 1], ...flexWrapperInnerStyle, flexDirection: ['column', 'row', , 'column'], height: '700px' }}>
                <Box sx={{ ...flexWrapperInnerStyle, flexDirection: 'column', ...centerItem }}>
                    <ImageListItem sx={{ width: '90%',}}>
                        <CardMedia
                            //center
                            sx={{ width: '100%' }}
                            component="img"
                            image={MedPic1}
                        />
                        <ImageListItemBar
                            title={'Medication Tracker'}
                            subtitle={'https://github.com/moonryc/moonmeds/'}
                        />

                    </ImageListItem>
                    </Box>
                    <Box sx={{ ...flexWrapperInnerStyle, flexDirection: 'column', ...centerItem }}>
                    <ImageListItem sx={{ width: '90%', }}>
                        <CardMedia
                            //center
                            sx={{ width: '100%' }}
                            component="img"
                            image={MedPic1}
                        />
                        <ImageListItemBar
                            title={'Medication Tracker'}
                            subtitle={'https://github.com/moonryc/moonmeds/'}
                        />

                    </ImageListItem>
                    </Box>
                </Box>
            </Box>


            <Button onClick={() => setPageId(3)} variant={'contained'} sx={{ ...buttonStyle, position: 'absolute', top: '95vh', right: 10, bgcolor: 'secondary.light' }}>
                <Typography sx={{ display: 'inlineBlock', verticalAlign: 'middle' }} variant={'body1'} >Resume</Typography>
            </Button>
            <Button onClick={() => setPageId(1)} variant={'contained'} sx={{ ...buttonStyle, position: 'absolute', top: '95vh', left: 10, bgcolor: 'secondary.light' }}>
                <Typography sx={{ display: 'inlineBlock', verticalAlign: 'middle' }} variant={'body1'} >Linked In</Typography>
            </Button>
        </Box>
    );
};