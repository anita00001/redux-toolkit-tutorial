import CartIcon from '../assets/icons';
import {useSelector} from 'react-redux';

const NavBar = () => {
  // console.log(
  //   useSelector((store)=>{
  //     console.log(store)
  //   })
  // );

  const { amount } = useSelector((store)=>store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
      </div>
      <div className="nav-container">
        <CartIcon />
      </div>
      <div className="amount-container">
        <p className="total-amount">{amount}</p>
      </div>
    </nav>
  )
}

export default NavBar;