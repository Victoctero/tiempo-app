import { GradosProvider } from './context/provider';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import themeConfig from './theming/theming.jsx'
import SwitchLabels from './components/switch';

function App() {
  return (
    <ThemeProvider theme={themeConfig}>
     <GradosProvider>   
        <SwitchLabels></SwitchLabels>
    
    </GradosProvider>
    </ThemeProvider>
  );
}

export default App;
