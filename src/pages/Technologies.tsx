import { Box, Typography } from "@mui/material";
import { backgroundStyle, flexWrapperOuterStyle } from "../styles";

export const Technologies = () => {
    return (
        <Box sx={{ ...flexWrapperOuterStyle, ...backgroundStyle }}>
            <Typography variant={'body1'} sx={{ fontSize: '2rem', textAlign: 'center', margin: '30px' }}>•HTML •CSS •Javascript •React JS •Material UI •Responsive Design •MongoDB •Express •Node</Typography>
        </Box>
    )
}   