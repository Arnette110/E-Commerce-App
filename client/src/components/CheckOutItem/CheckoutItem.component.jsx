import React from 'react'
import { useDispatch } from 'react-redux'

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions'
// import './CheckoutItem.styles.scss'
import {
  CheckoutItemContainer,
  CheckoutItemImageContainer,
  CheckoutItemImage,
  NameContainer,
  QuantityContainer,
  ValueContainer,
  ArrowContainer,
  PriceContainer,
  RemoveButtonContainer,
} from './CheckoutItem.styles'

const CheckoutItem = ({cartItem}) => {

    const dispatch = useDispatch()
    const {name, imageUrl, price, quantity} = cartItem
    return (
      <CheckoutItemContainer>
        <CheckoutItemImageContainer>
          <CheckoutItemImage src={imageUrl} alt='item' />
        </CheckoutItemImageContainer>
        
          <NameContainer>{name}</NameContainer>
          <QuantityContainer>
            <ArrowContainer onClick={() => dispatch(removeItem(cartItem))}>
              &#10094;
            </ArrowContainer>
            <ValueContainer>{quantity}</ValueContainer>
            <ArrowContainer onClick={() => dispatch(addItem(cartItem))}>
              &#10095;
            </ArrowContainer>
          </QuantityContainer>
          <PriceContainer>{price}</PriceContainer>
          <RemoveButtonContainer
            onClick={() => dispatch(clearItemFromCart(cartItem))}>
            &#10005;
          </RemoveButtonContainer>
        
      </CheckoutItemContainer>
    )
}

export default CheckoutItem
