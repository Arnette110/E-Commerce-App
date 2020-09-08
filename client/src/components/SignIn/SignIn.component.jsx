import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput.component'
import CustomButton from '../CustomButton/CustomButton.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

// import './SignIn.styles.scss'
import { SignInContainer, SignInTitle, SignInButtonsGroup } from './SignIn.styles'


const SignIn = () => {

    const [user, setUser] = useState({email: '', password: ''})

    const handleSubmit = async e => {
        e.preventDefault()
        const { email, password } = {
          ...user,
        }

        try {
          await auth.signInWithEmailAndPassword(email, password)
          setUser({
            ...user, email:'', password: ''
          })
        } catch (error) {
          console.log(error)
        }
        setUser({...user, email:'', password:''})
    }

    const handleChange = e => {
        const { value, name } = e.target
        setUser({ ...user, [name]: value})

    }

    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span style={{fontSize: '1.6rem'}}>sign in with email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='email'
            value={user.email}
            required
            handleChange={handleChange}
          />
          <FormInput
            name='password'
            type='password'
            label='password'
            value={user.password}
            required
            handleChange={handleChange}
          />
          <SignInButtonsGroup>
            <CustomButton type='submit'>sign in</CustomButton>
            <CustomButton
              type='button'
              onClick={signInWithGoogle}
              isGoogleSignIn>
              sign in with google
            </CustomButton>
          </SignInButtonsGroup>
        </form>
      </SignInContainer>
    )
}

export default SignIn
