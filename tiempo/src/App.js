import { GradosProvider } from './context/provider';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import themeConfig from './theming/theming.jsx'
import SwitchLabels from './components/switch-labels';
import GeoButton from './components/geo-button';
import DaySelector from './components/day-selector';
import './App.css'



function App() {
  return (
    <ThemeProvider theme={themeConfig}>
     <GradosProvider>   
       <div className="main">
        <SwitchLabels></SwitchLabels>
        <GeoButton></GeoButton>
        <DaySelector></DaySelector>
        </div>
        
    </GradosProvider>
    </ThemeProvider>
  );
}

export default App;
