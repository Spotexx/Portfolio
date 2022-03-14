import { Circle, CircleOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import { ElevatedPaper } from "./ElevatedPaper";

export const SectionedScrollBar = (props: any) => {


    const ScrollPartition = (props: any) => {
        if (props.id === props.page) {
            console.log(props)
            return (<Circle sx={{ margin: '5px' }} />)
        }
        else {
            console.log(props.id, props.page)
            return (<CircleOutlined sx={{ margin: '5px' }} />)
        }
    }

    return (
        <Box sx={{
            width: 'min-content', height: 'max-content', position: 'fixed', right: '20px', top: '50%', zIndex: '1', transform: 'translateY(-50%)',
        }} >
            <ElevatedPaper sx={{ height: 'max-content', pt: '20px', pb: '20px', borderRadius: '15px', borderColor: 'secondary.main', borderStyle: 'solid' }}>
                <ScrollPartition id={0} page={props.page} />
                <ScrollPartition id={1} page={props.page} />
                <ScrollPartition id={2} page={props.page} />
                <ScrollPartition id={3} page={props.page} />
                <ScrollPartition id={4} page={props.page} />
                <ScrollPartition id={5} page={props.page} />
            </ElevatedPaper>

        </Box >
    )
}