import React from 'react'
import { useDispatch } from 'react-redux'

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions'
// import './CheckoutItem.styles.scss'
import {
  CheckoutItemContainer,
  CheckoutItemImageContainer,
  CheckoutItemImage,
  QuantityContainer,
  TextContainer,
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
        
          <TextContainer>{name}</TextContainer>
          <QuantityContainer>
            <div onClick={() => dispatch(removeItem(cartItem))}>
              &#10094;
            </div>
            <span>{quantity}</span>
            <div onClick={() => dispatch(addItem(cartItem))}>
              &#10095;
            </div>
          </QuantityContainer>
          <TextContainer>{price}</TextContainer>
          <RemoveButtonContainer
            onClick={() => dispatch(clearItemFromCart(cartItem))}>
            &#10005;
          </RemoveButtonContainer>
        
      </CheckoutItemContainer>
    )
}

export default CheckoutItem
