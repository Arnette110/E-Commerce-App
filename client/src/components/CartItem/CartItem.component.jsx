import React from 'react'

// import './CartItem.styles.scss'
import { CartItemContainer, CartItemImageContainer, ItemDetailsContainer, NameContainer, PriceContainer } from './CartItem.styles'

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
    return (
      <CartItemContainer>
        <CartItemImageContainer src={imageUrl} alt='item' />
        <ItemDetailsContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>
            {`${quantity} x $${price}`}
          </PriceContainer>
        </ItemDetailsContainer>
      </CartItemContainer>
    )
}

export default CartItem
