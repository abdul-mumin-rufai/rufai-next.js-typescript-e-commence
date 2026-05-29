import React from 'react'
import { Separator } from '@/components/ui/separator';


const SectionTitle = ({ title }: { title:string}) => {
    return (
        <div>
            <h2 className='text-3xl font-medium tracking-wider capitalize mb-3'>
                {title}
            </h2>
            <Separator/>
        </div>
    )
};

export default SectionTitle;