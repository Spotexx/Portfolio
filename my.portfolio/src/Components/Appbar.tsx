import React from "react";
import {titleStyle} from "../styles";
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Appbar = () => {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={titleStyle}>
                        Travis Anderson_
                    </Typography>
                    <Container maxWidth="sm">
                        <Button color="inherit" onClick={() => {
                            window.location.href = "/"
                        }}><HomeIcon/></Button>
                        <Button color="inherit" onClick={() => {
                            window.location.href = "/LinkedIn"
                        }}><LinkedInIcon/></Button>
                        <Button color="inherit" onClick={() => {
                            window.location.href = "/GitHub"
                        }}><GitHubIcon/></Button>
                        <Button color="inherit" onClick={() => {
                            window.location.href = "/Resume"
                        }}><AccountCircleIcon/></Button>
                        <Button color="inherit" onClick={() => {
                            console.log(window.location.href)
                        }}>console.log</Button>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>)
}