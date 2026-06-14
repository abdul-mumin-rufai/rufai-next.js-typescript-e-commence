import React from 'react'
import Container from '../globals/Container';
import Logo from './Logo';
import NavSearch from './NavSearch';
import CartButton from './CartButton';
import DarkMode from './DarkMode';
import LinksDropDown from './LinksDropDown';
import { Suspense } from 'react';
import { currentUser } from '@clerk/nextjs/server';

async function Navbar() {
    const user = await currentUser();
    const userName = user?.firstName
    return (
        <nav className='border-b '>
            <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap
            gap-4 py-8'>
                <Logo />
                <Suspense>
                    <NavSearch />
                </Suspense>
                <div className='flex gap-4 items-center'>
                    <div className='text-green-800'>
                        {userName}
                    </div>
                    <CartButton />
                    <DarkMode />
                    <LinksDropDown/>
                </div>
            </Container>
        </nav>
    )
};

export default Navbar;