import React from 'react'

import CustomButton from '../CustomButton/CustomButton.component'
import './CartDropDown.styles.scss'

const CartDropDown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            <CustomButton>go to check out</CustomButton>
        </div>
    )
}

export default CartDropDown
