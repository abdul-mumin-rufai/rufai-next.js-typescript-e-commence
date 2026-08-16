import React from 'react'
import { formatDate, currencyOfGhana } from '@/utils/formats';
import { fetchAdminOrders } from '@/utils/action';
import SectionTitle from '@/components/globals/SectionTitle';
import {
    Table,
    TableCaption,
    TableBody,
    TableHead,
    TableHeader,
    TableCell,
    TableRow
} from '@/components/ui/table';



const SalesPage = async () => {
    const orders = await fetchAdminOrders();
    return (
        <>
            <SectionTitle title='your orders list' />
            <div>
                <Table>
                    <TableCaption>Total Orders: {orders.length}</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Email</TableHead>
                            <TableHead>Num of Products</TableHead>
                            <TableHead>Order Total</TableHead>
                            <TableHead>tax</TableHead>
                            <TableHead>Shipping</TableHead>
                            <TableHead>Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => {
                            const { id, products, orderTotal, tax, shipping, createdAt, email } = order;
                            return (
                                <TableRow key={id}>
                                    <TableCell>{email}</TableCell>
                                    <TableCell>{products}</TableCell>
                                    <TableCell>{currencyOfGhana(orderTotal)}</TableCell>
                                    <TableCell>{currencyOfGhana(tax)}</TableCell>
                                    <TableCell>{currencyOfGhana(shipping)}</TableCell>
                                    <TableCell>{formatDate(createdAt)}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        </>
    );
};
export default SalesPage;