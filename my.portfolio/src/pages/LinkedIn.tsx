import React, { useContext } from "react";
import { Box, Button, CardMedia, Container, Divider, Grid, Paper, Typography } from "@mui/material";
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
        <Box sx={{ ...flexWrapperInnerStyle, ...backgroundStyle, padding:'30px', height:'100%', width:'auto', flexDirection: 'column', ...foregroundStyle }}>

            <Box sx={{flexDirection: 'column', ...flexWrapperInnerStyle, width: '100%', alignItems: 'center', ...titleContainer, ...foregroundStyle }}>


              
                <Typography variant="body1" sx={titleStyle}>Introduction</Typography>
                <Button sx={buttonStyle}
                    onClick={() => window.open("https://www.linkedin.com/in/travis-anderson-60106a107/", "_blank")}> View
                    Travis's Linkedin Profile
                </Button>
            </Box>
            <Box sx={{...flexWrapperInnerStyle, height:'auto'}}>
               
                <Container maxWidth='md' sx={{ ...flexWrapperInnerStyle, alignItems: 'center', flexDirection:'column'}}>
                    <Typography variant={'body1'} sx={{padding:'30px'}}>
                        They say that if you love what you do for your job then you never need to work a day in your life.
                        When I wrote my first <span style={{color:'red'}}>javascript</span> function, I was ecstatic. I find manipulating <span style={{color:'red'}}>data</span> and growing my
                        ability exciting. I am a <span style={{color:'red'}}>problem solver</span> and a <span style={{color:'red'}}>team player</span>. Because I have received so much
                        assistance in my educational journey, I find myself giving back and try to help people where
                        possible. I love <span style={{color:'red'}}>learning</span> new languages and seeing code in different ways. I seem to pick things up
                        rather quickly and enjoy working on software that I can use in my life in a practical way.  
                    </Typography>
                    <Divider flexItem sx={{paddingTop:'30px'}}>Skills at a glance</Divider>
                    
                            <Typography variant={'body1'} sx={{fontSize:'3rem', textAlign:'center', margin:'30px'}}>• HTML • CSS • Javascript • React JS • Material UI • Responsive Design • MongoDB • Express • Node •</Typography>
                  
                </Container>
            </Box>
        
        </Box>)
}