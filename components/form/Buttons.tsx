'use client'
import React from 'react'
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { ReloadIcon } from '@radix-ui/react-icons'
import { LiaEditSolid } from "react-icons/lia";
import { AiFillDelete } from "react-icons/ai";
import { Show, SignInButton } from '@clerk/nextjs';
import { MdFavorite } from 'react-icons/md';
import { MdFavoriteBorder } from "react-icons/md";



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

// iconButtons
type actionType = 'edit' | 'delete';
export const IconButton = ({ actionType }: { actionType: actionType }) => { 
    const { pending } = useFormStatus();
    // render the icon button base on thr actionType
    const renderIcon = () => {
        switch (actionType) {
            case 'edit':
                return <LiaEditSolid />
            case 'delete':
                return <AiFillDelete />
            default:
                const never: never = actionType;
                throw new Error(`Invalid action type: ${never}`);
        }
    };
    return (
        <Button
            type='submit'
            size='icon'
            variant='link'
            className='p-2 cursor-pointer'
        >
            {pending ? <ReloadIcon className='animate-spin'/> : renderIcon()}
        </Button>
    )
};

export default SubmitButton

// favorite button that links to the signIn page when the user have not login yet
export const linkFavoriteToSignUpBtn = () => { 
    return (
        <Show when='signed-out'>
            <SignInButton mode='modal'>
                <Button asChild
                    type='button'
                    size='icon'
                    variant='destructive'
                >
                    <MdFavorite/>
                </Button>
            </SignInButton>
        </Show>
    )
};

export const favoriteSubmitBtn = ({ isFavorite }: { isFavorite: boolean }) => {
    const { pending } = useFormStatus();
    return (
        <Button
            type='submit'
            size='icon'
            variant='destructive'
            className='p-2 cursor-pointer'
        >
            {pending?(<ReloadIcon className='animate-spin'/>):isFavorite?(<MdFavorite/>):(<MdFavoriteBorder/>)}
        </Button>
    )
 };