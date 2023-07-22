import React from 'react'
import {ChevronDown, ChevronUp} from '../assets/icons'
import { removeItem } from '../redux/cart/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({id, name, price, amount, image}) => {
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h5 className='item-price'>{price}</h5>
        <button className='remove-btn' onClick={()=>{dispatch(removeItem(id))}}>remove</button>
      </div>
      <div>
        <button className='amount-btn'>
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn'>
          <ChevronDown />
        </button>
      </div>
    </article>
  )

}
 
export default CartItem