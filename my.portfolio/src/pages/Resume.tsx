import { Box } from "@mui/material";
import React from 'react';
import { backgroundStyle, flexWrapperOuterStyle } from '../styles';
//resume

const Resume = () => {

    return (
        <Box sx={{ ...flexWrapperOuterStyle, ...backgroundStyle, flexDirection: 'column', height: '100%', width: '100%' }}>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vR8x2Mh3-XJ0Lxtcw39pjyMGL4XOu81bT2lmxfQxPIhcvA8RZs2BGmpsU9rtSYFIIua9xwc-KzZIf-P/pub?embedded=true"
                style={{ width: 'auto', height: '100%' }} title='resume.pdf' />
        </Box>
    );
};//position: pageId === 3? 'fixed': 'absolute'

export default Resume;