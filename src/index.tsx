import { createTheme } from "@mui/material";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { App } from './App';
import { UserContainer } from './Contexts/PageContext';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'prevent-pull-refresh';



const theme = createTheme({
  palette: {
    primary: {
      main: '#121212'
    },
    secondary: {
      main: '#1db954'
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3'
    },
    background: {
      default: '#b3e5fc',
      //@ts-ignore
      pic: 'rgba(0,0,0,0.5)',
      paper: '#181818',
    }
  },
  spacing: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64],
  typography: {
    h1: {
      fontFamily: "Chakra Petch, Balsamiq Sans, cursive",
    },
    body1: {
      fontFamily: "Chakra Petch, cursive",
    },
  },
},

);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <UserContainer>
            <App />
          </UserContainer>
        </StyledEngineProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
