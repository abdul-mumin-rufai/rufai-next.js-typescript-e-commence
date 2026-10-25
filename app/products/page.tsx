import React from 'react'
import ProductsContainer from '@/components/products/ProductsContainer';

interface SearchParams {
  searchParams?: Promise<{
    layout?: string;
    search?: string;
  }>
}
async function ProductsPage({ searchParams }: SearchParams) {
  // await for the actual searchParams values. searchParams return a Promise
  const params = await searchParams || {};

  // the searchParams must start in the parent url
  const layout = params.layout || 'grid';
  const search = params.search || '';

  return (
    <ProductsContainer layout={layout} search={search} />
  )
};

export default ProductsPage;