import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

// I did not used the react icons for the logo but it installed it

function Logo() {
  return (
    <Button asChild variant='destructive' size='lg'>
      <Link href='/'>
        <p className='text-3xl font-bold'>Rufai</p>
        {/* <MdAutoAwesome className='w-10 h-10'/> */}
        {/* <VscCode className='h-6 w-6'/> */}
      </Link>
    </Button>
  )
};

export default Logo;