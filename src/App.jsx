import './App.css'
import Sidebar from './components/Sidebar';
import { ThemeProvider, createTheme } from '@mui/material'

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, Arial',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
    </ThemeProvider>
  );
}

export default App
