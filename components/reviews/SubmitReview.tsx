'use client'
import React from 'react'
import { useState } from 'react';
import FormContainer from '../form/FormContainer';
import { Card } from '../ui/card';
import SubmitButton from '../form/Buttons';
import { createReviewAction } from '@/utils/action';
import { Button } from '../ui/button';
import RatingInput from './RatingInput';
import TextAreaInput from '../form/TextAreaInput';
import { useUser } from '@clerk/nextjs';


const SubmitReview = ({ productId }: { productId: string }) => {
    const [isReviewFormActive, setIsReviewFormActive] = useState(false);
    const { user} = useUser();
    return (
        <div>
            <Button
                size='lg'
                className='capitalize'
                variant='destructive'
                onClick={() => setIsReviewFormActive(prev => !prev)}
            >
                please leave a review
            </Button>
            {isReviewFormActive && (
                <Card className='p-8 mt-8 mb-2'>
                    <FormContainer action={createReviewAction}>
                        <input type='hidden' name='productId' value={productId} />
                        {/* optional chaining beacuse when user login with an email users firstname doesn't appears */}
                        <input type='hidden' name='authorName' value={user?.firstName || 'user'} />
                        <input type='hidden' name='authorImageUrl' value={user?.imageUrl || ''} />
                        <RatingInput name='rating' textLabel='rating' />
                        <TextAreaInput name='comment' label='feedback' defaultValue='Rufai keep going and build a strong portfolio' />
                        
                        <SubmitButton size='default'/>
                    </FormContainer>
                </Card>
            )}
        </div>
    )
};

export default SubmitReview