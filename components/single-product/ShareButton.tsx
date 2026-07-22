'use client'
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { MdOutlineShare } from "react-icons/md";
import { XShareButton, EmailShareButton, LinkedinShareButton, EmailIcon, LinkedinIcon,XIcon} from 'react-share'

const ShareButton = ({ productId, name }: { productId: string; name: string }) => {
    const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
    const shareLink = `${url}/products/${productId}`;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant='destructive' size='icon' className='p-2'>
                    <MdOutlineShare/>
                </Button>
            </PopoverTrigger>
            <PopoverContent side='right' align='center' sideOffset={10} className='flex items-center gap-x-2 justify-center w-full'>
                <EmailShareButton url={shareLink} name={name}>
                    <EmailIcon size={32} round/>
                </EmailShareButton>
                <LinkedinShareButton url={shareLink} name={name}>
                    <LinkedinIcon size={32} round/>
                </LinkedinShareButton>
                <XShareButton url={shareLink} name={name}>
                    <XIcon size={32} round/>
                </XShareButton>
            </PopoverContent>
        </Popover>
    )
};

export default ShareButton