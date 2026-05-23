import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import { MdAutoAwesome } from 'react-icons/md';

// I did not used the react icons for the logo but it installed it

function Logo() {
  return (
    <Button asChild variant='destructive' size='lg'>
      <Link href='/'>
        <MdAutoAwesome className='w-10 h-10' /> 
        <span className='text-3xl font-bold'>
          <p>Rufai</p>
        </span>
      </Link>
    </Button>
  )
};

export default Logo;