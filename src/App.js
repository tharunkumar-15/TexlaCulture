import './App.css';
import DashBoard from './DashBoard';
import Sidenav from './Sidenav';
import { createTheme,ThemeProvider } from '@mui/material';
function App() {

  const theme=createTheme({
    typography:{
      fontFamily:[
        'Inter', 
        'sans-serif',
      ].join(','),
    }
  })
  return (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Sidenav/>
      <DashBoard/>
    </div>
  </ThemeProvider>
  );
}

export default App;
