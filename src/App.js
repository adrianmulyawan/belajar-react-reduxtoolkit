import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home.page';
import ProductPage from './pages/product.page';
import EditProductPage from './pages/editProduct.page';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/product' element={ <ProductPage /> } />
          <Route path='/product/:id' element={ <EditProductPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
