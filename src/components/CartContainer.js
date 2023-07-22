import React from 'react'
import cartItem from '../redux/cart/cartSlice'
import { useSelector } from 'react-redux'

const CartContainer = () => {
    const {cartItem, total, amount} = useSelector((store) => store.cart);
    
    if(amount < 1) {
        return <section>
            <header>
                <h2>your bag</h2>
                <h4 className="empty-cart">is currently empty</h4>
            </header>
        </section>
    }
}

export default CartContainer