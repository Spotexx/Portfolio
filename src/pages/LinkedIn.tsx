import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { ElevatedPaper } from "../Components/ElevatedPaper";
import { backgroundStyle, flexWrapperInnerStyle, flexWrapperOuterStyle, textContentStyle } from "../styles";


export const LinkedIn = () => {
    return (
        <Box sx={{ ...flexWrapperOuterStyle, ...backgroundStyle }}>
            <Container fixed sx={{ ...flexWrapperInnerStyle, alignItems: 'center', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <ElevatedPaper sx={{ width: '90%' }}>
                    <Typography component={"div"} sx={{ padding: '30px', fontWeight: 'bold', textAlign: 'justify', ...textContentStyle, fontSize: ['20px', '30px', '35px', '40px'] }}>
                        <p>I am a <Typography component={"span"} sx={{ display: 'inline-block', fontWeight: 'bold', fontSize: ['20px', '30px', '35px', '40px'], color: 'secondary.main' }}>full-stack developer</Typography> and have a background in finance. I find manipulating data and growing my ability exciting. I am a problem solver and a team player. Because I have received so much assistance in my educational journey, I find myself giving back to people where possible. In addition to my almost <Typography component={"span"} sx={{ display: 'inline-block', fontWeight: 'bold', fontSize: ['20px', '30px', '35px', '40px'], color: 'secondary.main' }}>two years</Typography> of personal experience, I have recently earned a certificate in full-stack web development from the <Typography component={"span"} sx={{ display: 'inline-block', fontWeight: 'bold', fontSize: ['20px', '30px', '35px', '40px'], color: 'secondary.main' }}>University of Toronto</Typography>. I love learning new languages and seeing code in different ways. I enjoy working on software that I can practically use in my life. I am a front-end developer. I use HTML, CSS, JS, and can build apps <Typography component={"span"} sx={{ display: 'inline-block', fontWeight: 'bold', fontSize: ['20px', '30px', '35px', '40px'], color: 'secondary.main' }}>React JS</Typography>.</p>
                    </Typography>
                </ElevatedPaper>
            </Container>
        </Box>)
}