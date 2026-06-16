'use client'
import React from 'react'
import Link from 'next/link';
import { links } from '@/utils/links';
import { FaAlignJustify } from "react-icons/fa";
import { Button } from '../ui/button';
import { Show, SignInButton, SignUpButton, useAuth } from '@clerk/nextjs';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import SignOutLink from './SignOutLink';
import UserIcon from './UserIcon';

function LinksDropDown() {
  const { userId } = useAuth();
  const isAdminUser =
    Boolean(userId) &&
    Boolean(process.env.NEXT_PUBLIC_ADMIN_USER_ID) &&
    userId === process.env.NEXT_PUBLIC_ADMIN_USER_ID;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='destructive' className='flex gap-4 max-w-25'>
          <FaAlignJustify className='h-6 w-6' />
          <UserIcon/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-40' align='end' sideOffset={10}>
        <Show when='signed-out'>
          <DropdownMenuItem>
            <SignInButton mode='modal'>
              <button className='w-full text-left'>LogIn</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <button className='w-full text-left'>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </Show>
        <Show when='signed-in'>
          {links.map((link) => {
            if(link.label === 'dashboard' && !isAdminUser) {
              return null;
            }
            return (
              <DropdownMenuItem key={link.href}>
                <Link href={link.href} className='capitalize w-full'>
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink/>
          </DropdownMenuItem>
        </Show>
        </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropDown;