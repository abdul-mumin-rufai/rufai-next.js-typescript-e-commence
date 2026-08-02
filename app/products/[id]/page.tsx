import React from 'react'
import AddtoCart from '@/components/single-product/AddtoCart';
import Ratings from '@/components/single-product/Ratings';
import BreadCrums from '@/components/single-product/BreadCrums';
import { fetchSingleProduct, findExistingReview } from '@/utils/action';
import { currencyOfGhana } from '@/utils/formats';
import Image from 'next/image';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import ShareButton from '@/components/single-product/ShareButton';
import SubmitReview from '@/components/reviews/SubmitReview';
import ProductReviews from '@/components/reviews/ProductReviews';
import { currentUser } from '@clerk/nextjs/server';



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
    const user = await currentUser();
    const reviewDoesNotExist = user && !(await findExistingReview(user.id, idParams.id));

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
                        <div className='flex items-center gap-x-2'>
                            <FavoriteToggleButton productId={idParams.id} />
                            <ShareButton productId={idParams.id} name={name}/>
                        </div>
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
            <ProductReviews productId={idParams.id} />
            {reviewDoesNotExist && <SubmitReview productId={idParams.id} />}
        </section>
    )
};

export default page;