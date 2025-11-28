import React from 'react'
import offerimg from "../offersell/sale.png";
const offer = () => {
  return (
 
 <div className='bg-amber-400 w-full  h-10 md:h-14 flex  overflow-hidden  items-center    relative '>
   <img className='w-20 h-20  absolute ' src={offerimg} alt="" />

<div className='w-full h-10 absolute  flex  whitespace-nowrap mx-8 mt-3  sm:animate-[scroll_30s_linear_infinite] animate-[scroll_10s_linear_infinite]'>
 
  <h3>

      1. Portfolio Website ₹499 (Limited Time Offer) | Call: 9521634141 | 
          2. Business Website ₹999 (Free Contact Form) | 
          3. E-commerce ₹2,499 (With Payment Setup) | WhatsApp: 9521634141 | 
          4. Restaurant ₹1,499 | 5. Coaching ₹1,999 | 6. Blog ₹799 | 
          7. Wedding ₹1,199 | 8. Real Estate ₹2,999 | 
          9. Travel ₹1,999 | 10. Custom ₹2,999+ (Based on Requirement)
  </h3>
  </div>     

    </div>
  )
}

export default offer

