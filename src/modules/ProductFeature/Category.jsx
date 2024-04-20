


import {useContext} from "react"
import {Usecontext} from "../../components/Context/Usecontext"
import { Link } from "react-router-dom";
import Item from "../../components/Items/Item";
const Category = (props) => {
  const {products} = useContext(Usecontext) ;
  return (
    <>
  <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={props.banner}/>
      {/* props  و جبتها من خلال ال   app دا ال بانر الموجود ف ال */}
      {/*  طيب ازاي جبتها لانها هي ارتبطت ب صور  */}
      {/* كده فهمت  item  انتا بتعرف تجيبها سواء كان ل صوره او لملف كامل زي ملف  props يعني انا بتقدر تجيب ال بانر دي لانها بقت زي شي متغير مخزن ف الملفات دي كلها ب مجرد انك تمرر ليها  */}
    </div>
  </div>
</section>

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
            {
            products.map((item ,i) => {
              // eslint-disable-next-line react/prop-types
              if (props.category === item.category) {
                // طبعا هنا ال كوندشن دا عشان تقدر انك تعمل اظهار ل المنتجات لو بيتطباق ال كاتيجوري ولا لا 
                return <Item key={i} id={item.id} title={item.title} image={item.image} Des={item.Des} New_price={item.New_price} />
              }else{
                return null ;
              }
          })}
          </div>
          <button className=" relative lg:mt-20 xl:mt-20 ml-10 text-white    border-0 py-2 px-6 focus:outline-none  rounded"> <Link to='/modules/Products/Productspage'>  Products</Link> </button>

        </div>


      </section>
    

    </>
  )
}

export default Category