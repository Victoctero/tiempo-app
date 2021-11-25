import { green, yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
      secondary: {
        main: green[800],
      },
    },
  });

  export default theme;