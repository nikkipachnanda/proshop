
import React, { useEffect } from 'react';
import { Button, Col, ListGroup, Row, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useGetOrderDetailsQuery } from '../slices/orderApiSlice';



const OrderScreen = () => {
  return (
    <div>
        Order Screen
    </div>
  )
}

export default OrderScreen
