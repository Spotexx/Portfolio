import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import React, { useContext } from 'react';
import { ElevatedPaper } from "../Components/ElevatedPaper";
import { UserContext } from '../Contexts/PageContext';
import face from '../face.png';
import { backgroundStyle, flexWrapperInnerStyle, flexWrapperOuterStyle, titleContainer, titleStyle } from '../styles';

const title= {
    color: 'text.primary',
    paddingLeft: '25px',
}
const subTitle= {
    color: 'text.secondary',
    paddingLeft: '25px',
}
const flexContainer= {
    display: 'flex',
    flexDirection: 'row'
} as const
const flexItem= {
    flex: '50%'
}
const paper= {
    bgcolor: 'background.paper',
    margin: '15px',
}
const content= {
    textColor: 'text.primary',
    padding: '15px'
}
const subContent= {
    color: 'text.secondary',
    padding: '15px'
}
const subTitlePoints= {
    color: 'text.secondary',
    paddingLeft: '30px'
}

const Resume = () => {
    const {pageId, setPageId} = useContext(UserContext);

    return (
        <Box sx={{ ...flexWrapperOuterStyle, ...backgroundStyle, flexDirection: 'column', height:'100%', width:'100%'}}>
            <Box sx={{ flexDirection: ['column', 'column', 'row', 'row', 'row'], ...flexWrapperInnerStyle, width: '100%', alignItems: 'center', ...titleContainer }}>
                <CardMedia sx={{ height: '70px', width: '200px', top: 10, left: 10 }}
                    component="img"
                    image={face}
                    alt="bgImage building blocks"
                />
                <Typography variant="h1" sx={titleStyle}>Resume</Typography>
            </Box>
            <Container sx={flexContainer}>
                {/*left div*/}
                <Box sx={flexItem}>
                    {/*//#region Main Title*/}
                    <Typography variant="h3" sx={title}>Travis Anderson</Typography>
                    <Typography variant="body1" sx={{marginLeft: '15px', ...subTitle}} >Experience in
                        both programming and finance</Typography>
                    {/*//#endregion*/}
                    {/*//#region Work Experience*/}
                    <Typography variant="h6" sx={{marginTop: '40px',...title}}>Work
                        Experience</Typography>

                    <ElevatedPaper sx={paper}>
                        <Typography sx={content}>
                            <Box component="span" style={{fontWeight: 600}}>
                                Accountant @ Federal Pardon and Waiver Services
                            </Box>
                            <Box sx={subTitlePoints}><br/>
                                - Etobicoke Ontario May 2020 to august 2021<br/>
                                - Accounts receivable, billing, collections, data entry
                            </Box>
                        </Typography>
                        <Typography sx={content}>
                            <Box component="span" style={{fontWeight: 600}}>
                                Accountant @ iDesign Solutions
                            </Box>
                            <Box sx={subTitlePoints}><br/>
                                - Etobicoke, Ontario November 2019 to April 2020<br/>
                                - Processing Sale orders and Purchase orders in quickbooks as well as invoicing and some
                                customer service.
                            </Box>
                        </Typography>
                        <Typography sx={content}>
                            <Box component="span" sx={{fontWeight: 600}}>
                                Jr. Accountant @ Forest Oaple Products
                            </Box>
                            <Box sx={subTitlePoints}><br/>
                                - Markham, Ontario September 2019 to September 2019<br/>
                                - Completed data entry and bookkeeping such as bank reconciliations and revenue/ expense
                                tracking via quickbooks.
                            </Box>
                        </Typography>
                    </ElevatedPaper>
                    {/*//#endregion*/}
                    {/*//#region Education*/}
                    <Typography variant="h6" sx={{marginTop: '40px',...title}}
                                >Education</Typography>
                    <ElevatedPaper sx={paper}>
                        <Typography sx={content}>
                            <Box component="span" sx={{fontWeight: 600}}>
                                Dot Star Programming
                            </Box>
                            <Box sx={subTitlePoints}><br/>
                                - Kingston ON August 2020 - Jan 2021<br/>
                                - Completed a 6 month bootcamp where I learned many skills used Python, react as well as
                                javascript for front end web development
                            </Box>
                        </Typography>
                        <Typography sx={content}>
                            <Box component="span" sx={{fontWeight: 600}}>
                                Dot Star Programming
                            </Box>
                            <Box sx={subTitlePoints}><br/>
                                - Kingston, ON September 2015 to July 2018<br/>
                                - Diploma in Accounting -
                                Completed three years of business accounting where I learned everything from trial
                                balances to data entry as well as cost accounting.
                            </Box>
                        </Typography>
                    </ElevatedPaper>
                    {/*//#endregion*/}
                </Box>

                {/*right div*/}
                <Box sx={flexItem}>
                    {/*//#region Contact*/}
                    <Typography variant="h5" sx={title}>Contact </Typography>
                    <ElevatedPaper sx={paper}>
                        <Typography sx={content}>
                            41 Autumn Blvd <br/>
                            Brampton, ON L6T 2W1 <br/>
                            (613) 634-9960 <br/>
                            tsanderson.023@gmail.com
                        </Typography>
                    </ElevatedPaper>
                    {/*//#endregion*/}
                    {/*//#region Skills*/}
                    <Typography variant="h5" sx={title}>Skills </Typography>
                    <ElevatedPaper sx={paper}>
                        <Typography sx={content}>
                            Proficient in:
                            <Box sx={subTitlePoints}>
                                - Javascript <br/>
                                - Node.JS <br/>
                                - HTML <br/>
                                - CSS <br/>
                                - React JS <br/>
                                - MySQL <br/>
                                - Python <br/>
                                - Pandas <br/>
                                - Microsoft 365
                            </Box>
                            <br/>Proficient in front end development using React JS <br/><br/>

                            Experience with databases such as MySQL <br/><br/>

                            Experience with spreadsheets using Microsoft Excel as well as Google sheets for efficient
                            data manipulation.

                        </Typography>
                    </ElevatedPaper>
                    {/*//#endregion*/}
                </Box>
                
            </Container>
            <Button onClick={() => setPageId(0)} variant={'contained'} sx={{position: 'absolute', top: '95vh', right:10, bgcolor:'secondary.light'}}>
                <Typography sx={{display:'inlineBlock', verticalAlign:'middle'}}  variant={'body1'} >Home</Typography>
            </Button>
            <Button onClick={() => setPageId(2)} variant={'contained'} sx={{position:'absolute',top: '95vh', left:10, bgcolor:'secondary.light',}}>
                <Typography sx={{display:'inlineBlock', verticalAlign:'middle'}}  variant={'body1'} >Git Hub</Typography>
            </Button>
        </Box>
    );
};//position: pageId === 3? 'fixed': 'absolute'

export default Resume;