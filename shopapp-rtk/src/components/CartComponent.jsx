import React from 'react'
import Button from 'react-bootstrap/Button';

export default function CartComponent() {

  return (
    <div className='container'>

      <div className='row'>
        <div className='col-md-8'>
          &nbsp;
        </div>
        <div className='col-md-2'>
          Total: {0}
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8'>
          &nbsp;
        </div>
        <div className='col-md-2'>
          <Button >Checkout</Button>
        </div>
      </div>
    </div>
  )
}

