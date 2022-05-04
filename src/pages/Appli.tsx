import {
  Box,
  Chip,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { ElevatedPaper } from "../Components/ElevatedPaper";
import Sarabotpic from "../portfolioPictures/appli.png";
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

export const Appli = () => {
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
                    subtitle={"http://www.travisanderson.xyz/appli"}
                  />
                </div>
                <Typography
                  component={"span"}
                  sx={{ ...titleStyle, ...imgTextEffect }}
                  onClick={() =>
                    window.open("https://travisanderson.xyz/appli", "_blank")
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
          Appli is a cover letter tracker for the web. It allows users to create
          cover letters and save them to their account. Users can also view
          their saved cover letters and delete them.
        </Typography>
        <Typography>
          Demo login credentials: email@email.com/password
        </Typography>
        <a href={"https://github.com/Travis-Anderson023/Appli"}>
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
          <Chip
            sx={{ mr: "10px" }}
            label="React JS"
            variant="outlined"
            color="secondary"
          />
          <Chip
            sx={{ mr: "10px" }}
            label="Material UI"
            variant="outlined"
            color="secondary"
          />
          <Chip
            sx={{ mr: "10px" }}
            label="TypeScript"
            variant="outlined"
            color="secondary"
          />
          <Chip
            sx={{ mr: "10px" }}
            label="MongoDB"
            variant="outlined"
            color="secondary"
          />
          <Chip
            sx={{ mr: "10px" }}
            label="Express JS"
            variant="outlined"
            color="secondary"
          />
          <Chip
            sx={{ mr: "10px" }}
            label="Node JS"
            variant="outlined"
            color="secondary"
          />
          <Chip
            sx={{ mr: "10px" }}
            label="GitHub"
            variant="outlined"
            color="secondary"
          />
        </Typography>
      </ElevatedPaper>
    </Box>
  );
};
