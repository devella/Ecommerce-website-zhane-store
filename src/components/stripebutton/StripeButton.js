import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
      const priceForStripe = price * 100;
      const publishableKey =  'pk_test_mg1wJsZvQrRp6KWYDTMWYYXM00OaxlqSzz';
  const onToken = token => {
          console.log(token);
          alert('Payment Successful');
      }
      
      return (
          <StripeCheckout
              label='Pay Now'
              name='Zhane Store'
              billingAddress
              shippingAddress
              image='https://sendeyo.com/up/d/f3eb2117da'
              description={`Total €${price}`}
              amount={priceForStripe}
              panelLabel='Pay Now'
              token={onToken}
              stripeKey={publishableKey}
          />
      );
    };

export default StripeButton;