'use client'
import { favoriteToggleAction } from '@/utils/action';
import { usePathname } from 'next/navigation';
import FormContainer from '../form/FormContainer';
import { FavoriteSubmitBtn } from '../form/Buttons';


type FavoriteToggleFormProps = {
    productId: string;
    favoriteId: string | null;
};
const FavoriteToggleForm = ({ productId,favoriteId }: FavoriteToggleFormProps) => {
    const pathName = usePathname();
    // we are using the bind method because favoriteToggleForm needs both the productId,favoriteId and the pathName so we need to lock them as one
    const toggleAction = favoriteToggleAction.bind(null, { productId, favoriteId, pathName });
    return (
        <FormContainer action={toggleAction}>
            {/* if the favoriteId exist then we set isFavorite to true else we set is to false */}
            <FavoriteSubmitBtn isFavorite={favoriteId ? true : false} />
        </FormContainer>
    )
};

export default FavoriteToggleForm;