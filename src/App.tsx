import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import FormPage from './components/FormPage';
import MainPage from './components/MainPage';
import CartPage from './components/СartPage';
import Footer from './components/Footer';
import './styles/App.css';

const App: FC = () => {
  return (
    <>
      <Router>
        <Header/>
        <div className='content'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/form' element={<FormPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
