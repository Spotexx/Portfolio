import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { backgroundStyle, flexWrapperInnerStyle, flexWrapperOuterStyle } from "../styles";


export const LinkedIn = () => {
    return (
        <Box sx={{ ...flexWrapperOuterStyle, ...backgroundStyle }}>
            <Container maxWidth='lg' sx={{ ...flexWrapperInnerStyle, alignItems: 'center', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <Typography variant={'body1'} sx={{ padding: '30px', fontSize: '1rem' }}>
                    They say that if you love what you do for your job then you never need to work a day in your life.
                    When I wrote my first <span style={{ color: 'red' }}>javascript</span> function, I was ecstatic. I find manipulating <span style={{ color: 'red' }}>data</span> and growing my
                    ability exciting. I am a <span style={{ color: 'red' }}>problem solver</span> and a <span style={{ color: 'red' }}>team player</span>. Because I have received so much
                    assistance in my educational journey, I find myself giving back and try to help people where
                    possible. I love <span style={{ color: 'red' }}>learning</span> new languages and seeing code in different ways. I seem to pick things up
                    rather quickly and enjoy working on software that I can use in my life in a practical way.
                </Typography>
                <Divider flexItem sx={{ paddingTop: '30px' }}>Skills at a glance</Divider>

                <Typography variant={'body1'} sx={{ fontSize: '2rem', textAlign: 'center', margin: '30px' }}>• HTML • CSS • Javascript • React JS • Material UI • Responsive Design • MongoDB • Express • Node •</Typography>

            </Container>


        </Box>)
}