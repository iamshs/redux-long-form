import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 gap-10'>
           {
            cart.sort((a,b) => a._id - b._id).map((product ,i)=> <ProductCard  product={product} />)
           }
        </div>
    );
};

export default Cart;