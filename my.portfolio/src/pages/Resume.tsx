import { Box, Button, Typography } from "@mui/material";
import React from 'react';
import { backgroundStyle, buttonStyle, flexWrapperOuterStyle } from '../styles';
//resume

const Resume = () => {

    return (
        <Box sx={{ ...flexWrapperOuterStyle, ...backgroundStyle, flexDirection: 'column', height: '100%', width: '100%' }}>
            <Button sx={buttonStyle}
                onClick={() => window.open("https://www.linkedin.com/in/travis-anderson-60106a107/", "_blank")}> View
                Travis's Linkedin Profile
            </Button>
            <Button sx={{ ...buttonStyle }} onClick={() => window.open('https://github.com/Travis-Anderson023', "_blank")}>
                <Typography variant={'body1'}>View My GitHub Profile </Typography>
            </Button>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vR8x2Mh3-XJ0Lxtcw39pjyMGL4XOu81bT2lmxfQxPIhcvA8RZs2BGmpsU9rtSYFIIua9xwc-KzZIf-P/pub?embedded=true"
                style={{ width: 'auto', height: '100%' }} title='resume.pdf' />
        </Box>
    );
};//position: pageId === 3? 'fixed': 'absolute'

export default Resume;