// dependency
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// components
import MainLayout from '@components/layout/MainLayout';
import Portpolio from '@pages/Portpolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="portpolio" element={<Portpolio />} />
        </Route>
        <Route path="/*" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;
