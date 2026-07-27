import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }: { rating: number }) => {
    const numbers = Array.from({ length: 5 }, (_, i) => i + 1 <= rating);
    /* rating = 3
    1 <= 3 true
    2 <= 3 true
    3 <= 3 true
    4 <= 3 false
    5 <= 3 false */
    
    return (
        <div>
            {numbers.map((isTrue, i) => {
                const className = `w-3,h-3 ${isTrue ? 'text-primary' : 'text-gray-400'}`;
                return (
                    isTrue?(<FaStar className={className} key={i}/>):(<FaRegStar className={className} key={i}/>)
                )
            })}
        </div>
    )
};

export default Rating