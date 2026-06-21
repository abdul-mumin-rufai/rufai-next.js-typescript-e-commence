'use client'
import React from 'react'
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';


interface CheckBoxInputProps { 
    name: string;
    label: string;
    defaultCheck?: boolean;
};
const CheckBoxInput = ({name,label,defaultCheck=false}:CheckBoxInputProps) => {
    return (
        <div className='flex items-center space-x-2'>
            <Checkbox id={name} name={name} defaultChecked={defaultCheck} />
            <Label htmlFor={name} className='capitalize text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>{label}</Label>
        </div>
    )
};

export default CheckBoxInput