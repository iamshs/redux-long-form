import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Home = () => {

    const [products,setProducts] = useState([])
   
    useEffect( () =>{
        fetch('products.json').then(res => res.json()).then (data => setProducts(data))
    } ,[])
    const state = useSelector((state) => state)
console.log(state)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 p-10' >
           {
            products.map(product => <ProductCard product={product} key={product._id} />)
           }
        </div>
    );
};

export default Home;