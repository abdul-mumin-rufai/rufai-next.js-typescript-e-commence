import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import HeroCarousel from './HeroCarousel';

const Hero = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
            <div>
                <h1 className='max-w-2xl font-bold text-green-700 text-4xl tracking-tight sm:text-6xl'>
                    Rufai's Products
                </h1>
                <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
                    Explore our diverse range of products, crafted with care and designed to meet your needs.
                    From innovative gadgets to stylish accessories, we have something for everyone.
                    Discover quality, affordability, and exceptional customer service all in one place.
                    Shop now and experience the difference with Rufai's Products!
                </p>
                <Button asChild className='mt-2'>
                    <Link href='/products'>
                        Our Products Collections
                    </Link>
                </Button>
            </div>
            <HeroCarousel/>
        </section>
    )
};

export default Hero;