import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'



// import './CartIcon.styles.scss'
import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './CartIcon.styles'

const CartIcon = () => {

    const dispatch = useDispatch()
    const itemCount = useSelector(selectCartItemsCount)
    return (
      <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
        <ShoppingIconContainer />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
      </CartIconContainer>
    )
}

export default CartIcon
