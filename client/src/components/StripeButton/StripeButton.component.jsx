import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeButton = ({price}) => {

    const priceForStripe = price * 100
    const publishableKey =
      'pk_test_51H6h6jAUvG0U1ktLP0Im6iogxjtXc1YuEhld9GbI52K4CIU0WuDATDmpw33RQgelYqDFC8164ZUW4glxNpkmPwRg0085r7GOMe'
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(res => {
            alert('payment successful')
        }).catch(error => {
            console.log('payment error: ', JSON.parse(error))
            alert('there was an issue with payment. please make sure to use the provided test credit card.')
        })
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Carrot Corner'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton
