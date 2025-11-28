import React, { useEffect, useState } from 'react'
import  Blogimg  from "./projectlistImg/Blog Website.jpg";
import  Businessimg  from "./projectlistImg/Business Website.jpg";
import  Newsimg  from "./projectlistImg/news website.jpg";
import  Onlineshopimg  from "./projectlistImg/Online Shop.jpg";
import  Portfolioimg  from "./projectlistImg/Portfolio Website.jpg";
import  Restaurantimg  from "./projectlistImg/Restaurant.jpg";
import Schoolimg  from "./projectlistImg/school website.png";

    const projectboxitem = [
  {
    Image: Blogimg,
    title: 'Blog website',
    ratingstar: '⭐⭐⭐⭐☆',
    off: '20% OFF',
   
  },
  {
    Image: Businessimg,
    title: 'Business website',
    ratingstar: '⭐⭐⭐⭐⭐',
    off: '25% OFF',
  
  },
  {
    Image: Newsimg,
    title: 'News website',
    ratingstar: '⭐⭐⭐⭐☆',
    off: '15% OFF',
  
  },
  {
    Image: Onlineshopimg,
    title: 'Online Shop website',
    ratingstar: '⭐⭐⭐⭐⭐',
    off: '30% OFF',
   
  },
  {
    Image: Portfolioimg,
    title: 'Portfolio website',
    ratingstar: '⭐⭐⭐⭐☆',
    off: '10% OFF',
   
  },
  {
    Image: Restaurantimg,
    title: 'Restaurant website',
    ratingstar: '⭐⭐⭐⭐⭐',
    off: '20% OFF',
  },
  {
    Image: Businessimg,
    title: 'Business website',
    ratingstar: '⭐⭐⭐⭐⭐',
    off: '25% OFF',
  
  }

];

 
    

        
    

const Projectlist = () => {
    const [hotline , sethotline] = useState(0)
const lines = [
    { Hotline: '🔥 Hot Deal of the Day! 🔥' },
    { Hotline: '⏳ Limited Time Hot Offer! ⚡' },
    { Hotline: '🔥 Grab the Hottest Deal Now! 🛍️' },
    { Hotline: '🚨 Don’t Miss This Hot Deal! 🔥' },
    { Hotline: '🔥 Today’s Sizzling Hot Deal! 🛒' },
    { Hotline: '💥 Exclusive Hot Deal Inside! 💎' },
    { Hotline: '🔥 Unbeatable Hot Deals Await! 🎯' },
    { Hotline: '⚡ Hot Price, Cool Website! 💻' },
    { Hotline: '🔥 Special Hot Deal – Act Fast! ⏱️' },
    { Hotline: '🔥 Hot Pick Just for You! 🎁' }
];

useEffect(() => {
  const time = setInterval(() => {
    sethotline((back)=> (back+1)%lines.length )
  },12000);

  return () => {
    clearInterval(time)
  }
}, [lines.length])



  return (
   
   <div className=' py-10 px-5 md:px-20 bg-white   dark:bg-black' >
        <div className='bg-blue-600  rounded-r-full '>
      <h2 className='text-2xl text-white font-bold  px-5 p-2  '>Premium Website Pack </h2>
      <h4 className=' animate-bip inline-block text-black bg-amber-500  rounded-r-full font-bold px-5  py-1 mb-2'>{lines[hotline].Hotline}</h4>

   
        </div>

<div className=' grid grid-cols-2 sm:grid-cols-2   md:grid-cols-3 gap-6 mt-10 '>
{projectboxitem.map((item , index ) =>(
    <div key={index} className='border rounded-xl overflow-hidden w-[180px] md:w-[350px]  '>
<img src={item.Image} alt="" />

<h3 className='text-2xl font-bold dark:text-amber-600 ml-2 '>{item.title}</h3>
<h2 className=' ml-2 '>{item.ratingstar}</h2>
<h3 className=' ml-2 dark:text-white '>{item.off}</h3>
<button className='bg-blue-600 rounded-xl ml-2 mt-2 px-3 py-2 mb-2'>view more</button>

    </div>
))}
</div>
        </div>
      
   
  )
}

export default Projectlist




