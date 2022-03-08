import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KbA1XDBfagids0WP3ASXECxmJ0UDl1R0378pVvuUjM5M5AsauiMma8Uy4bNmcFi8rin9dLIJoS2ZQTi3vLrXTwA00ttcXUA8P';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crwn Clothing Ltd.'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;