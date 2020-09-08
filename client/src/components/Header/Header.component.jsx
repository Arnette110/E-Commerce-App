import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { ReactComponent as Logo } from '../../assets/original.svg'
import CartIcon from '../CartIcon/CartIcon.component'
import CartDropDown from '../CartDropDown/CartDropDown.component'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { signOutSuccess } from '../../redux/user/user.actions'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import { auth } from '../../firebase/firebase.utils'

// import './Header.styles.scss'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styles'

const Header = () => {

  const currentUser = useSelector(selectCurrentUser)
  const hidden = useSelector(selectCartHidden)
  const dispatch = useDispatch()

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink
            to='/'
            onClick={() => auth.signOut().then(dispatch(signOutSuccess()))}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/sign-in'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  )
}

export default Header
