import { GradosProvider } from './context/provider';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import themeConfig from './theming/theming.jsx'
import SwitchLabels from './components/switch';
import GeoButton from './components/geo-button';

function App() {
  return (
    <ThemeProvider theme={themeConfig}>
     <GradosProvider>   
        <SwitchLabels></SwitchLabels>
        <GeoButton></GeoButton>
    </GradosProvider>
    </ThemeProvider>
  );
}

export default App;
