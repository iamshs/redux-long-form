import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actionCreators/productActions";
import {RiDeleteBin2Fill} from "react-icons/ri"
import { useLocation } from "react-router-dom";


const ProductCard = ({ product }) => {
  const {pathname} = useLocation()
  const dispatch = useDispatch()
 
  return (
    <div
      className='shadow-lg rounded-3xl border relative p-3 flex flex-col text-indigo-900'
      key={product._id}
    >
      {
        pathname.includes('cart') && <div className=" absolute right-2 top-2 bg-indigo-500 text-white rounded-full h-8 w-8 place-items-center grid " >
        <p> {product.quantity} </p>
      </div>
      }
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li key={feature} className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        {
          pathname.includes('cart') && <button
          className='bg-red-500 rounded-full py-1 px-2 flex items-center justify-between px-4 flex-1 text-white text-bold'
          onClick={() => dispatch( removeFromCart(product))}
        >
          <p className="text-lg">Remove</p>
          <RiDeleteBin2Fill size={20} />
        </button>
        }
        {
          !pathname.includes('cart') && <button
          className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </button>
        }
       {
        !pathname.includes('cart') &&  <button
        title='Add to wishlist'
        className='bg-indigo-500  py-1 px-2 rounded-full'
      >
        <BiListPlus className='text-white' />
      </button>
       }
      </div>
    </div>
  );
};

export default ProductCard;