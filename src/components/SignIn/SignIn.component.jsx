import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput.component'
import CustomButton from '../CustomButton/CustomButton.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './SignIn.styles.scss'



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
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>sign in with email and password</span>
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
          <div className='buttons'>
            <CustomButton type='submit'>sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    )
}

export default SignIn
