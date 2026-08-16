import React from 'react'
import { formatDate, currencyOfGhana } from '@/utils/formats';
import { fetchUsersOrders } from '@/utils/action';
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
import { ta } from 'zod/v4/locales';

async function OrdersPage() {
  const orders = await fetchUsersOrders();
  return (
    <>
      <SectionTitle title='your orders list' />
      <div>
        <Table>
          <TableCaption>Total Orders: {orders.length}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Num of Products</TableHead>
              <TableHead>Order Total</TableHead>
              <TableHead>tax</TableHead>
              <TableHead>Shipping</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => {
              const { id, products, orderTotal, tax, shipping, createdAt } = order;
              return (
                <TableRow key={id}>
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
  )
};

export default OrdersPage;