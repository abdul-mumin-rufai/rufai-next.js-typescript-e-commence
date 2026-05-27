import React from 'react'
import { Separator } from '@/components/ui/separator';


const SectionTitle = ({ title }: { title:string}) => {
    return (
        <div>
            <h2 className='text-3xl font-medium tracking-wider capitalize mb-8'>
                {title}
            </h2>
        </div>
    )
};

export default SectionTitle;