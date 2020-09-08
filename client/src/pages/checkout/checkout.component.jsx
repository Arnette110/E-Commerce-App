import React from 'react'
import { useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/CheckOutItem/CheckoutItem.component'
import StripeButton from '../../components/StripeButton/StripeButton.component'

// import './checkout.styles.scss'
import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer, WarningContainer } from './checkout.styles'

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <TotalContainer>
        <span>total: ${cartTotal}</span>
      </TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payment
        <br />
        4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
      </WarningContainer>
      <StripeButton price={cartTotal} />
    </CheckoutPageContainer>
  )
}

export default CheckoutPage
