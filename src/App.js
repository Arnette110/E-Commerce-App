import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignupPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/Header/Header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


function App() {
  const [currentUser, setCurrentUser] = useState(null)

  

  useEffect(()=>{
    document.title = 'My e-commerce app'
    let unsubscribeFromAuth = null
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = createUserProfileDocument(userAuth)
        ;
        (await userRef).onSnapshot(snapShot => {
          setCurrentUser(
            { ...snapShot, id: snapShot.id, ...snapShot.data() }
          )
        })
      }
    });
    
    return () => {
      unsubscribeFromAuth()
    }
  },[])
  
  // console.log(currentUser)

  

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign-in' component={SignInAndSignupPage} />
      </Switch>
    </div>
  )
}

export default App;
