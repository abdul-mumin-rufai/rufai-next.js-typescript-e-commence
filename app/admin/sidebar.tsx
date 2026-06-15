'use client'
import { Button } from '@/components/ui/button';
import { adminLinks } from '@/utils/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'


const Sidebar = () => {
    const pathName = usePathname();
    return (
        <aside>
            {adminLinks.map((link) => {
                /* CHECKING FOR CURRENT PATHNAME AND ASSIGN IT TO ISACTIVEPAGE */
                const isActivePage = pathName === link.href;
                const variant = isActivePage ? 'destructive' : "ghost";
                return (
                    <Button asChild className='w-full mb-2 capitalize font-normal justify-start' variant={variant} key={link.href}
                    >
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </Button>
                )
            })}
        </aside>
    )
};

export default Sidebar