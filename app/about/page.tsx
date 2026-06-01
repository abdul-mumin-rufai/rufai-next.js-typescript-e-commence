import React from 'react'

function AboutPage() {

  return (
    <section>
      <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl text-blue-500 font-bold leading-none tracking-wide sm:text-6xl'>
        About 
        <span className='bg-destructive py-2 px-4 rounded-lg tracking-widest text-white'>
          Rufai's Watches
        </span>
      </h1>
      <p className='justify-center mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground text-justify'>
        At Rufai's Watches, we are passionate about timepieces that blend timeless elegance with
        modern sophistication. Our curated collection of exquisite watches is designed to elevate
        your style and keep you punctual. We believe that a watch is more than just a timekeeping
        device, it's a statement of individuality and a reflection of your unique personality.
        With a commitment to quality craftsmanship and innovative design, we strive to provide our
        customers with exceptional timepieces that stand the test of time. Explore our range of
        watches crafted with precision and passion, and find the perfect companion for every moment.
        Swiss craftsmanship, innovative design, and unparalleled quality await you at Rufai's Watches.
      </p>
    </section>
  )
};

export default AboutPage;