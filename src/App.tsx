import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Basket from './components/Basket/Basket';
import Home from './components/Home/Home';
import Just from './components/Just/Just';

// import Header from './components/Header/Header';
import FullPizzas from './components/FullPizzas/FullPizzas';
import { SignInPage } from './pages/Login/SignInPage';
import { SignUpPage } from './pages/Registration/SignUpPage';

import Header from './components/Header/Header';
import './App.scss';
function App() {
  return (
    <div className="wrapper">
      <Header setSearchValue={undefined} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<FullPizzas />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/empty" element={<Just />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
