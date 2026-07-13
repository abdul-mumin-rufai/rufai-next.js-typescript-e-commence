import React from 'react'
import { Skeleton } from '../ui/skeleton'

const LoadingTable = ({ rows = 5 }: { rows?: number }) => {
    const loadingRows = Array.from({ length: rows }, (_, index) => {
        return (
            <div className='mb-4' key={index}>
                <Skeleton className='w-full h-8 rounded'/>
            </div>
        )
    })
    return (
        <div>{loadingRows }</div>
    )
};

export default LoadingTable