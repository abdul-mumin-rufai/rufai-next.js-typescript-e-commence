import React from 'react'
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import Link from 'next/link';
import { fetchAllProducts } from '@/utils/action';
import { BsUiRadiosGrid } from "react-icons/bs";
import { RiListRadio } from "react-icons/ri";

// getting the query string
interface SearchParams { 
    layout: string;
    search: string;
};

const ProductsContainer = async ({ layout, search }: SearchParams) => {
    
    const products = await fetchAllProducts({search});
    const totalProducts = products.length;
    const searchItem = search ? `&search=${search}` : ''
    
    return (
        <>
            {/* DISPLAY HEADER */}
            <section>
                <div className='flex justify-between items-center'>
                    <h4 className='font-medium text-lg'>
                        {totalProducts} Product{totalProducts > 1 && 's'}
                    </h4>
                    <div className='flex gap-x-4'>
                        <Button
                        variant={layout === 'grid' ? 'destructive' : 'ghost'}
                        size='icon'
                        asChild
                        >
                        <Link href={`/products?layout=grid${searchItem}`}>
                            <BsUiRadiosGrid/>
                        </Link>
                        </Button>
                        <Button
                        variant={layout === 'list' ? 'destructive' : 'ghost'}
                        size='icon'
                        asChild
                        >
                        <Link href={`/products?layout=list${searchItem}`}>
                            <RiListRadio/>
                        </Link>
                        </Button>
                    </div>
                </div>
                <Separator className='mt-4'/>
            </section>
           {/*  DISPLAY PRODUCTS */}
            <div>
               {/*  IF IT IS GRID OR LIST IT DISPLAYS NO PRODUCT */}
                {totalProducts === 0 ? (<h5 className='text-2xl mt-16'>please your search doesn't match any product...</h5>):layout==='grid'?(<ProductsGrid products={products}/>):(<ProductsList products={products}/>)}
            </div>
        </>
    )
};

export default ProductsContainer;