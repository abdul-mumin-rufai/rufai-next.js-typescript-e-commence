import FeaturedProducts from '@/components/home/FeaturedProducts';
import Hero from '@/components/home/Hero';
import { Button } from '@/components/ui/button';
import React from 'react'

function Homepage() {
  return (
    <div>
      <Hero />
      <FeaturedProducts/>
    </div>
  )
};

export default Homepage;