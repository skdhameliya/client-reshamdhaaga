import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import NotFound_404 from './components/404/404';
import AdminAdd from './components/AdminAdd/AdminAdd';
import AdminDelete from './components/AdminDelete';
import Product from './components/Product';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/product/:productID" element={<Product />} />
      <Route exact path="/admin1/add/:n" element={<AdminAdd />} />
      <Route exact path="/admin1/delete" element={<AdminDelete />} />
      <Route exact path="*" element={<NotFound_404 />} />
    </Routes>
  </BrowserRouter>
);