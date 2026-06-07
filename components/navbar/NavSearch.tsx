'use client'
import React from 'react'
import { Input } from '../ui/input'
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';

const NavSearch = () => {
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    // getting the search item from the query string
    const [search, setSearch] = useState(searchParams.get('search')?.toString() || '');
    // function to handleSearch values
    const handleSearch = useDebouncedCallback((searchValue: string) => {
        // creating a new url
        const params = new URLSearchParams(searchParams);
        if (searchValue) {
            params.set('search', searchValue)
        } else {
            params.delete('search')
        }
        // wheather there is a search value or not we navigate to th products page with the search query string
        replace(`/products?${params.toString()}`);
    }, 300);

    // clearing the search field if search is empty
    useEffect(() => {
        if (!searchParams.get('search')) {
            setSearch('')
        }
    },[searchParams.get('search')])

    return (
        <div>
            <Input
                type='search'
                placeholder='search product name...'
                className='max-w-sm dark:bg-muted'
                onChange={(e) => {
                    setSearch(e.target.value); // update the search state immediately for better.
                    handleSearch(e.target.value);
                }}
                value={search}
            />
        </div>
    )
};

export default NavSearch;