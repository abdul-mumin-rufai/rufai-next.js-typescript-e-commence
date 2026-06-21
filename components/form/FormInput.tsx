import React from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';


type FormInputProps = {
    name: string;
    type: string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
};

const FormInput = ({ name, type, label, defaultValue, placeholder }: FormInputProps) => {
    return (
        <div>
            <Label htmlFor={name} className='capitalize mb-2'>{label || name}</Label>
            <Input id={name} name={name} type={type} placeholder={placeholder} required defaultValue={defaultValue}/> 
        </div>
    )
};

export default FormInput