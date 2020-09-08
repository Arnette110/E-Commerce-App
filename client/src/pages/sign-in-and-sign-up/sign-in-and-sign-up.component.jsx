import React from 'react'

import SignIn from '../../components/SignIn/SignIn.component'
import SignUp from '../../components/SignUp/SignUp.component'

// import './sign-in-and-sign-up.styles.scss'
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles'

const SignInAndSignUp = () => {
    return (
      <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
      </SignInAndSignUpContainer>
    )
}

export default SignInAndSignUp