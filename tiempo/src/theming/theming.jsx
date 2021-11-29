import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      background: {
        paper: 'rgba(255, 255, 255, 0.3)',
      },
      primary: {
        main: 'rgb(255, 255, 255)',
      },
      secondary: {
        main: 'rgb(0, 0, 0)',
      },
      text: {
        primary: 'rgb(255, 255, 255)',
      }
    },
  });

  export default theme;