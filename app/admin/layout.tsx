import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import React, { ReactNode } from 'react'
import Sidebar from './sidebar';

const AdminPageLayout = async ({ children }: { children: ReactNode }) => {
    const { userId } = await auth();

    if (userId !== process.env.ADMIN_USER_ID) {
        redirect('/');
    }

    return (
        <>
            <h2 className='text-2xl pl-4'>DashBoard</h2>
            <Separator className='mt-2' />
            <section className='grid lg:grid-cols-12 gap-12 mt-12'>
                <div className='lg:col-span-2'>
                    <Sidebar/>
                </div>
                <div className='lg:col-span-10 px-4'>{children }</div>
            </section>
        </>
    )
};

export default AdminPageLayout