import React from 'react'
import { Card, CardContent } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

const LoadingContainer = () => {
    return (
        // give it the same class as the grid products
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <LoadingProducts />
            <LoadingProducts />
            <LoadingProducts />
        </div>
    )
};

// individual products skeletom to mimick the actual products
function LoadingProducts() { 
    return (
        <Card>
            <CardContent className='p-4'>
                <Skeleton className='h-48 w-full' />
                <Skeleton className='h-4 w-3/4 mt-4' />
                <Skeleton className='h-4 w-1/4 mt-4'/>
            </CardContent>
        </Card>
    )
};
export default LoadingContainer;