import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { DashBoard } from './pages/DashBoard';
import { AuthContextProvider } from './context/AuthContext';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';

export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashBoard" element={<DashBoard />} />
          </Routes>
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
