'use client'
import React from 'react'
import { useState } from 'react'
import { removeCartItemAction, updateCartItemAction } from '@/utils/action'
import SelectProductAmount from '../single-product/SelectProductAmount'
import { Mode } from '../single-product/SelectProductAmount'
import FormContainer from '../form/FormContainer'
import SubmitButton from '../form/Buttons'
import { Toaster } from '../ui/sonner'

const ThirdColumn = ({ id, quantity }: { id: string; quantity: number }) => {
  const [amount, setAmount] = useState(quantity);
  const handleAmountChange = async (value: number) => { 
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