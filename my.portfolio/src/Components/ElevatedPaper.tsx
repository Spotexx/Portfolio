import {Paper} from "@mui/material";

export const ElevatedPaper: React.FC<{[key: string]: any}> = ({children, ...props}) => {
    return <Paper elevation={10} {...props}>
        {children}
    </Paper>;
}