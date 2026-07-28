import React from 'react'
import { fetchProductReviews } from '@/utils/action'
import SectionTitle from '../globals/SectionTitle'
import ReviewCard from './ReviewCard'

const ProductReviews = async ({ productId }: { productId: string }) => {
  const productsReviews = await fetchProductReviews(productId);
  return (
    <div className='mt-16'>
      <SectionTitle title='Products Reviews' />
      <div className='grid md:grid-cols-2 gap-8 my-8'>
        {productsReviews.map((productReview) => {
          const { comment, rating, authorImageUrl, authorName } = productReview;
          const productReviewInfo = { comment, rating, image: authorImageUrl, name: authorName }
          return (
            <ReviewCard key={productReview.id} productReviewInfo={productReviewInfo} />
          )
        })}
      </div>
    </div>
  )
};

export default ProductReviews