import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from "@mui/material";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { UserContainer } from './Contexts/PageContext';



const theme = createTheme({
  palette: {
    primary: {
      main: '#b3e5fc'
    },
    secondary: {
      main: '#F85986'
    },
    text: {
      primary: '#000000',
      secondary: '#B0B3B8'
    },
    background: {
      default: '#b3e5fc',
      //@ts-ignore
      pic: 'rgba(0,0,0,0.5)',
      paper: '#e8eaf6',
    }
  },
  spacing: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64],
  typography: {
    h1: {
      fontFamily: "Pacifico, Balsamiq Sans, cursive",
    },
    body1: {
      fontFamily: "Balsamiq Sans, cursive",
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
