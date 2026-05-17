import { Button } from '@/components/ui/button';
import React from 'react'

function Homepage() {
  return (
    <div>
      <h1 className='text-3xl font-bold' >
        Homepage
      </h1>
      <p className='text-2xl font-bold capitalize'>shadcn uI is awesome. i am loving it</p>
      <Button variant='destructive' size='lg' className='capitalize font-bold mt-4'>
        rufai button 
      </Button>
    </div>
  )
};

export default Homepage;