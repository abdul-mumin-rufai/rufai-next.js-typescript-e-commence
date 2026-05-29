import React from 'react'
import { MdFavorite } from "react-icons/md";
import { Button } from '../ui/button';

const FavoriteToggleButton = ({productId}:{productId:string}) => {
    return (
        <Button size='icon' variant='destructive' className='p-2 cursor-pointer'>
            <MdFavorite/>
        </Button>
    )
};

export default FavoriteToggleButton;