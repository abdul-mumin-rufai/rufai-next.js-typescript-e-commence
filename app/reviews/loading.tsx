'use client'
import React from 'react'
import { Card, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const loading = () => {
    return (
        <section className='grid md:grid-cols-2 gap-8 mt-4'>
            <ReviewLoading />
            <ReviewLoading/>
        </section>
    )
};
const ReviewLoading = () => {
    return (
        <Card>
            <CardHeader>
                <div className='flex items-center'>
                    <Skeleton className='w-12 h-12 rounded-full' />
                    <div className='ml-3'>
                        <Skeleton className='w-37.5 h-4 mb-2' />
                        <Skeleton className='w-25 h-4' />
                    </div>
                </div>
            </CardHeader>
        </Card>
    )
};

export default loading