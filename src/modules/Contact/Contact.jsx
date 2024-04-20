

const Contact = () => {
  return (
    <>
    <section className="text-gray-400      body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2      rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <img width="100%" height="100%" title="map" className="absolute" src="https://img.freepik.com/free-photo/hand-tapping-tablet-with-map_23-2147732953.jpg?t=st=1710369678~exp=1710373278~hmac=19e85e2b46bf2081fa48032c38cc67f181dfc7c9ea04e797324304a937d011ce&w=740"></img>
      <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Cairo Naser City</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
          <a className="text-white leading-relaxed">Oremo@email.com</a>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">0123-456-7890</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-white text-lg mb-1 font-medium title-font">Contact</h2>
      <p className="leading-relaxed mb-5">Contact with Call Center</p>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-400">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-400">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-400">Message</label>
        <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
      <p className="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
    </>  )
}

export default Contact