import React from 'react'
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import Link from 'next/link';
import { fetchAllProducts } from '@/utils/action';
import { BsUiRadiosGrid } from "react-icons/bs";
import { RiListRadio } from "react-icons/ri";


interface SearchParams { 
    layout: string;
    search: string;
};

const ProductsContainer = async ({layout, search}: SearchParams) => {
    const products = await fetchAllProducts();
    const totalProducts = products.length;
    const searchItem = search ? `&search=${search}`: ''
    return (
        <>
            {/*  HEADER */}
            <section>

            </section>
            {/* DISPLAY PRODUCTS */}
            <div>
                {totalProducts === 0 ? (<h5 className='text-2xl mt-16'>please your search does not match any product...</h5>) : layout === 'grid' ? (<ProductsGrid products={products} />) : <ProductsList products={products} />}
            </div>
        </>


    
    )
};

export default ProductsContainer;