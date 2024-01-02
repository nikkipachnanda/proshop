import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
// import products from '../Products';
import Product from '../components/Product';
import axios from 'axios';
import { useGetProductsQuery } from '../slices/productSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';


const Homescreen = () => {
  // const [products, setProducts] = useState([]);
   const {data:products, isLoading, error} = useGetProductsQuery();

  // useEffect(()=> {
  //   const fetchProducts = async()=> 
  //   {
  //     const {data} = await axios.get('/api/products');
  //     setProducts(data);
  //   }
  //   fetchProducts();
  // },[])
  return (
    <>
    {isLoading ? (<h2><Loader/></h2>) : error ? (
    <Message variant='danger'>{error?.data?.message}</Message>
    ) : (   
      <><div className='mrgnAuto'>
        <h2>Latest Products</h2>
        <Row>
            {products?.map((products)=> (
              <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={products}></Product>
              </Col>     
             ))}
        </Row>
    </div>
    </>
    )}
   
   </>
  )
}

export default Homescreen
