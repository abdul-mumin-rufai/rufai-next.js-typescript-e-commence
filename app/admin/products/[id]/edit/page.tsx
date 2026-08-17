import React from 'react'
import { fetchAdminProductDetails, updateProductAction, updateProductImageAction } from '@/utils/action';
import FormContainer from '@/components/form/FormContainer';
import CheckBoxInput from '@/components/form/CheckBoxInput';
import SubmitButton from '@/components/form/Buttons';
import FormInput from '@/components/form/FormInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import ImageInputContainer from '@/components/form/ImageInputContainer';


interface IdProps {
    params: Promise<{
        id: string;
    }>;
};

const EditProduct = async ({ params }: IdProps) => {
    // getting the id from the params
    const idParams = await params;
    //fetching the specific product
    const product = await fetchAdminProductDetails(idParams.id);
    const { name, price, description, company, featured, image } = product;
    return (
        <section>
            <h1 className='text-2xl font-semibold mb-8 capitalize'>
                update the product
            </h1>
            <div className='border p-8 rounded-md'>
                {/* IMAGE INPUT CONTAINER */}
                <ImageInputContainer
                    name={name}
                    image={image}
                    action={updateProductImageAction}
                    text='Update Image'
                >
                    {/* we are hidding the id and imageName here because this is updating we already have the product and we need to hid the id from the front end */}
                    <input type='hidden' name='id' value={idParams.id} />
                    <input type='hidden' name='url' value={image} />
                </ImageInputContainer>

                <FormContainer action={updateProductAction}>
                    <div className='grid gap-4 md:grid-cols-2 my-4'>
                        <input type="hidden" name='id' defaultValue={idParams.id} />
                        <FormInput
                            name='name'
                            type='text'
                            label='product name'
                            defaultValue={name}
                        />
                        <FormInput
                            name='company'
                            type='text'
                            label='company'
                            defaultValue={company}
                        />
                        <PriceInput price={price} />
                    </div>
                    <TextAreaInput
                        name='description'
                        label='product description'
                        defaultValue={description}
                    />
                    <div className='mt-6 mb-4'>
                        <CheckBoxInput
                            name='featured'
                            label='featured'
                            defaultCheck={featured}
                        />
                    </div>
                    <SubmitButton text='update product' />
                </FormContainer>
            </div>
        </section>
    )
};

export default EditProduct