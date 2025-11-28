import React, { useEffect, useState } from 'react'
import drRam from "./review img/dr. ram sharma.jpg";
import rahulJaat from "./review img/kirana shop.jpg";
import sahilTailor from "./review img/lab technicain.jpg";
import satpalJi from "./review img/madical shop.jpg";
import parmodJi from "./review img/optical shop.jpg";
import govindNamdev from "./review img/principal jec school.jpg";
import priyaJi from "./review img/priya tailor.jpg";
import shivaniJi from "./review img/student portfilio.jpg";
import rayaYadav from "./review img/teacher.jpg";
import ashokSoni from "./review img/travel agent.jpg";
import mamtaJi from "./review img/tution teacher.jpg";
import bgImg from "./testimonial bg photo/testimonial bgimg.jpg";


const Testimonial = () => {
    const[Testimonial ,setTestimonial] = useState(0)
const review = [
  {
    Image: drRam,
    Comment: " ⮚ Hello, I’m Dr. Ram Sharma. I got my doctor profile website made by WebTrak. It’s a clean and professional 3-page website. Very useful for my online presence. Thank you team!",
    Name: "Dr. Ram Sharma"
  },
  {
    Image: rahulJaat,
    Comment: " ⮚ Hii bro, meri kirana shop ke liye ek simple sa website banwaya tha WebTrak se. Single page ka hi hai lekin kaafi kaam ka hai. Ab log ghar baithe rate dekh lete hain. Mast bana!",
    Name: "Rahul Jaat"
  },
  {
    Image: sahilTailor,
    Comment: "  ⮚ My name is Sahil Tailor. I asked WebTrak for a lab technician website. It’s a fast and clear single-page site. Got what I needed, simple and sorted.",
    Name: "Sahil Tailor"
  },
  {
    Image: satpalJi,
    Comment: "  ⮚ I’m Satpal Ji. WebTrak made a neat 2-page website for my medical store. Customers can now see our timings and medicines list online. Good work!",
    Name: "Satpal Ji"
  },
  {
    Image: parmodJi,
    Comment: " ⮚  Namaste, I’m Parmod Ji. WebTrak team created a stylish 3-page site for my optical shop. I liked the colors and modern layout. Thanks a lot!",
    Name: "Parmod Ji"
  },
  {
    Image: govindNamdev,
    Comment: " ⮚ This is Govind Namdev, Principal at JEC School. I wanted a proper portfolio site to show my educational experience. WebTrak developed a 5-page site and I’m happy with the quality.",
    Name: "Govind Namdev"
  },
  {
    Image: priyaJi,
    Comment: " ⮚ Hi I’m Priya, tailoring ka kaam karti hoon. WebTrak ne mere liye ek single page website design ki. Simple hai par classy lagti hai. Kaam ke liye perfect!",
    Name: "Priya Ji"
  },
  {
    Image: shivaniJi,
    Comment: " ⮚ Hello, this is Shivani Ji. I’m a student. I got a single-page portfolio site from WebTrak to showcase my projects and skills. It helped me get internship calls. So happy!",
    Name: "Shivani Ji"
  },
  {
    Image: rayaYadav,
    Comment: " ⮚ Main hoon Raya Yadav, teacher hoon. WebTrak se 2-page website banwaya teaching ke liye. Layout simple aur professional hai. Bachhon ke parents easily contact kar lete hain.",
    Name: "Raya Yadav"
  },
  {
    Image: ashokSoni,
    Comment: " ⮚ Hey there, I’m Ashok Soni. WebTrak built my 3-page travel agency website. Looks classy and responsive. I can now share it with clients easily!",
    Name: "Ashok Soni"
  },
  {
    Image: mamtaJi,
    Comment: " ⮚ My name is Mamta Ji. I'm a tuition teacher. I wanted a simple website where students' parents could know about my classes. WebTrak made a clean single-page site. Very nice work!",
    Name: "Mamta Ji"
  }
];


useEffect(() => {
    const reviewCard = setInterval(() => {
  setTestimonial((back)=>(back+1)%review.length);
    }, 8000);


  return () => {
    clearInterval(reviewCard);
  }
}, [review.length])




  return (
   <div  className="w-full h-auto items-center first-letter"
    style={{
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}   >
  <div className='flex items-center justify-center px-2 pt-5 '>
    <div className="border-1  flex flex-col md:flex-row    items-center rounded-2xl p-5 max-w-[900px] w-full">
      <img
        className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full mx-auto"
        src={review[Testimonial].Image}
        alt=""
      />
      <div className="px-2 md:px-5 w-full md:w-[500px] text-center md:text-left mt-5 md:mt-0">
        <h3 className="text-white text-sm md:text-base leading-relaxed  dark:text-white">
          {review[Testimonial].Comment}
        </h3>
        <h2 className="mt-5 font-semibold bg-amber-500 rounded-full px-5 py-2 inline-block">
          {review[Testimonial].Name}
        </h2>

        <div className="flex justify-center md:justify-start gap-2 mt-6 flex-wrap">
          {review.map((_, index) => (
            <button
              key={index}
              className={`w-5 h-2 rounded-full transition-all duration-300 ${
                index === Testimonial ? "bg-white" : "bg-amber-400"
              }`}
              onClick={() => setTestimonial(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>





  )
}

export default Testimonial
