import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'
import Button from 'react-bootstrap/Button';
import CartList from './CartList';

export default function CartComponent() {
  let { cartItems, total, checkout } = useContext(CartContext);
  return (
    <div className='container'>
        {
          cartItems.map(item => <CartList product={item} key={item.id}/>)
        }
      <div className='row'>
        <div className='col-md-8'>
          &nbsp;
        </div>
        <div className='col-md-2'>
          Total: {total}
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8'>
          &nbsp;
        </div>
        <div className='col-md-2'>
          <Button onClick={() => checkout()}>Checkout</Button>
        </div>
      </div>
    </div>
  )
}
