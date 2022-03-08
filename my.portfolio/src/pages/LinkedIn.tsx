import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { backgroundStyle, flexWrapperInnerStyle, flexWrapperOuterStyle } from "../styles";


export const LinkedIn = () => {
    return (
        <Box sx={{ ...flexWrapperOuterStyle, ...backgroundStyle }}>
            <Container maxWidth='lg' sx={{ ...flexWrapperInnerStyle, alignItems: 'center', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <Typography variant={'body1'} sx={{ padding: '30px', fontSize: ['0.6rem', '1rem', '1.25rem'] }}>
                    <p>“Find a job you enjoy doing, and you will never have to work a day in your life.” (Mark Twain)</p>

                    <p>I am a <span style={{ color: 'red' }}>full-stack developer</span> and have a background in finance. I find manipulating data and growing my ability exciting. I am a <span style={{ color: 'red' }}>problem solver</span> and a team player. Because I have received so much assistance in my educational journey, I find myself giving back to people where possible. In addition to my almmost <span style={{ color: 'red' }}>two years</span> of personal experience, I have recently earned a certificate in full-stack web development from the University of Toronto. I love learning new languages and seeing code in different ways. I enjoy working on software that I can practically use in my life. I am a front-end developer. I use HTML, CSS, JS, and can build apps with Meta’s React framework.</p>

                    <p>I am gravitating toward a junior front-end position with a <span style={{ color: 'red' }}>hands-on approach</span> to development. Ideally, I would like to contribute immediately while at the same time continuing to broaden my knowledge. I am looking for a company that provides a work environment that is conducive to continued <span style={{ color: 'red' }}>learning</span>, working hard, and advancing while upholding a positive work environment.</p>
                </Typography>
                <Divider flexItem sx={{ paddingTop: '30px' }}>Skills at a glance</Divider>

                <Typography variant={'body1'} sx={{ fontSize: '2rem', textAlign: 'center', margin: '30px' }}>•HTML •CSS •Javascript •React JS •Material UI •Responsive Design •MongoDB •Express •Node</Typography>

            </Container>


        </Box>)
}