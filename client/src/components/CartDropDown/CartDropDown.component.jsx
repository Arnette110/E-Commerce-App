import React from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import CustomButton from '../CustomButton/CustomButton.component'
import CartItem from '../CartItem/CartItem.component'

import { CartDropDownContainer, CartItemsContainer, EmptyMessageContainer } from './CartDropDown.styles'
// import './CartDropDown.styles.scss'

const CartDropDown = ({history}) => {
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CustomButton
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}>
        go to check out
      </CustomButton>
    </CartDropDownContainer>
  )
}

export default withRouter(CartDropDown)
