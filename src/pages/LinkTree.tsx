import { Box, Button, Divider } from "@mui/material";
import React from 'react';
import { ElevatedPaper } from "../Components/ElevatedPaper";
import circleFace from '../picturesOther/circleFace.png';
import { backgroundStyle, flexWrapperInnerStyle, flexWrapperOuterStyle } from '../styles';
//resume

const LinkTree = () => {

    return (
        <Box sx={{ ...flexWrapperOuterStyle, ...backgroundStyle, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <ElevatedPaper sx={{ ...flexWrapperInnerStyle, flexDirection: 'column', alignItems: 'center', width: '60%', height: 'fit-content', padding: '20px' }}>
                <img
                    style={{ maxHeight: '15vh', maxWidth: '15vh' }}
                    src={circleFace} alt="MedPic1"
                />
                <Divider color='primary.main' variant="middle" sx={{ width: '70%', mt: '15px' }} />
                <Box sx={{ width: '100%', height: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Button variant="contained" color="secondary" href='/resume.pdf' download style={{ width: '70%', margin: '15px' }}>Resume</Button>
                    <Button variant="contained" color="secondary" href="https://www.linkedin.com/in/travis-anderson023/" target='_blank' style={{ width: '70%', margin: '15px' }}>LinkedIn</Button>
                    <Button variant="contained" color="secondary" href="https://github.com/Travis-Anderson023" target='_blank' style={{ width: '70%', margin: '15px' }}>Github</Button>
                    <Button variant="contained" color="secondary" href="mailto:tsanderson.023@gmail.com" target='_blank' style={{ width: '70%', margin: '15px' }}>Email</Button>

                </Box>
            </ElevatedPaper>
        </Box>
    );
};

export default LinkTree;