import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignupPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/Header/Header.component'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign-in' component={SignInAndSignupPage} />
      </Switch>
    </div>
  )
}

export default App;
