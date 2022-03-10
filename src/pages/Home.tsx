import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import HomePic from '../picturesOther/HomePic.png';
import MainPictureThin from '../picturesOther/MainPictureThin.png';
import { backgroundStyle, flexWrapperInnerStyle, flexWrapperOuterStyle, textContentStyle, titleStyle } from "../styles";


export const Home = () => {
    const animation = {
        animation: 'translate 1s 1',
        animationDirection: 'alternate',
        '@keyframes translate': {
            from: {
                transform: 'translate(-600px,0px) skewX(20deg)',
            },
            to: {
                transform: 'translate(0px, 0px) skewX(0deg)',
            }
        }
    }

    const responsiveWrapperStyle = {
        flexDirection: ['column', 'column', 'column', 'row', 'row'],
        justifyContent: ['center', 'center', 'center', 'center', 'center'],
        alignItems: ['center', 'center', 'center', 'center', 'center'],
        textAlign: ['center', 'center', 'center', 'left', 'left'],
    } as any;

    let imgSrc = () => {
        if (window.innerWidth >= 1200) {
            return HomePic;
        } else {
            return MainPictureThin;
        }
    };

    return (
        <Box sx={{ ...flexWrapperOuterStyle, ...backgroundStyle, ...responsiveWrapperStyle }}>
            <Box sx={{ flexDirection: 'row', ...flexWrapperInnerStyle, flex: '50%', alignItems: 'center' }}>
                <Container maxWidth='sm' sx={{ justifyContent: 'center' }}>
                    <Box sx={animation}>
                        <Typography variant={'h1'} sx={{ ...titleStyle, marginLeft: '5px', fontSize: ['3rem', '4rem'], fontWeight: 'bold', textAlign: 'justify' }}>
                            Hello!
                        </Typography>
                        <Typography variant={"body1"} sx={{ ...textContentStyle, fontSize: ['1.8rem', '3rem'], marginRight: [0, 0, 0, '-100px'], textAlign: 'justify' }}>
                            I'm Travis Anderson, a web developer with experience using
                            HTML, JavaScript, CSS, React, Material UI, MongoDB, Express, Node and MySQL.
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <CardMedia sx={{ flex: '50%', height: ['50vh', '50vh', '50vh', '100vh', '100vh'], width: 'auto' }}
                component="img"
                image={imgSrc()}
                alt="bgImage building blocks"
            />
            <KeyboardArrowDownIcon fontSize='large' sx={{ position: 'absolute', bottom: '20px', left: '50.5%', right: 'auto' }} />

        </Box>
    )
}