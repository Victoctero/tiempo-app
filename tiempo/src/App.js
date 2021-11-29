import { GradosProvider } from './context/provider';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import themeConfig from './theming/theming.jsx'
import Page from './pages'
import { InputProvider } from './context/context-input/provider'



function App() {
  return (
    <ThemeProvider theme={themeConfig}>
      <InputProvider value={'Madrid'}>
        <GradosProvider value='metric'>
          <Page></Page>
        </GradosProvider>
      </InputProvider>
    </ThemeProvider>
  );
}

export default App;
