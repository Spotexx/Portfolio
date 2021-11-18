// @ts-nocheck
import React from "react";
import {Button, Paper, Typography} from "@mui/material";

const paper = {
    bgcolor: 'primary.main',
    position: "relative"
}
const title = {
    color: 'text.primary',
    padding: '20px',
    paddingLeft: '10px'
}
const body = {
    color: 'text.secondary',
    padding: '10px'
}
const buttonPadding = {
    marginLeft: '10px'
}
export const LinkedIn = () => {
    return (
        <div>
            <Typography variant="h3" sx={title}>Introduction
                <Button sx={{...paper, ...buttonPadding}}
                        onClick={() => window.open("https://www.linkedin.com/in/travis-anderson-60106a107/", "_blank")}> View
                    Travis's Linkedin Profile
                </Button></Typography>
            <Paper sx={{paper}}>
                <Typography sx={body}>
                    They say that if you love what you do for your job then you never need to work a day in your life.
                    When I wrote my first javascript function, I was ecstatic. I find manipulating data and growing my
                    ability exciting. I am a problem solver and a team player. Because I have received so much
                    assistance in my educational journey, I find myself giving back and try to help people where
                    possible. I love learning new languages and seeing code in different ways. I seem to pick things up
                    rather quickly and enjoy working on software that I can use in my life in a practical way. I am a
                    front-end developer. I use HTML, CSS, JS, and can build apps with React framework.
                    <br/><br/>
                    I am gravitating toward a junior front-end position with a hands-on approach to development.
                    Ideally, I would contribute immediately while at the same time continue to broaden my knowledge. I
                    am looking for a company that provides a work environment that is conducive to continued learning,
                    work hard, and advance while having fun.
                    As a self-motivated employee, I will take initiative. I am able to adapt to change in a positive
                    way. I am goal orientated and will accept challenges that will help the company and team succeed.
                    <br/><br/>
                    The following are examples of how I've been described by employers and colleagues;
                    <br/><br/>
                    -problem solver<br/>
                    -great work ethic<br/>
                    -team player<br/>
                    -good time management skills<br/>
                    -able to set and achieve goals<br/>
                    -constantly looking for ways to improve in all areas of my life.
                </Typography>

            </Paper>
        </div>)
}