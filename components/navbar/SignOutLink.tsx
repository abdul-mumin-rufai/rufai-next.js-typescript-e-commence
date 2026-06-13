import React from 'react'
import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import {toast} from 'sonner'

function SignOutLink() {
  const handleSignOut = () => { 
    toast('logged out successfully')
  };
  return (
    <SignOutButton>
      <Link href='/' className='w-full text-left' onClick={handleSignOut}>
        LogOut
      </Link>
    </SignOutButton>
  )
};

export default SignOutLink;