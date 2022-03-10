import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import { ReactComponent as BootstrapSVG } from "../picturesOther/svg/bootstrap.svg";
import { ReactComponent as CssSVG } from "../picturesOther/svg/css.svg";
import { ReactComponent as ExpressSVG } from "../picturesOther/svg/express.svg";
import { ReactComponent as GithubSVG } from "../picturesOther/svg/github.svg";
import { ReactComponent as HtmlSVG } from "../picturesOther/svg/html.svg";
import { ReactComponent as JavascriptSVG } from "../picturesOther/svg/javascript.svg";
import { ReactComponent as MaterialUiSVG } from "../picturesOther/svg/materialui.svg";
import { ReactComponent as MongoSVG } from "../picturesOther/svg/mongodb.svg";
import { ReactComponent as MysqlSVG } from "../picturesOther/svg/mysql.svg";
import { ReactComponent as NodeSVG } from "../picturesOther/svg/node.svg";
import { ReactComponent as ReactSVG } from "../picturesOther/svg/react.svg";
import { ReactComponent as TypescriptSVG } from "../picturesOther/svg/typescript.svg";
import { backgroundStyle, flexWrapperInnerStyle, flexWrapperOuterStyle } from "../styles";

const technologyIcons = [
    { icon: <ReactSVG />, rating: 5, title: "React" },
    { icon: <JavascriptSVG />, rating: 5, title: "JavaScript" },
    { icon: <HtmlSVG />, rating: 5, title: "HTML" },
    { icon: <CssSVG />, rating: 5, title: "CSS" },
    { icon: <MaterialUiSVG />, rating: 5, title: "Material-UI" },
    { icon: <GithubSVG />, rating: 4.5, title: "GitHub" },
    { icon: <BootstrapSVG />, rating: 4.5, title: "Bootstrap" },
    { icon: <NodeSVG />, rating: 4, title: "Node" },
    { icon: <ExpressSVG />, rating: 4, title: "Express" },
    { icon: <TypescriptSVG />, rating: 3.5, title: "TypeScript" },
    { icon: <MysqlSVG />, rating: 3, title: "MySQL" },
    { icon: <MongoSVG />, rating: 3, title: "MongoDB" },
]

export const Technologies = () => {
    return (
        <Box sx={{ ...flexWrapperOuterStyle, ...backgroundStyle }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{
                    ...flexWrapperInnerStyle, ...backgroundStyle,
                    justifyContent: "space-evenly",
                    alignContent: "space-evenly",
                    height: "95%",
                    padding: ["2.5vw", "5vw", "10vw"],
                }}
            >
                {technologyIcons.map((item) => {
                    return (

                        <Grid item xs={4} sm={3} md={2} lg={2} key={item.title} container sx={{
                            textAlign: "center",
                            justifyContent: "space-evenly",
                            alignContent: "space-around",
                            alignItems: "center"
                        }}>
                            <Grid sx={{}} item >
                                <Paper sx={{ width: 'fit-content', height: 'auto', p: '10%' }}>
                                    <Box sx={{ height: ['5vh', '5vh', '10vh'], width: 'auto' }}>
                                        {item.icon}
                                    </Box>
                                    <Typography variant="h6" component="h2" sx={{ width: 'max-content', textAlign: 'center', margin: '0 auto' }}>{item.title}</Typography><br />
                                    <Rating name="read-only" precision={0.5} value={item.rating} size='small' readOnly />
                                </Paper>
                            </Grid>

                        </Grid>

                    )
                })}
            </Grid>
        </Box >
    )
}   