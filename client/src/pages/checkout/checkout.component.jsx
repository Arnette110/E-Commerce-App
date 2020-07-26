import React from 'react'
import { useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/CheckOutItem/CheckoutItem.component'
import StripeButton from '../../components/StripeButton/StripeButton.component'

import './checkout.styles.scss'

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className='total'>
        <span>total: ${cartTotal}</span>
      </div>
      <div className='test-warning'>*Please use the following test credit card for payment
      <br/>
      4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
      </div>
      <StripeButton price={cartTotal} />
    </div>
  )
}

export default CheckoutPage
