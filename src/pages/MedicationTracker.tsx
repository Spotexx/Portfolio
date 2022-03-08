
import { Box, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import MedPic1 from '../portfolioPictures/MedicationSite1.png';
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

export const MedicationTracker = () => {

    return (
        <Box sx={{ ...flexWrapperOuterStyle, ...backgroundStyle, flexDirection: 'column', justifyContent: 'space-evenly' }}>
            <Box sx={{ flexDirection: 'column', ...flexWrapperInnerStyle, width: '100%', alignItems: 'center', ...titleContainer }}>
                <Typography variant="body1" sx={{ ...titleStyle, textAlign: 'center' }}>Medication Tracker</Typography>
            </Box>
            <Box sx={{ ...flexWrapperInnerStyle, height: ['600px', '600px', '700px'], flexDirection: ['column', 'column', 'column', 'row'] }}>
                <Box sx={{ flex: [1, 2], height: '100%' }}>
                    <Box sx={{ ...flexWrapperInnerStyle, flexDirection: 'column', ...centerItem }}>
                        <ImageListItem sx={{ ...picEffect }}>

                            <img
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                                src={MedPic1} alt="MedPic1"
                            />
                            <div>
                                <ImageListItemBar
                                    title={'Medication Tracker'}
                                    subtitle={'https://github.com/moonryc/moonmeds/'}
                                />
                            </div>
                            <Typography sx={{ ...titleStyle, ...imgTextEffect }} onClick={() => window.open('https://moonmeds.herokuapp.com/', "_blank")}>
                                <Typography sx={{ ...titleStyle, color: 'white', fontSize: ['1rem', '1rem', '1.5rem', '2.5rem'] }}>Medication Tracker</Typography>
                                <Typography sx={{ fontSize: ['1rem', '1rem', '1.5rem', '2.5rem'] }}>
                                    Technologies used:
                                    <br />
                                    React, Material-UI, Redux, Typescript, Date-FNS, React Router, Responsive Design
                                </Typography>
                            </Typography>
                        </ImageListItem>
                    </Box>

                </Box>
            </Box>
        </Box>
    );
};