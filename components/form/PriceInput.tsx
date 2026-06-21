import React from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';


const name= 'price'
interface PriceInputProps {
    price?:number
}
const PriceInput = ({price}:PriceInputProps) => {
    return (
        <div className='mb-2'>
            <Label htmlFor={name} className='capitalize'>price (GHS)</Label>
            <Input id={name} type='number' name={name} defaultValue={price || 500} min={0} required/>
        </div>
    )
};

export default PriceInput