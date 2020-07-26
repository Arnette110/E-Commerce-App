import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


import { ReactComponent as Logo } from '../../assets/original.svg'
import CartIcon from '../CartIcon/CartIcon.component'
import CartDropDown from '../CartDropDown/CartDropDown.component'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { signOutSuccess } from '../../redux/user/user.actions'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import { auth } from '../../firebase/firebase.utils'

import './Header.styles.scss'

const Header = () => {

  const currentUser = useSelector(selectCurrentUser)
  const hidden = useSelector(selectCartHidden)
  const dispatch = useDispatch()

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <Link className='option' to='/' onClick={() => auth.signOut().then(dispatch(signOutSuccess()))}>
            SIGN OUT
          </Link>
        ) : (
          <Link className='option' to='/sign-in'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  )
}

export default Header
