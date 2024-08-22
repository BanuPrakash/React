import React from 'react'
import Button from 'react-bootstrap/Button';
export default function CartList({ product }) {
  let { id, image, title, price, quantity, amount } = product;
  return (
    <div className='row my-2'>
      <div className='col-md-2'>
        <img src={image} style={{ "width": "50px" }} />
      </div>
      <div className='col-md-2'>
        {title}
      </div>
      <div className='col-md-4'>
        <Button>&nbsp; - &nbsp;</Button>
        &nbsp; Qty: {quantity} &nbsp;
        <Button>&nbsp; + &nbsp;</Button>
      </div>
      <div className='col-md-2'>
        Price: {price}
      </div>
      <div className='col-md-2'>
        Amount: {amount}
      </div>
    </div>
  )
}
