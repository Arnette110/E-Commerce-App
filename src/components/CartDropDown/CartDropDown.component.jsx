import React from 'react'
import { useSelector } from 'react-redux'

import CustomButton from '../CustomButton/CustomButton.component'
import CartItem from '../CartItem/CartItem.component'
import './CartDropDown.styles.scss'

const CartDropDown = () => {
  const cartItems = useSelector(state => state.cart.cartItems)

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>go to check out</CustomButton>
    </div>
  )
}

export default CartDropDown
