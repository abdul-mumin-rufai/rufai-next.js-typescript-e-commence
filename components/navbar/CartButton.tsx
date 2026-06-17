import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import { LuShoppingBasket } from 'react-icons/lu';

async function CartButton() {
  // this temporary
  const numberOfItemsInCart = 19;

  return (
    <Button
      variant='destructive'
      size='icon'
      className='flex items-center justify-center relative'
    >
      <Link href='/cart'>
        <LuShoppingBasket />
        <span
          className='absolute -top-3 -right-3 bg-primary
         text-white rounded-full h-6 w-6 flex items-center
         justify-center text-xs'
        >
          {numberOfItemsInCart}
        </span>
      </Link>

    </Button>
  )
};

export default CartButton;