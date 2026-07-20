import React from 'react'
import SectionTitle from '@/components/globals/SectionTitle';
import { fetchUserFavorite } from '@/utils/action';
import ProductsGrid from '@/components/products/ProductsGrid';

async function FavouritesPage() {
  const favorites = await fetchUserFavorite(); 
  if (favorites.length === 0) return <SectionTitle title='Please you do not  have favorite yet' />
  
  return (
    <ProductsGrid products={favorites.map((favorite)=>favorite.product)}/> 
  )
};

export default FavouritesPage;