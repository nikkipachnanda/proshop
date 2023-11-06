//import { Rating } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../Products";
import { Container, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from "../components/Rating";
import "../index.css";


const Productscreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);
  return <div>
    <Link className="btn btn-light my-3" to="/">Go Back</Link>
    <Row>
         <Col md={6}>
            <Image src={product.image} alt={product.name}></Image>
        </Col>
        <Col md={6}>
            <ListGroup.Item>
             <h3>{product.name}</h3>
            </ListGroup.Item> 
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} Reviews`}/>
            </ListGroup.Item> 
            <ListGroup.Item>
             <h3>{product.price}</h3>
            </ListGroup.Item> 

            <ListGroup.Item>
                <Row>
                    <Col><strong>Status</strong></Col>
                </Row>
                <Row>
                    <Col>$ {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'} </Col>
                </Row>
           
            </ListGroup.Item> 

            <ListGroup.Item>
                <Row>
                   <Button
                   className="btn-block CstBtn"
                   type="button"
                   disabled={product.countInStock ===0}
                   >
                    Add to Cart
                    </Button>
                </Row>
           
            </ListGroup.Item> 
        </Col>
     
     
    </Row>
  </div>;
};

export default Productscreen;
