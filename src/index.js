import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </BrowserRouter>
);
