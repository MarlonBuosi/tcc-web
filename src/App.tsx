import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { DashBoard } from './pages/DashBoard';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashBoard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}
