import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'
import ProductCard from './ProductCard'

import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { fetchProducts } from '../redux/fetchProducts';

export default function ProductList() {
  let dispatch = useDispatch();
  let {products:data, status, error} = useSelector(state => state.productsState)
  useEffect(() => {
    dispatch(fetchProducts());
  },[]);
  if (status === 'loading') {
    return <h1>Loading products....</h1>
  } else {
    return <div className='row'>
      {
        data.map(product => <ProductCard product={product} key={product.id} />)
      }
    </div>
  }
}
