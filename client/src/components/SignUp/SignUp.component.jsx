import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput.component'
import CustomButton from '../CustomButton/CustomButton.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

// import './SignUp.styles.scss'
import { SignUpContainer, SignUpTitle } from './SignUp.styles'

const SignUp = () => {
  const [signUpCredentials, setSignUpCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = {
      ...signUpCredentials,
    }
    
    if (password !== confirmPassword) {
      alert('passwords must match')
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      )
      await createUserProfileDocument(user, {displayName})
      setSignUpCredentials({
        ...signUpCredentials,
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setSignUpCredentials({ ...signUpCredentials, [name]: value })
  }

  return (
    <SignUpContainer>
      <SignUpTitle>i don't have an account</SignUpTitle>
      <span style={{fontSize: '1.6rem'}}>sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          label='displayName'
          value={signUpCredentials.displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type='email'
          name='email'
          label='email'
          value={signUpCredentials.email}
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='password'
          label='password'
          value={signUpCredentials.password}
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          label='confirmPassword'
          value={signUpCredentials.confirmPassword}
          onChange={handleChange}
          required
        />
        <CustomButton type='submit'>sign up</CustomButton>
      </form>
    </SignUpContainer>
  )
}

export default SignUp
