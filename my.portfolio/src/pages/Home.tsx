import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import { backgroundStyle, flexWrapperInnerStyle, flexWrapperOuterStyle, textContentStyle, titleStyle } from "../styles";
import HomePic from '../picturesOther/HomePic.png';
import face from '../face.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { UserContext } from "../Contexts/PageContext";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Home = () => {
    const animation = {
        animation: 'translate 1s 1',
        animationDirection: 'alternate',
        '@keyframes translate': {
            from: {
                transform: 'translate(90px,0px) skewX(-5deg)',
            },
            to: {
                transform: 'translate(0px, 0px) skewX(0deg)',
            }
        }
    }
    // import {useHistory} from 'react-router-dom';
    const { pageId, setPageId } = useContext<any>(UserContext);
    return (
        <Box sx={{ ...flexWrapperOuterStyle, ...backgroundStyle, flexDirection: 'row' }}>
            <Box sx={{ flexDirection: ['column', 'column', 'row', 'row', 'row'], ...flexWrapperInnerStyle, width: '70%', alignItems: 'center' }}>
                <CardMedia sx={{ height: '70px', width: '200px', position: 'absolute', top: 10, left: 10 }}
                    component="img"
                    image={face}
                    alt="bgImage building blocks"
                />
                <Container maxWidth='sm' sx={{ justifyContent: 'center', height: '400px' }}>
                    <Box sx={animation}>
                        <Typography variant={'h1'} sx={{ ...titleStyle, marginLeft: '5px' }} align='left'>
                            Hello!
                        </Typography>
                        <Typography variant={"body1"} sx={textContentStyle}>
                            I'm Travis Anderson, a web developer with experience using
                            HTML, Javascript, CSS, React, Material UI, MongoDB, Express, Node and MySQL.
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <CardMedia sx={{ height: '100%', width: '70%' }}
                component="img"
                image={HomePic}
                alt="bgImage building blocks"
            />
            <KeyboardArrowDownIcon fontSize='large' sx={{position:'absolute', bottom:'20px', left:'50.5%', right:'auto'}}/>
            {/* <Button onClick={() => setPageId(1)} variant={'contained'} sx={{ position: 'absolute', top: '95vh', right: 10, bgcolor: 'secondary.light' }}>
                <Typography sx={{ display: 'inlineBlock', verticalAlign: 'middle' }} variant={'body1'} >Linked In</Typography>
            </Button>
            <Button onClick={() => setPageId(3)} variant={'contained'} sx={{ position: 'absolute', top: '95vh', left: 10, bgcolor: 'secondary.light' }}>
                <Typography sx={{ display: 'inlineBlock', verticalAlign: 'middle' }} variant={'body1'} >Resume</Typography>
            </Button> */}
        </Box>
    )
}