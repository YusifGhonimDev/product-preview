import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(158, 36%, 37%)',
      contrastText: 'hsl(30, 38%, 92%)',
    },
    secondary: {
      main: 'hsl(212, 21%, 14%)',
      dark: 'hsl(228, 12%, 48%)',
      contrastText: 'hsl(0, 0%, 100%)',
    },
  },
  typography: {
    fontSize: 14,
    body1: {
      fontFamily: 'Montserrat',
    },
    body2: {
      fontFamily: 'Fraunces',
    },
  },
});

export default theme;
