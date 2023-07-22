import React from 'react'
import {ChevronDown, ChevronUp} from '../assets/icons'

const CartItem = ({id, name, price, amount, image}) => {
  return (
    <article className='cart-item'>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h5 className='item-price'>{price}</h5>
        <button className='remove-btn'>remove</button>
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