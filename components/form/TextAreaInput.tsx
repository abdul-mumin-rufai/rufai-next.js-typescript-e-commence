import React from 'react'
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';



interface TextAreaInputProp { 
    name: string;
    label?: string;
    defaultValue?: string
};
const TextAreaInput = ({name,label,defaultValue}:TextAreaInputProp) => {
    return (
        <div className='mb-2'>
            <Label htmlFor={name} className='capitalize mb-2'>{label || name}</Label>
            <Textarea id={name} name={name} defaultValue={defaultValue} rows={5} required className='leading-loose'/>
        </div>
    )
};

export default TextAreaInput