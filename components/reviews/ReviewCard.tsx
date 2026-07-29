import { Card,CardContent,CardHeader } from '../ui/card';
import Image from 'next/image';
import Rating from './Rating';
import Comment from './Comment';


type ReviewCardProps = {
    productReviewInfo: {
        comment: string;
        rating: number;
        name: string;
        image: string;
    };
    children?: React.ReactNode;
};

const ReviewCard = ({ productReviewInfo,children }: ReviewCardProps) => {
    
    return (
        <Card className='relative'>
            <CardHeader>
                <div className='flex items-center'>
                    <Image
                        src={productReviewInfo.image}
                        alt={productReviewInfo.name}
                        width={48}
                        height={48}
                        className='w-12 h-12 rounded-full object-cover'
                    />
                    <div className='ml-4'>
                        <h3 className='text-sm font-bold capitalize mb-1'>
                            {productReviewInfo.name}
                        </h3>
                        <Rating rating={productReviewInfo.rating}/>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Comment comment={productReviewInfo.comment}/>
            </CardContent>
            <div className='absolute top-3 right-3'>{children}</div>
        </Card>
    )
};

export default ReviewCard