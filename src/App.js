import React, { useEffect,  } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'


import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignupPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/Header/Header.component'

import { setCurrentUser } from './redux/user/user.actions'


import { auth, createUserProfileDocument } from './firebase/firebase.utils'


function App() {
  // const [currentUser, setCurrentUser] = useState(null)
  
  const dispatch = useDispatch()
  

  useEffect(()=>{
    document.title = 'My e-commerce app'
    
    let unsubscribeFromAuth = null
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = createUserProfileDocument(userAuth)
        ;
        (await userRef).onSnapshot(snapShot => {
          dispatch(setCurrentUser(
            { ...snapShot, id: snapShot.id, ...snapShot.data() }
          ))
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
      <Header  />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign-in' component={SignInAndSignupPage} />
      </Switch>
    </div>
  )
}

export default App;
