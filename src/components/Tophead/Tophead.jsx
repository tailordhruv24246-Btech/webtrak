// import React, { useState , useEffect } from 'react'
// import { FiPhone , FiMail ,FiInfo , FiMapPin} from 'react-icons/fi';
// import lighticon from "./darkmodeimg/light-mode-button.png";
// import darkIcon from "./darkmodeimg/dark-mode-button.png";



// const Tophead = () => {
// const [darkmode , setdarkmode ] = useState(false);
//  const [info , setinfo] = useState(false);

// useEffect(() => {
//   const html = document.documentElement;
//   if (darkmode) {
//     html.classList.add("dark");
//   } else {
//     html.classList.remove("dark");
//   }
// }, [darkmode]);



//   return (
//      <>
// <div className="w-full  absolute overflow-x-hidden left-0  h-10 bg-[#60A5FA] dark:bg-[#0F172A] dark:text-amber-200 flex  

//                items-center justify-between gap-6 px-4   text-white text-sm  sm:px-10"> 

//        <div className=" hidden  gap-6  sm:flex ml-10 ">    
//     <a href="tel:9521634141" className="flex cursor-pointer items-center text ">
//            <FiPhone className="mr-1" />
//             9521634141
//          </a>
//           <a href="mailto:yourname@example.com" className="flex cursor-pointer items-center">
//            <FiMail className="mr-2" />
//            tailordhurv4005@gmail.com
//          </a>
   
//      <a className="flex cursor-pointer items-center">
//            <FiMapPin className="mr-2" />
//            Kotputli, (Raj)
//          </a>
//        </div>
     
     
//        <div className=' sm:hidden flex items-center gap-2'>

//       <button onClick={()=>{setinfo(!info)}}><FiInfo size={18}/></button>
//        </div>
    
// {info&&
//    <div className=" sm:hidden flex flex-col  gap-6   ml-10  bg-[#60A5FA] h-auto  px-4 py-2 ">    
//     <a href="tel:9521634141" className="flex cursor-pointer items-center text ">
//            <FiPhone className="mr-1" />
//             9521634141
//          </a>
//           <a href="mailto:yourname@example.com" className="flex cursor-pointer items-center">
//            <FiMail className="mr-2" />
//            tailordhurv4005@gmail.com
//          </a>
   
//      <a className="flex cursor-pointer items-center">
//            <FiMapPin className="mr-2" />
//            Kotputli, (Raj)
//          </a>
//        </div>
     
// }


//          <button onClick={() => setdarkmode(!darkmode)} className="w-16 h-10 mr-12">
//   <img
//     src={darkmode ? darkIcon : lighticon}
//     alt="Toggle Mode"
//     className="w-full h-full object-contain"
//   />
// </button>

//               </div>
          
//      </>
//   )
// }

// export default Tophead



























import React, { useState, useEffect } from 'react';
import { FiPhone, FiMail, FiInfo, FiMapPin } from 'react-icons/fi';
import lighticon from "./darkmodeimg/light-mode-button.png";
import darkIcon from "./darkmodeimg/dark-mode-button.png";

const Tophead = () => {
  const [darkmode, setdarkmode] = useState(false);
  const [info, setinfo] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkmode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkmode]);

  return (
    <>
      <div className="w-full fixed top-0 left-0 z-50 bg-[#60A5FA] dark:bg-[#0F172A]  text-white dark:text-amber-200 text-sm px-4 sm:px-10 py-2 flex items-center justify-between">

        {/* --- Desktop Info --- */}
        <div className="hidden sm:flex items-center gap-6">
          <a href="tel:9521634141" className="flex items-center gap-1 hover:underline">
            <FiPhone /> 9521634141
          </a>
          <a href="mailto:tailordhurv4005@gmail.com" className="flex items-center gap-1 hover:underline">
            <FiMail /> tailordhurv4005@gmail.com
          </a>
          <div className="flex items-center gap-1">
            <FiMapPin /> Kotputli, (Raj)
          </div>
        </div>

        {/* --- Mobile Info Button --- */}
        <div className="flex sm:hidden items-center gap-2">
          <button onClick={() => setinfo(!info)} className="text-white dark:text-amber-200">
            <FiInfo size={20} />
          </button>
        </div>

        {/* --- Dark Mode Toggle --- */}
        <button onClick={() => setdarkmode(!darkmode)} className="w-8 h-8 sm:w-10 sm:h-10">
          <img
            src={darkmode ? darkIcon : lighticon}
            alt="Toggle Mode"
            className="w-full h-full object-contain"
          />
        </button>
      </div>

      {/* --- Mobile Info Dropdown --- */}
      {info && (
        <div className="sm:hidden bg-[#60A5FA] dark:bg-[#0F172A] text-white dark:text-amber-200 px-4 py-2 space-y-2 text-sm mt-10">
          <a href="tel:9521634141" className="flex items-center gap-2 hover:underline">
            <FiPhone /> 9521634141
          </a>
          <a href="mailto:tailordhurv4005@gmail.com" className="flex items-center gap-2 hover:underline">
            <FiMail /> tailordhurv4005@gmail.com
          </a>
          <div className="flex items-center gap-2">
            <FiMapPin /> Kotputli, (Raj)
          </div>
        </div>
      )}
    </>
  );
};

export default Tophead;
