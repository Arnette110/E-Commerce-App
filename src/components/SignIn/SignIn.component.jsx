import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput.component'
import CustomButton from '../CustomButton/CustomButton.component'
import './SignIn.styles.scss'

const SignIn = () => {

    const [user, setUser] = useState({email: '', password: ''})

    const handleSubmit = e => {
        e.preventDefault()
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

          <CustomButton type='submit' value='Submit Form' > SIGN IN </CustomButton>
        </form>
      </div>
    )
}

export default SignIn
