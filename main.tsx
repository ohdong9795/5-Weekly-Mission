import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Folder from './pages/Folder/Folder';
import Shared from './pages/Shared/Shared';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/shared' element={<Shared />} />
      <Route path='/folder' element={<Folder />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
