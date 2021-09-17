// @ts-nocheck
import React from 'react';
import {MyGallery} from "../Components/MyGallery";
import {Button, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    paper: {
        background: theme.palette.primary.main,
        position: "relative"
    },
    title: {
        color: theme.palette.text.primary,
        padding: '20px',
        paddingLeft: '10px'

    },
    buttonPadding: {
    marginLeft: '10px'
}
}))

export const GitHub = () => {
    const classes = useStyles();

    return (
        <div>

                <Typography variant="h3" className={classes.title}>GitHub
                    <Button className={`${classes.paper} ${classes.buttonPadding}`} onClick={() => window.open('https://github.com/Spotexx', "_blank")}> View Travis's GitHub Profile
                    </Button></Typography>

            <Paper className={classes.paper}>
                <MyGallery />
            </Paper>
        </div>
    );
};