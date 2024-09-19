import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopUrls from './views/TopUrls';
import UrlInput from './views/UrlInput';

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<UrlInput />} />
      <Route path="/top-urls" element={<TopUrls />} />
    </Routes>
  </Router>
);

export default AppRoutes;
