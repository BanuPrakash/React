import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'
import ProductCard from './ProductCard'
import useFetch from '../hooks/useFetch';
export default function ProductList() {
  // let [products, setProducts] = useState();
  // let { status, data } = useFetch("https://fakestoreapi.com/products?limit=5");

  let { status, data } = useFetch("http://localhost:1234/products");
  
  // componentDidMount(); called only once after initial render
  // useEffect(() => {
  //     fetch("https://fakestoreapi.com/products?limit=5")
  //       .then(response => response.json())
  //       .then(data => setProducts(data));
  // }, []);

  if (status === 'fetching') {
    return <h1>Loading products....</h1>
  } else {
    return <div className='row'>
      {
        data.map(product => <ProductCard product={product} key={product.id} />)
      }
    </div>
  }
}
