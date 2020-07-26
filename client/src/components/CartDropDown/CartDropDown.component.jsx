import React from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import CustomButton from '../CustomButton/CustomButton.component'
import CartItem from '../CartItem/CartItem.component'
import './CartDropDown.styles.scss'

const CartDropDown = ({history}) => {
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
            cartItems.length ? (
            cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))): (
            <span className='empty-message'>your cart is empty</span>
        )
    }
      </div>
      <CustomButton onClick={()=>{history.push('/checkout');
      dispatch(toggleCartHidden())
    }} >go to check out</CustomButton>
    </div>
  )
}

export default withRouter(CartDropDown)
