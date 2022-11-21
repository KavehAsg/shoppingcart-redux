import React , { useEffect }from 'react';

import { Routes , Route } from 'react-router-dom';

//api redux action
import { fetchData } from './features/Products/productsSlice';
import { useDispatch } from 'react-redux';

//components
import CardContainer from './components/ProductStore/CardsContainer';
import Navbar from './components/Navbar/Navbar';
import DetailsPage from './components/DetailsPage/DetailsPage';
import CartPage from './components/CartPage/CartPage';

function App() {

  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchData());
  } , [dispatch])

  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/detailpage/:id' element={<DetailsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/' element={<CardContainer />} />
      </Routes>
    </div>
  );
}

export default App;
