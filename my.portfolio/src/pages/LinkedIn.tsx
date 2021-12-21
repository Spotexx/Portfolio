import React, { useContext } from "react";
import { Box, Button, CardMedia, Container, Paper, Typography } from "@mui/material";
import { UserContext } from "../Contexts/PageContext";
import { backdropImgStyle, backgroundStyle, buttonStyle, flexWrapperInnerStyle, flexWrapperOuterStyle, foregroundStyle, paperStyle, titleContainer, titleStyle } from "../styles";
import face from '../face.png';
import LinkedInPic from '../picturesOther/LinkedInPic.png';


const body = {
    color: 'text.secondary',
    padding: '10px'
}
export const LinkedIn = () => {
    const { pageId, setPageId } = useContext<any>(UserContext)
    return (
        <Box sx={{ ...flexWrapperOuterStyle, ...backgroundStyle, flexDirection: 'column', ...foregroundStyle }}>

            <Box sx={{flexDirection: ['column', 'column', 'row', 'row', 'row'], ...flexWrapperInnerStyle, width: '100%', alignItems: 'center', ...titleContainer, ...foregroundStyle }}>


                <CardMedia sx={{ height: '70px', width: '200px', top: 10, left: 10 }}
                    component="img"
                    image={face}
                    alt="bgImage building blocks"
                />
                <Typography variant="h1" sx={titleStyle}>Introduction</Typography>
                <Button sx={buttonStyle}
                    onClick={() => window.open("https://www.linkedin.com/in/travis-anderson-60106a107/", "_blank")}> View
                    Travis's Linkedin Profile
                </Button>
            </Box>
            <Box sx={flexWrapperInnerStyle}>
                <Box sx={{ width: '30%' }} />
                <Container maxWidth='md' sx={{ ...flexWrapperInnerStyle, alignItems: 'center' }}>
                    <Typography variant={'body1'}>
                        They say that if you love what you do for your job then you never need to work a day in your life.
                        When I wrote my first javascript function, I was ecstatic. I find manipulating data and growing my
                        ability exciting. I am a problem solver and a team player. Because I have received so much
                        assistance in my educational journey, I find myself giving back and try to help people where
                        possible. I love learning new languages and seeing code in different ways. I seem to pick things up
                        rather quickly and enjoy working on software that I can use in my life in a practical way. I am a
                        front-end developer. I use HTML, CSS, JS, and can build apps with React framework.
                        <br /><br />
                        I am gravitating toward a junior front-end position with a hands-on approach to development.
                        Ideally, I would contribute immediately while at the same time continue to broaden my knowledge. I
                        am looking for a company that provides a work environment that is conducive to continued learning,
                        work hard, and advance while having fun.
                        As a self-motivated employee, I will take initiative. I am able to adapt to change in a positive
                        way. I am goal orientated and will accept challenges that will help the company and team succeed.
                        <br /><br />
                        The following are examples of how I've been described by employers and colleagues;
                        <br /><br />
                        -problem solver<br />
                        -great work ethic<br />
                        -team player<br />
                        -good time management skills<br />
                        -able to set and achieve goals<br />
                        -constantly looking for ways to improve in all areas of my life.
                    </Typography>
                </Container>
            </Box>
            <Button onClick={() => setPageId(2)} variant={'contained'} sx={{ position: 'absolute', top: '95vh', right: 10, bgcolor: 'secondary.light' }}>
                <Typography sx={{ display: 'inlineBlock', verticalAlign: 'middle' }} variant={'body1'} >Git Hub</Typography>
            </Button>
            <Button onClick={() => setPageId(0)} variant={'contained'} sx={{ position: 'absolute', top: '95vh', left: 10, bgcolor: 'secondary.light' }}>
                <Typography sx={{ display: 'inlineBlock', verticalAlign: 'middle' }} variant={'body1'} >Home</Typography>
            </Button>
            <CardMedia sx={{ height: '100vh', width: '90vw', ...backdropImgStyle }}
                component="img"
                height='100%'
                width='100%'
                image={LinkedInPic}
                alt="bgImage building blocks"
            />
            <img
            style={{ height: '100vh', width: '90vw', ...backdropImgStyle }}
            src={LinkedInPic}
            alt='bg image blob'
            />
        </Box>)
}