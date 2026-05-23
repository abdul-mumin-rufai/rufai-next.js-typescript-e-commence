'use client'
import React from 'react'
import Link from 'next/link';
import { links } from '@/utils/links';
import { FaAlignJustify } from "react-icons/fa";
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';


function LinksDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='destructive' className='flex gap-4 max-w-25'>
          <FaAlignJustify className='h-6 w-6' />
        </Button>
      </DropdownMenuTrigger>
        <DropdownMenuContent className='w-40' align='end' sideOffset={10}>
          {links.map((link) => {
            return (
              <DropdownMenuItem key={link.href}>
                <Link href={link.href} className='capitalize w-full'>
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropDown;