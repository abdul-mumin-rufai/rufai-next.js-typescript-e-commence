import React, { Suspense } from 'react'
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Hero from '@/components/home/Hero';
import LoadingContainer from '@/components/globals/LoadingContainer';



function Homepage() {
  return (
    <div>
      <Hero />

      {/* the suspense component must called in the component that is 
      actually fetching the data ie featuredProducts */}
      {/* DEPLOYMENT WAS SUCCESSFUL! */}
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </div>
  )
};

export default Homepage;