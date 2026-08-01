import React from 'react'
import { fetchProductReviewsByUser, deleteReviewAction } from '@/utils/action';
import ReviewCard from '@/components/reviews/ReviewCard';
import { IconButton } from '@/components/form/Buttons';
import SectionTitle from '@/components/globals/SectionTitle';
import FormContainer from '@/components/form/FormContainer';


async function ReviewsPage() {
  const reviews = await fetchProductReviewsByUser();
  if (reviews.length === 0)
    return <SectionTitle title='Please you do not have reviews yet...' />
    return (
      <>
        <SectionTitle title='my current reviews' />
        <section className='grid md:grid-cols-2 gap-8 mt-4'>
          {reviews.map((review) => {
            const { rating, comment } = review;
            const { name, image } = review.product;
            /* created the productInfo */ 
            const productReviewInfo = { rating, comment, name, image };
            return (
              <ReviewCard key={review.id} productReviewInfo={productReviewInfo}>
                <DeleteReview reviewId={review.id}/>
              </ReviewCard>
            )
          })}

        </section>
      </>
  )
};


const DeleteReview = ({ reviewId }: { reviewId: string }) => { 
  const deleteReview = deleteReviewAction.bind(null, { reviewId });
  return <FormContainer action={deleteReview}>
    <IconButton actionType='delete'/>
  </FormContainer>
};

export default ReviewsPage;