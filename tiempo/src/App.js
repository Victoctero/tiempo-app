import { GradosProvider } from './context/provider';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import themeConfig from './theming/theming.jsx'
import Page from './pages'
import './App.css'



function App() {
  return (
    <ThemeProvider theme={themeConfig}>
     <GradosProvider value='metric'>   
        <Page></Page>
    </GradosProvider>
    </ThemeProvider>
  );
}

export default App;
