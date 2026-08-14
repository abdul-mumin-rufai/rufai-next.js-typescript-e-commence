'use client'
import React from 'react'
import { useState } from 'react'
import { removeCartItemAction, updateCartItemAction } from '@/utils/action'
import SelectProductAmount from '../single-product/SelectProductAmount'
import { Mode } from '../single-product/SelectProductAmount'
import FormContainer from '../form/FormContainer'
import SubmitButton from '../form/Buttons'
import { toast } from 'sonner'

const ThirdColumn = ({ id, quantity }: { id: string; quantity: number }) => {
  const [amount, setAmount] = useState(quantity);
  const [isLoading, setIsLoading] = useState(false);
  //  if there is a handleAmountChange we invoke updateCartItemAction
  const handleAmountChange = async (value: number) => {
    setIsLoading(true);
    toast('calculating...');
    // call the function to update the cartItem
    const result = await updateCartItemAction({
      amount: value, cartItemId: id
    });
    toast(result?.message);
    setIsLoading(false);
    setAmount(value);
  };
  return (
    <div className='md:ml-8'>
      <SelectProductAmount
        mode={Mode.cartItem}
        amount={amount}
        setAmount={handleAmountChange}
        isLoading={false}
      />
      <FormContainer action={removeCartItemAction}>
        <input type='hidden' name='id' value={id} />
        <SubmitButton size='sm' text='remove' className='mt-3'/>
      </FormContainer>
    </div>
  )
};

export default ThirdColumn