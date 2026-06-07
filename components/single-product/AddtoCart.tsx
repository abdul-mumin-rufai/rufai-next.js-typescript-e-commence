import React from 'react'
import { Button } from '../ui/button'

const AddtoCart = ({ productId }: { productId: string }) => {
    return (
        <Button variant='destructive' size='lg' className='text-2xl font-bold capitalize'>
            add to cart
        </Button>
    )
};

export default AddtoCart