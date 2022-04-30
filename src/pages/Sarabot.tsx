import {
  Box,
  Chip,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { ElevatedPaper } from "../Components/ElevatedPaper";
import Sarabotpic from "../portfolioPictures/sarabot.png";
import {
  backgroundStyle,
  centerItem,
  flexWrapperInnerStyle,
  flexWrapperOuterStyle,
  titleContainer,
  titleStyle,
} from "../styles";

const picEffect = {
  position: "relative",
  overflow: "hidden",
  width: "90%",
  height: "90%",
  "&:hover img": {
    transition: "all 0.5s ease-in-out",
    filter: "blur(2px)",
  },
  "&:hover div": {
    transition: "all 0.5s ease-in-out",
    opacity: "0",
  },
} as const;
const imgTextEffect = {
  top: "0",
  color: "text.secondary",
  bgcolor: "background.pic",
  width: "100%",
  height: "100%",
  padding: "10px",
  position: "absolute",
  opacity: "0",
  transition: "all 0.5s ease-in-out",
  "&:hover": {
    backgroundOpacity: "0.5",
    opacity: "100",
  },
} as const;

export const Sarabot = () => {
  return (
    <Box
      sx={{
        ...flexWrapperOuterStyle,
        ...backgroundStyle,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <ElevatedPaper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "60%",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            flexDirection: "column",
            ...flexWrapperInnerStyle,
            width: "70%",
            alignItems: "center",
            ...titleContainer,
          }}
        ></Box>
        <Box
          sx={{
            ...flexWrapperInnerStyle,
            height: "auto",
            width: "100%",
            flexDirection: ["column", "column", "column", "row"],
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: [1, 2], height: "100%", width: "90%" }}>
            <Box
              sx={{
                ...flexWrapperInnerStyle,
                flexDirection: "column",
                ...centerItem,
              }}
            >
              <ImageListItem sx={{ ...picEffect }}>
                <img
                  style={{ width: "100%" }}
                  src={Sarabotpic}
                  alt="sitePic1"
                />
                <div>
                  <ImageListItemBar
                    title={"Sarabot - AI tutor"}
                    subtitle={"http://www.travisanderson.xyz/sarabot"}
                  />
                </div>
                <Typography
                  component={"span"}
                  sx={{ ...titleStyle, ...imgTextEffect }}
                  onClick={() =>
                    window.open("https://travisanderson.xyz/sarabot", "_blank")
                  }
                >
                  <Typography
                    component={"p"}
                    sx={{
                      fontSize: "2.5rem",
                      width: "auto",
                      margin: "0 auto",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Click to view live version
                  </Typography>
                </Typography>
              </ImageListItem>
            </Box>
          </Box>
        </Box>
        <Typography component={"div"} sx={{ fontSize: "2.5rem" }}>
          Description:
        </Typography>
        <Typography
          component={"div"}
          sx={{ fontSize: ["1rem", "1rem", "1.5rem"], textAlign: "justify" }}
        >
          This is an AI tutor that uses machine learning to help students with
          any questions they have. The bot has a primary focus on coding being
          prompted with topics including javascript, css and html. Please make
          sure to treat the ai like a real conversation with a person rather
          then a search engine.
        </Typography>
        <Typography>
          Test sign in credentials: email@email.com/password
        </Typography>
        <a href={"https://github.com/ChisatoSozo/ai-code-helper"}>
          <Typography
            component={"div"}
            sx={{
              fontSize: ["1rem", "1rem", "1.5rem"],
              textAlign: "justify",
              color: "text.primary",
            }}
          >
            View GitHub
          </Typography>
        </a>
        <Typography
          component={"div"}
          sx={{
            fontSize: "1.5rem",
            textAlign: "left",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          <Chip label="React JS" variant="outlined" color="secondary" />
          <Chip label="Material UI" variant="outlined" color="secondary" />
          <Chip label="TypeScript" variant="outlined" color="secondary" />
          <Chip label="GraphQl" variant="outlined" color="secondary" />
          <Chip label="Express JS" variant="outlined" color="secondary" />
          <Chip label="Node JS" variant="outlined" color="secondary" />
          <Chip label="GitHub" variant="outlined" color="secondary" />
        </Typography>
      </ElevatedPaper>
    </Box>
  );
};
