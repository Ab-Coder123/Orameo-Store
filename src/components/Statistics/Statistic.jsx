import img3 from "../../assets/images/Freature/wireless-charger_8394735.png"
import img1 from "../../assets/images/Freature/watch_7183194.png"
import img2 from "../../assets/images/Freature/headphones_8849470.png"

const Statistic = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Statisics Of Products</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify .</p>
    </div>


    <div className="flex flex-wrap justify-center text-center">


      <div className="p-7 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <img src={img1} alt="Smart Watch" className=" w-12 h-12 mb-5 inline-block" />
          <h2 className="title-font font-medium text-3xl text-gray-900">27K</h2>
          <p className="leading-relaxed">Sells</p>
        </div>
      </div>

      <div className="p-7 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <img src={img2} alt="Headphones" className=" w-12 h-12 mb-5 inline-block" />
          <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
          <p className="leading-relaxed">sells</p>
        </div>
      </div>

      <div className="p-7 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <img src={img3} alt="charge" className=" w-12 h-12 mb-5 inline-block" />
          <h2 className="title-font font-medium text-3xl text-gray-900">74K</h2>
          <p className="leading-relaxed">sells</p>
        </div>
      </div>
      
      
    </div>
  </div>
</section>
    </>
  )
}

export default Statistic