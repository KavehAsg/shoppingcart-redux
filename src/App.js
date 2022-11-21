import { useEffect } from 'react';
import { fetchData } from './features/Products/productsSlice';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchData());
  } , [dispatch])

  return (
    <div>
      
    </div>
  );
}

export default App;
