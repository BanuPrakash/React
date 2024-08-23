import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {addToCart} from '../redux/cartSlice'

export default function ProductCard({ product }) {
  let dispatch = useDispatch();

  return (
    <div className='col-md-4 my-2'>
      <Card style={{ width: '18rem' }}>
        <Link to={`/details/${product.id}`}>
          <Card.Img variant="top" src={product.image} />
        </Link>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          Rs. {product.price} &nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faHeart} color="red" /> &nbsp; &nbsp;&nbsp;
          <FontAwesomeIcon 
              onClick={() => dispatch(addToCart({
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
                quantity: 1,
                amount: product.price
              }))}
              icon={faShoppingCart} 
              color="blue" />
        </Card.Footer>
      </Card>
    </div>

  )
}
