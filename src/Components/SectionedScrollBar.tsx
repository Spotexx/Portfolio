import { AccountCircle, AccountCircleOutlined, Call, CallOutlined, Folder, FolderOutlined, Home, HomeOutlined, Settings, SettingsOutlined } from '@mui/icons-material';
import { Box, IconButton, Tooltip } from "@mui/material";
import { ElevatedPaper } from "./ElevatedPaper";

export const SectionedScrollBar = (props: any) => {


    const ScrollPartition = (props: any) => {
        if (props.id === props.page) {
            return (
                <Tooltip sx={{ margin: '5px' }} placement="left" title={props.title} arrow>
                    <IconButton style={{ color: 'white' }} >
                        <Home sx={{ display: props.id === 0 ? 'block' : 'none' }} />
                        <AccountCircle sx={{ display: props.id === 1 ? 'block' : 'none' }} />
                        <Settings sx={{ display: props.id === 2 ? 'block' : 'none' }} />
                        <Folder sx={{ display: props.id === 3 ? 'block' : 'none' }} />
                        <Folder sx={{ display: props.id === 4 ? 'block' : 'none' }} />
                        <Call sx={{ display: props.id === 5 ? 'block' : 'none' }} />
                    </IconButton>
                </Tooltip>
            )
        }
        else {
            return (
                <Tooltip sx={{ margin: '5px' }} placement="left" title={props.title} arrow>
                    <IconButton style={{ color: 'white' }} onClick={() => props.setPage(props.id)} >
                        <HomeOutlined sx={{ display: props.id === 0 ? 'block' : 'none' }} />
                        <AccountCircleOutlined sx={{ display: props.id === 1 ? 'block' : 'none' }} />
                        <SettingsOutlined sx={{ display: props.id === 2 ? 'block' : 'none' }} />
                        <FolderOutlined sx={{ display: props.id === 3 ? 'block' : 'none' }} />
                        <FolderOutlined sx={{ display: props.id === 4 ? 'block' : 'none' }} />
                        <CallOutlined sx={{ display: props.id === 5 ? 'block' : 'none' }} />
                    </IconButton>
                </Tooltip>
            )
        }
    }

    return (
        <Box sx={{
            width: 'min-content', height: 'max-content', position: 'fixed', right: '10px', top: '50%', zIndex: '100', transform: 'translateY(-50%)', display: ['none', 'none', 'block'],
        }} >
            <ElevatedPaper sx={{ height: 'max-content', pt: '20px', pb: '20px', borderRadius: '15px', borderColor: 'secondary.main', borderStyle: 'solid' }}>
                <ScrollPartition id={0} page={props.page} setPage={props.setPage} title='Home' />
                <ScrollPartition id={1} page={props.page} setPage={props.setPage} title='Introduction' />
                <ScrollPartition id={2} page={props.page} setPage={props.setPage} title='Technologies' />
                <ScrollPartition id={3} page={props.page} setPage={props.setPage} title='Project 1' />
                <ScrollPartition id={4} page={props.page} setPage={props.setPage} title='Project 2' />
                <ScrollPartition id={5} page={props.page} setPage={props.setPage} title='Contact Me' />
            </ElevatedPaper>
        </Box >
    )
}