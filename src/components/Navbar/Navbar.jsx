import React, { useState } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import webtraklogo from "./navbar_img/webtrak logo.png";



const Navbar = () => {

    const [dropdown ,setdropdown] = useState(false); 
    const [burger , setburger ]  = useState(false);
 

  return (
<nav className="  fixed  mt-10 left-0 w-full h-14 z-50 shadow bg-amber-400 dark:bg-[#1E293B] text-black dark:text-white flex justify-between px-5">

<div className=" flex text-center items-center  justify-center py-3 ml-10" >
  <img className='w-[200px] h-auto object-contain mt-2  ' src={webtraklogo} alt="" />
{/* <h2 className="text-3xl font-bold cursor-pointer text-amber-500">WebTrek</h2> */}
</div>
    

    <div className=" flex text-center items-center  justify-center py-3 ml-10" >

    

 <input type="search" placeholder='search your design ...'  className='px-5  py-1  border-blue-600 border border-l-blue-600 rounded-2xl rounded-r-none ' />
 <button className='bg-blue-600 py-1 px-5 border-blue-600 border rounded-r-2xl text-white'>Go</button>
</div>

    {/* Navigation Menu */}
<div className=' hidden  md:flex justify-center mr-8  '>
<ul className='flex gap-10 py-4 text-lg font-medium relative'>
    <li className="hover:text-white"><a href="#">Home</a></li>
    <li className="hover:text-white"><a href="#">About me</a></li>

    

     <li  className="hover:text-white"
      onMouseEnter={() => setdropdown(true)}
     onMouseLeave={() => setdropdown(false) }>
        <button>Templates</button>
        {dropdown&& (

       <ul className="absolute py-8  left-24 border-2  bg-white   text-blue-900 rounded  shadow-md w-48 z-50">

    <li className='border-amber-500'>
      <a href="#" className="block px-4 py-2 hover:bg-amber-400  hover:text-blue-600" >Portfolio</a>
    </li>
    <li>
      <a href="#ecom" className="block px-4 py-2  hover:bg-amber-400 hover:text-black">E-commerce</a>
    </li>
    <li>
      <a href="#portfolio" className="block px-4 py-2  hover:bg-amber-400 hover:text-black">Portfolio</a>
    </li>
    <li>
      <a href="#college" className="block px-4 py-2  hover:bg-amber-400 hover:text-black">College Project</a>
    </li>
  </ul>
)}
         </li>

    


    <li className="hover:text-white"><a href="#">Contact</a></li>

</ul>
        <button className="bg-blue-600 cursor-pointer px-3  text-white rounded-4xl m-auto ml-10  py-1 ">order Now</button>

</div>

<div className=' md:hidden flex items-center w-10 h-10  '>
<button className='mt-5 ' onClick={()=>{setburger(!burger)}}><FontAwesomeIcon icon={faBars} size='2' className='text-2xl'/></button>
</div>
    


{burger && (
  // <div className='md:hidden absolute mt-14   bg-black py-4  w-full h-auto flex flex-col items-center gap-4   '>
  <div className='md:hidden absolute left-0 flex  top-full bg-black py-4 w-full h-auto   items-center gap-4'>

  <ul className='flex gap-6 text-lg   m-auto md:m-0 font-light text-white'>
      <li className="hover:text-amber-400"><a href="#">Home</a></li>
      <li className="hover:text-amber-400"><a href="#">About me</a></li>

      {/* Project Dropdown (Click based for mobile) */}
      <li className="relative text-center">
        <button
          onClick={() => setdropdown(!dropdown)}
          className="hover:text-amber-400"
        >
          Project {dropdown ? '▲' : '▼'}
        </button>
        {dropdown && (
          <ul className="mt-2 text-white rounded shadow-md w-25 z-50 text-left">
            <li><a href="#" className="block   px-4 py-2  underline  hover:bg-amber-400 hover:text-black "> Portfolio</a></li>
            <li><a href="#ecom" className="block px-4 py-4  underline  hover:bg-amber-400 hover:text-black">E-commerce</a></li>
            <li><a href="#portfolio" className="block px-4 underline py-2  hover:bg-amber-400 hover:text-black">Shop</a></li>
            <li><a href="#college" className="block px-4 underline py-2  hover:bg-amber-400 hover:text-black">College Project</a></li>
          </ul>
        )}
      </li>

      <li className="hover:text-amber-400"><a href="#">Contact</a></li>
    </ul>
{/* <div className=''>
   <button className="bg-amber-400 text-black px-4 py-1 rounded-full hover:bg-amber-300 transition">
      Order Now
    </button>
</div> */}
 


 

  </div>
)}

     


  

    </nav>

  
  )

}
export default Navbar








