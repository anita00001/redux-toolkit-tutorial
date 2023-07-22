import React from 'react';
import NavBar from './NavBar';
import CartContainer from './CartContainer';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from '../redux/cart/cartSlice';
import { useEffect } from 'react';
import '../styles/App.css';

function App() {
  const {cartItems} = useSelector((store)=>store.cart);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <div className="App">
      <main className="App-header">
        <NavBar />
        <CartContainer />
      </main>
    </div>
  );
}

export default App;
