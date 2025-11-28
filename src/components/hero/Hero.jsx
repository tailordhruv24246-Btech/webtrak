


import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import img1 from './hero-img/business-website_img.png';
import img2 from './hero-img/restaurant-website_img.png';
import img3 from './hero-img/portfolio-website_img.png';
import img4 from './hero-img/ecommerce-website_img.png';
import img5 from './hero-img/education-website_img.png';

const Hero = () => {
  const [frontphoto, setfrontphoto] = useState(0);

  const photos = [
    {
      image: img1,
      title: "Business Website",
      subtitle: "Perfect for corporate & startup businesses",
      offer: "50% OFF",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      image: img2,
      title: "Restaurant Website",
      subtitle: "A delicious design for food businesses",
      offer: "40% OFF",
      rating: "⭐⭐⭐⭐"
    },
    {
      image: img3,
      title: "Portfolio Website",
      subtitle: "Showcase your work with elegance",
      offer: "60% OFF",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      image: img4,
      title: "E-commerce Website",
      subtitle: "Start selling your products online today",
      offer: "30% OFF",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      image: img5,
      title: "Educational Website",
      subtitle: "Smart sites for schools & coaching institutes",
      offer: "15% OFF",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  useEffect(() => {
    const time = setInterval(() => {
      setfrontphoto((prev) => (prev + 1) % photos.length);
    }, 5000);

    return () => clearInterval(time);
  }, [photos.length]);

  const next = () => {
    setfrontphoto((prev) => (prev + 1) % photos.length);
  };

  const prev = () => {
    setfrontphoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
   <div className='w-full min-h-[90vh]  mb-2 flex flex-col-reverse  lg:flex-row items-center justify-between px-4 md:px-10 lg:px-20 mt-28 md:mt-8'>

  {/* Text Section */}
  <div className='w-full lg:w-1/2 text-center lg:text-left mb-36 md:mb-0 mt-6 lg:mt-0'>
    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold dark:text-amber-600'>
      {photos[frontphoto].title}
    </h2>
    <p className='text-base md:text-lg lg:text-xl mt-2 dark:text-white'>
      {photos[frontphoto].subtitle}
    </p>
    <h2 className='mt-2'>{photos[frontphoto].rating}</h2>

    <button className='bg-amber-400 py-2 px-4 rounded mt-5 hover:bg-amber-300 transition'>
      Order Now
    </button>

    {/* Arrows */}
    <div className='mt-8 flex justify-center lg:justify-start gap-6'>
      <button className='bg-black text-amber-500 p-3 rounded-xl dark:bg-white' onClick={prev}>
        <FaArrowLeft />
      </button>
      <button className='bg-black text-amber-500 p-3 rounded-xl dark:bg-white' onClick={next}>
        <FaArrowRight />
      </button>
    </div>
  </div>

  {/* Image Section */}
  <div className='relative w-full lg:w-1/2 flex justify-center items-center'>
    <img
      src={photos[frontphoto].image}
      alt="Website"
      className='w-full max-w-[500px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-contain rounded-lg transition-all duration-700'
    />

    {/* Offer badge */}
    <div className='absolute top-2 right-2 sm:top-4 sm:right-4 bg-green-500 text-white px-4 py-1 text-sm md:text-base font-bold rounded-full shadow-lg'>
      {photos[frontphoto].offer}
    </div>
  </div>
</div>

  );
};

export default Hero;
