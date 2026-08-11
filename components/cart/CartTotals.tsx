import React from 'react'
import { Card, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { currencyOfGhana } from '@/utils/formats';
import { createOrderAction } from '@/utils/action';
import FormContainer from '../form/FormContainer';
import SubmitButton from '../form/Buttons';
import { Cart } from '@/myPrisma/generated/prisma/client';

const CartTotals = ({ cart }: { cart: Cart }) => {
    const {shipping, tax,cartTotal,orderTotal } = cart;
    return (
        <div>
            <Card className='p-7 mb-4'>
                <CartTotalRows label='SubTotal' amount={cartTotal} />
                <CartTotalRows label='Shipping' amount={shipping} />
                <CartTotalRows label='Tax' amount={tax} />
                <CardTitle className='mt-7'>
                    <CartTotalRows label='Order Total' amount={orderTotal} lastRow />
                </CardTitle>
            </Card>
            <FormContainer action={createOrderAction}>
                <SubmitButton text='place order'  />
            </FormContainer>
        </div>
    )
};

export default CartTotals

const CartTotalRows = ({ label, amount, lastRow=false}: { label: string; amount: number; lastRow?: boolean }) => { 
    return (
        <>
            <p className='flex justify-between text-sm'>
                <span>{label}</span>
                <span>{currencyOfGhana(amount) }</span>
            </p>
            {lastRow?<Separator className='my-2'/>:null}
        </>
    )
};