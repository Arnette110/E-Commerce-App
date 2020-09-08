import React from 'react'
import { useDispatch } from 'react-redux'

// import CustomButton from '../CustomButton/CustomButton.component'
import { addItem } from '../../redux/cart/cart.actions'

// import './CollectionItem.styles.scss'
import { CollectionItemContainer, ImageContainer, AddButton, CollectionFooterContainer, NameContainer, PriceContainer } from './CollectionItem.styles'

const CollectionItem = ({item}) => {

  const dispatch = useDispatch()
  const { name, price, imageUrl } = item

    return (
      <CollectionItemContainer>
        <ImageContainer className='image'
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => dispatch(addItem(item))} inverted>
          add to cart
        </AddButton>
      </CollectionItemContainer>
    )
}

export default CollectionItem


