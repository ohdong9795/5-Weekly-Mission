import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Folder from './pages/Folder';
import Shared from './pages/Shared';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/shared" element={<Shared />}/>
      <Route path="/folder" element={<Folder />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </BrowserRouter>
);
