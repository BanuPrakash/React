import React from 'react'
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux'
import CartList from './CartList'
import { clearCart } from '../redux/cartSlice'
export default function CartComponent() {
 
  let dispatch = useDispatch();
  let { cartItems, total } = useSelector(state => state.cart)
  return (
    <div className='container'>
      {
        cartItems.map(item => <CartList key={item.id} product={item} />)
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
          <Button onClick={() => dispatch(clearCart())}>Checkout</Button>
        </div>
      </div>
    </div>
  )
}

