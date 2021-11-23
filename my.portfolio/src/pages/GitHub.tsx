
import React, { useContext } from 'react';
import {MyGallery} from "../Components/MyGallery";
import {Box, Button, Paper, Typography} from "@mui/material";
import {ElevatedPaper} from "../Components/ElevatedPaper";
import {flexWrapperOuterStyle, paperStyle} from "../styles";
import { UserContext } from '../Contexts/PageContext';


const paper = {
    bgcolor: 'primary.main',
    position: "relative"
}as const;
const title = {
    color: 'primary.main',
    padding: '20px',
    paddingLeft: '10px'

}
const buttonPadding = {
    marginLeft: '10px'
}

export const GitHub = () => {
    const {pageId, setPageId} = useContext<any>(UserContext);

    return (
        <Box sx={{position:'relative'}}>
            <Box >
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
            <Button onClick={() => setPageId(3)} variant={'contained'} sx={{position:'absolute',bottom:10, right:10, bgcolor:'secondary.light'}}>
                <Typography sx={{display:'inlineBlock', verticalAlign:'middle'}}  variant={'body1'} >Resume</Typography>
            </Button>
            <Button onClick={() => setPageId(1)} variant={'contained'} sx={{position:'absolute',bottom:10, left:10, bgcolor:'secondary.light'}}>
                <Typography sx={{display:'inlineBlock', verticalAlign:'middle'}}  variant={'body1'} >Linked In</Typography>
            </Button>
        </Box>
    );
};