import { green, yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: yellow[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  export default theme;