// @ts-nocheck
import React from 'react';
import {MyGallery} from "../Components/MyGallery";
import {Box, Button, Paper, Typography} from "@mui/material";
import {ElevatedPaper} from "../Components/ElevatedPaper";
import {flexWrapperOuterStyle, paperStyle} from "../styles";


const paper = {
    bgcolor: 'primary.main',
    position: "relative"
}
const title = {
    color: 'primary.main',
    padding: '20px',
    paddingLeft: '10px'

}
const buttonPadding = {
    marginLeft: '10px'
}

export const GitHub = () => {

    return (
        <Box>
            <Box sx={flexWrapperOuterStyle}>
                <ElevatedPaper sx={{...paperStyle, width:'40%'}}>
                    <Typography variant="h3" sx={title}>GitHub
                        <Button sx={{...paper, ...buttonPadding, color: 'text.secondary'}}
                                onClick={() => window.open('https://github.com/Spotexx', "_blank")}> View Travis's GitHub
                            Profile
                        </Button>
                    </Typography>
                </ElevatedPaper>
            </Box>

            <Paper sx={paperStyle}>
                <MyGallery/>
            </Paper>
        </Box>
    );
};