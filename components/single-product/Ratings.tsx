import React from 'react'
import { FaStar } from "react-icons/fa6";

const Ratings = async ({ productId }: { productId: string }) => {
    const rating = 4.7;
    const count = 15;
    const countReviews = `(${count}) reviews`
    const className =`flex gap-1 items-center text-md mt-1 mb-4`
    return (
        <span className={className}>
            <FaStar className='w-3 h-3'/>
            {rating} {countReviews}
        </span>
    )
};

export default Ratings