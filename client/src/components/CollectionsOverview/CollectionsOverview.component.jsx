import React from 'react'
import { useSelector } from 'react-redux'


import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../CollectionPreview/CollectionPreview.component'

// import './CollectionsOverview.styles.scss'

import { CollectionsOverviewContainer } from './CollectionsOverview.styles'

const CollectionsOverview = () => {

    const collections = useSelector(selectCollectionsForPreview)

    return (
      <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </CollectionsOverviewContainer>
    )
}

export default CollectionsOverview
