import React from 'react'
import { fetchFeaturedProductFn } from '@/utils/action';
import EmptyList from '@/components/globals/EmptyList';
import SectionTitle from '@/components/globals/SectionTitle';
import ProductsGrid from '@/components/products/ProductsGrid';

const FeaturedProducts = async () => {
    const featuredProduct = await fetchFeaturedProductFn();
    if (featuredProduct.length) return <EmptyList/>
    return (
        <section>
            <SectionTitle title='Featured Products!!! 20% discount price' />
            <ProductsGrid featuredProducts={featuredProduct}/>
        </section>
    )
};

export default FeaturedProducts;