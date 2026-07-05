import React from 'react'
import { fetchAdminProductAction } from '@/utils/action';
import EmptyList from '@/components/globals/EmptyList';
import Link from 'next/link';
import { currencyOfGhana } from '@/utils/formats';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';

const AdminProductsPage = async () => {
    const items = await fetchAdminProductAction();
    if (items.length === 0) return <EmptyList />
    
    return (
        <section>
            <Table>
                <TableCaption className='capitalize'>
                    total products:{items.length}
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>    
                    <TableBody>
                        {items.map((item) => {
                            const {id:productId, price,company, name}=item
                            return (
                                <TableRow key={productId}>
                                    <TableCell>
                                        <Link href={`/products/${productId}`} className='underline text-muted-foreground tracking-wide capitalize'>
                                            {name}
                                        </Link>
                                    </TableCell>
                                    <TableCell>{ company}</TableCell>
                                    <TableCell>{currencyOfGhana(price) }</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
            </Table>
        </section>
    )
};

export default AdminProductsPage