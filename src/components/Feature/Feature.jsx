import img3 from "../../assets/images/Freature/wireless-charger_8394735.png"
import img1 from "../../assets/images/Freature/watch_7183194.png"
import img2 from "../../assets/images/Freature/headphones_8849470.png"
import { Link } from "react-router-dom"
import { useState } from "react"


const Feature = () => {
   const [menu , setMenu] = useState('watch')
  return (
        <>

<section className="text-gray-400 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-xl text-white tracking-widest font-medium title-font mb-1">Orimo contents</h1>
      <p className="sm:text-3xl text-2xl font-medium title-font text-white">Orimo contains products that you want and are suitable for you</p>
    </div>
    <div className="flex flex-wrap -m-4">

      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white-500 text-white flex-shrink-0">
            <img src={img1} alt="Smart Watch" className="w-5 h-5" />
            </div>
            <h2 className="text-white text-lg title-font font-medium">Smart Watches</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Digital watches are comfortable in the hand and help you with work, exercise, and health.</p>
            <Link onClick={()=> {setMenu('watch')}}  to="/watch" className="mt-3 text-white inline-flex items-center">Learn More  {menu==="watch"?<hr/> : <></> }
              <svg fill="none" stroke="currentColor"   className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white-500 text-white flex-shrink-0">
             <img src={img2} alt="Headphones" className="w-5 h-5" />
            </div>
            <h2 className="text-white text-lg title-font font-medium">Headphones</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Headphones are very comfortable to use for more than one product, and we have headphones that support the noise isolation feature</p>
            <Link onClick={()=> {setMenu('headphone')}} to="/headphone"  className="mt-3 text-white-400 inline-flex items-center">Learn More {menu==="headphone"?<hr/> : <></> }
              <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-white-500 text-white flex-shrink-0">
              <img src={img3} alt="charge" className="w-5 h-5" />
            </div>
            <h2 className="text-white text-lg title-font font-medium">Chargers</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Chargers have the ability to endure, are made of the highest quality, and charge quickly in accordance with the terms and conditions</p>
            <Link onClick={()=> {setMenu('charge')}} to="/charge" className="mt-3 text-white-400 inline-flex items-center">Learn More {menu==="charge"?<hr/> : <></>}
              <svg fill="none" stroke="currentColor"   className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div> 


    </div>
  </div>
</section>
        </>


    )
}

export default Feature