import SubmitButton from '@/components/form/Buttons';
import CheckBoxInput from '@/components/form/CheckBoxInput';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import ImageInput from '@/components/form/ImageInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { createProductAction } from '@/utils/action';
import {faker} from '@faker-js/faker'
import React from 'react'

const CreateProductPage = () => {
    const name = faker.commerce.productName();
    const company = faker.company.name();
    const description = faker.lorem.paragraph({ min: 12, max: 14 });
    return (
        <section>
            <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
            <div className='border p-8 rounded-md'>
                <FormContainer action={createProductAction}>
                    <div className='grid gap-4 md:grid-cols-2 my-2'>
                        <FormInput name='name' type='text' label='product name' defaultValue={name} />
                        <FormInput name='company' type='text' label='company' defaultValue={company} />
                        <PriceInput />
                        <ImageInput/>
                    </div>
                    <TextAreaInput name='description' label='product description' defaultValue={description} />
                    <div className='mt-4 mb-4'>
                        <CheckBoxInput name='featured' label='featured'/>
                    </div>
                    <SubmitButton  text='create product'/>
                </FormContainer>
            </div>
        </section>
    )
};

export default CreateProductPage