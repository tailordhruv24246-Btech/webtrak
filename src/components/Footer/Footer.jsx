







//   // Footer.jsx
//  import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
//  import footerlogo from "./footer_img/webtrak logo.png";
//  export default function Footer() {
//   return (
//      <footer className="bg-amber-400 flex flex-col text-white py-10 px-5 text-center">
      
    
//     <div className="    justify-center py-3 " >
//      <p className=" text-2xl text-black font-sans"> Crafting smart websites that make your ideas shine.</p>
//          <img className='w-[200px] m-auto' src={footerlogo} alt="" />
  
//       </div>
  
//  <div>
// <div className="flex">
//        {/* Quick Links */}
//        <div className=" justify-center flex flex-col  gap-6 mt-6 flex-wrap">
//          <a href="#" className="text-white hover:text-red-500 transition">Home</a>
//          <a href="#" className="text-white hover:text-red-500 transition">Templates</a>    
//      <a href="#" className="text-white hover:text-red-500 transition">Pricing</a>
//         <a href="#" className="text-white hover:text-red-500 transition">Contact</a>
//       </div>

//       {/* Social Icons */}
//       <div className="flex justify-center gap-6 mt-6">
//          <a href="#" className="text-blue-600 hover:text-white transition"><Facebook size={20} /></a>
//          <a href="#" className="text-blue-600 hover:text-white transition"><Instagram size={20} /></a>
//         <a href="#" className="text-blue-600 hover:text-white transition"><Twitter size={20} /></a>
//         <a href="#" className="text-blue-600 hover:text-white transition"><Linkedin size={20} /></a>
//       </div>
//  </div>
//  <div className="mt-8 text-center text-sm text-black">
//         <p>📍 Jabalpur, India</p>
//         <p>📧 support@webtrak.com | 📞 +91 98765 43210</p>
//       </div>

//       </div>
//       {/* Copyright */}   
//           <p className="text-gray-500 text-xs mt-6">
//          © 2025 WebTrak . All Rights Reserved Dhruv Tailor.
//       </p>
//     </footer>
//    );
//  }



// Footer.jsx
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import footerlogo from "./footer_img/webtrak logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white py-12 px-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo + Tagline */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <img className="w-[180px]" src={footerlogo} alt="WebTrak Logo" />
          <p className="text-lg text-black font-semibold max-w-xs">
            Crafting smart websites that make your ideas shine ✨
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3 font-medium">
          <h3 className="text-xl font-bold text-black mb-2">Quick Links</h3>
          <a href="#" className="hover:text-red-700 transition">Home</a>
          <a href="#" className="hover:text-red-700 transition">Templates</a>
          <a href="#" className="hover:text-red-700 transition">Pricing</a>
          <a href="#" className="hover:text-red-700 transition">Contact</a>
        </div>

        {/* Contact + Social */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-xl font-bold text-black mb-2">Get in Touch</h3>
          <p className="text-sm text-black">📍 Jabalpur, India</p>
          <p className="text-sm text-black">📧 support@webtrak.com</p>
          <p className="text-sm text-black">📞 +91 98765 43210</p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-2">
            <a href="#" className="hover:text-white transition"><Facebook size={22} /></a>
            <a href="#" className="hover:text-white transition"><Instagram size={22} /></a>
            <a href="#" className="hover:text-white transition"><Twitter size={22} /></a>
            <a href="#" className="hover:text-white transition"><Linkedin size={22} /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/40 my-6"></div>

      {/* Bottom Copyright */}
      <p className="text-gray-800 text-center text-sm">
        © 2025 <span className="font-bold">WebTrak</span>. All Rights Reserved | Designed by <span className="font-semibold">Dhruv Tailor</span>
      </p>
    </footer>
  );
}
