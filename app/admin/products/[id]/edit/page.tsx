import React from 'react'
import { fetchAdminProductDetails, updateProductAction, updateProductImageAction } from '@/utils/action';
import FormContainer from '@/components/form/FormContainer';
import CheckBoxInput from '@/components/form/CheckBoxInput';
import SubmitButton from '@/components/form/Buttons';
import FormInput from '@/components/form/FormInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';


interface IdProps {
    params: Promise<{
        id: string;
    }>;
  }

const EditProduct = async ({params}:IdProps)  => {
    // getting the id from the params
    const idParams = await params;
    //fetching the specific product
    const product = await fetchAdminProductDetails(idParams.id);
    const { name, price, description, company, featured } = product;
    return (
        <section>
            <h1 className='text-2xl font-semibold mb-8 capitalize'>
                update the product
            </h1>
            <div className='border p-8 rounded-md'>
                {/* IMAGE INPUT CONTAINER */}
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
                    <SubmitButton text='update product'/>
                </FormContainer>
            </div>
        </section>
    )
};

export default EditProduct