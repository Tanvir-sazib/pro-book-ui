
import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Product from "../Product";
import Loader from "../Loader";
import Message from "../Message";
import { listProducts } from '../../actions/productAction.js'
const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <h1>Latest Books</h1>
            {loading ? <Loader /> : error ? <Message varient='danger'>{error}</Message> : <Row>
                {products.map((product) => {
                    return <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                })}
            </Row>}

        </>
    )
}

export default HomeScreen
