'use client'
import React from 'react'
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import {ReloadIcon} from '@radix-ui/react-icons'



type BtnSize = 'sm' | 'lg' | 'default';

interface SubmitButtonComponentProps { 
    text?: string;
    size?: BtnSize;
    className?:''
};
const SubmitButton = ({ text = 'submit', size = 'lg', className = '' }: SubmitButtonComponentProps) => {
    const result = useFormStatus();
    return (
        <Button type='submit' disabled={result.pending} className={cn('capitalize', className)} size={size}>

            {result.pending ? (<>
                <ReloadIcon className='mr-2 h-4 w-4 animate-spin' /> 
                please wait...
            </>) : (text)}
            
        </Button>
    )
};

export default SubmitButton