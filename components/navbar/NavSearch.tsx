import React from 'react'
import { Input } from '../ui/input'

const NavSearch = () => {
    return (
        <div>
            <Input
                type='search'
                placeholder='search product...'
                className='max-w-sm dark:bg-muted'
            />
        </div>
    )
};

export default NavSearch;