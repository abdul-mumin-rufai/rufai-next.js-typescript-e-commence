import ProductsContainer from '@/components/products/ProductsContainer';
import React from 'react'


interface SearchParams{
  layout?: string;
  search?: string;
}
async function ProductsPage(searchParams: SearchParams) {
  //getting the query strings ie layout and search
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';
  
  return (
    <ProductsContainer layout={layout} search={search} />
  )
};

export default ProductsPage;