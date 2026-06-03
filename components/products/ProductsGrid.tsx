import React from 'react'
import { Product } from '@/lib/generated/prisma/client';
import { currencyOfGhana } from '@/utils/formats';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import FavoriteToggleButton from './FavoriteToggleButton';


const ProductsGrid = ({ products }: { products: Product[] }) => {
    const featuredProduct = products
    return (
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {featuredProduct.map((product) => {
                const { name, image, price } = product;
                const productId = product.id;
                const cedisAmount = currencyOfGhana(price);
                return (
                    <article key={productId} className='group relative'>
                        <Link href={`/products/${productId}`}>
                            <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
                                <CardContent>
                                    <div className='relative h-64 md:h-48 rounded overflow-hidden'>
                                        <Image
                                            src={image}
                                            alt={name}
                                            priority
                                            fill
                                            sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
                                            className='rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                                        />
                                    </div>
                                    <div className='items-center mt-2'>
                                        <h2 className='text-lg capitalize'>
                                            {name}
                                        </h2>
                                        <p className='text-muted-foreground mt-2'>
                                            {cedisAmount}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        <div className='absolute top-7 right-7 z-10'>
                            <FavoriteToggleButton productId={productId}/>
                        </div>
                    </article>
                )
            })}
        </div>
    )
};

export default ProductsGrid;