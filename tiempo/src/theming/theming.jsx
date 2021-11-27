// import { blue, green, pink, yellow, } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(255, 255, 255, 0,3)',
      },
      secondary: {
        main: 'rgb(196, 196, 196, 1)',
      },
      white:{
        main: (255,255,255), 
          
      }
    },
  });

  export default theme;