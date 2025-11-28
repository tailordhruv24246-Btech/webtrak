
import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Tophead from './components/Tophead/Tophead'
import Offer from './components/offersell/offer'
import Projectlist from './components/ProjectsList/Projectlist'
import Testimonial from './components/Testimonial/Testimonial'
import Form from './components/form/Form'
import Footer from './components/Footer/Footer'
function App() {


  return (
    
      <div className="min-h-screen bg-white dark:bg-black overflow-hidden">
      <Tophead />
    
      <Navbar/>
     <Hero/>
     <Offer/>
      <Projectlist/>
<Testimonial/>
<Form/>
<Footer/>

      
    </div>
     
    
  )
}

export default App
