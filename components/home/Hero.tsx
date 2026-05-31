import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import HeroCarousel from './HeroCarousel';

const Hero = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
            <div>
                <h1 className='max-w-2xl font-bold text-green-700 text-4xl tracking-tight sm:text-6xl'>
                    Rufai's Watch - Where Time Meets Style
                </h1>
                <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
                    Discover the perfect blend of timeless elegance and modern sophistication
                    with Rufai's Watch. Our curated collection of exquisite timepieces is designed to
                    elevate your style and keep you punctual. Explore our range of watches
                    crafted with precision and passion,
                    and find the perfect companion for every moment. Swiss craftsmanship, innovative design, and unparalleled quality await you at Rufai's Watch.
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