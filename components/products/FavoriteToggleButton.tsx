import { auth, currentUser } from '@clerk/nextjs/server';
import { LinkFavoriteToSignUpBtn } from '../form/Buttons';
import { fetchFavoriteId } from '@/utils/action';
import FavoriteToggleForm from './FavoriteToggleForm';

const FavoriteToggleButton = async ({ productId }: { productId: string }) => {
    const userId = await currentUser() // get the current user id
    if (!userId) return <LinkFavoriteToSignUpBtn />
    const favoriteId = await fetchFavoriteId({ productId }); // fetched the favoriteId here
    return (
        <FavoriteToggleForm favoriteId={favoriteId} productId={productId}/>
    )
};

export default FavoriteToggleButton;