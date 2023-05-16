import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Basket from './components/Basket/Basket';
import Home from './components/Home/Home';
import Just from './components/Just/Just';
import './App.scss';


function App() {

  return (
    <div className="wrapper">
       <Routes>
        <Route path="/" element={<Home/>  }/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/empty' element={<Just/>}/>
      </Routes>      
    </div>
  );
}

export default App;
