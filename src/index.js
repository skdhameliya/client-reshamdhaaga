import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import NotFound_404 from './components/404/404';
import AdminAdd from './components/AdminAdd/AdminAdd';
import AdminAdd_copy from "./components/AdminAdd/AdminAdd_copy"
import SendBulk from './components/AdminAdd/SendBulk';
import AdminDelete from './components/AdminDelete/AdminDelete';
import AdminUpdate from './components/AdminUpdate/AdminUpdate';
import GetAllProducts from './components/GetAllProducts/GetAllProducts';
import Product from './components/SingleProduct/Product'
import Razorx1 from './components/AdminAdd/Razorx1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/shop" element={<GetAllProducts />} />
      <Route exact path="/product/:productID" element={<Product />} />
      <Route exact path="/admin1/add" element={<AdminAdd_copy />} />
      <Route exact path="/admin1/delete" element={<AdminDelete />} />
      <Route exact path="/admin1/update" element={<AdminUpdate />} />
      <Route exact path="*" element={<NotFound_404 />} />
    </Routes>
  </BrowserRouter>
);