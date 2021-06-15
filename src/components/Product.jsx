import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'


const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded" style={{ height: '30.5rem' }}>
            <Link to={`/product/${product._id}`}>
                <Card.Img className="rounded" style={{ height: "20rem", objectFit: 'cover' }} src={product.image} variant='top' />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <div>
                            <strong>{product.name}</strong>
                        </div>

                    </Card.Title>
                </Link>

                <Rating value={product.rating} text={` ${product.numReviews} reviews`} />

                <Card.Text as="div" className='pt-2'>
                    <h3>${product.price}</h3>
                </Card.Text>

            </Card.Body>
        </Card >
    )
}
export default Product
