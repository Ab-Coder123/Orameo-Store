 import products from '../../assets/productdetails.js'
import Item from '../Items/Item.jsx'
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <>
     <section className="text-gray-600 body-font">
    <div className="container px-9 py-29 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Products
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
          Products the best of sells{" "}
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full    inline-flex"></div>
        </div>
      </div>
      <div className="flex flex-wrap -m-5">
      
      {products.map((item ,i )=> {
          return <Item key={i} id={item.id} title={item.title} image={item.image} Des={item.Des} New_price={item.New_price} />
       })}
     </div>
     <button className=" relative lg:mt-20 xl:mt-20 ml-10 text-white    border-0 py-2 px-6 focus:outline-none  rounded"> <Link to='/modules/Products/Productspage'>  Products</Link> </button>
     </div>
  </section>
    </>
  )
}

export default Products