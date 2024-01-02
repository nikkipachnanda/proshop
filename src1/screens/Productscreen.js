//import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import products from "../Products";
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import "../index.css";
import { useGetProductDetailsQuery } from "../slices/productSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
// import axios from 'axios';

const Productscreen = () => {
   const [qty, setQty] = useState(1);
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   const product = products.find((p) => p._id === productId);

  // useEffect(()=>{
  //     const fetchProducts = async()=>
  //     {
  //       const {data} = await axios.get(`/api/products/${productId}`);
  //       setProducts(data);
  //     }
  //     fetchProducts();
  // },[productId])

  const  addToCartHandler =()=>
  {
    dispatch(addToCart({...product, qty}));
    navigate('/cart');
  }

  return (
    <div>
      <>
        {isLoading ? (
          <h2><Loader/></h2>
        ) : error ? (
          <Message variant='danger'>{error?.data?.message}</Message>
        ) : (
          <>
            <div className="mrgnAuto">
              <Link className="btn btn-light my-3" to="/">
                Go Back
              </Link>

              <Row>
                <Col md={6}>
                  <Image src={product.image} alt={product.name}></Image>
                </Col>
                <Col md={6}>
                  <ListGroup.Item>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} Reviews`}
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h3>{product.price}</h3>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <strong>Status</strong>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        ${" "}
                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}{" "}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                 {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>qty</Col>
                      <Col>
                      <Form.Control as='select' value={qty} onChange={(e)=>setQty(Number(e.target.value))}>
                        {[...Array(product.countInStock).keys()].map((x)=>(
                          <option key={x+1} value={x+1}> {x+1} </option>
                        ))}
                      </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>    
                    )}
                  <ListGroup.Item>
                    <Row>
                      <Button
                        className="btn-block CstBtn"
                        type="button"
                        disabled={product.countInStock === 0}
                        onClick={addToCartHandler}
                      >
                        Add to Cart
                      </Button>
                    </Row>
                  </ListGroup.Item>

                </Col>
              </Row>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Productscreen;
