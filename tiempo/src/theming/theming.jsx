import { blue, green, pink, yellow, } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: yellow[100],
      },
      white:{
        main: (255,255,255), 
          
      }
    },
  });

  export default theme;