// this file is the route handler ie backend of the payment feature(API)

import Stripe from 'stripe';
import { type NextRequest } from 'next/server';
import db from '@/utils/db';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export const POST = async (req:NextRequest) => { 
    const requestHeaders = new Headers(req.headers);
    const origin = requestHeaders.get('origin');

    const { orderId, cartId } = await req.json();
    //getting the orders
    const order = await db.prisma.order.findUnique({
        where: {
            id: orderId,
        },
    });
    // get cart since orders are in cart
    const cart = await db.prisma.cart.findUnique({
        where: {
            id: cartId,
        },
        include: {
            cartItems: {
                include: {
                    product:true,
                }
            }
        }
    });
    if (!order || !cart) {
        return Response.json(null, {
            status: 404,
            statusText:'Not found'
        });
    };

    //creating the line-item ie product to sell structure
    const line_items = cart.cartItems.map((cartItem) => {
        return {
            quantity: cartItem.amount,
            price_data: {
                currency: 'ghs',
                product_data: {
                    name: cartItem.product.name,
                    image: [cartItem.product.image],
                },
                unit_amount: cartItem.product.price * 100 // the smallest cedi value ie pesewas
            },
        };
    });

    // creating a stripe session
    try {
        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            metadata: { orderId, cartId },
            line_items: line_items,
            mode: 'payment',
            return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`
        });
        return Response.json({ clientSecret: session.client_secret });
    } catch (error) {
        console.log(error);
        return Response.json(null, {
            status: 500,
            statusText:'Internal Server Error'
        });
        
    };

};