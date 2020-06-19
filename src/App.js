import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/Header/Header.component'


// const HatsPage = () => (
//   <div>
//     <h1>the hats page</h1>
//   </div>
// )

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App;
