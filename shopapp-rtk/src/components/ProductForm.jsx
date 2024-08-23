import React from 'react'
import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductForm() {
  let navigate = useNavigate();
  let titleRef = useRef();
  let priceRef = useRef();
  function submit() {
    let product = {
      title: titleRef.current.value,
      price: priceRef.current.value,
      image: "https://placehold.co/600x400",
      description: "blah blah.."
    }

    axios.post("http://localhost:1234/products", product).then(response => {
      titleRef.current.value = "";
      priceRef.current.value = "";
      navigate("/products");
    })
  }
  return (
    <div>
      Title : <input type="text" ref={titleRef} /> <br />
      Price : <input type="number" ref={priceRef} /> <br />
      <button type="button" onClick={submit}>Add Product </button>
    </div>
  )
}
