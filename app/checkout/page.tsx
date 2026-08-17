'use client'
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js'
import {
    EmbeddedCheckout,
    EmbeddedCheckoutProvider
} from '@stripe/react-stripe-js'



//import { fetchClientSecret } from '../actions/stripe'

/* interface CheckOutProps { 
    useParams: Promise<{
        cartId: string;
        orderId: string;
    }>
}; */
export default function Checkout() {
    const searchParams = useSearchParams();
    const cartId = searchParams.get('cartId');
    const orderId = searchParams.get('orderId');


    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

    const fetchClientSecret = useCallback(async () => {
        // creating a checkout session
        const response = await axios.post('/api/payment', {
            orderId: orderId,
            cartId: cartId
        })
        return response.data.clientSecret;
    }, []);

    return (
        <div id="checkout">
            <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={{ fetchClientSecret }}
            >
                <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
        </div>
    )
}