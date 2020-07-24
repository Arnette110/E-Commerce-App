import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './App.css'
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignupPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/Header/Header.component'
import CheckoutPage from './pages/checkout/checkout.component'

import { selectCurrentUser } from './redux/user/user.selector'
import { setCurrentUser } from './redux/user/user.actions'
// used to seed firebaseDB
// import {selectCollectionsForPreview } from './redux/shop/shop.selectors'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

function App() {
  const currentUser = useSelector(selectCurrentUser)
  // used to seed firebaseDB
  // const collectionsArray = useSelector(selectCollectionsForPreview)
  const dispatch = useDispatch()

  useEffect(
    () => {
      document.title = `Carrot's Corner`

      let unsubscribeFromAuth = null
      unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = createUserProfileDocument(userAuth)
          ;(await userRef).onSnapshot((snapShot) => {
            dispatch(
              setCurrentUser({
                ...snapShot,
                id: snapShot.id,
                ...snapShot.data(),
              }),
            )
          })
        }
        setCurrentUser(userAuth)
        // used to seed firebaseDB
        // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
      })

      return () => {
        unsubscribeFromAuth()
      }
    },
    // eslint-disable-next-line
    [],
  )

  // console.log(currentUser)
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/sign-in'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignupPage />
          }
        />
      </Switch>
    </div>
  )
}

export default App
