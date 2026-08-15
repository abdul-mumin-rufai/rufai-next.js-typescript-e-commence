import React from 'react'
import { fetchOrCreateCart, updateCart} from '@/utils/action';
import CartItemsList from '@/components/cart/CartItemsList';
import CartTotals from '@/components/cart/CartTotals';
import { auth} from '@clerk/nextjs/server';
import SectionTitle from '@/components/globals/SectionTitle';
import { redirect } from 'next/navigation';


async function CartPage() {
  const { userId } = await auth();
  if (!userId) redirect('/'); // cart page is a protected route

  const previousCart = await fetchOrCreateCart({ userId });
  const {currentCart, cartItems } = await updateCart(previousCart);
  
  if (cartItems.length === 0) {
    return <SectionTitle title='Please your cart is empty' />;
  }

  return (
    <>
      <SectionTitle title='your cart item list' />
      <div className='mt-8 grid gap-4 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList cartItems={cartItems}/>
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals cart={currentCart}/>
        </div>
      </div>
    </>
  )
};

export default CartPage;