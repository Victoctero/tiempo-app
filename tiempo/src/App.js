import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import themeConfig from './theming/theming.jsx'

function App() {
  return (
    <ThemeProvider theme={themeConfig}>
        
    </ThemeProvider>
  );
}

export default App;
