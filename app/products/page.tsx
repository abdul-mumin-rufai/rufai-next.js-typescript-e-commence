import ProductsContainer from '@/components/products/ProductsContainer';
import React from 'react'


interface SearchParams{
  layout?: string;
  search?: string;
}
async function ProductsPage(searchParams :SearchParams) {
  console.log(searchParams);
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';
  
  return (
    <ProductsContainer />
  )
};

export default ProductsPage;