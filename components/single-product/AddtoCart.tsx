'use client'
import React from 'react'
import SubmitButton from '../form/Buttons';
import { ProductSignInButton } from '../form/Buttons';
import { addToCartAction } from '@/utils/action';
import { useState } from 'react';
import { Mode } from './SelectProductAmount';
import { useUser } from '@clerk/nextjs';
import FormContainer from '../form/FormContainer';
import SelectProductAmount from './SelectProductAmount';

const AddtoCart = ({ productId }: { productId: string }) => {
    const [amount, setAmount] = useState(1);
    const user = useUser();
    const userId = user.isSignedIn;
    return (
        <div className='mt-3'>
            <div className='mb-5'>
            <SelectProductAmount mode={Mode.singleProduct} amount={amount} setAmount={setAmount}  />
            </div>
            {userId ?
                (<FormContainer action={addToCartAction}>
                    <input type='hidden' name='productId' value={productId} />
                    <input type='hidden' name='amount' value={amount} />
                    <SubmitButton text='add to cart' size='default'/>
                </FormContainer>) : (<ProductSignInButton />)
            }
        </div>
    )
};

export default AddtoCart