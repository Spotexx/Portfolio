import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import { backgroundStyle, flexWrapperInnerStyle, flexWrapperOuterStyle, titleStyle } from "../styles";
import HomePic from '../picturesOther/HomePic.png';

export const Home = () => {

    return (
        <Box sx={{ ...flexWrapperOuterStyle, ...backgroundStyle, flexDirection: 'row' }}>
            <Box sx={{...flexWrapperInnerStyle, width: '70%', alignItems:'center'}}>
                <Box>
                    <Typography sx={titleStyle}>
                        Hello!
                    </Typography>
                    <Typography>
                        test<br/>test
                    </Typography>
                </Box>
            </Box>
            <CardMedia sx={{ height: '100%', width: '70%'}}
                component="img"
                image={HomePic}
                alt="bgImage building blocks"
            />
        </Box>
    )
}