import React from 'react'
import { deleteProductAction, fetchAdminProductAction } from '@/utils/action';
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
import { IconButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';

const AdminProductsPage = async () => {
    const items = await fetchAdminProductAction();
    if (items.length === 0) return <EmptyList />

    const DeleteProduct = ({ productId }: { productId: string }) => { 
        const deleteProduct = deleteProductAction.bind(null, { productId });
        return (
            <FormContainer action={deleteProduct}>
                <IconButton actionType='delete'/>
            </FormContainer>
        )
    };
    
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
                                    <TableCell>
                                        <Link href={`/admin/products/${productId}/edit`}>
                                            <IconButton actionType='edit'></IconButton>
                                        </Link>
                                        <DeleteProduct productId={productId}/>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
            </Table>
        </section>
    )
};


export default AdminProductsPage