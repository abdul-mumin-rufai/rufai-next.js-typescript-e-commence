import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'

const createProductAction = async (formData: FormData) => { 
    'use server'
    const name = formData.get('name') as string;
    console.log(name);
    
};
const CreateProductPage = () => {
    return (
        <section>
            <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
            <div className='border p-8 rounded-md'>
                <form action={createProductAction}>
                    <div className='mb-2'>
                        <Label htmlFor='name' className='mb-2'>Product Name</Label>
                        <Input id='name' name='name' type='text'/>
                    </div>
                    <Button type='submit' size='lg'>
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    )
};

export default CreateProductPage