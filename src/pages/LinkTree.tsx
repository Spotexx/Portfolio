import { Box, Button, Divider } from "@mui/material";
import React from 'react';
import circleFace from '../picturesOther/circleFace.png';
import { backgroundStyle, flexWrapperOuterStyle } from '../styles';
//resume

const LinkTree = () => {

    return (
        <Box sx={{ ...flexWrapperOuterStyle, ...backgroundStyle, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <img
                style={{ maxHeight: '15vh', maxWidth: '15vh' }}
                src={circleFace} alt="MedPic1"
            />
            <Divider variant="middle" sx={{ width: '70%', height: '30px' }} />
            <Box sx={{ width: '100%', height: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Button variant="contained" color="secondary" href='/resume.pdf' download style={{ width: '70%' }}>Resume</Button>
                <Button variant="contained" color="secondary" href="https://www.linkedin.com/in/travis-anderson023/" target='_blank' style={{ width: '70%' }}>LinkedIn</Button>
                <Button variant="contained" color="secondary" href="https://github.com/Travis-Anderson023" target='_blank' style={{ width: '70%' }}>Github</Button>
                <Button variant="contained" color="secondary" href="mailto:tsanderson.023@gmail.com" target='_blank' style={{ width: '70%' }}>Email</Button>

            </Box>
        </Box>
    );
};//position: pageId === 3? 'fixed': 'absolute'

export default LinkTree;