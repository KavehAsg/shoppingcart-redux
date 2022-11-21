import React from 'react';

import { Routes , Route } from 'react-router-dom';

import { useEffect } from 'react';
import { fetchData } from './features/Products/productsSlice';
import { useDispatch } from 'react-redux';

import CardContainer from './components/ProductStore/CardsContainer';
import Navbar from './components/Navbar/Navbar';

function App() {

  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchData());
  } , [dispatch])

  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/' element={<CardContainer />} />
      </Routes>
    </div>
  );
}

export default App;
