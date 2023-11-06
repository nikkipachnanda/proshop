import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import products from '../Products';
import Product from '../components/Product';

const Homescreen = () => {
  return (
    <div>
        <h1>Latest Products</h1>
        <Row>
            {products.map((products)=> (
              <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={products}></Product>
              </Col>     
             ))}
        </Row>
    </div>
  )
}

export default Homescreen
