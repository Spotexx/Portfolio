import React from 'react';
import {Box, makeStyles, Paper, Typography} from "@material-ui/core";
import {ElevatedPaper} from "../Components/ElevatedPaper";
const useStyles = makeStyles(theme => ({
    title: {
        color: theme.palette.text.primary,
        paddingLeft: '25px',
    },
    subTitle: {
        color: theme.palette.text.secondary,
        paddingLeft: '25px',
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    flexItem: {
        flex: '50%'
    },
    paper:  {
        backgroundColor: theme.palette.primary.main,
        margin: '15px',
    },
    content: {
        textColor: theme.palette.text,
        padding: '15px'
    },
    subContent: {
        color: theme.palette.text.secondary,
        padding: '15px'
    },
    subTitlePoints: {
        color: theme.palette.text.secondary,
        paddingLeft: '30px'
    }
}))

const Resume = () => {
    const classes = useStyles();
    return (
        <div style={{marginTop: '40px'}}>

            <Box className={classes.flexContainer}>
                {/*left div*/}
                <Box className={classes.flexItem}>
                    {/*//#region Main Title*/}
                    <Typography variant="h3" className={classes.title}>Travis Anderson</Typography>
                    <Typography variant="body1" style={{marginLeft: '15px'}} className={classes.subTitle}>Experience in both programming and finance</Typography>
                    {/*//#endregion*/}
                    {/*//#region Work Experience*/}
                    <Typography variant="h6" style={{marginTop: '40px'}} className={classes.title}>Work Experience</Typography>

                    <ElevatedPaper  className={classes.paper}>
                        <Typography className={classes.content}>
                            <Box component="span" style={{ fontWeight: 600 }}>
                                Accountant @ Federal Pardon and Waiver Services
                            </Box>
                            <Box className={classes.subTitlePoints}><br/>
                                - Etobicoke Ontario May 2020 to august 2021<br/>
                                - Accounts receivable, billing, collections, data entry
                            </Box>
                        </Typography>
                        <Typography className={classes.content}>
                            <Box component="span" style={{ fontWeight: 600 }}>
                                Accountant @ iDesign Solutions
                            </Box>
                            <Box className={classes.subTitlePoints}><br/>
                                - Etobicoke, Ontario November 2019 to April 2020<br/>
                                - Processing Sale orders and Purchase orders in quickbooks as well as invoicing and some customer service.
                            </Box>
                        </Typography>
                        <Typography className={classes.content}>
                            <Box component="span" style={{ fontWeight: 600 }}>
                                Jr. Accountant @ Forest Oaple Products
                            </Box>
                            <Box className={classes.subTitlePoints}><br/>
                                - Markham, Ontario September 2019 to September 2019<br/>
                                - Completed data entry and bookkeeping such as bank reconciliations and revenue/ expense tracking via quickbooks.
                            </Box>
                        </Typography>
                    </ElevatedPaper>
                    {/*//#endregion*/}
                    {/*//#region Education*/}
                    <Typography variant="h6" style={{marginTop: '40px'}} className={classes.title}>Education</Typography>
                    <ElevatedPaper className={classes.paper}>
                        <Typography className={classes.content}>
                            <Box component="span" style={{ fontWeight: 600 }}>
                                Dot Star Programming
                            </Box>
                            <Box className={classes.subTitlePoints}><br/>
                                - Kingston ON August 2020 - Jan 2021<br/>
                                - Completed a 6 month bootcamp where I learned many skills used Python, react as well as  javascript for front end web development
                            </Box>
                        </Typography>
                        <Typography className={classes.content}>
                            <Box component="span" style={{ fontWeight: 600 }}>
                                Dot Star Programming
                            </Box>
                            <Box className={classes.subTitlePoints}><br/>
                                -  Kingston, ON September 2015 to July 2018<br/>
                                - Diploma in Accounting -
                                Completed three years of business accounting where I learned everything from trial balances to data entry as well as cost accounting.
                            </Box>
                        </Typography>
                    </ElevatedPaper>
                    {/*//#endregion*/}
                </Box>

                {/*right div*/}
                <Box className={classes.flexItem}>
                    {/*//#region Contact*/}
                    <Typography variant="h5" className={classes.title}>Contact </Typography>
                    <ElevatedPaper className={classes.paper}>
                        <Typography className={classes.content}>
                            41 Autumn Blvd <br/>
                            Brampton, ON L6T 2W1 <br/>
                            (613) 634-9960 <br/>
                            tsanderson.023@gmail.com
                        </Typography>
                    </ElevatedPaper>
                    {/*//#endregion*/}
                    {/*//#region Skills*/}
                    <Typography variant="h5" className={classes.title}>Skills </Typography>
                    <ElevatedPaper className={classes.paper}>
                        <Typography className={classes.content}>
                            Proficient in:
                            <Box className={classes.subTitlePoints}>
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

                            Experience with spreadsheets using Microsoft Excel as well as Google sheets for efficient data manipulation.

                        </Typography>
                    </ElevatedPaper>
                    {/*//#endregion*/}
                </Box>

            </Box>
        </div>
    );
};

export default Resume;