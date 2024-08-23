import React from 'react'
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { increment } from '../redux/cartSlice';
import {useDispatch} from 'react-redux'
export default function CartList({ product }) {
  let { id, image, title, price, quantity, amount } = product;
  let dispatch = useDispatch();
  return (
    <div className='row my-2'>
      <div className='col-md-2'>
        <img src={image} style={{ "width": "50px" }} />
      </div>
      <div className='col-md-2'>
        {title}
      </div>
      <div className='col-md-2'>
        <Button>&nbsp; - &nbsp;</Button>
        &nbsp; Qty: {quantity} &nbsp;
        <Button onClick={()=> dispatch(increment(id))}>&nbsp; + &nbsp;</Button>
      </div>
      <div className='col-md-2'>
        Price: {price}
      </div>
      <div className='col-md-2'>
        Amount: {amount}
      </div>
      <div className='col-md-2'>
        <FontAwesomeIcon icon={faTrashCan} color='red'/>
      </div>
    </div>
  )
}
