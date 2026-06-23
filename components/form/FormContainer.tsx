'use client'
import React from 'react'
import { useActionState } from 'react';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { actionFunction } from '@/utils/types';


const initialState = {
    message: ''
}
const FormContainer = ({ action, children }: { action: actionFunction, children: React.ReactNode }) =>
{
    const [state, forAction] = useActionState(action, initialState);

    useEffect(() => {
        if (state.message) {
            toast(state.message)
        }
    }, [state]);
    
    return (
        <form action={forAction}>
            {children}
        </form>
    )
};

export default FormContainer