import React from 'react'
import { fetchFeaturedProductFn } from '@/utils/action';
import EmptyList from '@/components/globals/EmptyList';
import SectionTitle from '@/components/globals/SectionTitle';
import ProductsGrid from '@/components/products/ProductsGrid';

const FeaturedProducts = async () => {
    const products = await fetchFeaturedProductFn();
    if (products.length==0) return <EmptyList/>
    return (
        <section className='pt-24'>
            <SectionTitle title='Featured Products!!! 20% discount price' />
            <ProductsGrid products={products}/>
        </section>
    )
};

export default FeaturedProducts;