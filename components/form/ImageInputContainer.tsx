'use client'
import React from 'react'
import { Button } from '../ui/button'
import FormContainer from './FormContainer'
import Image from 'next/image'
import { useState } from 'react'
import SubmitButton from './Buttons'
import { type actionFunction } from '@/utils/types'
import ImageInput from './ImageInput'


type ImageInputContainerProps = {
    name: string;
    image: string;
    action: actionFunction;
    text: string;
    children?:React.ReactNode
};

const ImageInputContainer = (props: ImageInputContainerProps) => {
    const { name, image, action, text } = props;
    const [isUpdateFormVisible, setIsUpDateFormVisible] = useState(false);
    return (
        <div className='mb-7'>
            {/* displaying the current image */}
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
                priority
                className='rounded-md object-cover mb-4 w-50 h-50'
            />
            {/* click the button to trigger the update image form */}
            <Button variant='destructive' size='sm' onClick={()=>setIsUpDateFormVisible((prev)=>!prev)}>
                {text}
            </Button>
            {isUpdateFormVisible && (
                <div className='max-w-md mt-4'>
                    <FormContainer action={action}> {/* the action will be pass down here in the edit page */}
                        {props.children} 
                        <ImageInput /> {/* displaying the imageInput */}
                        <SubmitButton size='sm'/>
                    </FormContainer>
                </div>
            )}
        </div>
    )
};

export default ImageInputContainer