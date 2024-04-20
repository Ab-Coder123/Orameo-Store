
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
const Item = (props) => {
  return (
    <div className="lg:w-1/4 mx-10 my-5 transition-height ease-out duration-500 cursor-pointer mrounded-lg shadow-2xl md:w-1/2 p-4 w-full transform hover:translate-y-[-10%] transition-transform duration-500 ease-in-out">
      <Link to={`/Products/${props.id}`} className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-center object-contain w-full h-full block"
          src={props.image}
        />
      </Link>
      {/* paragraph and title */}
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {props.title}
        </h2>
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {props.Des}
        </h3>
      </div>

      <div className="flex justify-between align-baseline pt-5">
        <p className="price-p mt-1">
          New Price 
          <span className="mark">${props.New_price}</span>
        </p>
        <Link  to={`/Buy/${props.id}`} > 
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded">Buy</button>
        </Link>
      </div>
    </div>
  );
  
};
export default Item;
