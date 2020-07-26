import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'

import CollectionPage from '../collectionpage/collectionpage.component'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.component'
import WithSpinner from '../../components/WithSpinner/WithSpinner.component'

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match }) => {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(
    () => {
      const collectionRef = firestore.collection('collections')
      // eslint-disable-next-line
      let unsubscribeFromSnapshot = null

      unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        dispatch(updateCollections(collectionsMap))
        setLoading(false)
      })
    },
    // eslint-disable-next-line
    [],
  )

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  )
}
export default ShopPage
