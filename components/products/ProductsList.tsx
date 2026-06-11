import React from 'react'
import { Product } from '@/myPrisma/generated/prisma/client';
import { currencyOfGhana } from '@/utils/formats';
import { Card, CardContent } from '../ui/card';
import Link from 'next/link';
import Image from 'next/image';
import FavoriteToggleButton from './FavoriteToggleButton';


const ProductsList = ({ products }: { products: Product[] }) => {
    return (
        <div className='grid mt-12 gap-y-4'>
            {products.map((product) => {
                const { name, price, image, company } = product
                const cedisAmount = currencyOfGhana(price);
                const productId = product.id
                return (
                    <article key={productId} className='relative group'>
                        <Link href={`/products/${productId}`}>
                            <Card className='p-0 border-0 rounded-md tracking-normal transform group-hover:shadow-xl transition-shadow duration-500'>
                                <CardContent className='p-8 gap-y-4 grid md:grid-cols-3'>
                                    <div className='relative h-64  md:h-48 md:w-48'>
                                        <Image
                                            src={image}
                                            alt={name}
                                            priority
                                            fill
                                            sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
                                            className='w-full rounded-md object-cover'
                                        />
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-semibold capitalize'>
                                            {name}
                                        </h2>
                                        <h4 className='text-muted-foreground'>
                                            {company}
                                        </h4>
                                    </div>
                                    <p className='text-muted-foreground text-lg md:ml-auto'>
                                        {cedisAmount}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                        <div className='absolute bottom-8 right-8 z-5'>
                            <FavoriteToggleButton productId={productId } />
                        </div>
                    </article>
                )
            })}
        </div>
    )
};

export default ProductsList;