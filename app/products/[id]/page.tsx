import React from 'react'
import AddtoCart from '@/components/single-product/AddtoCart';
import Ratings from '@/components/single-product/Ratings';
import BreadCrums from '@/components/single-product/BreadCrums';
import { fetchSingleProduct } from '@/utils/action';
import { currencyOfGhana } from '@/utils/formats';
import Image from 'next/image';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';



interface IdProps {
    params: Promise<{
        id: string;
    }>;
  }
const page = async ({ params }: IdProps) => {
    const idParams = await params;
    const singleProduct = await fetchSingleProduct(idParams.id);
    const { image, price, name, description, company } = singleProduct;
    const cedisAmount = currencyOfGhana(price);

    return (
        <section>
            <BreadCrums name={singleProduct.name} />
            {/* TWO GRID LAYOUT ONE FOR IMAGE AND THE OTHER FOR PRODUCT DETAILS */}
            <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
                {/* GRID1 IMAGE */}
                <div className='relative h-full'>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        priority
                        sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw' className='w-full rounded-md object-cover'
                    />
                </div>
                {/* SECTION2 GRID2 PRODUCT */}
                <div>
                    <div className='flex gap-x-8 items-center'>
                        <h1 className='capitalise font-bold text-3xl'>
                            {name}
                        </h1>
                        <FavoriteToggleButton productId={idParams.id}/>
                    </div>
                    <Ratings productId={idParams.id} />
                    <h4 className='text-xl mt-2'>
                        {company}
                    </h4>
                    <p className='mt-3 text-md bg-muted inline-block p-2 rounded-md'>
                        {cedisAmount}
                    </p>
                    <p className='mt-6 leading-8 text-muted-foreground'>
                        {description}
                    </p>
                    <AddtoCart productId={idParams.id}/>
                </div>
            </div>
        </section>
    )
};

export default page;