import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
export default function Details() {
  let [product, setProduct] = useState();
  let {id} = useParams(); // Path Parameter http://localhost:3000/details/1
  // useSearchParams for Query Parameters ==> http://server.com:8080?page=4&size=10

  useEffect(() => {
    axios.get(`http://localhost:1234/products/${id}`).then(response => {
      setProduct(response.data);
    })
  },[id]);

  return (
    <div>
      {
        product && <div className='row'>
            <div className='col-md-4'>
                <img src={product.image} style={{"width": "200px"}}/>
            </div>
            <div className='col-md-8'>
              Title: {product.title} <br />
              Price: {product.price} <br />
              Category: {product.category} <br />
            </div>
          </div>
      }

    </div>
  )
}
