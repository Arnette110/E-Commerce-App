import React from 'react'

import { useSelector } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selectors'

import CollectionItem from '../../components/CollectionItem/CollectionItem.component'

// import './collectionpage.styles.scss'
import { CollectionPageContainer, CollectionPageTitle, CollectionPageItems } from './collectionpage.styles'

const CollectionPage = (props) => {
  const collection = useSelector(
    selectCollection(props.match.params.collectionId),
  )
  const { title, items } = collection

  return (
    <CollectionPageContainer>
      <CollectionPageTitle>{title.toUpperCase()}</CollectionPageTitle>
      <CollectionPageItems>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionPageItems>
    </CollectionPageContainer>
  )
}

export default CollectionPage
