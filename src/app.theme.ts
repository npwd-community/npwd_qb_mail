import { common, red, orange } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material';

export const APP_PRIMARY_COLOR = orange[500];
export const APP_TEXT_COLOR = common.white;

export const theme: ThemeOptions = {
  palette: {
    primary: {
      main: APP_PRIMARY_COLOR,
      dark: orange[900],
      light: orange[500],
      contrastText: APP_TEXT_COLOR,
    },
    secondary: {
      main: orange[500],
      dark: orange[900],
      light: orange[500],
      contrastText: APP_TEXT_COLOR,
    },
  },
};
