import React from "react";
import { common, red, orange } from "@mui/material/colors";
import { ThemeOptions, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export const MAIL_APP_PRIMARY_COLOR = orange[500];
export const MAIL_APP_TEXT_COLOR = common.white;

export const theme: ThemeOptions = {
  palette: {
    primary: {
      main: MAIL_APP_PRIMARY_COLOR,
      dark: orange[900],
      light: orange[500],
      contrastText: MAIL_APP_TEXT_COLOR,
    },
    secondary: {
      main: orange[500],
      dark: orange[900],
      light: orange[500],
      contrastText: MAIL_APP_TEXT_COLOR,
    },
    error: {
      main: red[600],
      dark: red[900],
      light: red[500],
    },
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
};

interface ThemeSwitchProviderProps {
  children: React.ReactNode;
}
const ThemeSwitchProvider = ({ children }: ThemeSwitchProviderProps) => {
  const muiTheme = createTheme(theme);

  console.log(muiTheme);

  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default ThemeSwitchProvider;
